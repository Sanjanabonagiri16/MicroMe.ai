
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Heart, Sparkles, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type UserRole = 'girl' | 'mentor' | 'parent_guardian';

export const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    role: 'girl' as UserRole,
    parentEmail: '',
    interests: [] as string[],
  });
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const { toast } = useToast();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const interestOptions = [
    'Art & Creativity', 'Technology', 'Sports', 'Music', 'Reading', 
    'Leadership', 'Science', 'Fashion', 'Cooking', 'Photography'
  ];

  // Redirect authenticated users to home
  useEffect(() => {
    if (!loading && user) {
      navigate('/home');
    }
  }, [user, loading, navigate]);

  // Don't render if still loading or user is authenticated
  if (loading || user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!signUpData.email || !signUpData.password || !signUpData.firstName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate parent email for underage users
    if (parseInt(signUpData.age) < 18 && !signUpData.parentEmail) {
      toast({
        title: "Parent Email Required",
        description: "Users under 18 need parental consent. Please provide a parent's email.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      console.log('Starting signup process...', {
        email: signUpData.email,
        firstName: signUpData.firstName,
        role: signUpData.role,
        age: signUpData.age
      });

      const { error } = await supabase.auth.signUp({
        email: signUpData.email,
        password: signUpData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/home`,
          data: {
            first_name: signUpData.firstName,
            last_name: signUpData.lastName || '',
            role: signUpData.role,
            age: signUpData.age,
            parent_email: signUpData.parentEmail || null,
            interests: JSON.stringify(signUpData.interests),
          }
        }
      });

      if (error) {
        console.error('Signup error:', error);
        throw error;
      }

      console.log('Signup successful!');
      
      toast({
        title: "Welcome to Microme.ai! 🌟",
        description: "Please check your email to verify your account, then sign in.",
      });

      // Clear form and switch to sign in tab
      setSignUpData({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        role: 'girl',
        parentEmail: '',
        interests: [],
      });

    } catch (error: any) {
      console.error('Signup failed:', error);
      toast({
        title: "Sign Up Failed",
        description: error.message || "An unexpected error occurred during signup.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Starting signin process...', { email: signInData.email });

      const { error } = await supabase.auth.signInWithPassword({
        email: signInData.email,
        password: signInData.password,
      });

      if (error) {
        console.error('Signin error:', error);
        throw error;
      }

      console.log('Signin successful!');
      
      toast({
        title: "Welcome back! ✨",
        description: "You're successfully logged in.",
      });

    } catch (error: any) {
      console.error('Signin failed:', error);
      toast({
        title: "Sign In Failed",
        description: error.message || "Invalid login credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setSignUpData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Microme.ai
            </h1>
            <Sparkles className="h-8 w-8 text-teal-500" />
          </div>
          <p className="text-gray-600">Empowering girls, one dream at a time</p>
        </div>

        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">Join Our Community</CardTitle>
            <CardDescription>Your journey of empowerment starts here</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
              </TabsList>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={signUpData.firstName}
                        onChange={(e) => setSignUpData({...signUpData, firstName: e.target.value})}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={signUpData.lastName}
                        onChange={(e) => setSignUpData({...signUpData, lastName: e.target.value})}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                      required
                      placeholder="Create a password"
                      minLength={6}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="10"
                        max="25"
                        value={signUpData.age}
                        onChange={(e) => setSignUpData({...signUpData, age: e.target.value})}
                        required
                        placeholder="Your age"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">I am a... *</Label>
                      <Select value={signUpData.role} onValueChange={(value: UserRole) => setSignUpData({...signUpData, role: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="girl">Girl (10-22)</SelectItem>
                          <SelectItem value="mentor">Mentor</SelectItem>
                          <SelectItem value="parent_guardian">Parent/Guardian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {parseInt(signUpData.age) < 18 && (
                    <div>
                      <Label htmlFor="parentEmail">Parent's Email (Required for under 18) *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={signUpData.parentEmail}
                        onChange={(e) => setSignUpData({...signUpData, parentEmail: e.target.value})}
                        required
                        placeholder="Parent's email address"
                      />
                    </div>
                  )}

                  {signUpData.role === 'girl' && (
                    <div>
                      <Label>Your Interests (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={signUpData.interests.includes(interest)}
                              onCheckedChange={() => toggleInterest(interest)}
                            />
                            <Label htmlFor={interest} className="text-sm">{interest}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Join Microme.ai ✨"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={signInData.email}
                      onChange={(e) => setSignInData({...signInData, email: e.target.value})}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={signInData.password}
                      onChange={(e) => setSignInData({...signInData, password: e.target.value})}
                      required
                      placeholder="Enter your password"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Welcome Back! 💫"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Your data is safe and secure with us</span>
        </div>
      </div>
    </div>
  );
};
