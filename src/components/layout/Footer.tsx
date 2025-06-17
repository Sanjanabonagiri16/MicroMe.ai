
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Shield
} from 'lucide-react';

export const Footer: React.FC = () => {
  const impactStats = [
    { icon: Users, label: "Girls Empowered", value: "25,000+", color: "coral" },
    { icon: BookOpen, label: "Learning Hours", value: "50,000+", color: "lavender" },
    { icon: Heart, label: "Mentor Sessions", value: "20,000+", color: "teal" },
    { icon: Globe, label: "Cities Reached", value: "150+", color: "coral" }
  ];

  const learningCategories = [
    { name: "Confidence & Self-Worth", icon: Heart, color: "coral" },
    { name: "Digital Literacy", icon: Globe, color: "lavender" },
    { name: "Life & Leadership", icon: Target, color: "teal" },
    { name: "Wellness & Health", icon: Sparkles, color: "coral" },
    { name: "Creative Skills", icon: Lightbulb, color: "lavender" },
    { name: "STEM for Girls", icon: Award, color: "teal" }
  ];

  return (
    <footer className="bg-gradient-to-br from-lavender-50 via-white to-coral-50 border-t border-gray-100">
      {/* Mission Statement Banner */}
      <div className="bg-gradient-to-r from-coral-500 via-lavender-500 to-teal-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            ✨ Empowering Every Girl to Believe in Herself ✨
          </h2>
          <p className="text-xl font-nunito opacity-90 max-w-3xl mx-auto">
            Through micro-learning, mentorship, and emotional empowerment — we're building a tech-powered movement for girls everywhere
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold font-poppins text-center mb-8 text-gray-800">
            🌟 Our Impact So Far
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className={`text-center p-6 border-0 shadow-lg bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className={`mx-auto mb-3 text-${stat.color}-600`} size={32} />
                  <div className={`text-2xl font-bold font-poppins text-${stat.color}-800 mb-1`}>
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
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* About Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-coral-700 mb-4">
                  💖 Microme.ai
                </h3>
                <p className="text-gray-600 font-nunito mb-4">
                  A safe, empowering platform designed for girls to learn, grow, and connect with amazing mentors who believe in their potential.
                </p>
                <div className="flex space-x-2">
                  <Badge className="bg-coral-100 text-coral-700 font-nunito">Safe Space</Badge>
                  <Badge className="bg-lavender-100 text-lavender-700 font-nunito">Girl-First</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 font-poppins mb-3">🌍 Our Vision</h4>
                <p className="text-sm text-gray-600 font-nunito">
                  To empower 1 million girls across India & developing nations, creating a global network of confident, skilled young women.
                </p>
              </div>
            </div>

            {/* Learning Categories */}
            <div>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">📚 What Girls Learn</h4>
              <div className="space-y-3">
                {learningCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <IconComponent className={`text-${category.color}-500`} size={16} />
                      <span className="font-nunito text-gray-700">{category.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Community & Support */}
            <div>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">🤝 Community</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Users className="text-teal-500" size={16} />
                  <span className="font-nunito text-gray-700">Find Your Mentor</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Heart className="text-coral-500" size={16} />
                  <span className="font-nunito text-gray-700">Share Your Story</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Sparkles className="text-lavender-500" size={16} />
                  <span className="font-nunito text-gray-700">Daily Affirmations</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="text-teal-500" size={16} />
                  <span className="font-nunito text-gray-700">Safe & Moderated</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-gray-700 font-poppins mb-3">🎉 Join Our Movement</h5>
                <div className="space-y-2">
                  <Badge className="bg-coral-100 text-coral-700 font-nunito text-xs">#MicromeMondays</Badge>
                  <Badge className="bg-lavender-100 text-lavender-700 font-nunito text-xs">#GirlsCanCode</Badge>
                  <Badge className="bg-teal-100 text-teal-700 font-nunito text-xs">#DigitalSisterhood</Badge>
                </div>
              </div>
            </div>

            {/* Contact & Connect */}
            <div>
              <h4 className="font-semibold text-gray-800 font-poppins mb-4">💌 Connect With Us</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="text-coral-500" size={16} />
                  <span className="font-nunito text-gray-700">hello@microme.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="text-lavender-500" size={16} />
                  <span className="font-nunito text-gray-700">Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="text-teal-500" size={16} />
                  <span className="font-nunito text-gray-700">Support 24/7</span>
                </div>
              </div>

              <div className="flex space-x-3 mb-6">
                <Button size="sm" className="bg-coral-400 hover:bg-coral-500 text-white rounded-full p-2">
                  <Instagram size={16} />
                </Button>
                <Button size="sm" className="bg-lavender-400 hover:bg-lavender-500 text-white rounded-full p-2">
                  <Twitter size={16} />
                </Button>
                <Button size="sm" className="bg-teal-400 hover:bg-teal-500 text-white rounded-full p-2">
                  <Youtube size={16} />
                </Button>
              </div>

              <div className="bg-gradient-to-r from-coral-100 to-lavender-100 p-4 rounded-2xl">
                <h5 className="font-semibold text-gray-800 font-poppins mb-2">💝 Sponsor a Girl</h5>
                <p className="text-xs text-gray-600 font-nunito mb-3">
                  Help us reach more girls in underserved communities
                </p>
                <Button className="w-full bg-gradient-to-r from-coral-500 to-lavender-500 hover:from-coral-600 hover:to-lavender-600 text-white rounded-full font-poppins text-sm">
                  Donate ₹500/month 💖
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="font-poppins font-bold">Microme.ai</span>
              <span className="text-sm font-nunito opacity-75">- Empowering Girls Everywhere</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-nunito">
              <span>Privacy Policy</span>
              <span>Safety Guidelines</span>
              <span>Terms of Service</span>
              <span>© 2024 Microme.ai</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-sm font-nunito opacity-75">
              🌟 Made with love for every girl who dreams big • Built in India for the world 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
