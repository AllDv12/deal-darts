import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilters: {
    categories: string[];
    sources: string[];
    priceRange: [number, number];
    discountMin: number;
    rating: number;
  };
  onFilterChange: (filters: any) => void;
}

const categories = [
  "Electronics", "Fashion", "Home & Garden", "Sports", "Books", 
  "Beauty", "Automotive", "Toys", "Health", "Food"
];

const sources = ["Amazon", "Walmart", "eBay", "Target", "Best Buy"];

export const FilterSidebar = ({ isOpen, onClose, selectedFilters, onFilterChange }: FilterSidebarProps) => {
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
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen w-80 bg-card border-r border-card-border z-50
        transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
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
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="lg:hidden"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {/* Categories */}
            <Collapsible open={openSections.categories}>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full text-left font-medium"
                onClick={() => toggleSection('categories')}
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections.categories ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`
                        filter-button w-full text-left text-sm
                        ${selectedFilters.categories.includes(category) ? 'active' : ''}
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Sources */}
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
                        filter-button w-full text-left text-sm
                        ${selectedFilters.sources.includes(source) ? 'active' : ''}
                      `}
                    >
                      {source}
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
                        filter-button text-sm
                        ${selectedFilters.discountMin === discount ? 'active' : ''}
                      `}
                    >
                      {discount}%+
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
                        filter-button w-full text-left text-sm
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
      </div>
    </>
  );
};