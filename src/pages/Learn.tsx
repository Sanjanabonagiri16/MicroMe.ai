
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award,
  ChevronRight,
  Filter,
  Search,
  Star,
  CheckCircle,
  Lock,
  Zap,
  Heart,
  Code,
  Palette,
  Brain,
  Shield,
  Lightbulb,
  Target,
  Users
} from 'lucide-react';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen, color: 'gray' },
    { id: 'confidence', label: 'Confidence & Self-Worth', icon: Heart, color: 'coral' },
    { id: 'digital', label: 'Digital Literacy', icon: Code, color: 'teal' },
    { id: 'leadership', label: 'Life & Leadership', icon: Target, color: 'lavender' },
    { id: 'wellness', label: 'Wellness & Health', icon: Brain, color: 'coral' },
    { id: 'creative', label: 'Creative Skills', icon: Palette, color: 'teal' },
    { id: 'stem', label: 'STEM for Girls', icon: Zap, color: 'lavender' }
  ];

  const courses = [
    {
      id: 1,
      title: "Speak Boldly: Finding Your Voice",
      category: "confidence",
      instructor: "Dr. Priya Sharma",
      duration: "2 hours",
      lessons: 8,
      level: "Beginner",
      rating: 4.9,
      students: 1234,
      progress: 75,
      description: "Learn to speak with confidence, overcome stage fright, and express yourself clearly.",
      skills: ["Public Speaking", "Confidence Building", "Communication"],
      isStarted: true,
      isPremium: false,
      badge: "Confidence Explorer"
    },
    {
      id: 2,
      title: "Build Your First Website",
      category: "digital",
      instructor: "Kavya Menon",
      duration: "4 hours",
      lessons: 12,
      level: "Beginner",
      rating: 4.8,
      students: 856,
      progress: 0,
      description: "Create your own website from scratch using HTML, CSS, and basic design principles.",
      skills: ["HTML", "CSS", "Web Design", "Digital Literacy"],
      isStarted: false,
      isPremium: false,
      badge: "Digital Defender"
    },
    {
      id: 3,
      title: "Leadership Mindset: Leading Change",
      category: "leadership",
      instructor: "Anita Rajesh",
      duration: "3 hours",
      lessons: 10,
      level: "Intermediate",
      rating: 4.7,
      students: 678,
      progress: 30,
      description: "Develop leadership skills, learn decision-making, and inspire others around you.",
      skills: ["Leadership", "Decision Making", "Team Building"],
      isStarted: true,
      isPremium: true,
      badge: "Future Leader"
    },
    {
      id: 4,
      title: "Understanding Your Body & Mind",
      category: "wellness",
      instructor: "Dr. Meera Rao",
      duration: "2.5 hours",
      lessons: 9,
      level: "Beginner",
      rating: 4.9,
      students: 1567,
      progress: 0,
      description: "Learn about puberty, mental health, self-care, and building healthy habits.",
      skills: ["Health Education", "Self-Care", "Emotional Intelligence"],
      isStarted: false,
      isPremium: false,
      badge: "Wellness Warrior"
    },
    {
      id: 5,
      title: "Digital Art & Design Basics",
      category: "creative",
      instructor: "Riya Patel",
      duration: "3.5 hours",
      lessons: 14,
      level: "Beginner",
      rating: 4.8,
      students: 432,
      progress: 0,
      description: "Express yourself through digital art, learn design tools, and create beautiful graphics.",
      skills: ["Digital Art", "Design", "Creative Expression"],
      isStarted: false,
      isPremium: true,
      badge: "Creative Explorer"
    },
    {
      id: 6,
      title: "Code Your First Game",
      category: "stem",
      instructor: "Neha Singh",
      duration: "5 hours",
      lessons: 16,
      level: "Intermediate",
      rating: 4.9,
      students: 324,
      progress: 0,
      description: "Learn programming fundamentals by creating your own interactive game using Scratch.",
      skills: ["Programming", "Logic", "Problem Solving", "Game Design"],
      isStarted: false,
      isPremium: true,
      badge: "Code Ninja"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'gray';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">📚 Learning Hub</h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Discover bite-sized courses designed to build your confidence, skills, and dreams.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-coral-600 mb-2">127</div>
              <div className="text-sm text-gray-600 font-nunito">Courses Available</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">3</div>
              <div className="text-sm text-gray-600 font-nunito">In Progress</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-lavender-600 mb-2">12</div>
              <div className="text-sm text-gray-600 font-nunito">Completed</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-coral-600 mb-2">8</div>
              <div className="text-sm text-gray-600 font-nunito">Badges Earned</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(({ id, label, icon: Icon, color }) => (
              <Button
                key={id}
                variant={selectedCategory === id ? "default" : "outline"}
                onClick={() => setSelectedCategory(id)}
                className={`rounded-full ${
                  selectedCategory === id 
                    ? `bg-${color}-500 hover:bg-${color}-600 text-white` 
                    : `hover:bg-${color}-50 hover:border-${color}-300`
                }`}
              >
                <Icon size={16} className="mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const categoryColor = getCategoryColor(course.category);
            return (
              <Card key={course.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`bg-${categoryColor}-100 text-${categoryColor}-700 hover:bg-${categoryColor}-100`}>
                      {categories.find(cat => cat.id === course.category)?.label || course.category}
                    </Badge>
                    <div className="flex items-center">
                      {course.isPremium && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white mr-2">
                          ✨ Premium
                        </Badge>
                      )}
                      {course.isStarted ? (
                        <CheckCircle className="text-teal-500" size={20} />
                      ) : (
                        <Lock className="text-gray-400" size={20} />
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-poppins text-gray-800 mb-2 group-hover:text-coral-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" size={14} />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm font-nunito leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Skills */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-semibold">SKILLS YOU'LL LEARN</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-lavender-100 text-lavender-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  {course.isStarted && course.progress > 0 && (
                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-teal-700">Progress</span>
                        <span className="text-sm text-teal-600">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  {/* Badge Reward */}
                  <div className="bg-gradient-to-r from-coral-50 to-coral-100 p-3 rounded-lg flex items-center">
                    <Award className="text-coral-500 mr-2" size={16} />
                    <span className="text-sm font-semibold text-coral-700">
                      Earn: {course.badge} Badge
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button className={`w-full rounded-full font-poppins ${
                    course.isStarted 
                      ? 'bg-teal-500 hover:bg-teal-600' 
                      : 'bg-coral-500 hover:bg-coral-600'
                  } text-white`}>
                    {course.isStarted ? (
                      <>
                        <Play size={16} className="mr-2" />
                        Continue Learning
                      </>
                    ) : (
                      <>
                        <BookOpen size={16} className="mr-2" />
                        Start Course
                      </>
                    )}
                  </Button>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try selecting a different category or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
