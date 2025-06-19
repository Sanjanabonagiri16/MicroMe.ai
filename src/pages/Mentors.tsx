
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HomeButton } from '@/components/ui/HomeButton';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import {
  Star,
  Calendar,
  Clock,
  MessageCircle,
  Video,
  Users,
  Award,
  Heart,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  rating: number;
  sessions: number;
  availability: string;
  avatar: string;
  bio: string;
  languages: string[];
}

const Mentors = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // Sample mentor data - in a real app, this would come from Supabase
  const sampleMentors: Mentor[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      role: 'Senior AI Engineer',
      company: 'Google DeepMind',
      expertise: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
      rating: 4.9,
      sessions: 127,
      availability: 'Weekends',
      avatar: '👩‍💻',
      bio: 'Leading AI research at Google with 8+ years experience. Passionate about mentoring young women in tech.',
      languages: ['English', 'Hindi', 'Tamil']
    },
    {
      id: '2',
      name: 'Aisha Patel',
      role: 'Full Stack Developer',
      company: 'Meta',
      expertise: ['React', 'Node.js', 'JavaScript', 'System Design'],
      rating: 4.8,
      sessions: 89,
      availability: 'Evenings',
      avatar: '👩‍🔬',
      bio: 'Building scalable web applications at Meta. Loves teaching coding fundamentals to beginners.',
      languages: ['English', 'Gujarati']
    },
    {
      id: '3',
      name: 'Kavya Reddy',
      role: 'Product Manager',
      company: 'Microsoft',
      expertise: ['Product Strategy', 'User Research', 'Leadership', 'Agile'],
      rating: 4.9,
      sessions: 156,
      availability: 'Flexible',
      avatar: '👩‍💼',
      bio: 'Leading product teams at Microsoft. Expert in tech career guidance and leadership development.',
      languages: ['English', 'Telugu', 'Kannada']
    },
    {
      id: '4',
      name: 'Dr. Ananya Singh',
      role: 'Data Scientist',
      company: 'IBM Research',
      expertise: ['Data Analytics', 'R', 'Statistics', 'Research'],
      rating: 5.0,
      sessions: 203,
      availability: 'Mornings',
      avatar: '👩‍🎓',
      bio: 'PhD in Computer Science, specializing in data analytics. 10+ years in research and industry.',
      languages: ['English', 'Hindi', 'Bengali']
    }
  ];

  useEffect(() => {
    // Simulate loading mentor data
    const loadMentors = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from Supabase:
        // const { data, error } = await supabase.from('mentors').select('*');
        
        // For now, using sample data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMentors(sampleMentors);
      } catch (error) {
        console.error('Error loading mentors:', error);
        toast({
          title: "Error",
          description: "Failed to load mentors. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadMentors();
  }, [toast]);

  const requestMentorship = async (mentorId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to request mentorship.",
        variant: "destructive",
      });
      return;
    }

    try {
      // In a real app, you would insert into Supabase:
      // const { error } = await supabase.from('mentorship_requests').insert({
      //   mentor_id: mentorId,
      //   mentee_id: user.id,
      //   status: 'pending'
      // });

      toast({
        title: "Mentorship Requested! 🎉",
        description: "Your mentor will reach out to you within 24 hours.",
      });
    } catch (error) {
      console.error('Error requesting mentorship:', error);
      toast({
        title: "Error",
        description: "Failed to request mentorship. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading amazing mentors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      <HomeButton />
      
      {/* Header */}
      <div className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-4 animate-bounce">👩‍🏫</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-scale-in">
              Meet Your <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">AI Mentors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              Connect with successful women in tech who are ready to guide your journey to greatness ✨
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { icon: Users, label: 'Active Mentors', value: '500+', color: 'purple' },
              { icon: MessageCircle, label: 'Sessions Completed', value: '10K+', color: 'pink' },
              { icon: Award, label: 'Success Stories', value: '2.5K+', color: 'teal' },
              { icon: Heart, label: 'Happy Mentees', value: '95%', color: 'purple' }
            ].map(({ icon: Icon, label, value, color }, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-transform duration-300">
                <Icon className={`mx-auto mb-2 text-${color}-500`} size={32} />
                <div className="text-2xl font-bold text-gray-800">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card 
              key={mentor.id} 
              className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{animationDelay: `${0.8 + index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Mentor Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{mentor.avatar}</div>
                    <div>
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <p className="text-purple-100">{mentor.role}</p>
                      <p className="text-sm text-purple-200">{mentor.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-300" size={16} />
                      <span className="font-semibold">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={16} />
                      <span className="text-sm">{mentor.sessions} sessions</span>
                    </div>
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{mentor.bio}</p>
                  
                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="bg-purple-100 text-purple-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.languages.map((lang, langIndex) => (
                        <Badge key={langIndex} className="bg-pink-100 text-pink-700">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>Available: {mentor.availability}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-300"
                      onClick={() => requestMentorship(mentor.id)}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Request Mentorship
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      <Video className="mr-2" size={16} />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mt-16 text-center animate-fade-in">
          <Sparkles className="mx-auto text-purple-500 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Can't find the perfect mentor?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our AI matching system will find the ideal mentor based on your goals and interests!
          </p>
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
            Find My Perfect Mentor ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
