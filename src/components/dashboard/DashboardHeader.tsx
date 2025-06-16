
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, LogOut, Crown, Sparkles } from 'lucide-react';

export const DashboardHeader = () => {
  const { profile, signOut } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getAffirmation = () => {
    const affirmations = [
      "You're amazing today! ✨",
      "You have the power to change the world! 🌟",
      "Your potential is limitless! 💫",
      "You're stronger than you know! 💪",
      "Today is full of possibilities for you! 🌈"
    ];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
  };

  return (
    <Card className="bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 text-white p-6 mb-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-6 w-6" />
            <h1 className="text-2xl font-bold">
              {getGreeting()}, {profile?.first_name || 'Beautiful'}!
            </h1>
            <Sparkles className="h-6 w-6" />
          </div>
          <p className="text-lg opacity-90 mb-4">{getAffirmation()}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              <span>Level {profile?.level || 1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>{profile?.total_points || 0} Points</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔥 {profile?.streak_days || 0} Day Streak</span>
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={signOut}
          className="text-white hover:bg-white/20"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </Card>
  );
};
