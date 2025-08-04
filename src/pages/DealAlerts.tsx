import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bell, PlusCircle, Tag, Trash2, Edit, Search, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

// Categories from the FilterModal component
const categories = [
  "Electronics", "Fashion", "Home & Garden", "Sports", "Books", 
  "Beauty", "Automotive", "Toys", "Health", "Food"
];

// Sources/brands from the FilterModal component
const sources = ["Amazon", "Walmart", "eBay", "Target", "Best Buy"];

const DealAlerts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newAlertKeyword, setNewAlertKeyword] = useState("");
  const [editingAlertId, setEditingAlertId] = useState<string | null>(null);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const { toast } = useToast();
  
  // Sample alerts for the UI
  const [alerts, setAlerts] = useState<Array<{
    id: string;
    keyword: string;
    category?: string;
    brand?: string;
    minDiscount?: number;
    isActive: boolean;
    dateCreated: string;
  }>>([
    {
      id: "alert-1",
      keyword: "iPhone",
      category: "Electronics",
      brand: "Amazon",
      minDiscount: 20,
      isActive: true,
      dateCreated: "2023-05-10"
    },
    {
      id: "alert-2",
      keyword: "Running shoes",
      category: "Sports",
      minDiscount: 30,
      isActive: true,
      dateCreated: "2023-05-15"
    },
    {
      id: "alert-3",
      keyword: "Headphones",
      brand: "Best Buy",
      isActive: false,
      dateCreated: "2023-05-20"
    }
  ]);
  
  // State for new/editing alert form
  const [alertForm, setAlertForm] = useState({
    keyword: "",
    category: "",
    brand: "",
    minDiscount: 10,
    isActive: true
  });
  
  const handleToggleAlert = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id 
        ? { ...alert, isActive: !alert.isActive } 
        : alert
    ));
    
    const alert = alerts.find(a => a.id === id);
    if (alert) {
      toast({
        title: alert.isActive ? "Alert Disabled" : "Alert Enabled",
        description: alert.isActive 
          ? `You won't receive notifications for "${alert.keyword}"` 
          : `You'll now receive notifications for "${alert.keyword}"`,
      });
    }
  };
  
  const handleDeleteAlert = (id: string) => {
    const alert = alerts.find(a => a.id === id);
    setAlerts(alerts.filter(alert => alert.id !== id));
    
    if (alert) {
      toast({
        title: "Alert Deleted",
        description: `Deal alert for "${alert.keyword}" has been removed`,
      });
    }
  };
  
  const handleEditAlert = (id: string) => {
    const alert = alerts.find(a => a.id === id);
    if (alert) {
      setAlertForm({
        keyword: alert.keyword,
        category: alert.category || "",
        brand: alert.brand || "",
        minDiscount: alert.minDiscount || 10,
        isActive: alert.isActive
      });
      setEditingAlertId(id);
    }
  };
    const handleSaveAlert = () => {
    if (!alertForm.keyword.trim()) {
      toast({
        title: "Keyword Required",
        description: "Please enter a keyword for your alert",
        variant: "destructive"
      });
      return;
    }
    
    if (editingAlertId) {
      // Update existing alert
      setAlerts(alerts.map(alert => 
        alert.id === editingAlertId 
          ? { 
              ...alert, 
              keyword: alertForm.keyword,
              category: alertForm.category || undefined,
              brand: alertForm.brand || undefined,
              minDiscount: alertForm.minDiscount || undefined,
              isActive: alertForm.isActive
            } 
          : alert
      ));
      
      toast({
        title: "Alert Updated",
        description: `Your alert for "${alertForm.keyword}" has been updated`,
      });
      
      setEditingAlertId(null);
    } else {
      // Add new alert
      const newAlert = {
        id: `alert-${alerts.length + 1}`,
        keyword: alertForm.keyword,
        category: alertForm.category || undefined,
        brand: alertForm.brand || undefined,
        minDiscount: alertForm.minDiscount || undefined,
        isActive: alertForm.isActive,
        dateCreated: new Date().toISOString().split('T')[0]
      };
      
      setAlerts([newAlert, ...alerts]);
      
      toast({
        title: "Alert Created",
        description: `You'll be notified of deals matching "${alertForm.keyword}"`,
      });
    }
    
    // Reset form and state
    setAlertForm({
      keyword: "",
      category: "",
      brand: "",
      minDiscount: 10,
      isActive: true
    });
    setIsAlertDialogOpen(false);
  };
  
  const handleCancelEdit = () => {
    setEditingAlertId(null);
    setIsAlertDialogOpen(false);
    setAlertForm({
      keyword: "",
      category: "",
      brand: "",
      minDiscount: 10,
      isActive: true
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
          <div className="p-3 rounded-full bg-warning/10 text-warning mb-4">
            <Bell className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Deal Alerts</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Set up custom alerts and get notified when deals matching your criteria are added.
            Never miss a deal on products you're interested in.
          </p>          <Button 
            onClick={() => {
              setIsAlertDialogOpen(true);
              setEditingAlertId(null);
              setAlertForm({
                keyword: "",
                category: "",
                brand: "",
                minDiscount: 10,
                isActive: true
              });
            }}
            className="hero-button"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Alert
          </Button>
        </div>
        
        {/* Alert Dialog */}
        <Dialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingAlertId ? "Edit Alert" : "Create New Alert"}</DialogTitle>
              <DialogDescription>
                Get notified when deals matching your criteria are added.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              {/* Keyword */}
              <div>
                <label className="block mb-2 font-medium">
                  Alert Keyword <span className="text-destructive">*</span>
                </label>
                <Input 
                  placeholder="e.g., iPhone, Nike shoes, 4K TV"
                  value={alertForm.keyword}
                  onChange={(e) => setAlertForm({...alertForm, keyword: e.target.value})}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  You'll be notified when deals containing this keyword are added.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block mb-2 font-medium">Category (Optional)</label>
                  <select 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={alertForm.category}
                    onChange={(e) => setAlertForm({...alertForm, category: e.target.value})}
                  >
                    <option value="">Any Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                {/* Brand */}
                <div>
                  <label className="block mb-2 font-medium">Brand/Retailer (Optional)</label>
                  <select 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={alertForm.brand}
                    onChange={(e) => setAlertForm({...alertForm, brand: e.target.value})}
                  >
                    <option value="">Any Brand/Retailer</option>
                    {sources.map(src => (
                      <option key={src} value={src}>{src}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Minimum Discount */}
              <div>
                <label className="block mb-2 font-medium">Minimum Discount</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="90"
                    step="5"
                    value={alertForm.minDiscount} 
                    onChange={(e) => setAlertForm({...alertForm, minDiscount: Number(e.target.value)})}
                    className="flex-1"
                  />
                  <div className="w-12 text-center font-medium">{alertForm.minDiscount}%+</div>
                </div>
              </div>
              
              {/* Active Switch */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Alert Status</div>
                  <div className="text-sm text-muted-foreground">Enable or disable notifications</div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={alertForm.isActive}
                    onCheckedChange={(checked) => setAlertForm({...alertForm, isActive: checked})}
                  />
                  <span>{alertForm.isActive ? 'Active' : 'Disabled'}</span>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
              <Button onClick={handleSaveAlert} className="hero-button">
                <Save className="h-4 w-4 mr-2" />
                {editingAlertId ? "Update Alert" : "Create Alert"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Search/Filter */}
        {alerts.length > 0 && (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search your alerts..."
                value={newAlertKeyword}
                onChange={(e) => setNewAlertKeyword(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        )}
        
        {/* Alerts List */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Alert Subscriptions</h2>
          
          {alerts.length === 0 ? (
            <div className="bg-card border border-card-border rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-2">No alerts created yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Create your first alert to get notified when deals matching your interests are added.
              </p>              <Button 
                className="hero-button"
                onClick={() => {
                  setIsAlertDialogOpen(true);
                  setEditingAlertId(null);
                  setAlertForm({
                    keyword: "",
                    category: "",
                    brand: "",
                    minDiscount: 10,
                    isActive: true
                  });
                }}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Your First Alert
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {alerts
                .filter(alert => alert.keyword.toLowerCase().includes(newAlertKeyword.toLowerCase()))
                .map(alert => (
                  <div 
                    key={alert.id} 
                    className={`bg-card border rounded-xl p-5 transition-all ${
                      alert.isActive 
                        ? 'border-card-border shadow-sm hover:shadow-md' 
                        : 'border-dashed border-muted opacity-70'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 items-start">
                        <div className={`p-2 rounded-full ${
                          alert.isActive 
                            ? 'bg-warning/10 text-warning' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <Bell className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{alert.keyword}</h3>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Tag className="h-3 w-3" />
                              <span>{alert.category || 'Any category'}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span>{alert.brand || 'Any brand'}</span>
                            {alert.minDiscount && (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <span>Min {alert.minDiscount}% off</span>
                              </>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            Created on {alert.dateCreated}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            handleEditAlert(alert.id);
                            setIsAlertDialogOpen(true);
                          }}
                          className="h-8 w-8"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteAlert(alert.id)}
                          className="h-8 w-8 text-destructive hover:text-destructive/90"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Switch
                          checked={alert.isActive}
                          onCheckedChange={() => handleToggleAlert(alert.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        
        {/* How It Works */}
        <div className="bg-card border border-card-border rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How Deal Alerts Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                title: "Create Custom Alerts",
                description: "Set up alerts based on keywords, categories, brands, and minimum discount percentages."
              },
              {
                number: 2,
                title: "We Monitor Deals 24/7",
                description: "Our system continuously scans for new deals that match your alert criteria."
              },
              {
                number: 3,
                title: "Get Instant Notifications",
                description: "Receive email or browser notifications when matching deals are found."
              }
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Want to get notified for any deal from a specific brand or category?
            </p>
            <Button 
              className="hero-button"              onClick={() => {
                setIsAlertDialogOpen(true);
                setEditingAlertId(null);
                setAlertForm({
                  keyword: "",
                  category: "",
                  brand: "",
                  minDiscount: 10,
                  isActive: true
                });              }}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Alert
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DealAlerts;
