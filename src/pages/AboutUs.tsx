import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Brain, Globe, Target, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're reimagining the way people learn — making every lesson feel as natural, engaging, and personal as a real conversation.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make high-quality, personalized learning accessible to anyone, anywhere, at any time. We believe education should adapt to you — your pace, your style, your goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're harnessing cutting-edge AI, WebRTC streaming, and intuitive design to make that happen.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8" />
                    <h3 className="text-xl font-semibold">Personalized Learning</h3>
                  </div>
                  <p className="text-blue-100">
                    Every student gets a unique learning experience tailored to their needs and preferences.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* What We're Building */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 shadow-xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What We're Building</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                An AI-powered, real-time tutoring platform designed to connect learners and educators in immersive, interactive environments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Access</h3>
                <p className="text-gray-600">
                  Connect with expert educators from around the world, breaking down geographical barriers to quality education.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence that adapts to your learning style and provides personalized guidance.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-Time Interaction</h3>
                <p className="text-gray-600">
                  Instant voice, video, and collaborative tools that make learning feel like a natural conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Areas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Can Learn</h2>
              <p className="text-xl text-gray-600">
                Whether it's mastering a new language, solving complex equations, or exploring creative skills, Tuittor brings expertise to your screen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🗣️", title: "Languages", desc: "Master new languages with native speakers" },
                { icon: "🧮", title: "Mathematics", desc: "Solve complex equations step by step" },
                { icon: "🎨", title: "Creative Skills", desc: "Explore art, music, and design" },
                { icon: "💻", title: "Technology", desc: "Learn coding and digital skills" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promise Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8" />
              <h2 className="text-3xl font-bold">The Tuittor Promise</h2>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              With Tuittor, you're not just getting answers; you're getting understanding, mentorship, and a learning experience you'll actually look forward to.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Learn Faster</h3>
                <p className="text-blue-100">Accelerate your learning with AI-powered insights</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Understand Deeper</h3>
                <p className="text-blue-100">Gain true comprehension, not just memorization</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Connect Better</h3>
                <p className="text-blue-100">Build meaningful relationships with educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are already experiencing the future of education.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
