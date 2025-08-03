import { ProductCard } from "./ProductCard";
import { Product } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  bookmarkedProducts: Set<string>;
  onBookmark: (productId: string) => void;
  loading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export const ProductGrid = ({ 
  products, 
  bookmarkedProducts, 
  onBookmark, 
  loading = false,
  onLoadMore,
  hasMore = false
}: ProductGridProps) => {
  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading hot deals...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">No deals found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your filters or search terms to discover more amazing deals.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard
              product={product}
              onBookmark={onBookmark}
              isBookmarked={bookmarkedProducts.has(product.id)}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-8">
          <Button
            onClick={onLoadMore}
            disabled={loading}
            className="hero-button px-8 py-3"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading more deals...
              </>
            ) : (
              "Load More Deals"
            )}
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-sm text-muted-foreground">
        Showing {products.length} deals
        {hasMore && " • More available"}
      </div>
    </div>
  );
};