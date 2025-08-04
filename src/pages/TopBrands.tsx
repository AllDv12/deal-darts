import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterModal } from "@/components/FilterModal";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { mockProducts, getFilteredProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { Building2, Filter, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Get unique sources (brands) from mock products
const sources = ["Amazon", "Walmart", "eBay", "Target", "Best Buy"];

const TopBrands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const { toast } = useToast();
  const { bookmarkedProducts, toggleBookmark } = useBookmarks();

  const [filters, setFilters] = useState({
    categories: [],
    sources: [],
    priceRange: [0, 1000] as [number, number],
    discountMin: 0,
    rating: 0
  });

  // Update filters when a brand is selected
  useEffect(() => {
    if (selectedBrand) {
      setFilters(prev => ({
        ...prev,
        sources: [selectedBrand]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        sources: []
      }));
    }
  }, [selectedBrand]);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return getFilteredProducts(mockProducts, filters, searchTerm);
  }, [filters, searchTerm]);

  // Count products by brand for display
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    mockProducts.forEach(product => {
      counts[product.source] = (counts[product.source] || 0) + 1;
    });
    return counts;
  }, []);

  // Paginated products for display
  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProducts.length;
  const handleBookmark = (productId: string) => {
    const isNowBookmarked = toggleBookmark(productId);
    
    if (isNowBookmarked) {
      toast({
        title: "Bookmarked!",
        description: "Deal saved to your bookmarks",
      });
    } else {
      toast({
        title: "Removed from bookmarks",
        description: "Deal removed from your saved items",
      });
    }
  };

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedCount(prev => prev + 12);
      setLoading(false);
    }, 800);
  };

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(12);
  }, [filters, searchTerm]);

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => setFilterModalOpen(true)}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="p-3 rounded-full bg-secondary/10 text-secondary mb-4">
            <Building2 className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Top Brands</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover amazing deals from your favorite brands. We partner with top retailers 
            to bring you the best discounts from trusted sources.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={() => setFilterModalOpen(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter Deals
            </Button>
          </div>
        </div>
        
        {/* Brand Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            onClick={() => setSelectedBrand(null)}
            variant={selectedBrand === null ? "default" : "outline"}
            className={`flex items-center gap-2 ${selectedBrand === null ? 'bg-secondary' : ''}`}
          >
            <ShoppingBag className="h-4 w-4" />
            All Brands
          </Button>
          {sources.map(brand => (
            <Button
              key={brand}
              onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)}
              variant={brand === selectedBrand ? "default" : "outline"}
              className={`flex items-center gap-2 ${brand === selectedBrand ? 'bg-secondary' : ''}`}
            >
              {brand} <span className="ml-1 text-xs opacity-70">({brandCounts[brand] || 0})</span>
            </Button>
          ))}
        </div>
        
        {/* Filter & Results */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedBrand ? `${selectedBrand} Deals` : 'All Brand Deals'}
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} deals found • Updated minutes ago
              </p>
            </div>
            
            <FilterModal
              selectedFilters={filters}
              onFilterChange={setFilters}
              isOpen={filterModalOpen}
              onOpenChange={setFilterModalOpen}
            />
          </div>

          {/* Results Summary */}
          {(searchTerm || filters.categories.length > 0 || filters.discountMin > 0 || filters.rating > 0) && (
            <div className="p-4 bg-card rounded-xl border border-card-border">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{filteredProducts.length} deals found</span>
                  {searchTerm && (
                    <span className="text-muted-foreground ml-2">
                      for "{searchTerm}"
                    </span>
                  )}
                </div>
                {filteredProducts.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    Avg. discount: {Math.round(filteredProducts.reduce((acc, p) => acc + p.discount, 0) / filteredProducts.length)}%
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={displayedProducts}
          bookmarkedProducts={bookmarkedProducts}
          onBookmark={handleBookmark}
          loading={loading}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      </main>

      <Footer />
    </div>
  );
};

export default TopBrands;
