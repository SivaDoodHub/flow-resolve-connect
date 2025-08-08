import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Building2, 
  HardHat,
  CheckCircle,
  Clock,
  MapPin,
  BarChart3,
  Smartphone,
  MessageSquare
} from "lucide-react";

const userRoles = [
  {
    icon: User,
    title: "Citizens",
    subtitle: "Report & Track Issues",
    description: "Easy complaint registration without bureaucratic hassles",
    benefits: [
      "Quick issue reporting with GPS location",
      "Real-time status tracking",
      "Photo/video evidence upload",
      "Direct communication with authorities",
      "Transparent resolution process"
    ],
    color: "text-primary",
    bgGradient: "from-primary/10 to-primary-glow/10",
    buttonVariant: "default" as const
  },
  {
    icon: Building2,
    title: "Authorities",
    subtitle: "Manage & Monitor",
    description: "Centralized complaint management with data-driven insights",
    benefits: [
      "Jurisdiction-based complaint routing",
      "Performance analytics dashboard",
      "Resource allocation tools",
      "Budget tracking capabilities",
      "Automated escalation system"
    ],
    color: "text-secondary",
    bgGradient: "from-secondary/10 to-secondary/20",
    buttonVariant: "secondary" as const
  },
  {
    icon: HardHat,
    title: "Field Workers",
    subtitle: "Execute & Document",
    description: "Mobile tools for efficient on-ground maintenance work",
    benefits: [
      "GPS navigation to complaint sites",
      "Real-time status updates",
      "Digital work documentation",
      "Material and time tracking",
      "Performance recognition system"
    ],
    color: "text-accent",
    bgGradient: "from-accent/10 to-infrastructure-green/10",
    buttonVariant: "feature" as const
  }
];

const UserRolesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Designed for
            <span className="block text-primary">Every User</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform serves three key user groups, each with tailored interfaces 
            and features designed for their specific needs and workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {userRoles.map((role, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${role.bgGradient} border-0 shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105`}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-6 bg-card rounded-full shadow-feature">
                  <role.icon className={`w-12 h-12 ${role.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {role.title}
                </CardTitle>
                <p className={`text-lg font-semibold ${role.color}`}>
                  {role.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {role.description}
                </p>
                
                <div className="space-y-3">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant={role.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-hero opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-feature opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-hover">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Drainage Management?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join the digital revolution in municipal infrastructure management and 
              deliver better services to your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRolesSection;