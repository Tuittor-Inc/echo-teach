import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome } from "lucide-react";
import heroBackground from "@/assets/hero2-bg.jpg";
import { useState } from "react";
import { googleAuth } from "@/lib/google-auth";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser, setLoading } from "@/redux/slices/userSlice";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.user);

  const handleGoogleSignIn = async () => {
    dispatch(setLoading(true));
    try {
      const user = await googleAuth.signIn();
      dispatch(setUser(user));
      toast.success(`Welcome, ${user.firstName || user.name.split(' ')[0]}!`);
      console.log('Signed in user:', user);
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      const errorMessage = error?.message || 'Failed to sign in with Google. Please try again.';
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col relative overflow-hidden pt-8"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.84), rgba(0,0,0,0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-2xl font-bold gradient-text">Tuittor</h2>
      </div>
      
      {/* User Profile - Top Right */}
      <UserProfile />
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 animate-gradient animate-gradient-shift"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-pink rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-blue rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-neon-orange rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto animate-fade-in pt-4 sm:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Learn Smarter.</span>{" "}
            <span className="text-white">Live.</span>
          </h1>
          
          <p className="text-xl md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience real-time teaching that feels human — Powered by AI.
          </p>

          {!isAuthenticated && (
            <>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
                <Button 
                  variant="google" 
                  size="lg" 
                  className="w-full sm:w-auto flex items-center gap-3"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  <Chrome className="w-5 h-5" />
                  {isLoading ? 'Signing in...' : 'Sign Up with Google'}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background/10 backdrop-blur-sm border-border text-white placeholder:text-gray-400"
                />
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Early Access
                </Button>
              </div>

               <p className="text-xs text-gray-400 mt-4 text-center">
                 By signing up, you agree to our{" "}
                 <Link 
                   to="/terms" 
                   className="text-blue-400 hover:text-blue-300 underline"
                 >
                   Terms & Conditions
                 </Link>
               </p>
            </>
          )}

          {isAuthenticated && (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Welcome to Tuittor!
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                You're all set! Start exploring our AI-powered learning platform.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
