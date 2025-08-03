import { Search, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onMenuClick: () => void;
  dealsCount: number;
}

export const Header = ({ searchTerm, onSearchChange, onMenuClick, dealsCount }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-card-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">HotDeals</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="animate-glow">🔥</span>
                <span>{dealsCount} hot deals today</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for products, brands, or categories..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-bar pl-12"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="hover-lift">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};