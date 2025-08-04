import { Heart, Mail, Globe, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border mt-20">      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold gradient-text">Deal Darts</h3>
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
              <li>
                <Link 
                  to="/hot-deals" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hot Deals
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  to="/top-brands" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Top Brands
                </Link>
              </li>
              <li>
                <Link 
                  to="/price-tracker" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Price Tracker
                </Link>
              </li>
              <li>
                <Link 
                  to="/deal-alerts" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Deal Alerts
                </Link>
              </li>
            </ul>
          </div>
            {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {["Electronics", "Fashion", "Home & Garden", "Sports", "Beauty"].map(category => (
                <li key={category}>
                  <Link 
                    to={`/categories?category=${category}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-us" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
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

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border text-sm text-muted-foreground">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© {currentYear} Deal Darts. All rights reserved.</span>
          </div>
            <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="hover:text-primary transition-colors">
              Contact Us
            </Link>          </div>
        </div>
      </div>
    </footer>
  );
};