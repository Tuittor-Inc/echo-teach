import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome, Sparkles } from "lucide-react";

const EarlyAccessSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Limited Early Access</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Be the First to Try</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist for exclusive early access and be among the first to experience the future of AI-powered education.
          </p>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Full name" 
                  className="bg-background/10 backdrop-blur-sm border-border text-white placeholder:text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-background/10 backdrop-blur-sm border-border text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-4">
                <Button variant="google" size="lg" className="w-full">
                  <Chrome className="w-5 h-5" />
                  Sign Up with Google
                </Button>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-sm text-gray-400">or</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Get Early Access
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>1,247 people already joined</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            We respect your privacy. No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;