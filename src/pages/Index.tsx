
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
  Award
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/70 backdrop-blur-sm border-b border-purple-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Microme.ai
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
        </div>
        <Button 
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 shadow-lg"
          onClick={() => navigate('/auth')}
        >
          Get Started 🎉
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>

          <div className="relative z-10">
            <div className="mb-8">
              <span className="text-6xl mb-4 block animate-bounce">🌸</span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Empower a Girl. <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Empower a Generation.
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              A safe, inspiring platform where young girls learn, grow, and connect with mentors. 
              Build confidence, develop skills, and create your own path to success. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/auth')}
              >
                💡 Start Learning
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/auth')}
              >
                🤝 Find a Mentor
              </Button>
            </div>

            {/* Feature Cards */}
            <div id="features" className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Shield, title: "Safe Platform", desc: "Verified mentors & secure environment", color: "purple" },
                { icon: Users, title: "Mentorship", desc: "Connect with inspiring role models", color: "pink" },
                { icon: BookOpen, title: "Learning", desc: "Courses tailored for young women", color: "teal" },
                { icon: Sparkles, title: "Wellness", desc: "Mental health & self-care tools", color: "blue" }
              ].map(({ icon: Icon, title, desc, color }, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Begin Your Journey? 🚀</h3>
              <p className="text-xl text-gray-600 mb-8">Join thousands of girls who are already building their future with confidence!</p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/auth')}
              >
                Join Microme.ai Today! ✨
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
