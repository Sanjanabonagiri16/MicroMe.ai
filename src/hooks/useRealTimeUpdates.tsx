
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface UserProgress {
  id: string;
  lesson_id: string;
  user_id: string;
  score: number;
  completed_at: string;
  time_spent: number;
}

interface MoodEntry {
  id: string;
  user_id: string;
  mood: string;
  intensity: number;
  notes: string;
  gratitude_note: string;
  created_at: string;
}

interface CommunityPost {
  id: string;
  user_id: string;
  content: string;
  content_type: string;
  likes_count: number;
  is_approved: boolean;
  created_at: string;
}

export const useRealTimeUpdates = () => {
  const { user } = useAuth();
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    if (!user) return;

    const fetchInitialData = async () => {
      try {
        // Fetch user progress
        const { data: progressData } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);

        if (progressData) {
          setUserProgress(progressData as UserProgress[]);
        }

        // Fetch mood entries
        const { data: moodData } = await supabase
          .from('mood_entries')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(10);

        if (moodData) {
          setMoodEntries(moodData as MoodEntry[]);
        }

        // Fetch community posts
        const { data: postsData } = await supabase
          .from('community_posts')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false })
          .limit(20);

        if (postsData) {
          setCommunityPosts(postsData as CommunityPost[]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [user]);

  // Set up real-time subscriptions
  useEffect(() => {
    if (!user) return;

    // Subscribe to user progress changes
    const progressChannel = supabase
      .channel('user-progress-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_progress',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          console.log('User progress change:', payload);
          if (payload.eventType === 'INSERT') {
            setUserProgress(prev => [...prev, payload.new as UserProgress]);
          } else if (payload.eventType === 'UPDATE') {
            setUserProgress(prev => 
              prev.map(item => 
                item.id === payload.new.id ? payload.new as UserProgress : item
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setUserProgress(prev => 
              prev.filter(item => item.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Subscribe to mood entries changes
    const moodChannel = supabase
      .channel('mood-entries-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mood_entries',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          console.log('Mood entry change:', payload);
          if (payload.eventType === 'INSERT') {
            setMoodEntries(prev => [payload.new as MoodEntry, ...prev.slice(0, 9)]);
          } else if (payload.eventType === 'UPDATE') {
            setMoodEntries(prev => 
              prev.map(item => 
                item.id === payload.new.id ? payload.new as MoodEntry : item
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setMoodEntries(prev => 
              prev.filter(item => item.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Subscribe to community posts changes
    const postsChannel = supabase
      .channel('community-posts-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'community_posts'
        },
        (payload) => {
          console.log('Community post change:', payload);
          if (payload.eventType === 'INSERT' && payload.new.is_approved) {
            setCommunityPosts(prev => [payload.new as CommunityPost, ...prev.slice(0, 19)]);
          } else if (payload.eventType === 'UPDATE') {
            setCommunityPosts(prev => 
              prev.map(item => 
                item.id === payload.new.id ? payload.new as CommunityPost : item
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setCommunityPosts(prev => 
              prev.filter(item => item.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup function
    return () => {
      supabase.removeChannel(progressChannel);
      supabase.removeChannel(moodChannel);
      supabase.removeChannel(postsChannel);
    };
  }, [user]);

  // Function to create a new mood entry
  const createMoodEntry = async (moodData: {
    mood: string;
    intensity: number;
    notes?: string;
    gratitude_note?: string;
  }) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('mood_entries')
        .insert([
          {
            user_id: user.id,
            ...moodData
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating mood entry:', error);
      return null;
    }
  };

  // Function to create a community post
  const createCommunityPost = async (postData: {
    content: string;
    content_type?: string;
    is_anonymous?: boolean;
    image_url?: string;
  }) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('community_posts')
        .insert([
          {
            user_id: user.id,
            content_type: 'story',
            is_anonymous: false,
            is_approved: true,
            ...postData
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating community post:', error);
      return null;
    }
  };

  return {
    userProgress,
    moodEntries,
    communityPosts,
    loading,
    createMoodEntry,
    createCommunityPost
  };
};
