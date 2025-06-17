
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users, Heart } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-coral-50">
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
            <Shield className="text-coral-500" size={32} />
            <h1 className="text-4xl font-bold font-poppins text-gray-800">Privacy Policy</h1>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mb-8 p-4 bg-lavender-100 rounded-2xl">
          <p className="text-sm text-gray-600 font-nunito">
            <strong>Last Updated:</strong> December 16, 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-coral-700">
                <Heart className="mr-3" size={24} />
                Our Commitment to Your Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <p>
                At Microme.ai, we are deeply committed to protecting the privacy and safety of young girls and their families. 
                This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
              </p>
              <p>
                We understand the special responsibility we have when providing services to minors, and we've designed our 
                privacy practices with safety, transparency, and parental involvement at the forefront.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-teal-700">
                <Eye className="mr-3" size={24} />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-nunito text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Account Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>First and last name</li>
                  <li>Age (to ensure appropriate content)</li>
                  <li>Email address (with parental consent for users under 13)</li>
                  <li>Parent/guardian email for users under 18</li>
                  <li>Language preferences and interests</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Learning Data</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Course progress and completion status</li>
                  <li>Quiz scores and learning achievements</li>
                  <li>Time spent on educational activities</li>
                  <li>Skill assessments and badges earned</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Wellness Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mood journal entries (anonymized)</li>
                  <li>Wellness activity participation</li>
                  <li>Health tracking data (if provided voluntarily)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-lavender-700">
                <Users className="mr-3" size={24} />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-coral-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-coral-800 mb-3">Educational Purposes</h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Personalize learning experiences</li>
                    <li>Track educational progress</li>
                    <li>Recommend appropriate content</li>
                    <li>Provide certificates and badges</li>
                  </ul>
                </div>
                
                <div className="bg-lavender-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-lg text-lavender-800 mb-3">Safety & Support</h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Ensure age-appropriate content</li>
                    <li>Monitor for inappropriate behavior</li>
                    <li>Provide mental health resources</li>
                    <li>Enable parental oversight</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-poppins text-teal-700">
                <Lock className="mr-3" size={24} />
                Data Protection & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <div className="bg-teal-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-teal-800 mb-4">Our Security Measures</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-teal-700 mb-2">Technical Safeguards</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>End-to-end encryption</li>
                      <li>Secure data transmission</li>
                      <li>Regular security audits</li>
                      <li>Access controls and monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-teal-700 mb-2">Privacy Controls</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Data minimization practices</li>
                      <li>Anonymous community features</li>
                      <li>Parental consent mechanisms</li>
                      <li>Right to data deletion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parental Rights */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-coral-700">
                Parental Rights & Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-nunito text-gray-700">
              <p>
                We believe parents and guardians should have full visibility and control over their child's online experience:
              </p>
              <div className="bg-coral-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-lg text-coral-800 mb-3">Parent Dashboard Features</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View your child's learning progress and achievements</li>
                  <li>Monitor mentorship interactions and session summaries</li>
                  <li>Control privacy settings and data sharing preferences</li>
                  <li>Request data deletion or account deactivation</li>
                  <li>Receive weekly progress reports via email</li>
                  <li>Set time limits and content restrictions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-lavender-700">
                Contact Us About Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nunito text-gray-700">
              <div className="bg-lavender-50 p-6 rounded-2xl">
                <p className="mb-4">
                  If you have questions about this Privacy Policy or your data rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@microme.ai</p>
                  <p><strong>Phone:</strong> +91-80-MICROME (642-7663)</p>
                  <p><strong>Address:</strong> Koramangala, Bangalore, India 560034</p>
                </div>
                <p className="mt-4 text-sm">
                  We are committed to responding to all privacy inquiries within 48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
