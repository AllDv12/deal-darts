import { Search, Heart, Flame, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useBookmarks } from "@/hooks/use-bookmarks";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onMenuClick: () => void;
  dealsCount: number;
}

export const Header = ({ searchTerm, onSearchChange, onMenuClick, dealsCount }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { bookmarkedProducts } = useBookmarks();
    const navLinks = [
    { path: "/hot-deals", label: "Hot Deals" },
    { path: "/categories", label: "Categories" },
    { path: "/top-brands", label: "Top Brands" },
    { path: "/price-tracker", label: "Price Tracker" },
    { path: "/deal-alerts", label: "Deal Alerts" },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-card-border shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-3 animate-slide-right">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white animate-float">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Deal Darts</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="animate-pulse">🔥</span>
                <span>{dealsCount} hot deals today</span>
              </div>
            </div>
          </Link>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-1 animate-slide-up">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent ${
                  location.pathname === link.path ? 'font-medium text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative animate-slide-up hidden sm:block" style={{ animationDelay: '0.2s' }}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for products, brands, or categories..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-bar pl-12 transition-all duration-300 focus:shadow-md focus:scale-105"
            />
          </div>          {/* Actions */}
          <div className="flex items-center gap-2 animate-slide-left">
            <Button 
              variant="outline" 
              size="icon" 
              className="hover-lift transition-all hover:shadow-md hover:bg-card relative"
              asChild
            >
              <Link to="/bookmarks">
                <Heart className="w-4 h-4" />
                {bookmarkedProducts.size > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {bookmarkedProducts.size > 9 ? '9+' : bookmarkedProducts.size}
                  </span>
                )}
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="icon"
              className="md:hidden hover-lift transition-all hover:shadow-md hover:bg-card"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-3 sm:hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-accent/50 font-medium text-foreground' 
                      : 'text-muted-foreground hover:bg-accent/30'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};