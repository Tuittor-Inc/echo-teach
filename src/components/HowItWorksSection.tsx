import { Video, MessageCircle, Lightbulb, PenTool } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Join a Live Session",
    description: "Connect to a live AI tutoring session — just like Zoom.",
    color: "text-neon-pink"
  },
  {
    icon: MessageCircle,
    title: "Talk & Ask Questions",
    description: "Speak naturally and see concepts explained instantly.",
    color: "text-neon-purple"
  },
  {
    icon: PenTool,
    title: "Learn Interactively",
    description: "Experience voice, video, and visual explanations together.",
    color: "text-neon-blue"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started with AI tutoring in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-soft">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-background/10 mb-6 ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="bg-primary/20 text-primary text-sm font-bold px-3 py-1 rounded-full mb-4">
                    Step {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;