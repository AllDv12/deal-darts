import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Bookmarks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const { bookmarkedProducts, toggleBookmark, clearBookmarks } = useBookmarks();
  
  // Filter products to only show bookmarked ones
  const bookmarkedItems = useMemo(() => {
    return mockProducts.filter(product => bookmarkedProducts.has(product.id));
  }, [bookmarkedProducts]);
  
  // Filter by search term if provided
  const filteredItems = useMemo(() => {
    if (!searchTerm) return bookmarkedItems;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return bookmarkedItems.filter(item => 
      item.title.toLowerCase().includes(lowercaseSearch) ||
      item.source.toLowerCase().includes(lowercaseSearch)
    );
  }, [bookmarkedItems, searchTerm]);
  
  const handleBookmark = (productId: string) => {
    const isNowBookmarked = toggleBookmark(productId);
    
    if (!isNowBookmarked) {
      toast({
        title: "Removed from bookmarks",
        description: "Deal removed from your saved items",
      });
    }
  };
  
  const handleClearBookmarks = () => {
    clearBookmarks();
    toast({
      title: "Bookmarks cleared",
      description: "All bookmarked deals have been removed",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => {}}
        dealsCount={bookmarkedItems.length}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Heart className="text-destructive" /> Your Bookmarks
            </h1>
            <p className="text-muted-foreground">
              {bookmarkedItems.length === 0 
                ? "You haven't saved any deals yet. Browse deals and click the heart icon to save them here."
                : `You have ${bookmarkedItems.length} saved deal${bookmarkedItems.length !== 1 ? 's' : ''}.`
              }
            </p>
          </div>
          
          {bookmarkedItems.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear all bookmarks?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. All your saved deals will be removed from your bookmarks.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleClearBookmarks}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Clear All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
        
        {/* No bookmarks message */}
        {bookmarkedItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No bookmarks yet</h2>
            <p className="text-muted-foreground max-w-md mb-8">
              When you find deals you like, click the heart icon to save them here for easy access later.
            </p>
            <Button asChild>
              <a href="/">Browse Deals</a>
            </Button>
          </div>
        )}
        
        {/* Product grid */}
        {bookmarkedItems.length > 0 && (
          <>
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">No bookmarks match your search.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (              <ProductGrid 
                products={filteredItems}
                bookmarkedProducts={bookmarkedProducts}
                onBookmark={handleBookmark}
              />
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookmarks;
