import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageCircle, Calendar, Award, Heart, Users } from 'lucide-react';

interface MentorData {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  totalSessions: number;
  specialization: 'career' | 'life_coach' | 'wellness';
  avatar?: string;
  bio: string;
  nextAvailable: string;
  badges: string[];
}

interface MentorCardProps {
  mentor: MentorData;
  onConnect: (mentorId: string) => void;
  onMessage: (mentorId: string) => void;
}

const specializationColors = {
  'career': 'teal',
  'life_coach': 'coral',
  'wellness': 'lavender'
};

const specializationIcons = {
  'career': Users,
  'life_coach': Heart,
  'wellness': Star
};

export const MentorCard: React.FC<MentorCardProps> = ({ mentor, onConnect, onMessage }) => {
  const colorScheme = specializationColors[mentor.specialization];
  const IconComponent = specializationIcons[mentor.specialization];

  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-16 h-16 border-2 border-gray-200">
            <AvatarImage src={mentor.avatar} alt={mentor.name} />
            <AvatarFallback className={`bg-gradient-to-br from-${colorScheme}-400 to-${colorScheme}-500 text-white text-lg font-bold`}>
              {mentor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-800 font-poppins">{mentor.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-sm font-semibold text-gray-700">{mentor.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 font-nunito mb-1">{mentor.title}</p>
            <p className="text-xs text-gray-500 font-nunito">{mentor.company}</p>
            
            <div className="flex items-center mt-2">
              <IconComponent className={`text-${colorScheme}-500 mr-2`} size={16} />
              <Badge className={`bg-${colorScheme}-100 text-${colorScheme}-700 text-xs font-nunito`}>
                {mentor.specialization.replace('_', ' ')}
              </Badge>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 font-nunito mb-4 line-clamp-2">{mentor.bio}</p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs font-nunito">
                {skill}
              </Badge>
            ))}
            {mentor.expertise.length > 3 && (
              <Badge variant="outline" className="text-xs font-nunito">
                +{mentor.expertise.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {mentor.totalSessions} sessions
              </span>
              <span className="flex items-center">
                <Award size={14} className="mr-1" />
                {mentor.badges.length} badges
              </span>
            </div>
            <span className="font-nunito">Next: {mentor.nextAvailable}</span>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button 
              className={`flex-1 bg-gradient-to-r from-${colorScheme}-500 to-${colorScheme}-600 hover:from-${colorScheme}-600 hover:to-${colorScheme}-700 text-white rounded-full font-poppins text-sm`}
              onClick={() => onConnect(mentor.id)}
            >
              Connect 🤝
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-4"
              onClick={() => onMessage(mentor.id)}
            >
              <MessageCircle size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};