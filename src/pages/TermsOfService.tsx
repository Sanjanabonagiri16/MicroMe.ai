
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Users, Shield, AlertCircle, Heart } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-teal-50">
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
            <FileText className="text-coral-500" size={32} />
            <h1 className="text-4xl font-bold font-poppins text-gray-800">Terms of Service</h1>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mb-8 p-4 bg-coral-100 rounded-2xl">
          <p className="text-sm text-gray-600 font-nunito">
            <strong>Last Updated:</strong> December 16, 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Welcome */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-coral-700">
                <Heart className="mr-3" size={24} />
                Welcome to Microme.ai
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <p>
                Welcome to Microme.ai, a platform dedicated to empowering young girls through education, mentorship, 
                and personal development. By using our services, you agree to these Terms of Service.
              </p>
              <p>
                These terms are designed to create a safe, respectful, and empowering environment for all our users, 
                with special considerations for the safety and wellbeing of minors.
              </p>
            </CardContent>
          </Card>

          {/* Age Requirements */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-teal-700">
                <Users className="mr-3" size={24} />
                Age Requirements & Parental Consent
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="bg-teal-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-teal-800 mb-3">User Age Categories</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-coral-400 pl-4">
                    <h5 className="font-medium text-coral-700">Ages 13 and above</h5>
                    <p className="text-sm">Can create accounts with parental notification and oversight dashboard access for parents</p>
                  </div>
                  <div className="border-l-4 border-lavender-400 pl-4">
                    <h5 className="font-medium text-lavender-700">Ages 10-12</h5>
                    <p className="text-sm">Require explicit parental consent and active parental supervision</p>
                  </div>
                  <div className="border-l-4 border-teal-400 pl-4">
                    <h5 className="font-medium text-teal-700">Under 10</h5>
                    <p className="text-sm">Must use the platform with direct parental guidance and account management</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Usage */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-lavender-700">
                <Shield className="mr-3" size={24} />
                Platform Usage Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-nunito text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Acceptable Use</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-lavender-50 p-6 rounded-2xl">
                    <h5 className="font-medium text-lavender-700 mb-2">Educational Activities</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Complete courses and learning modules</li>
                      <li>Participate in educational discussions</li>
                      <li>Share learning achievements and progress</li>
                      <li>Engage with mentors for guidance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-coral-50 p-6 rounded-2xl">
                    <h5 className="font-medium text-coral-700 mb-2">Community Participation</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Share inspiring stories and achievements</li>
                      <li>Support and encourage other users</li>
                      <li>Participate in moderated discussions</li>
                      <li>Use wellness and journaling tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-red-800 mb-3 flex items-center">
                  <AlertCircle className="mr-2" size={20} />
                  Prohibited Activities
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-4 space-y-1 text-sm text-red-700">
                    <li>Sharing personal contact information</li>
                    <li>Arranging offline meetings</li>
                    <li>Bullying, harassment, or discriminatory behavior</li>
                    <li>Sharing inappropriate content</li>
                  </ul>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-red-700">
                    <li>Impersonating others</li>
                    <li>Spamming or promotional activities</li>
                    <li>Attempting to bypass safety measures</li>
                    <li>Using the platform for commercial purposes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mentorship Terms */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-coral-700">
                Mentorship Program Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="bg-coral-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-coral-800 mb-3">Mentor Standards</h4>
                <p className="mb-4">All mentors on our platform are required to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Complete thorough background verification</li>
                  <li>Undergo training on appropriate communication with minors</li>
                  <li>Maintain professional boundaries at all times</li>
                  <li>Report any concerning behavior or safety issues</li>
                  <li>Provide session summaries to parents when requested</li>
                </ul>
              </div>

              <div className="bg-lavender-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-lavender-800 mb-3">Session Guidelines</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All sessions are conducted through our secure platform</li>
                  <li>Sessions are monitored and may be recorded for safety</li>
                  <li>Focus remains on educational and career guidance</li>
                  <li>Personal topics are discussed only within appropriate bounds</li>
                  <li>Emergency support is available during all sessions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Account Management */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-teal-700">
                Account Management & Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-teal-800 mb-3">User Responsibilities</h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Provide accurate information during registration</li>
                    <li>Keep login credentials secure</li>
                    <li>Inform parents of account activities</li>
                    <li>Report suspicious behavior immediately</li>
                    <li>Follow all community guidelines</li>
                  </ul>
                </div>
                
                <div className="bg-lavender-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-lavender-800 mb-3">Platform Rights</h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Monitor platform usage for safety</li>
                    <li>Remove inappropriate content</li>
                    <li>Suspend accounts that violate terms</li>
                    <li>Update safety measures as needed</li>
                    <li>Improve services based on usage data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-coral-700">
                Questions About These Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nunito text-gray-700">
              <div className="bg-gradient-to-r from-coral-50 to-lavender-50 p-6 rounded-2xl">
                <p className="mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@microme.ai</p>
                  <p><strong>Phone:</strong> +91-80-MICROME (642-7663)</p>
                  <p><strong>Address:</strong> Koramangala, Bangalore, India 560034</p>
                </div>
                <p className="mt-4 text-sm">
                  By continuing to use Microme.ai, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
