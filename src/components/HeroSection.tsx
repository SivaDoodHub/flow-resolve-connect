import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drainage.jpg";
import { ArrowRight, MapPin, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Smart drainage infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Drainage
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Management System
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Streamline drainage maintenance and complaint resolution through automated workflow management, 
            connecting citizens directly with authorities and field workers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-base px-6 py-3">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-6 py-3 bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/40 hover:bg-primary-foreground/30 hover:border-primary-foreground/60">
              Schedule Demo
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center animate-float">
              <div className="bg-primary-foreground/20 p-4 rounded-full mb-3">
                <Zap className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">60-70%</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Faster Resolution</div>
            </div>
            
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary-foreground/20 p-4 rounded-full mb-3">
                <Users className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">3 Roles</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Integrated Platform</div>
            </div>
            
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary-foreground/20 p-4 rounded-full mb-3">
                <MapPin className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">Real-time</div>
              <div className="text-sm md:text-base text-primary-foreground/80">GPS Tracking</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;