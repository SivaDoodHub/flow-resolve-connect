import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  BarChart3,
  Shield,
  Smartphone
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "60-70% Faster Resolution",
    description: "Dramatically reduce complaint resolution time through automated workflows",
    metric: "Average resolution time reduced from days to hours",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Improved Citizen Satisfaction",
    description: "Enhanced transparency and communication lead to higher public trust",
    metric: "85% increase in citizen satisfaction scores",
    color: "text-secondary"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Management",
    description: "Better resource allocation and reduced administrative overhead",
    metric: "30% reduction in operational costs",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Proactive maintenance planning with comprehensive analytics",
    metric: "Real-time performance monitoring",
    color: "text-infrastructure-green"
  },
  {
    icon: Shield,
    title: "Enhanced Accountability",
    description: "Complete audit trail and performance tracking across all levels",
    metric: "100% traceable complaint lifecycle",
    color: "text-civic-blue"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for mobile devices with responsive design for all users",
    metric: "Works seamlessly on all devices",
    color: "text-primary-glow"
  }
];

const stats = [
  { 
    icon: TrendingDown, 
    value: "70%", 
    label: "Reduction in Response Time",
    color: "text-primary"
  },
  { 
    icon: Users, 
    value: "3-in-1", 
    label: "Integrated User Platform",
    color: "text-secondary"
  },
  { 
    icon: BarChart3, 
    value: "Real-time", 
    label: "Performance Analytics",
    color: "text-accent"
  },
  { 
    icon: Shield, 
    value: "100%", 
    label: "Secure & Reliable",
    color: "text-infrastructure-green"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Measurable Impact
            <span className="block text-primary">Across All Metrics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Smart Drainage Management System delivers quantifiable improvements 
            in efficiency, cost savings, and user satisfaction.
          </p>
        </div>
        
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <div className="mx-auto mb-4 p-3 bg-gradient-card rounded-full shadow-feature w-fit">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group bg-card border-0 shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="mb-4 p-4 bg-gradient-card rounded-full shadow-feature w-fit">
                    <benefit.icon className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className={`text-sm font-semibold ${benefit.color} bg-gradient-card px-3 py-2 rounded-full inline-block`}>
                    {benefit.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Transform Your Municipal Services Today
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join forward-thinking municipalities already using SDMS to improve their infrastructure management 
              and deliver better services to their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;