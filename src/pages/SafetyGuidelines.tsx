
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, AlertCircle, Users, Heart, Lock, Eye, MessageCircle } from 'lucide-react';

const SafetyGuidelines = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-lavender-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          <div className="flex items-center space-x-3">
            <Shield className="text-teal-500" size={32} />
            <h1 className="text-4xl font-bold font-poppins text-gray-800">Safety Guidelines</h1>
          </div>
        </div>

        {/* Safety Promise */}
        <Card className="border-0 shadow-xl mb-8 bg-gradient-to-r from-teal-100 to-lavender-100">
          <CardContent className="p-8 text-center">
            <Heart className="mx-auto mb-4 text-coral-500" size={48} />
            <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-4">Our Safety Promise</h2>
            <p className="text-lg font-nunito text-gray-700 max-w-2xl mx-auto">
              Every girl deserves a safe, supportive space to learn and grow. We've built Microme.ai with the highest 
              safety standards to ensure a positive, empowering experience for all our users.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Community Guidelines */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-coral-700">
                <Users className="mr-3" size={24} />
                Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-nunito text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-coral-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-coral-800 mb-3 flex items-center">
                    <Heart className="mr-2" size={20} />
                    Be Kind & Respectful
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Treat everyone with kindness and respect</li>
                    <li>Use encouraging and supportive language</li>
                    <li>Celebrate each other's achievements</li>
                    <li>Be inclusive and welcoming to all</li>
                  </ul>
                </div>
                
                <div className="bg-lavender-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-lavender-800 mb-3 flex items-center">
                    <Lock className="mr-2" size={20} />
                    Protect Your Privacy
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Never share personal information (address, phone, school)</li>
                    <li>Don't share social media accounts or contact details</li>
                    <li>Use your first name only in public spaces</li>
                    <li>Report anyone asking for personal information</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-teal-800 mb-3">What's Not Allowed</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Bullying, harassment, or mean comments</li>
                    <li>Sharing inappropriate content or images</li>
                    <li>Discussing harmful activities</li>
                    <li>Spam or promotional content</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Impersonating others</li>
                    <li>Using offensive language</li>
                    <li>Sharing personal contact information</li>
                    <li>Attempting to meet offline</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mentor Safety */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-lavender-700">
                <MessageCircle className="mr-3" size={24} />
                Mentor Interaction Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="bg-lavender-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-lavender-800 mb-4">Our Mentor Verification Process</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lavender-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h5 className="font-medium text-lavender-700 mb-1">Background Checks</h5>
                    <p className="text-xs">All mentors undergo thorough background verification</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="text-white" size={24} />
                    </div>
                    <h5 className="font-medium text-coral-700 mb-1">Session Monitoring</h5>
                    <p className="text-xs">All mentorship sessions are monitored for safety</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <h5 className="font-medium text-teal-700 mb-1">Parent Access</h5>
                    <p className="text-xs">Parents can view session summaries and feedback</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-coral-50 to-teal-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Safe Mentorship Practices</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All sessions are conducted through our platform only</li>
                  <li>Mentors are trained in appropriate communication with minors</li>
                  <li>Sessions focus on educational and career guidance</li>
                  <li>Parents receive session summaries and can request recordings</li>
                  <li>Emergency reporting system available during all sessions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Reporting System */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-coral-700">
                <AlertCircle className="mr-3" size={24} />
                Reporting & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="bg-coral-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-coral-800 mb-4">When to Report</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-coral-700 mb-2">Report Immediately If:</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Someone asks for personal information</li>
                      <li>You feel uncomfortable or unsafe</li>
                      <li>You see bullying or harassment</li>
                      <li>Someone shares inappropriate content</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-coral-700 mb-2">How to Report:</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Use the "Report" button on any post or message</li>
                      <li>Email safety@microme.ai</li>
                      <li>Tell a parent or guardian immediately</li>
                      <li>Use our 24/7 safety hotline</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-lavender-100 to-teal-100 p-6 rounded-2xl text-center">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">24/7 Safety Support</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <Badge className="bg-coral-500 text-white px-4 py-2">
                    📧 safety@microme.ai
                  </Badge>
                  <Badge className="bg-lavender-500 text-white px-4 py-2">
                    📞 +91-80-SAFE-GIRL
                  </Badge>
                  <Badge className="bg-teal-500 text-white px-4 py-2">
                    💬 In-app Safety Chat
                  </Badge>
                </div>
                <p className="text-sm mt-4 text-gray-600">
                  Our safety team responds to all reports within 15 minutes, 24/7
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Digital Wellness */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-teal-700">
                Digital Wellness Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nunito text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-teal-800 mb-3">Healthy Screen Time</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Take breaks every 30 minutes</li>
                    <li>Practice the 20-20-20 rule for eye health</li>
                    <li>Set daily learning time limits</li>
                    <li>Balance online learning with offline activities</li>
                  </ul>
                </div>
                
                <div className="bg-lavender-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-lavender-800 mb-3">Emotional Wellbeing</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>It's okay to take breaks from social features</li>
                    <li>Don't compare your progress to others</li>
                    <li>Celebrate your own achievements</li>
                    <li>Reach out for help when feeling overwhelmed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuidelines;
