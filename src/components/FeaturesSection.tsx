import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  MapPin, 
  Users, 
  Smartphone, 
  BarChart3, 
  Clock,
  Camera,
  Navigation,
  Bell,
  Shield
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Citizen Complaint Portal",
    description: "Easy reporting with photo/video upload, GPS location tagging, and real-time tracking",
    color: "text-primary"
  },
  {
    icon: MapPin,
    title: "Intelligent Request Routing",
    description: "Automatic assignment to appropriate authorities based on location and priority",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Authority Dashboard",
    description: "Comprehensive management interface with analytics and performance monitoring",
    color: "text-accent"
  },
  {
    icon: Smartphone,
    title: "Field Worker Mobile App",
    description: "GPS navigation, real-time updates, and digital documentation tools",
    color: "text-infrastructure-green"
  },
  {
    icon: Navigation,
    title: "Integrated Mapping System",
    description: "Interactive maps with status indicators, heat maps, and maintenance history",
    color: "text-civic-blue"
  },
  {
    icon: Bell,
    title: "Direct Communication",
    description: "In-app messaging, SMS/email notifications, and multi-language support",
    color: "text-primary-glow"
  }
];

const additionalFeatures = [
  { icon: Camera, text: "Photo Documentation" },
  { icon: Clock, text: "Real-time Tracking" },
  { icon: Shield, text: "Secure & Reliable" },
  { icon: Users, text: "Multi-role Access" }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Features for
            <span className="block text-primary">Every Stakeholder</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From complaint registration to resolution, our platform provides everything needed 
            for efficient drainage management across all user roles.
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-card rounded-full shadow-feature">
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-lg md:text-xl font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Features Banner */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-hover">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-8">
            Built with Advanced Technology
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {additionalFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-primary-foreground/20 p-3 rounded-full mb-3">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/90 text-sm font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          
          <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;