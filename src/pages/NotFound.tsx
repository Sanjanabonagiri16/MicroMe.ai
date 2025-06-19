
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { HomeButton } from "@/components/ui/HomeButton";
import { Sparkles, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      <HomeButton />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-50 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Sparkles className="text-white" size={48} />
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-scale-in">
            404
          </h1>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Oops! Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Looks like you've wandered into uncharted digital territory! 
            Let's get you back on track to your tech journey. ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform"
            >
              <Home className="mr-2" size={20} />
              Return Home
            </Button>
            
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg animate-fade-in" style={{animationDelay: '1.2s'}}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🌟 While you're here, did you know?
            </h3>
            <p className="text-gray-600">
              Microme.ai has helped over 50,000 girls master technology skills in 2025! 
              Join our community and start building your future today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
