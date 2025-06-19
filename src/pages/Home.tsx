
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
  BookOpen
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
      // Fetch user progress
      const { data: progressData } = await supabase
        .from('user_progress')
        .select(`
          *,
          lessons:lesson_id (
            title,
            module_id,
            learning_modules:module_id (
              title,
              category
            )
          )
        `)
        .eq('user_id', user?.id)
        .order('completed_at', { ascending: false })
        .limit(5);

      // Fetch recent wellness activities
      const { data: activitiesData } = await supabase
        .from('wellness_activities')
        .select('*')
        .eq('user_id', user?.id)
        .order('completed_at', { ascending: false })
        .limit(5);

      setUserProgress(progressData || []);
      setRecentActivities(activitiesData || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast({
        title: "Error",
        description: "Failed to load your progress data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const NavigationBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border-t border-purple-200 z-50 md:relative md:border-t-0 md:bg-transparent md:shadow-none">
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
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-300 ${
              location.pathname === route 
                ? `text-${color}-600 bg-${color}-100 shadow-lg scale-110` 
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
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      <div className="max-w-7xl mx-auto p-6 pb-20 md:pb-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, {profile?.first_name || 'Beautiful'}! 💖
            </h1>
            <p className="text-lg text-purple-600">"You are enough, just as you are today! ✨"</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5 text-purple-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" onClick={signOut}>
              Sign Out
            </Button>
            <Avatar className="w-12 h-12 border-2 border-purple-300">
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
            { label: "Total Points", value: profile?.total_points || 0, icon: Star, color: "purple", bg: "from-purple-400 to-purple-500" },
            { label: "Current Level", value: profile?.level || 1, icon: Trophy, color: "pink", bg: "from-pink-400 to-pink-500" },
            { label: "Streak Days", value: profile?.streak_days || 0, icon: Calendar, color: "teal", bg: "from-teal-400 to-teal-500" },
            { label: "Lessons Completed", value: userProgress.length, icon: GraduationCap, color: "blue", bg: "from-blue-400 to-blue-500" }
          ].map(({ label, value, icon: Icon, color, bg }, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{label}</p>
                    <p className="text-3xl font-bold text-gray-800">{value}</p>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center shadow-lg`}>
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
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700 flex items-center">
                📈 Recent Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {userProgress.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No lessons completed yet.</p>
                  <Button 
                    onClick={() => navigate('/learn')} 
                    className="mt-4 bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    Start Learning 🚀
                  </Button>
                </div>
              ) : (
                userProgress.map((progress, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-100 p-6 rounded-2xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800">
                        {progress.lessons?.title || 'Unknown Lesson'}
                      </span>
                      <span className="text-sm text-purple-600 font-bold">
                        Score: {progress.score || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                        {progress.lessons?.learning_modules?.category || 'General'}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {new Date(progress.completed_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Daily Inspiration & Activities */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-700 flex items-center">
                  🌟 Daily Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <p className="text-gray-700 italic text-lg mb-3">
                    "The future belongs to those who believe in the beauty of their dreams."
                  </p>
                  <p className="text-sm text-gray-500 font-medium">- Eleanor Roosevelt</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-700 flex items-center">
                  🎯 Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => navigate('/learn')} 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Continue Learning 📚
                </Button>
                <Button 
                  onClick={() => navigate('/mentors')} 
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
                >
                  Find a Mentor 🤝
                </Button>
                <Button 
                  onClick={() => navigate('/journal')} 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  Journal & Relax 🧘‍♀️
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
