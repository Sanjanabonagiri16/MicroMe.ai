
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/home')}
      className="fixed top-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform animate-fade-in"
      size="sm"
    >
      <Home size={20} />
      <span className="ml-2 hidden md:inline">Home</span>
    </Button>
  );
};
