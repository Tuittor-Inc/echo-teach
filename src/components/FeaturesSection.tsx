import { Mic, Share2, Play, Users } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Instant Voice & Text",
    description: "Get immediate responses through natural conversation, just like talking to a human tutor.",
    gradient: "from-neon-pink to-neon-purple"
  },
  {
    icon: Share2,
    title: "Zoom-like Interface",
    description: "Familiar video conference experience with screen sharing and interactive whiteboards.",
    gradient: "from-neon-purple to-neon-blue"
  },
  {
    icon: Play,
    title: "Visual Explanations",
    description: "Watch concepts come to life with animations, diagrams, and step-by-step breakdowns.",
    gradient: "from-neon-blue to-neon-orange"
  },
  {
    icon: Users,
    title: "Teaching Personas",
    description: "Choose from different AI tutors, each with unique teaching styles and personalities.",
    gradient: "from-neon-orange to-neon-pink"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--neon-pink)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--neon-purple)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Key Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology that makes learning feel natural and engaging
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-neon hover:-translate-y-2">
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;