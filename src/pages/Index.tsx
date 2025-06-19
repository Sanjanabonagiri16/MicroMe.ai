
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Footer } from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Sparkles,
  Shield,
  Globe,
  Target,
  Award,
  Brain,
  Lightbulb,
  Zap
} from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to home
  useEffect(() => {
    if (!loading && user) {
      navigate('/home');
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if user is authenticated (will redirect)
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full opacity-60 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/70 backdrop-blur-sm border-b border-purple-100 relative z-10 animate-fade-in">
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse-slow">
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Microme.ai
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-110 transform">Features</a>
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-110 transform">About</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-110 transform">Contact</a>
        </div>
        <Button 
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
          onClick={() => navigate('/auth')}
        >
          Join 2025 Revolution 🚀
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative z-10">
            <div className="mb-8 animate-fade-in">
              <span className="text-6xl mb-4 block animate-bounce">🌸</span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight animate-scale-in">
                Code. Create. Conquer. <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  The Digital Age is Yours.
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              AI-powered learning platform where young women master technology, build confidence, and connect with industry leaders. 
              Your journey to tech leadership starts here. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform"
                onClick={() => navigate('/auth')}
              >
                🧠 Start AI Learning
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform"
                onClick={() => navigate('/auth')}
              >
                🤖 Meet AI Mentors
              </Button>
            </div>

            {/* Feature Cards */}
            <div id="features" className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Brain, title: "AI-Powered Learning", desc: "Personalized learning paths with GPT-4 integration", color: "purple" },
                { icon: Users, title: "Expert Mentors", desc: "Connect with female tech leaders globally", color: "pink" },
                { icon: Lightbulb, title: "Future Skills", desc: "Coding, AI, blockchain, and emerging tech", color: "teal" },
                { icon: Zap, title: "Real-Time Support", desc: "24/7 AI assistant and peer community", color: "blue" }
              ].map(({ icon: Icon, title, desc, color }, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer group animate-fade-in"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce transform group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-gray-900 transition-colors">{title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 2025 Features Showcase */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">🚀 What Makes 2025 Different?</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { 
                    icon: Brain, 
                    title: "GPT-4 Integration", 
                    desc: "Advanced AI tutoring that adapts to your learning style and pace",
                    color: "purple"
                  },
                  { 
                    icon: Globe, 
                    title: "Global Community", 
                    desc: "Connect with 50,000+ girls from 300+ cities worldwide",
                    color: "pink"
                  },
                  { 
                    icon: Award, 
                    title: "Industry Recognition", 
                    desc: "Certificates recognized by top tech companies globally",
                    color: "teal"
                  }
                ].map(({ icon: Icon, title, desc, color }, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl animate-fade-in" style={{animationDelay: '1.5s'}}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Shape the Future? 🌟</h3>
              <p className="text-xl text-gray-600 mb-8">Join the next generation of female tech leaders who are already building tomorrow!</p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform"
                onClick={() => navigate('/auth')}
              >
                Start Your Tech Journey Today! ✨
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
