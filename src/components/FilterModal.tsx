import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface FilterModalProps {
  selectedFilters: {
    categories: string[];
    sources: string[];
    priceRange: [number, number];
    discountMin: number;
    rating: number;
  };
  onFilterChange: (filters: any) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  "Electronics", "Fashion", "Home & Garden", "Sports", "Books", 
  "Beauty", "Automotive", "Toys", "Health", "Food"
];

const sources = ["Amazon", "Walmart", "eBay", "Target", "Best Buy"];

export const FilterModal = ({ selectedFilters, onFilterChange, isOpen, onOpenChange }: FilterModalProps) => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    sources: true,
    price: true,
    discount: true,
    rating: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCategory = (category: string) => {
    const newCategories = selectedFilters.categories.includes(category)
      ? selectedFilters.categories.filter(c => c !== category)
      : [...selectedFilters.categories, category];
    
    onFilterChange({ ...selectedFilters, categories: newCategories });
  };

  const toggleSource = (source: string) => {
    const newSources = selectedFilters.sources.includes(source)
      ? selectedFilters.sources.filter(s => s !== source)
      : [...selectedFilters.sources, source];
    
    onFilterChange({ ...selectedFilters, sources: newSources });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      sources: [],
      priceRange: [0, 1000],
      discountMin: 0,
      rating: 0
    });
  };

  const activeFiltersCount = 
    selectedFilters.categories.length + 
    selectedFilters.sources.length + 
    (selectedFilters.discountMin > 0 ? 1 : 0) + 
    (selectedFilters.rating > 0 ? 1 : 0);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="filter-button relative"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge 
              variant="secondary" 
              className="ml-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span>Filter Deals</span>
            </div>
            {activeFiltersCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Categories */}
          <div className="space-y-4">
            <Collapsible open={openSections.categories}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full text-left font-medium"
                onClick={() => toggleSection('categories')}
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections.categories ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`
                        filter-button text-left text-sm p-2
                        ${selectedFilters.categories.includes(category) ? 'active' : ''}
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Discount Range */}
            <Collapsible open={openSections.discount}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full text-left font-medium"
                onClick={() => toggleSection('discount')}
              >
                Minimum Discount
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections.discount ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="grid grid-cols-2 gap-2">
                  {[10, 25, 50, 75].map(discount => (
                    <button
                      key={discount}
                      onClick={() => onFilterChange({ ...selectedFilters, discountMin: discount })}
                      className={`
                        filter-button text-sm p-2
                        ${selectedFilters.discountMin === discount ? 'active' : ''}
                      `}
                    >
                      {discount}%+
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Sources and Rating */}
          <div className="space-y-4">
            <Collapsible open={openSections.sources}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full text-left font-medium"
                onClick={() => toggleSection('sources')}
              >
                Sources
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections.sources ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="space-y-2">
                  {sources.map(source => (
                    <button
                      key={source}
                      onClick={() => toggleSource(source)}
                      className={`
                        filter-button w-full text-left text-sm p-2
                        ${selectedFilters.sources.includes(source) ? 'active' : ''}
                      `}
                    >
                      {source}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Rating */}
            <Collapsible open={openSections.rating}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full text-left font-medium"
                onClick={() => toggleSection('rating')}
              >
                Minimum Rating
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections.rating ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      onClick={() => onFilterChange({ ...selectedFilters, rating })}
                      className={`
                        filter-button w-full text-left text-sm p-2
                        ${selectedFilters.rating === rating ? 'active' : ''}
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <span>{rating}+ ⭐</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button 
            className="hero-button"
            onClick={() => onOpenChange(false)}
          >
            Apply Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};