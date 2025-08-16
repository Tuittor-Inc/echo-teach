import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsUnsubscribed(true);
      toast.success("Successfully unsubscribed from Tuittor emails");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer">Tuittor</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Unsubscribe
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're sorry to see you go! Enter your email address below to unsubscribe from Tuittor emails.
            </p>
          </div>

          {/* Unsubscribe Form */}
          {!isUnsubscribed ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsubscribe from Emails</h2>
                <p className="text-gray-600">
                  You'll no longer receive updates about new features, learning tips, and announcements.
                </p>
              </div>

              <form onSubmit={handleUnsubscribe} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-yellow-800 mb-1">Before you go...</h3>
                      <p className="text-sm text-yellow-700">
                        You can always resubscribe later by signing up again or contacting us at{" "}
                        <a href="mailto:hello@tuittor.com" className="underline hover:text-yellow-800">
                          hello@tuittor.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                >
                  {isSubmitting ? "Unsubscribing..." : "Unsubscribe"}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Changed your mind?{" "}
                  <Link to="/" className="text-blue-600 hover:text-blue-700 underline">
                    Return to Tuittor
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Successfully Unsubscribed</h2>
              <p className="text-gray-600 mb-8">
                You have been unsubscribed from Tuittor emails. We'll miss you, but you're always welcome back!
              </p>
              
              <div className="space-y-4">
                <Link to="/">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Return to Tuittor
                  </Button>
                </Link>
                
                <p className="text-sm text-gray-500">
                  Want to resubscribe? Just{" "}
                  <a href="mailto:hello@tuittor.com" className="text-blue-600 hover:text-blue-700 underline">
                    email us
                  </a>{" "}
                  or sign up again on our homepage.
                </p>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>You'll stop receiving marketing emails and newsletters from Tuittor</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Your account and learning progress will remain intact</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>You can resubscribe anytime by contacting us or signing up again</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Important account-related emails may still be sent if necessary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
