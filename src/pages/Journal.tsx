
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { 
  BookOpen, 
  Heart, 
  Star, 
  Calendar,
  Smile,
  Sun,
  Moon,
  Cloud,
  Zap,
  Target,
  Award,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Lock,
  Globe,
  Eye,
  EyeOff
} from 'lucide-react';

const Journal = () => {
  const { user, profile } = useAuth();
  const [newEntry, setNewEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [entryTitle, setEntryTitle] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [filterMood, setFilterMood] = useState('all');

  const moods = [
    { emoji: '😊', name: 'Happy', color: 'coral' },
    { emoji: '😌', name: 'Peaceful', color: 'lavender' },
    { emoji: '🤗', name: 'Grateful', color: 'teal' },
    { emoji: '🤔', name: 'Thoughtful', color: 'gray' },
    { emoji: '😔', name: 'Sad', color: 'blue' },
    { emoji: '😤', name: 'Frustrated', color: 'red' },
    { emoji: '✨', name: 'Inspired', color: 'yellow' },
    { emoji: '💪', name: 'Determined', color: 'green' }
  ];

  const journalEntries = [
    {
      id: 1,
      title: "My First Coding Session",
      content: "Today I learned my first line of code! It was scary at first, but my mentor Priya made it so easy to understand. I can't believe I actually made a webpage say 'Hello World!' 💻\n\nI felt so proud when it worked. Maybe I really can become a programmer like I've always dreamed. Tomorrow I'm going to learn about colors in CSS.",
      mood: 'Happy',
      moodEmoji: '😊',
      date: 'Today, 6:30 PM',
      isPrivate: false,
      likes: 12,
      comments: 3,
      tags: ['coding', 'achievement', 'dreams']
    },
    {
      id: 2,
      title: "Grateful for My Support System",
      content: "Had a tough day at school today. Some classmates made fun of my presentation, and I felt so embarrassed. But then I came home and talked to my Microme mentor Kavya.\n\nShe reminded me that every expert was once a beginner, and that my voice matters. My mom also made my favorite dinner. I'm so grateful for the people who believe in me when I don't believe in myself. 🤗",
      mood: 'Grateful',
      moodEmoji: '🤗',
      date: 'Yesterday, 8:15 PM',
      isPrivate: true,
      likes: 0,
      comments: 0,
      tags: ['gratitude', 'support', 'school']
    },
    {
      id: 3,
      title: "Dreams and Goals",
      content: "I've been thinking a lot about what I want to do when I grow up. Sometimes it feels overwhelming - there are so many possibilities!\n\nBut I'm starting to realize that I don't have to figure it all out right now. I just need to keep learning, keep growing, and trust that my path will become clearer. For now, I want to focus on building my confidence and helping other girls feel less alone. ✨",
      mood: 'Inspired',
      moodEmoji: '✨',
      date: 'Dec 15, 7:45 PM',
      isPrivate: false,
      likes: 18,
      comments: 7,
      tags: ['dreams', 'future', 'inspiration']
    }
  ];

  const handleSubmitEntry = () => {
    if (newEntry.trim() && selectedMood && entryTitle.trim()) {
      // Here you would typically save to database
      console.log('New entry:', { title: entryTitle, content: newEntry, mood: selectedMood, isPrivate });
      setNewEntry('');
      setEntryTitle('');
      setSelectedMood('');
    }
  };

  const filteredEntries = journalEntries.filter(entry => 
    filterMood === 'all' || entry.mood === filterMood
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-lavender-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">📖 My Journal</h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Your safe space to reflect, grow, and celebrate your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Write New Entry */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-coral-700 flex items-center">
                  ✍️ Write New Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Entry Title</label>
                  <Input
                    placeholder="What's on your mind today?"
                    value={entryTitle}
                    onChange={(e) => setEntryTitle(e.target.value)}
                    className="border-gray-200 focus:border-coral-400"
                  />
                </div>

                {/* Mood Selection */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">How are you feeling?</label>
                  <div className="grid grid-cols-4 gap-3">
                    {moods.map((mood) => (
                      <button
                        key={mood.name}
                        onClick={() => setSelectedMood(mood.name)}
                        className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                          selectedMood === mood.name
                            ? `bg-${mood.color}-100 border-2 border-${mood.color}-400 scale-110`
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className="text-2xl mb-1">{mood.emoji}</div>
                        <div className="text-xs font-medium text-gray-700">{mood.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Journal Content */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Your thoughts...</label>
                  <Textarea
                    placeholder="Write about your day, your feelings, your dreams, or anything that matters to you. This is your safe space. 💫"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    className="min-h-32 border-gray-200 focus:border-coral-400 resize-none"
                  />
                </div>

                {/* Privacy & Submit */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsPrivate(!isPrivate)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                        isPrivate 
                          ? 'bg-gray-100 text-gray-700' 
                          : 'bg-teal-100 text-teal-700'
                      }`}
                    >
                      {isPrivate ? <Lock size={16} /> : <Globe size={16} />}
                      <span className="text-sm font-medium">
                        {isPrivate ? 'Private' : 'Share with Community'}
                      </span>
                    </button>
                  </div>
                  <Button 
                    onClick={handleSubmitEntry}
                    disabled={!newEntry.trim() || !selectedMood || !entryTitle.trim()}
                    className="bg-coral-500 hover:bg-coral-600 text-white rounded-full px-8"
                  >
                    <Plus size={16} className="mr-2" />
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Journal Entries */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-poppins text-gray-800">My Entries</h2>
                <div className="flex items-center space-x-3">
                  <select
                    value={filterMood}
                    onChange={(e) => setFilterMood(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-coral-400"
                  >
                    <option value="all">All Moods</option>
                    {moods.map(mood => (
                      <option key={mood.name} value={mood.name}>{mood.emoji} {mood.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredEntries.map((entry) => (
                <Card key={entry.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{entry.moodEmoji}</div>
                        <div>
                          <CardTitle className="text-xl font-poppins text-gray-800 mb-1">
                            {entry.title}
                          </CardTitle>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <span>{entry.date}</span>
                            <Badge className={`bg-${moods.find(m => m.name === entry.mood)?.color || 'gray'}-100 text-${moods.find(m => m.name === entry.mood)?.color || 'gray'}-700`}>
                              {entry.mood}
                            </Badge>
                            <div className="flex items-center">
                              {entry.isPrivate ? (
                                <><Lock size={14} className="mr-1" /><span>Private</span></>
                              ) : (
                                <><Globe size={14} className="mr-1" /><span>Shared</span></>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 font-nunito leading-relaxed whitespace-pre-line mb-4">
                      {entry.content}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {entry.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-lavender-100 text-lavender-700">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Interactions */}
                    {!entry.isPrivate && (
                      <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
                        <button className="flex items-center space-x-2 text-coral-500 hover:text-coral-600 transition-colors">
                          <Heart size={16} />
                          <span className="text-sm">{entry.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors">
                          <BookOpen size={16} />
                          <span className="text-sm">{entry.comments} comments</span>
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mood Tracker */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-lavender-700 flex items-center">
                  📊 Mood Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😊</div>
                    <p className="text-sm text-gray-600 font-nunito">Most common mood this week</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-coral-100 p-2 rounded text-center">
                      <div className="font-bold text-coral-700">5 days</div>
                      <div className="text-coral-600">Happy</div>
                    </div>
                    <div className="bg-teal-100 p-2 rounded text-center">
                      <div className="font-bold text-teal-700">2 days</div>
                      <div className="text-teal-600">Grateful</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Writing Streak */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-coral-700 flex items-center">
                  🔥 Writing Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-coral-600 mb-2">7</div>
                  <p className="text-sm text-gray-600 font-nunito mb-4">Days in a row!</p>
                  <Badge className="bg-gradient-to-r from-coral-400 to-coral-500 text-white">
                    Keep it up! 🌟
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Prompts */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-teal-700 flex items-center">
                  💡 Writing Prompts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "What made you smile today?",
                    "If you could tell your younger self one thing...",
                    "Describe a moment when you felt proud",
                    "What are you grateful for right now?"
                  ].map((prompt, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
                    >
                      <p className="text-sm text-teal-700 font-nunito">{prompt}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
