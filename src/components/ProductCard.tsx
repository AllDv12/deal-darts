import { Heart, Star, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  rating: number;
  source: string;
  dealLink: string;
  expiry?: string;
  isHot?: boolean;
}

interface ProductCardProps {
  product: Product;
  onBookmark: (productId: string) => void;
  isBookmarked: boolean;
}

export const ProductCard = ({ product, onBookmark, isBookmarked }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-warning text-warning' 
            : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  const timeUntilExpiry = product.expiry ? new Date(product.expiry).getTime() - Date.now() : null;
  const hoursLeft = timeUntilExpiry ? Math.max(0, Math.floor(timeUntilExpiry / (1000 * 60 * 60))) : null;
  return (
    <div className="deal-card group animate-fade-in hover:z-10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Image not available</span>
          </div>
        )}
        
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="deal-badge animate-pulse-slow">
            -{product.discount}% OFF
          </div>
          {product.isHot && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              🔥 HOT
            </Badge>
          )}          {hoursLeft && hoursLeft < 24 && (
            <Badge variant="outline" className="bg-warning/10 border-warning text-warning animate-pulse">
              <Clock className="w-3 h-3 mr-1" />
              {hoursLeft}h left
            </Badge>
          )}
        </div>

        {/* Bookmark Button */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute top-3 right-3 bg-white/90 hover:bg-white border-white/20 transition-all ${
            isBookmarked ? 'text-destructive' : 'text-muted-foreground hover:text-destructive'
          } transform hover:scale-110`}
          onClick={(e) => {
            e.preventDefault();
            onBookmark(product.id);
          }}
        >
          <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </Button>      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-medium text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="rating-stars group-hover:animate-pulse-slow">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="price-old">
            {formatPrice(product.oldPrice)}
          </span>
          <span className="price-new group-hover:animate-pulse-slow">
            {formatPrice(product.newPrice)}
          </span>
        </div>

        {/* Source & CTA */}
        <div className="flex items-center justify-between pt-2">
          <Badge variant="outline" className="text-xs">
            {product.source}
          </Badge>
          
          <Button 
            size="sm" 
            className="hero-button text-xs px-4 py-2 transform transition-all group-hover:scale-105"
            onClick={() => window.open(product.dealLink, '_blank')}
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            View Deal
          </Button>
        </div>
      </div>
    </div>
  );
};

// Add line-clamp utility for title truncation
const lineClampStyles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Inject styles if not already present
if (typeof document !== 'undefined' && !document.querySelector('#line-clamp-styles')) {
  const style = document.createElement('style');
  style.id = 'line-clamp-styles';
  style.textContent = lineClampStyles;
  document.head.appendChild(style);
}