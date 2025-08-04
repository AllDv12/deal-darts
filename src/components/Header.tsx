import { Search, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onMenuClick: () => void;
  dealsCount: number;
}

export const Header = ({ searchTerm, onSearchChange, onMenuClick, dealsCount }: HeaderProps) => {  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-card-border shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 animate-slide-right">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white animate-float">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">HotDeals</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="animate-pulse">🔥</span>
                <span>{dealsCount} hot deals today</span>
              </div>
            </div>
          </div>          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for products, brands, or categories..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-bar pl-12 transition-all duration-300 focus:shadow-md focus:scale-105"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 animate-slide-left">
            <Button variant="outline" size="icon" className="hover-lift transition-all hover:shadow-md hover:bg-card">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};