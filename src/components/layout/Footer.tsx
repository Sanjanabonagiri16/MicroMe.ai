
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Globe, 
  BookOpen, 
  Sparkles, 
  Star, 
  Mail,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Award,
  Target,
  Lightbulb,
  Shield,
  Home
} from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const impactStats = [
    { icon: Users, label: "Girls Empowered", value: "50,000+", color: "coral" },
    { icon: BookOpen, label: "Learning Hours", value: "150,000+", color: "lavender" },
    { icon: Heart, label: "Mentor Sessions", value: "75,000+", color: "teal" },
    { icon: Globe, label: "Cities Reached", value: "300+", color: "coral" }
  ];

  const learningCategories = [
    { name: "AI & Technology Skills", icon: Lightbulb, color: "coral" },
    { name: "Digital Wellness", icon: Sparkles, color: "lavender" },
    { name: "Leadership & Confidence", icon: Target, color: "teal" },
    { name: "Mental Health Support", icon: Heart, color: "coral" },
    { name: "Creative & STEM", icon: Award, color: "lavender" },
    { name: "Future Career Prep", icon: Globe, color: "teal" }
  ];

  return (
    <footer className="bg-gradient-to-br from-lavender-50 via-white to-coral-50 border-t border-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-coral-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-lavender-200 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce"></div>
      </div>

      {/* Mission Statement Banner */}
      <div className="bg-gradient-to-r from-coral-500 via-lavender-500 to-teal-500 text-white py-8 relative">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-3xl font-bold font-poppins mb-4 animate-scale-in">
            ✨ Empowering Girls for the AI-Driven Future of 2025 ✨
          </h2>
          <p className="text-xl font-nunito opacity-90 max-w-3xl mx-auto">
            Through cutting-edge micro-learning, AI mentorship, and digital empowerment — we're building tomorrow's female tech leaders
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-12 bg-white/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold font-poppins text-center mb-8 text-gray-800 animate-fade-in">
            🌟 Our 2025 Impact Milestone
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className={`text-center p-6 border-0 shadow-lg bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 hover:shadow-xl transition-all duration-500 hover:scale-110 animate-fade-in cursor-pointer group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className={`mx-auto mb-3 text-${stat.color}-600 group-hover:animate-bounce`} size={32} />
                  <div className={`text-2xl font-bold font-poppins text-${stat.color}-800 mb-1 group-hover:text-${stat.color}-900 transition-colors`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-nunito text-gray-700">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* About Section */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-coral-700 mb-4 hover:text-coral-800 transition-colors">
                  💖 Microme.ai 2025
                </h3>
                <p className="text-gray-600 font-nunito mb-4">
                  The world's most advanced AI-powered platform designed specifically for young women to thrive in the digital age.
                </p>
                <div className="flex space-x-2 flex-wrap gap-2">
                  <Badge className="bg-coral-100 text-coral-700 font-nunito hover:bg-coral-200 transition-colors animate-pulse-slow">AI-Powered</Badge>
                  <Badge className="bg-lavender-100 text-lavender-700 font-nunito hover:bg-lavender-200 transition-colors">Future-Ready</Badge>
                  <Badge className="bg-teal-100 text-teal-700 font-nunito hover:bg-teal-200 transition-colors">Girl-First</Badge>
                </div>
              </div>
              
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-gray-800 font-poppins mb-3">🚀 2025 Vision</h4>
                <p className="text-sm text-gray-600 font-nunito">
                  To become the global leader in AI-driven education for girls, reaching 1 million young women worldwide by 2026.
                </p>
              </div>
            </div>

            {/* Learning Categories */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">📚 2025 Learning Tracks</h4>
              <div className="space-y-3">
                {learningCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <IconComponent className={`text-${category.color}-500 group-hover:text-${category.color}-600 transition-colors`} size={16} />
                      <span className="font-nunito text-gray-700 group-hover:text-gray-800 transition-colors">{category.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Community & Support */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">🤝 Digital Community</h4>
              <div className="space-y-3">
                {[
                  { icon: Users, text: "AI Mentor Matching", color: "teal" },
                  { icon: Heart, text: "Peer Support Network", color: "coral" },
                  { icon: Sparkles, text: "Daily AI Affirmations", color: "lavender" },
                  { icon: Shield, text: "24/7 Safe Space", color: "teal" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <IconComponent className={`text-${item.color}-500 group-hover:text-${item.color}-600 transition-colors`} size={16} />
                      <span className="font-nunito text-gray-700 group-hover:text-gray-800 transition-colors">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
                <h5 className="font-semibold text-gray-700 font-poppins mb-3">🎉 Join the Movement</h5>
                <div className="space-y-2 flex flex-wrap gap-2">
                  <Badge className="bg-coral-100 text-coral-700 font-nunito text-xs hover:bg-coral-200 transition-colors cursor-pointer">#TechGirls2025</Badge>
                  <Badge className="bg-lavender-100 text-lavender-700 font-nunito text-xs hover:bg-lavender-200 transition-colors cursor-pointer">#AIForGirls</Badge>
                  <Badge className="bg-teal-100 text-teal-700 font-nunito text-xs hover:bg-teal-200 transition-colors cursor-pointer">#FutureLeaders</Badge>
                </div>
              </div>
            </div>

            {/* Contact & Connect */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">💌 Connect With Us</h4>
              <div className="space-y-3 mb-6">
                {[
                  { icon: Mail, text: "hello@microme.ai", color: "coral" },
                  { icon: MapPin, text: "Global • Remote First", color: "lavender" },
                  { icon: Phone, text: "AI Support 24/7", color: "teal" }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <contact.icon className={`text-${contact.color}-500 group-hover:text-${contact.color}-600 transition-colors`} size={16} />
                    <span className="font-nunito text-gray-700 group-hover:text-gray-800 transition-colors">{contact.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3 mb-6">
                {[
                  { icon: Instagram, color: "coral" },
                  { icon: Twitter, color: "lavender" },
                  { icon: Youtube, color: "teal" }
                ].map((social, index) => (
                  <Button 
                    key={index}
                    size="sm" 
                    className={`bg-${social.color}-400 hover:bg-${social.color}-500 text-white rounded-full p-2 transform hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon size={16} />
                  </Button>
                ))}
              </div>

              <div className="bg-gradient-to-r from-coral-100 to-lavender-100 p-4 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <h5 className="font-semibold text-gray-800 font-poppins mb-2">💝 Sponsor a Girl's Future</h5>
                <p className="text-xs text-gray-600 font-nunito mb-3">
                  Help us provide AI-powered education to girls in underserved communities worldwide
                </p>
                <Button className="w-full bg-gradient-to-r from-coral-500 to-lavender-500 hover:from-coral-600 hover:to-lavender-600 text-white rounded-full font-poppins text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Sponsor Now ₹1000/month 💖
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-white py-6 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 animate-fade-in">
              <span className="text-2xl animate-bounce">✨</span>
              <span className="font-poppins font-bold">Microme.ai</span>
              <span className="text-sm font-nunito opacity-75">- Powering Girls for 2025</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-nunito animate-fade-in">
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="hover:text-coral-300 transition-colors hover:scale-105 transform duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/safety-guidelines')}
                className="hover:text-coral-300 transition-colors hover:scale-105 transform duration-300"
              >
                Safety Guidelines
              </button>
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="hover:text-coral-300 transition-colors hover:scale-105 transform duration-300"
              >
                Terms of Service
              </button>
              <span>© 2025 Microme.ai</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 text-center animate-fade-in">
            <p className="text-sm font-nunito opacity-75">
              🌟 Built with AI for every girl who dreams of changing the world • Proudly Indian, Globally Inspired 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
