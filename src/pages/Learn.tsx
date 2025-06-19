
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { HomeButton } from '@/components/ui/HomeButton';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import {
  BookOpen,
  Play,
  Clock,
  Star,
  Trophy,
  Brain,
  Code,
  Smartphone,
  Palette,
  Lightbulb,
  Zap,
  Target,
  Award
} from 'lucide-react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  lessons: number;
  progress: number;
  icon: string;
  color: string;
  skills: string[];
  isCompleted: boolean;
}

const Learn = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [modules, setModules] = useState<LearningModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample learning modules - in a real app, this would come from Supabase
  const sampleModules: LearningModule[] = [
    {
      id: '1',
      title: 'Python Programming Fundamentals',
      description: 'Learn the basics of Python programming with hands-on projects',
      category: 'Programming',
      difficulty: 'Beginner',
      duration: 120,
      lessons: 12,
      progress: 75,
      icon: '🐍',
      color: 'purple',
      skills: ['Variables', 'Functions', 'Loops', 'Data Structures'],
      isCompleted: false
    },
    {
      id: '2',
      title: 'AI & Machine Learning Basics',
      description: 'Introduction to artificial intelligence and machine learning concepts',
      category: 'AI & ML',
      difficulty: 'Intermediate',
      duration: 180,
      lessons: 15,
      progress: 40,
      icon: '🤖',
      color: 'pink',
      skills: ['Neural Networks', 'Data Analysis', 'Algorithms'],
      isCompleted: false
    },
    {
      id: '3',
      title: 'Web Development with React',
      description: 'Build modern web applications using React and JavaScript',
      category: 'Web Development',
      difficulty: 'Intermediate',
      duration: 200,
      lessons: 18,
      progress: 60,
      icon: '⚛️',
      color: 'teal',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      isCompleted: false
    },
    {
      id: '4',
      title: 'Digital Design & UI/UX',
      description: 'Learn design principles and create beautiful user interfaces',
      category: 'Design',
      difficulty: 'Beginner',
      duration: 90,
      lessons: 10,
      progress: 100,
      icon: '🎨',
      color: 'purple',
      skills: ['Figma', 'Design Thinking', 'Prototyping'],
      isCompleted: true
    },
    {
      id: '5',
      title: 'Mobile App Development',
      description: 'Create mobile apps for iOS and Android platforms',
      category: 'Mobile Development',
      difficulty: 'Advanced',
      duration: 250,
      lessons: 20,
      progress: 25,
      icon: '📱',
      color: 'pink',
      skills: ['React Native', 'Flutter', 'App Store'],
      isCompleted: false
    },
    {
      id: '6',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn about digital security and protecting online systems',
      category: 'Security',
      difficulty: 'Intermediate',
      duration: 150,
      lessons: 14,
      progress: 0,
      icon: '🔒',
      color: 'teal',
      skills: ['Network Security', 'Encryption', 'Ethical Hacking'],
      isCompleted: false
    }
  ];

  const categories = ['All', 'Programming', 'AI & ML', 'Web Development', 'Mobile Development', 'Design', 'Security'];

  useEffect(() => {
    const loadModules = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from Supabase:
        // const { data, error } = await supabase.from('learning_modules').select('*');
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setModules(sampleModules);
      } catch (error) {
        console.error('Error loading modules:', error);
        toast({
          title: "Error",
          description: "Failed to load learning modules. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, [toast]);

  const startModule = async (moduleId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to start learning.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would update progress in Supabase
    toast({
      title: "Module Started! 🎉",
      description: "Let's begin your learning journey!",
    });
  };

  const filteredModules = selectedCategory === 'All' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading learning modules...</p>
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
            <div className="text-6xl mb-4 animate-bounce">📚</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-scale-in">
              Learn & <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Level Up</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              Master cutting-edge tech skills through AI-powered interactive learning modules ✨
            </p>
          </div>

          {/* Learning Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { icon: BookOpen, label: 'Modules Available', value: '50+', color: 'purple' },
              { icon: Clock, label: 'Learning Hours', value: '200+', color: 'pink' },
              { icon: Trophy, label: 'Certificates', value: '15+', color: 'teal' },
              { icon: Star, label: 'Success Rate', value: '95%', color: 'purple' }
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

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'border-purple-300 text-purple-600 hover:bg-purple-50'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Learning Modules */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module, index) => (
            <Card 
              key={module.id} 
              className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{animationDelay: `${0.8 + index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Module Header */}
                <div className={`bg-gradient-to-r from-${module.color}-500 to-${module.color === 'purple' ? 'pink' : module.color === 'pink' ? 'purple' : 'blue'}-500 p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-3xl mb-2">{module.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {module.difficulty}
                      </Badge>
                    </div>
                    {module.isCompleted && (
                      <Trophy className="text-yellow-300" size={24} />
                    )}
                  </div>
                </div>

                {/* Module Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-500">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>

                  {/* Module Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{module.duration} mins</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <BookOpen size={16} />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Skills You'll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className={`bg-${module.color}-100 text-${module.color}-700`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    {module.isCompleted ? (
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <Award className="mr-2" size={16} />
                        Completed
                      </Button>
                    ) : module.progress > 0 ? (
                      <Button 
                        className={`w-full bg-gradient-to-r from-${module.color}-500 to-${module.color === 'purple' ? 'pink' : module.color === 'pink' ? 'purple' : 'blue'}-500 hover:from-${module.color}-600 hover:to-${module.color === 'purple' ? 'pink' : module.color === 'pink' ? 'purple' : 'blue'}-600 text-white transform hover:scale-105 transition-all duration-300`}
                        onClick={() => startModule(module.id)}
                      >
                        <Play className="mr-2" size={16} />
                        Continue Learning
                      </Button>
                    ) : (
                      <Button 
                        className={`w-full bg-gradient-to-r from-${module.color}-500 to-${module.color === 'purple' ? 'pink' : module.color === 'pink' ? 'purple' : 'blue'}-500 hover:from-${module.color}-600 hover:to-${module.color === 'purple' ? 'pink' : module.color === 'pink' ? 'purple' : 'blue'}-600 text-white transform hover:scale-105 transition-all duration-300`}
                        onClick={() => startModule(module.id)}
                      >
                        <Play className="mr-2" size={16} />
                        Start Module
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mt-16 text-center animate-fade-in">
          <Brain className="mx-auto text-purple-500 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready for personalized learning?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our AI will create a custom learning path based on your goals and skill level!
          </p>
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
            Get My Learning Path ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
