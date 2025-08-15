import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome } from "lucide-react";
import heroBackground from "@/assets/colorful_wraps-wide.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col relative overflow-hidden pt-8"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-2xl font-bold gradient-text">tuittor</h2>
      </div>
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
        <div className="max-w-4xl mx-auto animate-fade-in  pt:6 sm:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Learn Smarter.</span>{" "}
            <span className="text-white">Live.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience real-time teaching that feels human — powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <Button variant="google" size="lg" className="w-full sm:w-auto flex items-center gap-3">
              <Chrome className="w-5 h-5" />
              Sign Up with Google
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

          <p className="text-sm text-gray-400 mt-6">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
