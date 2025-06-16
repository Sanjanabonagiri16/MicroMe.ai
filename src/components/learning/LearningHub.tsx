import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LearningModule } from './LearningModule';
import { BadgeShowcase } from './BadgeShowcase';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Clock, 
  Star,
  Heart,
  Code,
  Palette,
  Microscope,
  Brain,
  Sparkles,
  Users,
  TrendingUp,
  Calendar,
  Play,
  CheckCircle
} from 'lucide-react';

export const LearningHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const learningModules = [
    {
      id: '1',
      title: 'Speak Boldly',
      description: 'Build confidence in public speaking and expressing your ideas',
      category: 'confidence',
      progress: 75,
      totalLessons: 8,
      completedLessons: 6,
      estimatedTime: 25,
      difficulty: 'Beginner' as const,
      badge: 'Confidence Explorer',
      color: 'coral' as const
    },
    {
      id: '2',
      title: 'How the Internet Works',
      description: 'Understand the basics of the digital world around you',
      category: 'digital',
      progress: 30,
      totalLessons: 12,
      completedLessons: 4,
      estimatedTime: 45,
      difficulty: 'Beginner' as const,
      color: 'lavender' as const
    },
    {
      id: '3',
      title: 'Goal Setting Mastery',
      description: 'Learn to set and achieve meaningful goals',
      category: 'life_skills',
      progress: 90,
      totalLessons: 10,
      completedLessons: 9,
      estimatedTime: 35,
      difficulty: 'Intermediate' as const,
      badge: 'Goal Getter',
      color: 'teal' as const
    },
    {
      id: '4',
      title: 'Understanding Your Body',
      description: 'Comprehensive period and wellness education',
      category: 'wellness',
      progress: 60,
      totalLessons: 15,
      completedLessons: 9,
      estimatedTime: 50,
      difficulty: 'Beginner' as const,
      color: 'coral' as const
    },
    {
      id: '5',
      title: 'Design Your Dream Board',
      description: 'Express your creativity and visualize your future',
      category: 'creative',
      progress: 45,
      totalLessons: 6,
      completedLessons: 3,
      estimatedTime: 20,
      difficulty: 'Beginner' as const,
      color: 'lavender' as const
    },
    {
      id: '6',
      title: 'Intro to Coding',
      description: 'Start your journey in programming and technology',
      category: 'stem',
      progress: 15,
      totalLessons: 20,
      completedLessons: 3,
      estimatedTime: 60,
      difficulty: 'Beginner' as const,
      color: 'teal' as const
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, color: 'gray' },
    { id: 'confidence', name: 'Confidence & Self-Worth', icon: Heart, color: 'coral' },
    { id: 'digital', name: 'Digital Literacy', icon: Code, color: 'lavender' },
    { id: 'life_skills', name: 'Life & Leadership', icon: Target, color: 'teal' },
    { id: 'wellness', name: 'Wellness & Health', icon: Sparkles, color: 'coral' },
    { id: 'creative', name: 'Creative Skills', icon: Palette, color: 'lavender' },
    { id: 'stem', name: 'STEM for Girls', icon: Microscope, color: 'teal' }
  ];

  const dailyStreak = {
    current: 7,
    best: 12,
    todayCompleted: true
  };

  const weeklyGoals = [
    { task: 'Complete 3 lessons', progress: 100, completed: true },
    { task: 'Earn 1 new badge', progress: 80, completed: false },
    { task: 'Help 2 community members', progress: 50, completed: false },
    { task: 'Journal mood 5 times', progress: 100, completed: true }
  ];

  const filteredModules = selectedCategory === 'all' 
    ? learningModules 
    : learningModules.filter(module => module.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-lavender-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">📚 Learning Hub</h1>
          <p className="text-xl text-gray-600 font-nunito">Discover courses designed just for you</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm rounded-2xl p-2">
            <TabsTrigger value="courses" className="rounded-xl font-poppins">My Courses</TabsTrigger>
            <TabsTrigger value="badges" className="rounded-xl font-poppins">Badges</TabsTrigger>
            <TabsTrigger value="progress" className="rounded-xl font-poppins">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-8">
            {/* Daily Streak & Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-coral-400 to-coral-500 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="text-2xl font-bold font-poppins">{dailyStreak.current}</div>
                  <div className="text-sm opacity-90 font-nunito">Day Streak</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-lavender-400 to-lavender-500 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">📖</div>
                  <div className="text-2xl font-bold font-poppins">{learningModules.filter(m => m.progress > 0).length}</div>
                  <div className="text-sm opacity-90 font-nunito">Active Courses</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-400 to-teal-500 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-2xl font-bold font-poppins">5</div>
                  <div className="text-sm opacity-90 font-nunito">Badges Earned</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-coral-400 to-lavender-400 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-2xl font-bold font-poppins">1,250</div>
                  <div className="text-sm opacity-90 font-nunito">Total Points</div>
                </CardContent>
              </Card>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`rounded-full font-nunito ${
                      selectedCategory === category.id 
                        ? `bg-${category.color}-500 hover:bg-${category.color}-600 text-white` 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <IconComponent size={16} className="mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Learning Modules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredModules.map((module) => (
                <LearningModule key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="badges">
            <BadgeShowcase />
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Weekly Goals */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-coral-700 flex items-center">
                    🎯 Weekly Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyGoals.map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-nunito text-gray-800">{goal.task}</span>
                          <div className="flex items-center space-x-2">
                            {goal.completed && <CheckCircle className="text-green-500" size={20} />}
                            <span className="text-sm font-bold text-gray-600">{goal.progress}%</span>
                          </div>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Analytics */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-lavender-700 flex items-center">
                    📊 Learning Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-lavender-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-3xl font-bold">4.2</div>
                          <div className="text-sm">Hours</div>
                        </div>
                      </div>
                      <p className="text-gray-600 font-nunito">This week's learning time</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-coral-50 rounded-2xl">
                        <TrendingUp className="text-coral-500 mx-auto mb-2" size={24} />
                        <div className="font-bold text-gray-800">+15%</div>
                        <div className="text-sm text-gray-600 font-nunito">vs Last Week</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-2xl">
                        <Calendar className="text-teal-500 mx-auto mb-2" size={24} />
                        <div className="font-bold text-gray-800">5</div>
                        <div className="text-sm text-gray-600 font-nunito">Days Active</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 font-poppins">Favorite Categories</h4>
                      {[
                        { name: 'Confidence Building', percentage: 40, color: 'coral' },
                        { name: 'Digital Literacy', percentage: 30, color: 'lavender' },
                        { name: 'Life Skills', percentage: 30, color: 'teal' }
                      ].map((category, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-nunito">{category.name}</span>
                            <span className="font-bold">{category.percentage}%</span>
                          </div>
                          <Progress value={category.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};