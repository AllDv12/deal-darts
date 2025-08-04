import { useEffect, useRef } from "react";

interface PartnerStoresProps {
  className?: string;
}

export const PartnerStores = ({ className = "" }: PartnerStoresProps) => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  const partnerLogos = [
    { name: "Amazon", logo: "/partner-logos/amazon.png" },
    { name: "Walmart", logo: "/partner-logos/walmart.png" },
    { name: "eBay", logo: "/partner-logos/ebay.png" },
    { name: "Target", logo: "/partner-logos/target.png" },
    { name: "Best Buy", logo: "/partner-logos/bestbuy.png" },
    { name: "Costco", logo: "/partner-logos/costco.png" },
    { name: "Home Depot", logo: "/partner-logos/homedepot.png" },
    { name: "Macy's", logo: "/partner-logos/macys.png" },
  ];
  
  // Clone logos to ensure smooth infinite animation
  const allLogos = [...partnerLogos, ...partnerLogos];
  
  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;
    
    // Reset animation when reaching the end
    const handleAnimation = () => {
      if (container.scrollLeft >= (container.scrollWidth / 2)) {
        container.scrollLeft = 0;
      }
    };
    
    container.addEventListener('scroll', handleAnimation);
    
    // Start the animation
    const startAnimation = () => {
      const scrollInterval = setInterval(() => {
        if (container && container.scrollLeft < (container.scrollWidth / 2)) {
          container.scrollLeft += 1;
        }
      }, 20);
      
      return scrollInterval;
    };
    
    const interval = startAnimation();
    
    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', handleAnimation);
    };
  }, []);
  
  return (
    <section className={`py-16 bg-card/40 border-y border-card-border ${className}`}>
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in">
          Trusted Partner Stores
        </h3>
        
        <div className="relative overflow-hidden">
          {/* Gradient Overlay Left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent"></div>
          
          {/* Logo Slider */}
          <div 
            ref={logoContainerRef}
            className="flex items-center gap-16 py-6 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {allLogos.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110"
              >
                <div className="w-24 h-24 rounded-xl bg-white shadow-md p-4 flex items-center justify-center">
                  {/* If you have actual logos, use them here */}
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold text-primary">{partner.name}</span>
                  )}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlay Right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
