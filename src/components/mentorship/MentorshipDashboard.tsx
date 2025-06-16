import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MentorCard } from './MentorCard';
import { 
  Calendar, 
  MessageCircle, 
  Users, 
  Heart, 
  Star, 
  Clock,
  Video,
  Send,
  Volume2,
  HelpCircle
} from 'lucide-react';

export const MentorshipDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('my-mentors');

  const myMentors = [
    {
      id: '1',
      name: 'Dr. Meera Rao',
      title: 'Software Engineer & Tech Lead',
      company: 'Google India',
      expertise: ['Coding', 'Career Planning', 'Confidence Building'],
      rating: 4.9,
      totalSessions: 45,
      specialization: 'career' as const,
      bio: 'Passionate about empowering young women in tech. 10+ years experience in software development.',
      nextAvailable: 'Tomorrow 4:00 PM',
      badges: ['Empowerer', 'Tech Guide', 'Listener']
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Life Coach & Wellness Expert',
      company: 'Mindful Living',
      expertise: ['Self-Confidence', 'Stress Management', 'Goal Setting'],
      rating: 4.8,
      totalSessions: 32,
      specialization: 'life_coach' as const,
      bio: 'Helping young women discover their inner strength and build lasting confidence.',
      nextAvailable: 'Friday 6:00 PM',
      badges: ['Confidence Builder', 'Motivator']
    }
  ];

  const availableMentors = [
    {
      id: '3',
      name: 'Dr. Anjali Gupta',
      title: 'Clinical Psychologist',
      company: 'Wellness Center',
      expertise: ['Mental Health', 'Anxiety Management', 'Self-Care'],
      rating: 4.9,
      totalSessions: 67,
      specialization: 'wellness' as const,
      bio: 'Specialized in adolescent psychology and mental wellness for young women.',
      nextAvailable: 'Next Week',
      badges: ['Wellness Guide', 'Listener', 'Healer']
    },
    {
      id: '4',
      name: 'Kavya Patel',
      title: 'Entrepreneur & Business Coach',
      company: 'StartHer Foundation',
      expertise: ['Entrepreneurship', 'Leadership', 'Business Skills'],
      rating: 4.7,
      totalSessions: 28,
      specialization: 'career' as const,
      bio: 'Founded 3 successful startups. Passionate about women entrepreneurship.',
      nextAvailable: 'This Weekend',
      badges: ['Business Guide', 'Leader']
    }
  ];

  const upcomingSessions = [
    {
      id: '1',
      mentorName: 'Dr. Meera Rao',
      topic: 'Building Your First Website',
      date: 'Tomorrow',
      time: '4:00 PM',
      duration: '30 min',
      type: 'video'
    },
    {
      id: '2',
      mentorName: 'Priya Sharma',
      topic: 'Confidence in Public Speaking',
      date: 'Friday',
      time: '6:00 PM',
      duration: '45 min',
      type: 'video'
    }
  ];

  const askMentorQuestions = [
    {
      id: '1',
      question: 'How do I deal with imposter syndrome in tech?',
      category: 'Career',
      answers: 12,
      likes: 45
    },
    {
      id: '2',
      question: 'Tips for managing stress during exams?',
      category: 'Wellness',
      answers: 8,
      likes: 32
    },
    {
      id: '3',
      question: 'How to start learning coding as a beginner?',
      category: 'Tech',
      answers: 15,
      likes: 67
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-800 mb-4">🌟 Your Mentorship Journey</h1>
          <p className="text-xl text-gray-600 font-nunito">Connect with amazing women who believe in you</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm rounded-2xl p-2">
            <TabsTrigger value="my-mentors" className="rounded-xl font-poppins">My Mentors</TabsTrigger>
            <TabsTrigger value="find-mentors" className="rounded-xl font-poppins">Find Mentors</TabsTrigger>
            <TabsTrigger value="sessions" className="rounded-xl font-poppins">Sessions</TabsTrigger>
            <TabsTrigger value="ask-mentor" className="rounded-xl font-poppins">Ask a Mentor</TabsTrigger>
          </TabsList>

          <TabsContent value="my-mentors" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Mentors */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-poppins text-gray-800">Your Mentors</h2>
                {myMentors.map((mentor) => (
                  <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    onConnect={() => {}}
                    onMessage={() => {}}
                  />
                ))}
              </div>

              {/* Chat & Sessions */}
              <div className="space-y-6">
                {/* Recent Chat */}
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-lavender-700 flex items-center">
                      💬 Recent Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-sm">
                        <p className="text-sm text-gray-600 font-nunito mb-1">You</p>
                        <p className="text-gray-800 font-nunito">I'm nervous about my first coding interview.</p>
                      </div>
                      <div className="bg-gradient-to-r from-lavender-400 to-lavender-500 text-white p-4 rounded-2xl rounded-br-sm ml-8">
                        <p className="text-sm opacity-90 mb-1">Dr. Meera</p>
                        <p>That's completely normal! Let's practice some common questions together. Remember, they want you to succeed! 🌟</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-lavender-400 font-nunito"
                      />
                      <Button className="bg-lavender-500 hover:bg-lavender-600 text-white rounded-full px-4">
                        <Send size={18} />
                      </Button>
                      <Button variant="outline" className="rounded-full px-4">
                        <Volume2 size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Sessions */}
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-teal-700 flex items-center">
                      📅 Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-2xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800 font-poppins">{session.topic}</h4>
                            <Badge className="bg-teal-100 text-teal-700 font-nunito">
                              {session.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 font-nunito mb-2">with {session.mentorName}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-teal-600 font-semibold">{session.date}, {session.time}</span>
                            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
                              <Video size={16} className="mr-2" />
                              Join
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="find-mentors" className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-poppins text-gray-800">Discover Amazing Mentors</h2>
              <div className="flex space-x-2">
                <Badge className="bg-coral-100 text-coral-700 font-nunito">Career</Badge>
                <Badge className="bg-lavender-100 text-lavender-700 font-nunito">Life Coach</Badge>
                <Badge className="bg-teal-100 text-teal-700 font-nunito">Wellness</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableMentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  onConnect={() => {}}
                  onMessage={() => {}}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Session History */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-coral-700">📚 Session History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: 'Career Planning', mentor: 'Dr. Meera Rao', date: '2 days ago', rating: 5 },
                      { topic: 'Stress Management', mentor: 'Priya Sharma', date: '1 week ago', rating: 5 },
                      { topic: 'Public Speaking', mentor: 'Dr. Meera Rao', date: '2 weeks ago', rating: 4 }
                    ].map((session, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                        <div>
                          <p className="font-semibold text-gray-800 font-poppins">{session.topic}</p>
                          <p className="text-sm text-gray-600 font-nunito">with {session.mentor}</p>
                          <p className="text-xs text-gray-500 font-nunito">{session.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(session.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current" size={16} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Session Stats */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-lavender-700">📊 Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-lavender-400 to-coral-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-3xl font-bold">12</div>
                          <div className="text-sm">Sessions</div>
                        </div>
                      </div>
                      <p className="text-gray-600 font-nunito">Total mentorship hours: 8.5</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-coral-50 rounded-2xl">
                        <Heart className="text-coral-500 mx-auto mb-2" size={24} />
                        <div className="font-bold text-gray-800">4.9</div>
                        <div className="text-sm text-gray-600 font-nunito">Avg Rating</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-2xl">
                        <Users className="text-teal-500 mx-auto mb-2" size={24} />
                        <div className="font-bold text-gray-800">2</div>
                        <div className="text-sm text-gray-600 font-nunito">Active Mentors</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ask-mentor" className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center">
                  🧠 Ask-a-Mentor Board
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Ask Question */}
                <div className="bg-gradient-to-r from-coral-50 to-lavender-50 p-6 rounded-2xl mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 font-poppins">Ask Your Question</h3>
                  <div className="space-y-4">
                    <textarea 
                      placeholder="What would you like to ask our mentors? Remember, this will be anonymous and public..."
                      className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-coral-400 font-nunito resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between">
                      <select className="p-2 border border-gray-200 rounded-full focus:outline-none focus:border-coral-400 font-nunito">
                        <option>Career</option>
                        <option>Wellness</option>
                        <option>Tech</option>
                        <option>Life Skills</option>
                      </select>
                      <Button className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white rounded-full font-poppins">
                        Ask Question 💭
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Questions Feed */}
                <div className="space-y-6">
                  <h3 className="font-bold text-gray-800 font-poppins">Recent Questions</h3>
                  {askMentorQuestions.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <HelpCircle className="text-coral-500" size={20} />
                            <Badge className="bg-gray-100 text-gray-700 font-nunito">
                              {item.category}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-800 font-poppins mb-2">{item.question}</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MessageCircle size={16} className="mr-1" />
                            {item.answers} answers
                          </span>
                          <span className="flex items-center">
                            <Heart size={16} className="mr-1" />
                            {item.likes} likes
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full font-nunito">
                          View Answers
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};