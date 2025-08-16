import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { earlyAccessAPI } from "@/lib/early-access-api";
import { toast } from "sonner";
import { googleAuth } from "@/lib/google-auth";

const EarlyAccessSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  useEffect(() => {
    // Load waitlist stats
    const loadStats = async () => {
      const stats = await earlyAccessAPI.getWaitlistStats();
      setTotalSubscribers(stats.totalSubscribers);
    };
    loadStats();
  }, []);

  const handleEarlyAccess = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    setIsSubmitting(true);
    try {
      // Check if user already signed up
      const userExists = await earlyAccessAPI.hasUserSignedUp(email);
      if (userExists) {
        toast.error("You've already joined the waitlist with this email!");
        return;
      }

      const response = await earlyAccessAPI.submitEarlyAccess({
        email: email.trim(),
        fullName: fullName.trim(),
        source: 'early-access-section'
      });
      
      toast.success(response.message);
      setEmail("");
      setFullName("");
      
      if (response.waitlistPosition) {
        toast.success(`You're #${response.waitlistPosition} on the waitlist!`);
      }

      // Update subscriber count
      setTotalSubscribers(prev => prev + 1);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const user = await googleAuth.signIn();
      toast.success(`Welcome, ${user.firstName || user.name.split(' ')[0]}!`);
      
      // Auto-fill the form with Google user data
      setFullName(user.name);
      setEmail(user.email);
      
      // Automatically submit early access
      await handleEarlyAccess();
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      const errorMessage = error?.message || 'Failed to sign in with Google. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-background/10 backdrop-blur-sm border-border text-white placeholder:text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/10 backdrop-blur-sm border-border text-white placeholder:text-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleEarlyAccess()}
                />
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleEarlyAccess}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining Waitlist...' : 'Get Early Access'}
                </Button>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-sm text-gray-400">or</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <Button 
                  variant="google" 
                  size="lg" 
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                >
                  <Chrome className="w-5 h-5" />
                  {isGoogleLoading ? 'Signing in...' : 'Sign Up with Google'}
                </Button>
              </div>

             
                
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{totalSubscribers.toLocaleString()} people already joined</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            We respect your privacy. No spam,{" "}
            <Link
              to="/unsubscribe"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              unsubscribe
            </Link>{" "}
            at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
