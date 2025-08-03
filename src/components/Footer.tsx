import { Heart, Mail, Globe, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold gradient-text">HotDeals</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your trusted partner for finding the best deals online. Save time and money with our curated collection of verified discounts.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="hover-lift">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Hot Deals",
                "Categories", 
                "Top Brands",
                "Price Tracker",
                "Deal Alerts"
              ].map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Electronics",
                "Fashion",
                "Home & Garden",
                "Sports",
                "Beauty"
              ].map(category => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest deals delivered to your inbox daily.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="text-sm"
              />
              <Button className="w-full hero-button text-sm">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Partner Stores */}
        <div className="py-8 border-t border-card-border">
          <h4 className="text-center font-semibold mb-6 text-muted-foreground">
            Trusted Partner Stores
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              "Amazon", "Walmart", "eBay", "Target", "Best Buy", 
              "Costco", "Home Depot", "Macy's"
            ].map(store => (
              <div 
                key={store}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {store}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border text-sm text-muted-foreground">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© {currentYear} HotDeals. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 pt-6 border-t border-card-border">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-destructive fill-current" /> for deal hunters worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};