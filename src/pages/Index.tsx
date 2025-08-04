import { useState, useEffect, useMemo, useRef } from "react";
import { Header } from "@/components/Header";
import { FilterModal } from "@/components/FilterModal";
import { ProductGrid } from "@/components/ProductGrid";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PartnerStores } from "@/components/PartnerStores";
import { mockProducts, getFilteredProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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

  const productsRef = useRef<HTMLDivElement>(null);
  
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => setFilterModalOpen(true)}
        dealsCount={mockProducts.length}
      />
      
      {/* Hero Section */}
      <Hero onExploreDeals={scrollToProducts} />
      
      <main className="px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Filter Bar & Results Summary */}
          <div ref={productsRef} className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {searchTerm ? `Search Results for "${searchTerm}"` : "Today's Hot Deals"}
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
            {(searchTerm || filters.categories.length > 0 || filters.sources.length > 0 || filters.discountMin > 0 || filters.rating > 0) && (
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
            hasMore={hasMore}          />
        </div>
      </main>

      {/* Partner Stores Section */}
      <PartnerStores className="mt-16" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
