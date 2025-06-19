
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { Database } from '@/integrations/supabase/types';

// Type definitions based on existing database tables
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
  mood: Database['public']['Enums']['mood_type'];
  intensity: number;
  notes: string;
  gratitude_note: string;
  created_at: string;
}

interface CommunityPost {
  id: string;
  user_id: string;
  content: string;
  content_type: Database['public']['Enums']['content_type'];
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
        console.log('Fetching initial data for user:', user.id);

        // Fetch user progress
        const { data: progressData, error: progressError } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);

        if (progressError) {
          console.error('Error fetching user progress:', progressError);
        } else if (progressData) {
          console.log('Fetched user progress:', progressData);
          setUserProgress(progressData as UserProgress[]);
        }

        // Fetch mood entries
        const { data: moodData, error: moodError } = await supabase
          .from('mood_entries')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(10);

        if (moodError) {
          console.error('Error fetching mood entries:', moodError);
        } else if (moodData) {
          console.log('Fetched mood entries:', moodData);
          setMoodEntries(moodData as MoodEntry[]);
        }

        // Fetch community posts
        const { data: postsData, error: postsError } = await supabase
          .from('community_posts')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false })
          .limit(20);

        if (postsError) {
          console.error('Error fetching community posts:', postsError);
        } else if (postsData) {
          console.log('Fetched community posts:', postsData);
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

    console.log('Setting up real-time subscriptions for user:', user.id);

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
      console.log('Cleaning up real-time subscriptions');
      supabase.removeChannel(progressChannel);
      supabase.removeChannel(moodChannel);
      supabase.removeChannel(postsChannel);
    };
  }, [user]);

  // Function to create a new mood entry
  const createMoodEntry = async (moodData: {
    mood: Database['public']['Enums']['mood_type'];
    intensity: number;
    notes?: string;
    gratitude_note?: string;
  }) => {
    if (!user) return null;

    try {
      console.log('Creating mood entry:', moodData);
      const { data, error } = await supabase
        .from('mood_entries')
        .insert([
          {
            user_id: user.id,
            mood: moodData.mood,
            intensity: moodData.intensity,
            notes: moodData.notes,
            gratitude_note: moodData.gratitude_note
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error creating mood entry:', error);
        throw error;
      }
      console.log('Created mood entry:', data);
      return data;
    } catch (error) {
      console.error('Error creating mood entry:', error);
      return null;
    }
  };

  // Function to create a community post
  const createCommunityPost = async (postData: {
    content: string;
    content_type?: Database['public']['Enums']['content_type'];
    is_anonymous?: boolean;
    image_url?: string;
  }) => {
    if (!user) return null;

    try {
      console.log('Creating community post:', postData);
      const { data, error } = await supabase
        .from('community_posts')
        .insert([
          {
            user_id: user.id,
            content: postData.content,
            content_type: postData.content_type || 'story',
            is_anonymous: postData.is_anonymous || false,
            is_approved: true,
            image_url: postData.image_url
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error creating community post:', error);
        throw error;
      }
      console.log('Created community post:', data);
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
