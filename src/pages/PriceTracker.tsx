import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LineChart, TrendingDown, Search, Bell, ArrowRight, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

const PriceTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trackingUrl, setTrackingUrl] = useState("");
  const [trackedItems, setTrackedItems] = useState<Array<{
    id: string;
    title: string;
    image: string;
    currentPrice: number;
    targetPrice: number;
    highestPrice: number;
    lowestPrice: number;
    priceHistory: Array<{date: string; price: number}>;
    source: string;
    dateAdded: string;
  }>>([
    {
      id: "track-1",
      title: "Apple iPhone 13 Pro Max 256GB",
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop&crop=center",
      currentPrice: 999.99,
      targetPrice: 899.99,
      highestPrice: 1299.99,
      lowestPrice: 949.99,
      priceHistory: [
        {date: "2023-01-01", price: 1299.99},
        {date: "2023-02-01", price: 1199.99},
        {date: "2023-03-01", price: 1099.99},
        {date: "2023-04-01", price: 1049.99},
        {date: "2023-05-01", price: 999.99},
      ],
      source: "Amazon",
      dateAdded: "2023-01-01"
    },
    {
      id: "track-2",
      title: "Samsung 65\" QLED 4K Smart TV",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop&crop=center",
      currentPrice: 799.99,
      targetPrice: 699.99,
      highestPrice: 1299.99,
      lowestPrice: 799.99,
      priceHistory: [
        {date: "2023-01-01", price: 1299.99},
        {date: "2023-02-01", price: 1199.99},
        {date: "2023-03-01", price: 899.99},
        {date: "2023-04-01", price: 849.99},
        {date: "2023-05-01", price: 799.99},
      ],
      source: "Best Buy",
      dateAdded: "2023-02-15"
    },
    {
      id: "track-3",
      title: "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&crop=center",
      currentPrice: 248.00,
      targetPrice: 199.99,
      highestPrice: 349.99,
      lowestPrice: 248.00,
      priceHistory: [
        {date: "2023-01-01", price: 349.99},
        {date: "2023-02-01", price: 329.99},
        {date: "2023-03-01", price: 299.99},
        {date: "2023-04-01", price: 279.99},
        {date: "2023-05-01", price: 248.00},
      ],
      source: "Amazon",
      dateAdded: "2023-03-10"
    }
  ]);
  
  const { toast } = useToast();

  const handleAddTracking = () => {
    if (!trackingUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a product URL to track",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate adding a new tracked item
    const randomProduct = mockProducts[Math.floor(Math.random() * mockProducts.length)];
    
    const newTrackedItem = {
      id: `track-${trackedItems.length + 1}`,
      title: randomProduct.title,
      image: randomProduct.image,
      currentPrice: randomProduct.newPrice,
      targetPrice: randomProduct.newPrice * 0.9, // 10% lower as target
      highestPrice: randomProduct.oldPrice,
      lowestPrice: randomProduct.newPrice,
      priceHistory: [
        {date: "2023-03-01", price: randomProduct.oldPrice},
        {date: "2023-04-01", price: randomProduct.oldPrice * 0.95},
        {date: "2023-05-01", price: randomProduct.newPrice},
      ],
      source: randomProduct.source,
      dateAdded: new Date().toISOString().split('T')[0]
    };
    
    setTrackedItems([newTrackedItem, ...trackedItems]);
    setTrackingUrl("");
    
    toast({
      title: "Product Added to Tracker",
      description: `We'll monitor prices for "${randomProduct.title.substring(0, 30)}..."`,
    });
  };

  const removeTracking = (id: string) => {
    setTrackedItems(trackedItems.filter(item => item.id !== id));
    toast({
      title: "Product Removed",
      description: "Product has been removed from price tracking",
    });
  };

  const updateTargetPrice = (id: string, newTarget: number) => {
    setTrackedItems(trackedItems.map(item => 
      item.id === id ? {...item, targetPrice: newTarget} : item
    ));
    toast({
      title: "Target Price Updated",
      description: "We'll notify you when the price drops to your target",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => {}}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="p-3 rounded-full bg-info/10 text-info mb-4">
            <LineChart className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Price Tracker</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Track your favorite products and get notified when prices drop. 
            Never miss a deal on items you're watching.
          </p>
        </div>
        
        {/* Add URL Form */}
        <div className="bg-card border border-card-border rounded-xl p-6 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4">Add Product to Track</h2>
          <p className="text-muted-foreground mb-4">
            Paste a product URL from any of our supported retailers, and we'll track its price history and notify you of drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Paste product URL here..."
                value={trackingUrl}
                onChange={(e) => setTrackingUrl(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleAddTracking} className="hero-button">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add to Tracker
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm text-muted-foreground">Supported retailers:</span>
            {["Amazon", "Walmart", "Best Buy", "Target", "eBay"].map(retailer => (
              <span key={retailer} className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                {retailer}
              </span>
            ))}
          </div>
        </div>
        
        {/* Tracked Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Tracked Products</h2>
          
          {trackedItems.length === 0 ? (
            <div className="bg-card border border-card-border rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No products tracked yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Add your first product to start tracking prices and get notified of deals.
              </p>
              <Button className="hero-button">
                Learn How to Track Prices
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {trackedItems.map(item => (
                <div key={item.id} className="bg-card border border-card-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image & Info */}
                    <div className="flex gap-4 flex-grow">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg mb-1 line-clamp-2">{item.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span>Tracking since {item.dateAdded}</span>
                          <span className="mx-2">•</span>
                          <span>{item.source}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Current: </span>
                            <span className="font-semibold">${item.currentPrice.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Highest: </span>
                            <span>${item.highestPrice.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Lowest: </span>
                            <span className="text-success font-semibold">${item.lowestPrice.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Target: </span>
                            <span className="text-primary">${item.targetPrice.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Trend Indicator */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-full bg-success/10 text-success mb-2">
                          <TrendingDown className="h-5 w-5" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-success">
                            -{Math.round((item.highestPrice - item.currentPrice) / item.highestPrice * 100)}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            From highest
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex mt-4 gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeTracking(item.id)}
                          className="text-xs"
                        >
                          Remove
                        </Button>
                        <Button 
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open("#", "_blank")}
                        >
                          View Deal
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress to target price */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between text-xs mb-2">
                      <span>Current: ${item.currentPrice.toFixed(2)}</span>
                      <span className="text-primary">Target: ${item.targetPrice.toFixed(2)}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ 
                          width: `${Math.min(100, Math.max(0, 100 - ((item.currentPrice - item.targetPrice) / (item.highestPrice - item.targetPrice) * 100)))}%` 
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ${(item.currentPrice - item.targetPrice).toFixed(2)} away from target price
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* How It Works */}
        <div className="bg-card border border-card-border rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How Price Tracking Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: PlusCircle,
                title: "Add Products",
                description: "Paste a URL from any supported retailer to start tracking price history."
              },
              {
                icon: Bell,
                title: "Get Notified",
                description: "We'll alert you when prices drop below your target or hit an all-time low."
              },
              {
                icon: ArrowRight,
                title: "Purchase at the Right Time",
                description: "Buy with confidence knowing you're getting the best possible deal."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PriceTracker;
