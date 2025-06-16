import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Star, MessageCircle, BookOpen, Users, Shield, Sparkles, Trophy, Calendar, User, Home, GraduationCap, MessageSquare, Activity, Bell, Search, Play, CheckCircle, Clock, Award, Target, Palette, Send, Camera, Volume2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { user, profile, signOut } = useAuth();

  const NavigationBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border-t border-lavender-200 z-50 md:relative md:border-t-0 md:bg-transparent md:shadow-none">
      <div className="flex justify-around items-center p-3 max-w-md mx-auto md:max-w-none md:justify-start md:space-x-6">
        {[
          { id: 'home', icon: Home, label: 'Home', color: 'coral' },
          { id: 'learning', icon: GraduationCap, label: 'Learn', color: 'lavender' },
          { id: 'mentorship', icon: MessageSquare, label: 'Mentors', color: 'teal' },
          { id: 'community', icon: Users, label: 'Community', color: 'coral' },
          { id: 'toolkit', icon: Activity, label: 'Wellness', color: 'lavender' }
        ].map(({ id, icon: Icon, label, color }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-300 ${
              activeSection === id 
                ? `text-${color}-600 bg-${color}-100 shadow-lg scale-110` 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon size={22} className="animate-pulse-slow" />
            <span className="text-xs font-medium font-nunito">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const LandingSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/70 backdrop-blur-sm border-b border-lavender-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-lavender-500 rounded-full flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="text-2xl font-bold font-poppins bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
            Microme.ai
          </div>
        </div>
        <div className="hidden md:flex space-x-6 font-nunito">
          <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Mentors</a>
          <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Learn</a>
          <a href="#" className="text-gray-600 hover:text-coral-500 transition-colors">Journal</a>
        </div>
        <Button 
          className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-nunito rounded-full px-6 shadow-lg"
          onClick={() => window.location.href = '/auth'}
        >
          Sign Up 🎉
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-lavender-200 rounded-full opacity-50 animate-float"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-coral-200 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>

          <div className="relative z-10">
            <div className="mb-8">
              <span className="text-6xl mb-4 block animate-bounce">🌸</span>
              <h1 className="text-5xl md:text-7xl font-bold font-poppins text-gray-800 mb-6 leading-tight">
                Empower a Girl. <br />
                <span className="bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
                  Empower a Generation.
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-nunito">
              A safe, inspiring platform where young girls learn, grow, and connect with mentors. 
              Build confidence, develop skills, and create your own path to success. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-10 py-4 text-xl font-poppins rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/auth'}
              >
                💡 Start Learning
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-10 py-4 text-xl font-poppins rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/auth'}
              >
                🤝 Find a Mentor
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white px-10 py-4 text-xl font-poppins rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/auth'}
              >
                🧘 Relax Mode
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Shield, title: "Safe Platform", desc: "Verified mentors & secure environment", color: "lavender" },
                { icon: Users, title: "Mentorship", desc: "Connect with inspiring role models", color: "coral" },
                { icon: BookOpen, title: "Learning", desc: "Courses tailored for young women", color: "teal" },
                { icon: Sparkles, title: "Wellness", desc: "Mental health & self-care tools", color: "lavender" }
              ].map(({ icon: Icon, title, desc, color }, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 font-poppins text-lg">{title}</h3>
                    <p className="text-gray-600 font-nunito">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">💬 What Our Community Says</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Priya, 16", quote: "Microme.ai helped me find my voice and confidence!", avatar: "P" },
                  { name: "Dr. Meera (Mentor)", quote: "Watching these girls grow is incredibly rewarding.", avatar: "M" },
                  { name: "Sanjana, 14", quote: "I learned coding and made amazing friends here!", avatar: "S" }
                ].map((testimonial, index) => (
                  <div key={index} className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback className={`bg-gradient-to-br from-${index % 2 === 0 ? 'coral' : 'lavender'}-400 to-${index % 2 === 0 ? 'coral' : 'lavender'}-500 text-white text-lg font-bold`}>
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-gray-700 italic mb-2 font-nunito">"{testimonial.quote}"</p>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
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

  const LearningHub = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-lavender-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">📚 Learning Hub</h1>
          <p className="text-xl text-gray-600 font-nunito">Discover courses designed just for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Confidence Building",
              progress: 75,
              level: "Beginner",
              lessons: 8,
              color: "coral",
              gradient: "from-coral-400 to-coral-500",
              description: "Build unshakeable self-confidence"
            },
            {
              title: "Coding Fundamentals",
              progress: 30,
              level: "Beginner",
              lessons: 12,
              color: "lavender",
              gradient: "from-lavender-400 to-lavender-500",
              description: "Start your tech journey"
            },
            {
              title: "Life Skills Mastery",
              progress: 90,
              level: "Intermediate",
              lessons: 10,
              color: "teal",
              gradient: "from-teal-400 to-teal-500",
              description: "Essential skills for success"
            }
          ].map((course, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8">
                <div className={`w-full h-40 bg-gradient-to-br ${course.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:animate-bounce`}>
                  <BookOpen className="text-white" size={48} />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 font-poppins text-xl">{course.title}</h3>
                <p className="text-gray-600 mb-6 font-nunito">{course.description}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-nunito">Progress</span>
                    <span className="font-bold text-gray-800">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                  
                  <div className="flex justify-between items-center">
                    <Badge className={`bg-${course.color}-100 text-${course.color}-700 font-nunito`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-gray-500 font-nunito">{course.lessons} lessons</span>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white rounded-full font-poppins`}>
                    Continue Learning ▶️
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const MentorshipArea = () => (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">🌟 Your Mentors</h1>
          <p className="text-xl text-gray-600 font-nunito">Connect with amazing women who believe in you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Active Mentor Chat */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-lavender-700">💬 Mentor Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6 bg-gradient-to-r from-lavender-50 to-lavender-100 p-4 rounded-2xl">
                <Avatar className="w-16 h-16 border-2 border-lavender-300">
                  <AvatarFallback className="bg-gradient-to-br from-lavender-400 to-lavender-500 text-white text-lg font-bold">
                    DR
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 font-poppins">Dr. Meera Rao</h3>
                  <p className="text-sm text-gray-600 font-nunito">Software Engineer & Tech Lead</p>
                  <div className="flex items-center mt-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600 ml-1 font-nunito">4.9 rating</span>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-sm">
                  <p className="text-sm text-gray-600 font-nunito mb-1">You</p>
                  <p className="text-gray-800 font-nunito">I feel nervous before speaking in class.</p>
                </div>
                <div className="bg-gradient-to-r from-lavender-400 to-lavender-500 text-white p-4 rounded-2xl rounded-br-sm ml-8">
                  <p className="text-sm opacity-90 mb-1">Dr. Meera</p>
                  <p>Let's try a breathing exercise together. Remember, your voice matters! 🌟</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-lavender-400 font-nunito"
                />
                <Button className="bg-lavender-500 hover:bg-lavender-600 text-white rounded-full px-4">
                  <Send size={18} />
                </Button>
                <Button variant="outline" className="rounded-full px-4">
                  <Volume2 size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Session Info */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-teal-700">📅 Session Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-2xl mb-6">
                <h4 className="font-bold text-gray-800 mb-2 font-poppins">Next Session</h4>
                <p className="text-teal-600 font-semibold mb-1">Tomorrow, 4:00 PM</p>
                <p className="text-sm text-gray-600 font-nunito">Topic: Building Your First Website</p>
                <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-poppins">
                  Join Session 🚀
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 font-poppins">Recent Sessions</h4>
                {[
                  { topic: "Career Planning", date: "2 days ago", rating: 5 },
                  { topic: "Stress Management", date: "1 week ago", rating: 5 },
                  { topic: "Public Speaking", date: "2 weeks ago", rating: 4 }
                ].map((session, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <div>
                      <p className="font-semibold text-gray-800 font-poppins">{session.topic}</p>
                      <p className="text-sm text-gray-600 font-nunito">{session.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const CommunityWall = () => (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-lavender-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">💫 Community Wall</h1>
          <p className="text-xl text-gray-600 font-nunito">Share your story, inspire others</p>
        </div>

        {/* Create Post */}
        <Card className="border-0 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-gradient-to-br from-coral-400 to-coral-500 text-white font-bold">
                  {profile?.first_name?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 flex space-x-3">
                <input 
                  type="text" 
                  placeholder="What's inspiring you today? ✨" 
                  className="flex-1 p-4 border border-gray-200 rounded-full focus:outline-none focus:border-coral-400 font-nunito"
                />
                <Button className="bg-coral-500 hover:bg-coral-600 text-white rounded-full px-6 font-poppins">
                  Share Your Spark ✨
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Grid - Pinterest Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            {
              author: "Ananya K.",
              content: "Just finished my first coding project! 🎉 It's a simple calculator but I'm so proud. Thank you to my mentor Priya for believing in me!",
              likes: 45,
              comments: 12,
              color: "coral"
            },
            {
              author: "Riya M.",
              content: "Poem I wrote today:\n\n'She believed she could,\nSo she did.\nOne step at a time,\nOne dream fulfilled.'",
              likes: 67,
              comments: 8,
              color: "lavender"
            },
            {
              author: "Kavya S.",
              content: "Sharing my art piece about women supporting women. Every stroke represents strength! 🎨",
              likes: 89,
              comments: 15,
              color: "teal"
            }
          ].map((post, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-6 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`bg-gradient-to-br from-${post.color}-400 to-${post.color}-500 text-white font-bold`}>
                      {post.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800 font-poppins">{post.author}</p>
                    <p className="text-xs text-gray-500 font-nunito">2 hours ago</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 whitespace-pre-line font-nunito leading-relaxed">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-coral-500 hover:text-coral-600 transition-colors group-hover:animate-pulse">
                      <Heart size={18} />
                      <span className="font-nunito">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors">
                      <MessageCircle size={18} />
                      <span className="font-nunito">{post.comments}</span>
                    </button>
                  </div>
                  <Badge className="bg-gradient-to-r from-coral-400 to-lavender-400 text-white font-nunito">
                    🌟 Empowered
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const LifeToolkit = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-lavender-50 to-coral-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">🛠️ Life Toolkit</h1>
          <p className="text-xl text-gray-600 font-nunito">Tools for your wellbeing and growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mood Journal */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-poppins text-coral-700 flex items-center">
                🌈 Mood Journal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 font-nunito">How are you feeling today?</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['😊', '😌', '🤗', '😔', '😴', '🤔'].map((emoji, index) => (
                  <button 
                    key={index}
                    className="p-4 text-3xl hover:bg-coral-100 rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <Button className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white rounded-full font-poppins">
                Log Mood 📝
              </Button>
            </CardContent>
          </Card>

          {/* Meditation Corner */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-poppins text-teal-700 flex items-center">
                🧘‍♀️ Meditation Corner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-lavender-400 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                  <div className="w-20 h-20 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-600 font-nunito">Find your calm</p>
              </div>
              <div className="space-y-3">
                {[
                  { emoji: '🌸', text: '5-min Breathing' },
                  { emoji: '🌙', text: 'Sleep Stories' },
                  { emoji: '⭐', text: 'Confidence Meditation' }
                ].map((item, index) => (
                  <Button key={index} variant="outline" className="w-full justify-start rounded-full font-nunito hover:bg-teal-50">
                    <span className="mr-2">{item.emoji}</span>
                    {item.text}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Tracker */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-poppins text-lavender-700 flex items-center">
                🌺 Health Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-lavender-50 to-lavender-100 p-6 rounded-2xl mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 font-poppins">Period Tracker</h4>
                <p className="text-sm text-gray-600 mb-3 font-nunito">Next cycle in 12 days</p>
                <Progress value={60} className="h-3" />
              </div>
              <Button className="w-full bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white rounded-full font-poppins">
                View Calendar 📅
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    if (!user) return <LandingSection />;
    if (activeSection === 'home') return <Dashboard />;
    if (activeSection === 'learning') return <LearningHub />;
    if (activeSection === 'mentorship') return <MentorshipArea />;
    if (activeSection === 'community') return <CommunityWall />;
    if (activeSection === 'toolkit') return <LifeToolkit />;
    return <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-white font-nunito">
      {!user ? (
        <LandingSection />
      ) : (
        <>
          <div className="md:hidden">
            {renderSection()}
          </div>
          <div className="hidden md:flex min-h-screen">
            <div className="w-72 bg-gradient-to-b from-white to-lavender-50 shadow-xl border-r border-lavender-100">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-lavender-500 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold font-poppins bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
                    Microme.ai
                  </div>
                </div>
                <NavigationBar />
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {renderSection()}
            </div>
          </div>
          <div className="md:hidden">
            <NavigationBar />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
