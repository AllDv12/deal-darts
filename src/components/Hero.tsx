import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onExploreDeals: () => void;
}

export const Hero = ({ onExploreDeals }: HeroProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5 rounded-3xl"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        {/* Main Headline */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Live Deal Updates • Save up to 75%</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find The{" "}
            <span className="gradient-text animate-glow">
              Hottest Deals
            </span>
            {" "}Online
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover amazing discounts from Amazon, Walmart, eBay and more. 
            All verified deals in one place, updated every minute.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            className="hero-button text-lg px-8 py-4"
            onClick={onExploreDeals}
          >
            <span>Explore Deals</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 hover-lift"
          >
            <Shield className="w-5 h-5 mr-2" />
            How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              10,000+
            </div>
            <div className="text-muted-foreground">Active Deals</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              50+
            </div>
            <div className="text-muted-foreground">Partner Stores</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              24/7
            </div>
            <div className="text-muted-foreground">Real-time Updates</div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
              className="deal-card p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 text-white">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};