import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  onExploreDeals: () => void;
}

export const Hero = ({ onExploreDeals }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Simple, elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/40 to-background/80"></div>
      </div>
      
      {/* Subtle accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      {/* Content container */}
      <div className={`relative container mx-auto px-4 z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag line */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 border border-card-border rounded-full text-primary text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Live Deal Updates • Save up to 75%</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Find The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hottest Deals
            </span>
            {" "}Online
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Discover amazing discounts from Amazon, Walmart, eBay and more. 
            All verified deals in one place, updated every minute.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={onExploreDeals}
            >
              <span>Explore Deals</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 rounded-xl hover:bg-card/50 hover:shadow-md transition-all backdrop-blur-sm"
              asChild
            >
              <Link to="/how-it-works">
                <Shield className="w-5 h-5 mr-2" />
                <span>How It Works</span>
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto border-t border-card-border pt-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">10,000+</div>
              <div className="text-muted-foreground">Active Deals</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">50+</div>
              <div className="text-muted-foreground">Partner Stores</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">24/7</div>
              <div className="text-muted-foreground">Real-time Updates</div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Get the latest deals instantly with our real-time updates"
            },
            {
              icon: Shield,
              title: "Verified Deals",
              description: "All deals are verified and checked for authenticity"
            },
            {
              icon: TrendingUp,
              title: "Best Prices",
              description: "Compare prices across multiple stores to find the best deals"
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card/40 backdrop-blur-sm border border-card-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-secondary p-3 text-white shadow-md">
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};