import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterModal } from "@/components/FilterModal";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { mockProducts, getFilteredProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";
import { Flame, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HotDeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [bookmarkedProducts, setBookmarkedProducts] = useState<Set<string>>(new Set());
  const [displayedCount, setDisplayedCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [filters, setFilters] = useState({
    categories: [],
    sources: [],
    priceRange: [0, 1000] as [number, number],
    discountMin: 30, // Higher minimum discount for "Hot Deals"
    rating: 4 // Higher minimum rating for "Hot Deals"
  });

  // Get only hot deals with high discounts
  const hotProducts = useMemo(() => {
    return mockProducts.filter(product => 
      product.discount >= 30 && 
      product.rating >= 4 &&
      (product.isHot || Math.random() > 0.5) // Randomly mark some as hot for demo
    );
  }, []);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return getFilteredProducts(hotProducts, filters, searchTerm);
  }, [hotProducts, filters, searchTerm]);

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
        onMenuClick={() => setFilterModalOpen(true)}
        dealsCount={hotProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="p-3 rounded-full bg-warning/10 text-warning mb-4">
            <Flame className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hot Deals</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover our most popular deals with the biggest discounts, handpicked by our team.
            These offers don't last long!
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
        
        {/* Filter & Results */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {searchTerm ? `Search Results for "${searchTerm}"` : "Today's Hottest Deals"}
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
          {(searchTerm || filters.categories.length > 0 || filters.sources.length > 0 || filters.discountMin > 30 || filters.rating > 4) && (
            <div className="p-4 bg-card rounded-xl border border-card-border">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{filteredProducts.length} hot deals found</span>
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

export default HotDeals;
