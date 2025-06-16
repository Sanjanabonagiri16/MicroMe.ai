import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Heart, Code, Target, Sparkles, Users, Award } from 'lucide-react';

interface BadgeData {
  id: string;
  name: string;
  description: string;
  category: string;
  earned: boolean;
  earnedDate?: string;
  icon: string;
  color: 'coral' | 'lavender' | 'teal';
}

const badgeIcons = {
  'trophy': Trophy,
  'star': Star,
  'heart': Heart,
  'code': Code,
  'target': Target,
  'sparkles': Sparkles,
  'users': Users,
  'award': Award
};

export const BadgeShowcase: React.FC = () => {
  const badges: BadgeData[] = [
    {
      id: '1',
      name: 'Confidence Explorer',
      description: 'Completed first confidence building lesson',
      category: 'confidence',
      earned: true,
      earnedDate: '2 days ago',
      icon: 'heart',
      color: 'coral'
    },
    {
      id: '2',
      name: 'Digital Defender',
      description: 'Mastered online safety basics',
      category: 'digital',
      earned: true,
      earnedDate: '1 week ago',
      icon: 'code',
      color: 'lavender'
    },
    {
      id: '3',
      name: 'Goal Getter',
      description: 'Set and achieved your first goal',
      category: 'life_skills',
      earned: false,
      icon: 'target',
      color: 'teal'
    },
    {
      id: '4',
      name: 'Wellness Warrior',
      description: 'Complete 7 days of mood journaling',
      category: 'wellness',
      earned: false,
      icon: 'sparkles',
      color: 'coral'
    },
    {
      id: '5',
      name: 'Community Helper',
      description: 'Help 5 other girls in the community',
      category: 'community',
      earned: true,
      earnedDate: '3 days ago',
      icon: 'users',
      color: 'lavender'
    },
    {
      id: '6',
      name: 'STEM Star',
      description: 'Complete your first coding lesson',
      category: 'stem',
      earned: false,
      icon: 'star',
      color: 'teal'
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="space-y-8">
      {/* Earned Badges */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center">
            🏆 Your Badges ({earnedBadges.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => {
              const IconComponent = badgeIcons[badge.icon as keyof typeof badgeIcons];
              return (
                <div key={badge.id} className="text-center group cursor-pointer">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${badge.color}-400 to-${badge.color}-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-bounce`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm font-poppins mb-1">{badge.name}</h4>
                  <p className="text-xs text-gray-600 font-nunito mb-2">{badge.description}</p>
                  <Badge className={`bg-${badge.color}-100 text-${badge.color}-700 text-xs font-nunito`}>
                    Earned {badge.earnedDate}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Available Badges */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center">
            ⭐ Available Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {availableBadges.map((badge) => {
              const IconComponent = badgeIcons[badge.icon as keyof typeof badgeIcons];
              return (
                <div key={badge.id} className="text-center group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:animate-pulse">
                    <IconComponent className="text-gray-400" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-600 text-sm font-poppins mb-1">{badge.name}</h4>
                  <p className="text-xs text-gray-500 font-nunito mb-2">{badge.description}</p>
                  <Badge variant="outline" className="text-xs font-nunito">
                    Not Earned
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};