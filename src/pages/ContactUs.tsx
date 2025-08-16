import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with our team for support, feedback, or any questions about Tuittor.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Email Contact Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Email Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                For now, email is the most effective way to reach our team. We respond quickly and are here to help!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">hello@tuittor.com</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:hello@tuittor.com" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-600">
                We typically respond within 24 hours, often much sooner. Your message is important to us!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Personal Support</h3>
              </div>
              <p className="text-gray-600">
                Get direct help from our team. We're here to assist with any questions or concerns you may have.
              </p>
            </div>
          </div>

          {/* What We Can Help With */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-lg text-gray-600">
                We're here to support you with any questions about Tuittor and your learning journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🤝",
                  title: "Account Support",
                  desc: "Help with sign-up, login, or account management"
                },
                {
                  icon: "💡",
                  title: "Feature Questions",
                  desc: "Learn more about our AI-powered learning features"
                },
                {
                  icon: "🐛",
                  title: "Technical Issues",
                  desc: "Report bugs or get help with technical problems"
                },
                {
                  icon: "💭",
                  title: "Feedback",
                  desc: "Share your thoughts and suggestions with us"
                },
                {
                  icon: "📚",
                  title: "Learning Help",
                  desc: "Get guidance on how to make the most of Tuittor"
                },
                {
                  icon: "💼",
                  title: "Partnership",
                  desc: "Inquire about educational partnerships or collaborations"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How quickly do you respond to emails?",
                  a: "We typically respond within 24 hours, and often much sooner during business hours."
                },
                {
                  q: "Can I get help with my learning progress?",
                  a: "Absolutely! We're here to help you make the most of your learning experience on Tuittor."
                },
                {
                  q: "What if I have a technical issue?",
                  a: "Email us with details about the issue, and we'll help you resolve it quickly."
                },
                {
                  q: "Do you offer support for educators?",
                  a: "Yes! We provide support for both learners and educators using our platform."
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have a question or need help? Don't hesitate to reach out. We're here to support your learning journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@tuittor.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                Send Us an Email
              </a>
              <Link to="/">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
