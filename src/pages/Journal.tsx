
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { HomeButton } from '@/components/ui/HomeButton';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import {
  Heart,
  Smile,
  Meh,
  Frown,
  Star,
  Calendar,
  TrendingUp,
  BookOpen,
  Sparkles,
  PlusCircle,
  Save
} from 'lucide-react';

interface MoodEntry {
  id: string;
  mood: 'happy' | 'sad' | 'neutral' | 'excited' | 'anxious';
  intensity: number;
  notes: string;
  gratitude_note: string;
  created_at: string;
}

interface WellnessActivity {
  id: string;
  activity_type: string;
  duration_minutes: number;
  completed_at: string;
}

const Journal = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [wellnessActivities, setWellnessActivities] = useState<WellnessActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [intensity, setIntensity] = useState(5);
  const [notes, setNotes] = useState('');
  const [gratitudeNote, setGratitudeNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const moods = [
    { value: 'happy', icon: Smile, color: 'green', label: 'Happy' },
    { value: 'excited', icon: Star, color: 'yellow', label: 'Excited' },
    { value: 'neutral', icon: Meh, color: 'gray', label: 'Neutral' },
    { value: 'anxious', icon: TrendingUp, color: 'orange', label: 'Anxious' },
    { value: 'sad', icon: Frown, color: 'blue', label: 'Sad' }
  ];

  // Sample data - in a real app, this would come from Supabase
  const sampleMoodEntries: MoodEntry[] = [
    {
      id: '1',
      mood: 'happy',
      intensity: 8,
      notes: 'Had a great coding session today! Finally understood React hooks.',
      gratitude_note: 'Grateful for my supportive family and the opportunity to learn.',
      created_at: '2025-01-18T10:30:00Z'
    },
    {
      id: '2',
      mood: 'excited',
      intensity: 9,
      notes: 'Got accepted into the AI mentorship program! So excited to start.',
      gratitude_note: 'Thankful for this amazing opportunity.',
      created_at: '2025-01-17T15:45:00Z'
    },
    {
      id: '3',
      mood: 'neutral',
      intensity: 6,
      notes: 'Regular day, worked on some projects and did some reading.',
      gratitude_note: 'Grateful for peaceful moments.',
      created_at: '2025-01-16T20:15:00Z'
    }
  ];

  const sampleActivities: WellnessActivity[] = [
    {
      id: '1',
      activity_type: 'Meditation',
      duration_minutes: 15,
      completed_at: '2025-01-18T08:00:00Z'
    },
    {
      id: '2',
      activity_type: 'Exercise',
      duration_minutes: 30,
      completed_at: '2025-01-17T18:30:00Z'
    },
    {
      id: '3',
      activity_type: 'Reading',
      duration_minutes: 45,
      completed_at: '2025-01-16T21:00:00Z'
    }
  ];

  useEffect(() => {
    const loadJournalData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        // In a real app, you would fetch from Supabase:
        // const { data: moods } = await supabase.from('mood_entries').select('*').eq('user_id', user.id);
        // const { data: activities } = await supabase.from('wellness_activities').select('*').eq('user_id', user.id);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMoodEntries(sampleMoodEntries);
        setWellnessActivities(sampleActivities);
      } catch (error) {
        console.error('Error loading journal data:', error);
        toast({
          title: "Error",
          description: "Failed to load journal data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadJournalData();
  }, [user, toast]);

  const submitMoodEntry = async () => {
    if (!user || !selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // In a real app, you would insert into Supabase:
      // const { error } = await supabase.from('mood_entries').insert({
      //   user_id: user.id,
      //   mood: selectedMood,
      //   intensity: intensity,
      //   notes: notes,
      //   gratitude_note: gratitudeNote
      // });

      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        mood: selectedMood as any,
        intensity,
        notes,
        gratitude_note: gratitudeNote,
        created_at: new Date().toISOString()
      };

      setMoodEntries(prev => [newEntry, ...prev]);
      
      // Reset form
      setSelectedMood('');
      setIntensity(5);
      setNotes('');
      setGratitudeNote('');

      toast({
        title: "Mood logged! 🌟",
        description: "Your feelings have been recorded in your journal.",
      });
    } catch (error) {
      console.error('Error submitting mood entry:', error);
      toast({
        title: "Error",
        description: "Failed to save mood entry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getMoodIcon = (mood: string) => {
    const moodData = moods.find(m => m.value === mood);
    return moodData ? moodData.icon : Meh;
  };

  const getMoodColor = (mood: string) => {
    const moodData = moods.find(m => m.value === mood);
    return moodData ? moodData.color : 'gray';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your journal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      <HomeButton />
      
      {/* Header */}
      <div className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-4 animate-bounce">📝</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-scale-in">
              Your <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Wellness Journal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              Track your emotions, celebrate progress, and nurture your mental well-being ✨
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Entry Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 animate-fade-in">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Heart className="mr-2 text-pink-500" />
                  How are you feeling?
                </h2>

                {/* Mood Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Select your mood</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {moods.map(({ value, icon: Icon, color, label }) => (
                      <button
                        key={value}
                        onClick={() => setSelectedMood(value)}
                        className={`p-3 rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${
                          selectedMood === value
                            ? `border-${color}-500 bg-${color}-50`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon 
                          className={`mx-auto ${
                            selectedMood === value ? `text-${color}-600` : 'text-gray-400'
                          }`} 
                          size={24} 
                        />
                        <div className={`text-xs mt-1 ${
                          selectedMood === value ? `text-${color}-600 font-semibold` : 'text-gray-500'
                        }`}>
                          {label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Intensity */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">
                    Intensity: {intensity}/10
                  </h3>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">What's on your mind?</h3>
                  <Textarea
                    placeholder="Share your thoughts, experiences, or anything you'd like to remember..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-24"
                  />
                </div>

                {/* Gratitude */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">What are you grateful for?</h3>
                  <Textarea
                    placeholder="Write down something you're thankful for today..."
                    value={gratitudeNote}
                    onChange={(e) => setGratitudeNote(e.target.value)}
                    className="min-h-20"
                  />
                </div>

                <Button
                  onClick={submitMoodEntry}
                  disabled={isSubmitting || !selectedMood}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2" size={16} />
                      Save Entry
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Journal Entries */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <BookOpen className="mr-2 text-purple-500" />
                Your Journal Entries
              </h2>
              <Badge className="bg-purple-100 text-purple-700">
                {moodEntries.length} entries
              </Badge>
            </div>

            {/* Mood Entries */}
            <div className="space-y-4">
              {moodEntries.map((entry, index) => {
                const MoodIcon = getMoodIcon(entry.mood);
                const moodColor = getMoodColor(entry.mood);
                
                return (
                  <Card 
                    key={entry.id} 
                    className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-${moodColor}-100`}>
                          <MoodIcon className={`text-${moodColor}-600`} size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge className={`bg-${moodColor}-100 text-${moodColor}-700`}>
                                {entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                Intensity: {entry.intensity}/10
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              {formatDate(entry.created_at)}
                            </div>
                          </div>
                          
                          {entry.notes && (
                            <p className="text-gray-700 mb-3">{entry.notes}</p>
                          )}
                          
                          {entry.gratitude_note && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                              <div className="flex items-center text-yellow-800 text-sm font-semibold mb-1">
                                <Sparkles size={14} className="mr-1" />
                                Gratitude
                              </div>
                              <p className="text-yellow-700 text-sm">{entry.gratitude_note}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {moodEntries.length === 0 && (
              <Card className="text-center py-12 animate-fade-in">
                <CardContent>
                  <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Start your wellness journey
                  </h3>
                  <p className="text-gray-500">
                    Add your first mood entry to begin tracking your emotional well-being.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
