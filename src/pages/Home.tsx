
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Bell, 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Star, 
  Sparkles,
  Home as HomeIcon,
  MessageSquare,
  Activity,
  Users,
  BookOpen,
  Brain,
  Zap,
  Target,
  Heart
} from 'lucide-react';

const Home = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProgress, setUserProgress] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    fetchUserData();
  }, [user, navigate]);

  const fetchUserData = async () => {
    try {
      // Simulate user progress data since we don't have the full tables yet
      setUserProgress([
        {
          lessons: { title: "Introduction to AI for Girls", learning_modules: { category: "Technology" } },
          score: 95,
          completed_at: new Date().toISOString()
        },
        {
          lessons: { title: "Building Confidence in Tech", learning_modules: { category: "Personal Development" } },
          score: 88,
          completed_at: new Date(Date.now() - 86400000).toISOString()
        },
        {
          lessons: { title: "Future Career Planning", learning_modules: { category: "Career" } },
          score: 92,
          completed_at: new Date(Date.now() - 172800000).toISOString()
        }
      ]);

      setRecentActivities([
        { type: "meditation", completed_at: new Date().toISOString() },
        { type: "goal_setting", completed_at: new Date(Date.now() - 86400000).toISOString() }
      ]);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast({
        title: "Welcome!",
        description: "Your dashboard is loading with sample data.",
        variant: "default",
      });
    } finally {
      setLoading(false);
    }
  };

  const NavigationBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border-t border-purple-200 z-50 md:relative md:border-t-0 md:bg-transparent md:shadow-none animate-fade-in">
      <div className="flex justify-around items-center p-3 max-w-md mx-auto md:max-w-none md:justify-start md:space-x-6">
        {[
          { id: 'home', icon: HomeIcon, label: 'Home', color: 'purple', route: '/home' },
          { id: 'learning', icon: GraduationCap, label: 'Learn', color: 'blue', route: '/learn' },
          { id: 'mentorship', icon: MessageSquare, label: 'Mentors', color: 'teal', route: '/mentors' },
          { id: 'community', icon: Users, label: 'Community', color: 'pink', route: '/' },
          { id: 'journal', icon: Activity, label: 'Journal', color: 'purple', route: '/journal' }
        ].map(({ id, icon: Icon, label, color, route }) => (
          <button
            key={id}
            onClick={() => navigate(route)}
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-300 hover:scale-110 transform ${
              location.pathname === route 
                ? `text-${color}-600 bg-${color}-100 shadow-lg scale-110 animate-pulse` 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon size={22} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading your 2025 dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-50 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pb-20 md:pb-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-fade-in hover:shadow-xl transition-shadow duration-300">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-scale-in">
              Welcome to 2025, {profile?.first_name || 'Future Leader'}! 💖
            </h1>
            <p className="text-lg text-purple-600 animate-fade-in" style={{animationDelay: '0.3s'}}>"You're building the future, one line of code at a time! ✨"</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative hover:scale-110 transition-transform duration-300">
              <Bell className="h-5 w-5 text-purple-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
            </Button>
            <Button variant="ghost" onClick={signOut} className="hover:scale-105 transition-transform duration-300">
              Sign Out
            </Button>
            <Avatar className="w-12 h-12 border-2 border-purple-300 hover:scale-110 transition-transform duration-300">
              <AvatarImage src={profile?.avatar_url} />
              <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white font-bold">
                {profile?.first_name?.[0] || 'U'}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "AI Points", value: profile?.total_points || 1250, icon: Brain, color: "purple", bg: "from-purple-400 to-purple-500" },
            { label: "Tech Level", value: profile?.level || 5, icon: Trophy, color: "pink", bg: "from-pink-400 to-pink-500" },
            { label: "Learning Streak", value: profile?.streak_days || 12, icon: Zap, color: "teal", bg: "from-teal-400 to-teal-500" },
            { label: "Skills Mastered", value: userProgress.length || 15, icon: Target, color: "blue", bg: "from-blue-400 to-blue-500" }
          ].map(({ label, value, icon: Icon, color, bg }, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer animate-fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-700 transition-colors">{label}</p>
                    <p className="text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">{value}</p>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Progress Section */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700 flex items-center">
                🚀 Recent AI Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {userProgress.length === 0 ? (
                <div className="text-center py-8 animate-fade-in">
                  <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4 animate-bounce" />
                  <p className="text-gray-500">Ready to start your AI journey?</p>
                  <Button 
                    onClick={() => navigate('/learn')} 
                    className="mt-4 bg-purple-500 hover:bg-purple-600 text-white hover:scale-105 transition-transform duration-300"
                  >
                    Begin Learning 🧠
                  </Button>
                </div>
              ) : (
                userProgress.map((progress, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-purple-50 to-pink-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group"
                    style={{animationDelay: `${0.6 + index * 0.1}s`}}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {progress.lessons?.title || 'Unknown Lesson'}
                      </span>
                      <span className="text-sm text-purple-600 font-bold bg-white px-3 py-1 rounded-full">
                        Score: {progress.score || 'N/A'}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 transition-colors">
                        {progress.lessons?.learning_modules?.category || 'AI & Tech'}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {new Date(progress.completed_at).toLocaleDateString()}
                      </span>
                    </div>
                    <Progress value={progress.score || 85} className="mt-3 h-2" />
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Daily Inspiration & Activities */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-pink-700 flex items-center">
                  🌟 2025 Daily Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                    <Heart className="text-white" size={32} />
                  </div>
                  <p className="text-gray-700 italic text-lg mb-3">
                    "The future belongs to those who believe in the power of AI and their dreams."
                  </p>
                  <p className="text-sm text-gray-500 font-medium">- Microme.ai Wisdom 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-700 flex items-center">
                  ⚡ Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => navigate('/learn')} 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:scale-105 transition-transform duration-300"
                >
                  🧠 Continue AI Learning
                </Button>
                <Button 
                  onClick={() => navigate('/mentors')} 
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white hover:scale-105 transition-transform duration-300"
                >
                  🤖 Chat with AI Mentors
                </Button>
                <Button 
                  onClick={() => navigate('/journal')} 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white hover:scale-105 transition-transform duration-300"
                >
                  📝 Digital Wellness Journal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
};

export default Home;
