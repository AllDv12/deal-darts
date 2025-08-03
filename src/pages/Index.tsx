import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { mockProducts, getFilteredProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookmarkedProducts, setBookmarkedProducts] = useState<Set<string>>(new Set());
  const [displayedCount, setDisplayedCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [filters, setFilters] = useState({
    categories: [],
    sources: [],
    priceRange: [0, 1000] as [number, number],
    discountMin: 0,
    rating: 0
  });

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return getFilteredProducts(mockProducts, filters, searchTerm);
  }, [filters, searchTerm]);

  // Paginated products for display
  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProducts.length;

  const handleBookmark = (productId: string) => {
    setBookmarkedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        toast({
          title: "Removed from bookmarks",
          description: "Deal removed from your saved items",
        });
      } else {
        newSet.add(productId);
        toast({
          title: "Bookmarked!",
          description: "Deal saved to your bookmarks",
        });
      }
      return newSet;
    });
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
        onMenuClick={() => setSidebarOpen(true)}
        dealsCount={mockProducts.length}
      />
      
      <div className="flex">
        <FilterSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          selectedFilters={filters}
          onFilterChange={setFilters}
        />
        
        <main className="flex-1 p-6 lg:ml-0">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-12 py-8">
              <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
                🔥 Hot Deals Aggregator
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the best discounts from Amazon, Walmart, eBay and more. 
                All in one place, updated in real-time.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span>Live Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>Verified Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>
                  <span>Price Tracking</span>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            {(searchTerm || filters.categories.length > 0 || filters.sources.length > 0 || filters.discountMin > 0 || filters.rating > 0) && (
              <div className="mb-6 p-4 bg-card rounded-xl border border-card-border">
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

            {/* Product Grid */}
            <ProductGrid
              products={displayedProducts}
              bookmarkedProducts={bookmarkedProducts}
              onBookmark={handleBookmark}
              loading={loading}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
