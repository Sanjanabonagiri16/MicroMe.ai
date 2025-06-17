
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Heart, 
  Star, 
  MessageCircle, 
  Calendar,
  Award,
  Video,
  Search,
  Filter,
  Clock,
  MapPin,
  BookOpen,
  Code,
  Briefcase,
  Palette,
  Brain
} from 'lucide-react';

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mentors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      title: "Software Engineer at Google",
      avatar: "PS",
      rating: 4.9,
      sessions: 156,
      category: "tech",
      location: "Bangalore",
      languages: ["English", "Hindi"],
      specialties: ["Coding", "Career Guidance", "Confidence Building"],
      bio: "Passionate about empowering young girls in tech. 8+ years at Google, loves mentoring future leaders.",
      nextAvailable: "Today 3:00 PM",
      color: "coral"
    },
    {
      id: 2,
      name: "Kavya Menon",
      title: "Clinical Psychologist",
      avatar: "KM",
      rating: 4.8,
      sessions: 89,
      category: "wellness",
      location: "Mumbai",
      languages: ["English", "Malayalam"],
      specialties: ["Mental Health", "Anxiety Support", "Self-Care"],
      bio: "Specialized in adolescent psychology. Creating safe spaces for girls to express and heal.",
      nextAvailable: "Tomorrow 11:00 AM",
      color: "lavender"
    },
    {
      id: 3,
      name: "Anita Rajesh",
      title: "Entrepreneur & Business Coach",
      avatar: "AR",
      rating: 4.7,
      sessions: 134,
      category: "business",
      location: "Delhi",
      languages: ["English", "Hindi", "Tamil"],
      specialties: ["Leadership", "Business Skills", "Financial Literacy"],
      bio: "Built 3 successful startups. Mentoring girls to become confident leaders and entrepreneurs.",
      nextAvailable: "Today 6:00 PM",
      color: "teal"
    },
    {
      id: 4,
      name: "Riya Patel",
      title: "Creative Director & Artist",
      avatar: "RP",
      rating: 4.9,
      sessions: 67,
      category: "creative",
      location: "Pune",
      languages: ["English", "Gujarati"],
      specialties: ["Art Therapy", "Creative Expression", "Design Thinking"],
      bio: "Award-winning designer helping girls find their creative voice and build confidence through art.",
      nextAvailable: "Today 4:30 PM",
      color: "coral"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Mentors', icon: Users },
    { id: 'tech', label: 'Technology', icon: Code },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'creative', label: 'Creative', icon: Palette }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-lavender-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">🤝 Find Your Mentor</h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Connect with inspiring women who believe in your potential and want to help you grow.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search mentors by name or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200 focus:border-coral-400 rounded-full"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={selectedCategory === id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(id)}
                  className={`whitespace-nowrap rounded-full ${
                    selectedCategory === id 
                      ? 'bg-coral-500 hover:bg-coral-600' 
                      : 'hover:bg-coral-50 hover:border-coral-300'
                  }`}
                >
                  <Icon size={16} className="mr-2" />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className={`bg-gradient-to-br from-${mentor.color}-400 to-${mentor.color}-500 text-white text-2xl font-bold`}>
                    {mentor.avatar}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-poppins text-gray-800 mb-2">
                  {mentor.name}
                </CardTitle>
                <p className="text-sm text-gray-600 font-nunito mb-3">{mentor.title}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" size={16} />
                    <span className="font-semibold">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-teal-500 mr-1" size={16} />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm font-nunito leading-relaxed">
                  {mentor.bio}
                </p>
                
                {/* Specialties */}
                <div>
                  <p className="text-xs text-gray-500 mb-2 font-semibold">SPECIALTIES</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-lavender-100 text-lavender-700">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Location & Languages */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    <span>{mentor.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Next Available */}
                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-teal-700">
                      <Clock size={14} className="mr-1" />
                      <span className="font-semibold">Next Available:</span>
                    </div>
                    <span className="text-sm text-teal-600 font-bold">{mentor.nextAvailable}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 bg-coral-500 hover:bg-coral-600 text-white rounded-full">
                    <Video size={16} className="mr-2" />
                    Book Session
                  </Button>
                  <Button variant="outline" className="px-4 rounded-full hover:bg-coral-50">
                    <MessageCircle size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No mentors found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;
