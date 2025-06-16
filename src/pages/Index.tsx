
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Star, MessageCircle, BookOpen, Users, Shield, Sparkles, Trophy, Calendar, User, Home, GraduationCap, MessageSquare, Activity } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const NavigationBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-lavender-200 z-50 md:relative md:border-t-0 md:bg-transparent md:shadow-none">
      <div className="flex justify-around items-center p-4 max-w-md mx-auto md:max-w-none md:justify-start md:space-x-8">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'learning', icon: GraduationCap, label: 'Learn' },
          { id: 'mentorship', icon: MessageSquare, label: 'Mentors' },
          { id: 'community', icon: Users, label: 'Community' },
          { id: 'toolkit', icon: Activity, label: 'Toolkit' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeSection === id ? 'text-coral-500 bg-lavender-100' : 'text-gray-500 hover:text-coral-400'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const LandingSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-lavender-700">EmpowerHer</div>
        <Button variant="outline" className="border-coral-300 text-coral-600 hover:bg-coral-50">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Empower a Girl. <br />
            <span className="text-coral-500">Empower a Generation.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A safe, inspiring platform where young girls learn, grow, and connect with mentors. 
            Build confidence, develop skills, and create your own path to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 text-lg rounded-full"
              onClick={() => setActiveSection('home')}
            >
              Join Now ✨
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-lavender-400 text-lavender-700 hover:bg-lavender-50 px-8 py-3 text-lg rounded-full"
              onClick={() => setActiveSection('mentorship')}
            >
              Meet a Mentor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-400 text-teal-700 hover:bg-teal-50 px-8 py-3 text-lg rounded-full"
              onClick={() => setActiveSection('learning')}
            >
              Explore Skills
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: "Safe Platform", desc: "Verified mentors & secure environment" },
              { icon: Users, title: "Mentorship", desc: "Connect with inspiring role models" },
              { icon: BookOpen, title: "Learning", desc: "Courses tailored for young women" },
              { icon: Sparkles, title: "Wellness", desc: "Mental health & self-care tools" }
            ].map(({ icon: Icon, title, desc }, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Hi Sanjana! ✨</h1>
          <p className="text-lavender-600 text-lg">"You're amazing today and every day!"</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Skills Learned", value: "12", icon: GraduationCap, color: "coral" },
            { label: "Sessions Attended", value: "8", icon: Calendar, color: "lavender" },
            { label: "Badges Earned", value: "5", icon: Trophy, color: "teal" },
            { label: "Community Posts", value: "15", icon: Star, color: "coral" }
          ].map(({ label, value, icon: Icon, color }, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{label}</p>
                    <p className="text-2xl font-bold text-gray-800">{value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`text-${color}-500`} size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lavender-700">This Week's Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Complete Confidence Course</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                  3 lessons remaining
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-coral-700">Daily Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-lavender-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <p className="text-gray-700 italic">
                  "The future belongs to those who believe in the beauty of their dreams."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Eleanor Roosevelt</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const LearningHub = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Learning Hub 📚</h1>
          <p className="text-gray-600">Discover courses designed just for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Confidence Building",
              progress: 75,
              level: "Beginner",
              lessons: 8,
              color: "coral",
              description: "Build unshakeable self-confidence"
            },
            {
              title: "Coding Fundamentals",
              progress: 30,
              level: "Beginner",
              lessons: 12,
              color: "lavender",
              description: "Start your tech journey"
            },
            {
              title: "Life Skills Mastery",
              progress: 90,
              level: "Intermediate",
              lessons: 10,
              color: "teal",
              description: "Essential skills for success"
            },
            {
              title: "Public Speaking",
              progress: 0,
              level: "Beginner",
              lessons: 6,
              color: "coral",
              description: "Find your voice and speak with power"
            },
            {
              title: "Financial Literacy",
              progress: 60,
              level: "Intermediate",
              lessons: 9,
              color: "teal",
              description: "Master money management"
            },
            {
              title: "Creative Writing",
              progress: 45,
              level: "All Levels",
              lessons: 7,
              color: "lavender",
              description: "Express yourself through words"
            }
          ].map((course, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-full h-32 bg-gradient-to-br from-${course.color}-200 to-${course.color}-300 rounded-lg mb-4 flex items-center justify-center`}>
                  <BookOpen className={`text-${course.color}-600`} size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className={`border-${course.color}-300 text-${course.color}-700`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-gray-500">{course.lessons} lessons</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const MentorshipArea = () => (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Mentors 🌟</h1>
          <p className="text-gray-600">Connect with amazing women who believe in you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Active Mentor */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lavender-700">Your Current Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-coral-200 text-coral-700">PD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-sm text-gray-600">Software Engineer & Tech Lead</p>
                  <div className="flex items-center mt-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600 ml-1">4.9 rating</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">
                  Start Chat 💬
                </Button>
                
                <div className="bg-lavender-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Next Session</h4>
                  <p className="text-sm text-gray-600">Tomorrow, 4:00 PM</p>
                  <p className="text-xs text-gray-500 mt-1">Topic: Building Your First Website</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Sessions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700">Recent Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { mentor: "Priya Sharma", topic: "Career Planning", date: "2 days ago", rating: 5 },
                  { mentor: "Dr. Anjali Roy", topic: "Stress Management", date: "1 week ago", rating: 5 },
                  { mentor: "Riya Patel", topic: "Public Speaking", date: "2 weeks ago", rating: 4 }
                ].map((session, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{session.topic}</p>
                      <p className="text-sm text-gray-600">{session.mentor}</p>
                      <p className="text-xs text-gray-500">{session.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={14} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Mentors */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect with New Mentors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Sarah Johnson", field: "Medicine & Wellness", rating: 4.8, sessions: 150 },
              { name: "Maya Singh", field: "Entrepreneurship", rating: 4.9, sessions: 89 },
              { name: "Jessica Chen", field: "Art & Design", rating: 4.7, sessions: 203 }
            ].map((mentor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-to-br from-lavender-400 to-coral-400 text-white text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-gray-800 mb-1">{mentor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{mentor.field}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className="ml-1">{mentor.rating}</span>
                    </div>
                    <span>{mentor.sessions} sessions</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-lavender-400 text-lavender-700 hover:bg-lavender-50">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CommunityWall = () => (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Community Wall 💫</h1>
          <p className="text-gray-600">Share your story, inspire others</p>
        </div>

        {/* Create Post */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback className="bg-coral-200 text-coral-700">S</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-gray-500 border-gray-200 hover:border-coral-300"
                >
                  What's inspiring you today?
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            {
              author: "Ananya K.",
              content: "Just finished my first coding project! 🎉 It's a simple calculator but I'm so proud. Thank you to my mentor Priya for believing in me!",
              likes: 45,
              comments: 12,
              type: "achievement"
            },
            {
              author: "Riya M.",
              content: "Poem I wrote today:\n\n'She believed she could,\nSo she did.\nOne step at a time,\nOne dream fulfilled.'",
              likes: 67,
              comments: 8,
              type: "creative"
            },
            {
              author: "Kavya S.",
              content: "Sharing my art piece about women supporting women. Every stroke represents strength! 🎨",
              likes: 89,
              comments: 15,
              type: "art"
            },
            {
              author: "Meera J.",
              content: "Had my first job interview today! Was nervous but remembered all the confidence tips from the platform. Fingers crossed! 🤞",
              likes: 123,
              comments: 28,
              type: "milestone"
            },
            {
              author: "Shreya P.",
              content: "Gratitude moment: This community has taught me that it's okay to dream big. Starting my own business next month!",
              likes: 156,
              comments: 34,
              type: "gratitude"
            },
            {
              author: "Aarohi T.",
              content: "Self-care Sunday: Meditation, journaling, and planning my goals for the week. How do you practice self-care?",
              likes: 78,
              comments: 19,
              type: "wellness"
            }
          ].map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className={`bg-${index % 2 === 0 ? 'lavender' : 'coral'}-200 text-${index % 2 === 0 ? 'lavender' : 'coral'}-700`}>
                      {post.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 whitespace-pre-line">{post.content}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-coral-500 hover:text-coral-600">
                      <Heart size={16} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                      🌟 Empowered Me
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const LifeToolkit = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-lavender-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Life Toolkit 🛠️</h1>
          <p className="text-gray-600">Tools for your wellbeing and growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mood Journal */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-coral-700 flex items-center">
                <span className="mr-2">🌈</span> Mood Journal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">How are you feeling today?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['😊', '😌', '🤗', '😔', '😴', '🤔'].map((emoji, index) => (
                  <button 
                    key={index}
                    className="p-3 text-2xl hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">
                Log Mood
              </Button>
            </CardContent>
          </Card>

          {/* Meditation Corner */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700 flex items-center">
                <span className="mr-2">🧘‍♀️</span> Meditation Corner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-lavender-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full animate-pulse opacity-70"></div>
                </div>
                <p className="text-gray-600">Find your calm</p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  🌸 5-min Breathing
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🌙 Sleep Stories
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  ⭐ Confidence Meditation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Health Tracker */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lavender-700 flex items-center">
                <span className="mr-2">🌺</span> Health Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-lavender-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Period Tracker</h4>
                  <p className="text-sm text-gray-600">Next cycle in 12 days</p>
                  <Progress value={60} className="h-2 mt-2" />
                </div>
                <Button className="w-full bg-lavender-500 hover:bg-lavender-600 text-white">
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Safety Guide */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-700 flex items-center">
                <span className="mr-2">🛡️</span> Safety Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left">
                  📱 Digital Safety Tips
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  🏃‍♀️ Self-Defense Basics
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  🆘 Emergency Contacts
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  💬 Report Concerns
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Goal Tracker */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700 flex items-center">
                <span className="mr-2">🎯</span> Goal Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Learn to Code</span>
                  <span className="text-xs text-gray-500">80%</span>
                </div>
                <Progress value={80} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Read 12 Books</span>
                  <span className="text-xs text-gray-500">25%</span>
                </div>
                <Progress value={25} className="h-2" />
                
                <Button variant="outline" className="w-full mt-4">
                  Add New Goal
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Gratitude Journal */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-coral-700 flex items-center">
                <span className="mr-2">🙏</span> Gratitude Journal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">What are you grateful for today?</p>
              <div className="space-y-2 mb-4">
                <div className="bg-coral-50 p-3 rounded-lg text-sm">
                  "My supportive mentor Priya"
                </div>
                <div className="bg-coral-50 p-3 rounded-lg text-sm">
                  "Sunny weather for my morning walk"
                </div>
              </div>
              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">
                Add Entry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    if (activeSection === 'home') return <Dashboard />;
    if (activeSection === 'learning') return <LearningHub />;
    if (activeSection === 'mentorship') return <MentorshipArea />;
    if (activeSection === 'community') return <CommunityWall />;
    if (activeSection === 'toolkit') return <LifeToolkit />;
    return <LandingSection />;
  };

  return (
    <div className="min-h-screen bg-white">
      {activeSection === 'landing' ? (
        <LandingSection />
      ) : (
        <>
          <div className="md:hidden">
            {renderSection()}
          </div>
          <div className="hidden md:block">
            <div className="flex min-h-screen">
              <div className="w-64 bg-white shadow-lg">
                <div className="p-6">
                  <div className="text-2xl font-bold text-lavender-700 mb-8">EmpowerHer</div>
                  <NavigationBar />
                </div>
              </div>
              <div className="flex-1">
                {renderSection()}
              </div>
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
