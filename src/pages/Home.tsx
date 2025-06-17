
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Star, 
  Calendar,
  Trophy,
  Target,
  Sparkles,
  GraduationCap,
  Bell
} from 'lucide-react';

const Home = () => {
  const { user, profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold font-poppins text-gray-800 mb-2">
              Welcome back, {profile?.first_name || 'Beautiful'}! 💖
            </h1>
            <p className="text-lg text-lavender-600 font-nunito">"You are enough, just as you are today! ✨"</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5 text-coral-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-coral-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" onClick={signOut}>
              Sign Out
            </Button>
            <Avatar className="w-12 h-12 border-2 border-lavender-300">
              <AvatarFallback className="bg-gradient-to-br from-coral-400 to-lavender-500 text-white font-bold">
                {profile?.first_name?.[0] || 'U'}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Skills Learned", value: "12", icon: GraduationCap, color: "coral", bg: "from-coral-400 to-coral-500" },
            { label: "Sessions Attended", value: "8", icon: Calendar, color: "lavender", bg: "from-lavender-400 to-lavender-500" },
            { label: "Badges Earned", value: "5", icon: Trophy, color: "teal", bg: "from-teal-400 to-teal-500" },
            { label: "Community Posts", value: "15", icon: Star, color: "coral", bg: "from-coral-400 to-coral-500" }
          ].map(({ label, value, icon: Icon, color, bg }, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-nunito">{label}</p>
                    <p className="text-3xl font-bold text-gray-800 font-poppins">{value}</p>
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
              <CardTitle className="text-2xl font-poppins text-lavender-700 flex items-center">
                📈 This Week's Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-coral-50 to-coral-100 p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold font-nunito text-gray-800">Confidence Building Course</span>
                  <span className="text-sm text-coral-600 font-bold">75%</span>
                </div>
                <Progress value={75} className="h-3 mb-4" />
                <div className="flex items-center justify-between">
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 font-nunito">
                    3 lessons remaining
                  </Badge>
                  <Button size="sm" className="bg-coral-500 hover:bg-coral-600 text-white rounded-full">
                    Continue ▶️
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-r from-lavender-50 to-lavender-100 p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold font-nunito text-gray-800">Digital Safety Basics</span>
                  <span className="text-sm text-lavender-600 font-bold">30%</span>
                </div>
                <Progress value={30} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Daily Inspiration & Next Session */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-coral-700 flex items-center">
                  🌟 Daily Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center bg-gradient-to-br from-coral-50 to-lavender-50 p-6 rounded-2xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-lavender-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <p className="text-gray-700 italic font-nunito text-lg mb-3">
                    "The future belongs to those who believe in the beauty of their dreams."
                  </p>
                  <p className="text-sm text-gray-500 font-medium">- Eleanor Roosevelt</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-teal-700 flex items-center">
                  📅 Next Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-2xl mb-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-gradient-to-br from-teal-400 to-teal-500 text-white text-lg font-bold">
                        DR
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 font-poppins">Dr. Meera Rao</h4>
                      <p className="text-sm text-gray-600 font-nunito">Software Engineer & Tech Lead</p>
                      <p className="text-sm text-teal-600 font-semibold">Tomorrow, 4:30 PM</p>
                    </div>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-4">
                      Join Session 🚀
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
