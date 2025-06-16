import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Calendar, 
  Users, 
  Heart, 
  Code, 
  Palette, 
  Trophy,
  Star,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';

export const CommunityEvents: React.FC = () => {
  const upcomingEvents = [
    {
      id: '1',
      title: '#MicromeMondays - Weekly Shoutouts',
      description: 'Celebrate amazing achievements from our community members',
      date: 'Every Monday',
      time: '6:00 PM IST',
      type: 'weekly',
      category: 'community',
      participants: 150,
      color: 'coral',
      icon: Heart
    },
    {
      id: '2',
      title: 'Girls Can Code Challenge',
      description: 'Monthly coding challenge with prizes and mentorship',
      date: 'Jan 15, 2025',
      time: '4:00 PM IST',
      type: 'challenge',
      category: 'tech',
      participants: 89,
      color: 'lavender',
      icon: Code
    },
    {
      id: '3',
      title: 'Story Circles - Share Your Journey',
      description: 'Safe space to share life stories and connect with others',
      date: 'Jan 20, 2025',
      time: '7:00 PM IST',
      type: 'workshop',
      category: 'wellness',
      participants: 45,
      color: 'teal',
      icon: Sparkles
    },
    {
      id: '4',
      title: 'Digital Sisterhood Festival',
      description: 'Annual online gathering with workshops, talks, and fun',
      date: 'Mar 8, 2025',
      time: 'All Day',
      type: 'festival',
      category: 'special',
      participants: 500,
      color: 'coral',
      icon: Trophy
    }
  ];

  const pastEvents = [
    {
      id: '1',
      title: 'Creative Expression Workshop',
      description: 'Art therapy and creative writing session',
      date: 'Dec 15, 2024',
      participants: 67,
      highlights: ['25 artworks created', '15 poems shared', '100% positive feedback']
    },
    {
      id: '2',
      title: 'Confidence Building Bootcamp',
      description: '3-day intensive confidence building program',
      date: 'Dec 1-3, 2024',
      participants: 120,
      highlights: ['90% confidence increase', '50 new friendships', '3 mentorship matches']
    }
  ];

  const ambassadors = [
    {
      id: '1',
      name: 'Priya K.',
      location: 'Mumbai',
      achievements: ['Led 5 workshops', 'Mentored 20 girls', 'Community Builder badge'],
      avatar: 'P'
    },
    {
      id: '2',
      name: 'Ananya S.',
      location: 'Bangalore',
      achievements: ['Tech workshop leader', 'Coding mentor', 'Innovation badge'],
      avatar: 'A'
    },
    {
      id: '3',
      name: 'Kavya M.',
      location: 'Delhi',
      achievements: ['Wellness guide', 'Story circle host', 'Empowerment badge'],
      avatar: 'K'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Upcoming Events */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center">
            🎉 Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => {
              const IconComponent = event.icon;
              return (
                <div key={event.id} className={`bg-gradient-to-br from-${event.color}-50 to-${event.color}-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${event.color}-400 to-${event.color}-500 rounded-xl flex items-center justify-center group-hover:animate-bounce`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Badge className={`bg-${event.color}-200 text-${event.color}-800 font-nunito`}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 font-poppins">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-nunito">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-nunito">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span className="font-nunito">{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2" />
                      <span className="font-nunito">{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r from-${event.color}-500 to-${event.color}-600 hover:from-${event.color}-600 hover:to-${event.color}-700 text-white rounded-full font-poppins`}>
                    Join Event ✨
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Community Ambassadors */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-poppins text-lavender-700 flex items-center">
            👑 Community Ambassadors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {ambassadors.map((ambassador) => (
              <div key={ambassador.id} className="text-center group cursor-pointer">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-lavender-200 group-hover:border-lavender-400 transition-colors">
                  <AvatarFallback className="bg-gradient-to-br from-lavender-400 to-lavender-500 text-white text-2xl font-bold">
                    {ambassador.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-bold text-gray-800 font-poppins mb-1">{ambassador.name}</h3>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span className="font-nunito">{ambassador.location}</span>
                </div>
                
                <div className="space-y-2">
                  {ambassador.achievements.map((achievement, index) => (
                    <Badge key={index} variant="outline" className="text-xs font-nunito block">
                      {achievement}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="mt-4 rounded-full font-nunito">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Events Highlights */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-poppins text-teal-700 flex items-center">
            📚 Past Events Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-800 font-poppins mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm font-nunito mb-2">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-nunito">{event.date}</span>
                      <Users size={16} className="ml-4 mr-2" />
                      <span className="font-nunito">{event.participants} participants</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 font-poppins">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, index) => (
                      <Badge key={index} className="bg-teal-200 text-teal-800 font-nunito">
                        ✨ {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};