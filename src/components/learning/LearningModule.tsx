import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Award, 
  Star,
  Users,
  Heart,
  Sparkles,
  Trophy,
  Target,
  Brain,
  Code,
  Palette,
  Microscope
} from 'lucide-react';

interface LearningModuleProps {
  module: {
    id: string;
    title: string;
    description: string;
    category: string;
    progress: number;
    totalLessons: number;
    completedLessons: number;
    estimatedTime: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    badge?: string;
    color: 'coral' | 'lavender' | 'teal';
  };
}

const categoryIcons = {
  'confidence': Heart,
  'digital': Code,
  'life_skills': Target,
  'wellness': Sparkles,
  'creative': Palette,
  'stem': Microscope
};

const categoryColors = {
  'confidence': 'coral',
  'digital': 'lavender',
  'life_skills': 'teal',
  'wellness': 'coral',
  'creative': 'lavender',
  'stem': 'teal'
};

export const LearningModule: React.FC<LearningModuleProps> = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = categoryIcons[module.category as keyof typeof categoryIcons] || BookOpen;
  const colorScheme = categoryColors[module.category as keyof typeof categoryColors] || module.color;

  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group">
      <CardContent className="p-6">
        <div className={`w-full h-32 bg-gradient-to-br from-${colorScheme}-400 to-${colorScheme}-500 rounded-2xl mb-6 flex items-center justify-center group-hover:animate-bounce relative overflow-hidden`}>
          <IconComponent className="text-white" size={40} />
          {module.badge && (
            <div className="absolute top-2 right-2">
              <Trophy className="text-yellow-300" size={20} />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-800 mb-2 font-poppins text-lg">{module.title}</h3>
            <p className="text-gray-600 text-sm font-nunito">{module.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <Badge className={`bg-${colorScheme}-100 text-${colorScheme}-700 font-nunito`}>
              {module.difficulty}
            </Badge>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock size={16} />
              <span className="font-nunito">{module.estimatedTime} min</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-nunito">Progress</span>
              <span className="font-bold text-gray-800">{module.progress}%</span>
            </div>
            <Progress value={module.progress} className="h-3" />
            <div className="flex justify-between text-xs text-gray-500">
              <span className="font-nunito">{module.completedLessons}/{module.totalLessons} lessons</span>
              {module.badge && (
                <span className="text-yellow-600 font-semibold">🏆 Badge Available</span>
              )}
            </div>
          </div>

          <Button 
            className={`w-full bg-gradient-to-r from-${colorScheme}-500 to-${colorScheme}-600 hover:from-${colorScheme}-600 hover:to-${colorScheme}-700 text-white rounded-full font-poppins`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {module.progress === 0 ? 'Start Learning' : 'Continue'} ▶️
          </Button>

          {isExpanded && (
            <div className="mt-4 space-y-3 animate-fade-in">
              <h4 className="font-semibold text-gray-800 font-poppins">Recent Lessons</h4>
              {[1, 2, 3].map((lesson) => (
                <div key={lesson} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className={`text-${colorScheme}-500`} size={20} />
                    <span className="font-nunito text-sm">Lesson {lesson}: Building Confidence</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};