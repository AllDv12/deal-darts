// Mock product data for the hot deals aggregator
export interface Product {
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
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Apple MacBook Air 13-inch M2 Chip with 8-Core CPU and 8-Core GPU",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center",
    oldPrice: 1199.99,
    newPrice: 899.99,
    discount: 25,
    rating: 4.8,
    source: "Amazon",
    dealLink: "#",
    expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    isHot: true,
    category: "Electronics"
  },
  {
    id: "2",
    title: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&crop=center",
    oldPrice: 349.99,
    newPrice: 199.99,
    discount: 43,
    rating: 4.7,
    source: "Best Buy",
    dealLink: "#",
    isHot: true,
    category: "Electronics"
  },
  {
    id: "3",
    title: "Nike Air Max 270 Men's Running Shoes - Multiple Colors Available",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    oldPrice: 150.00,
    newPrice: 89.99,
    discount: 40,
    rating: 4.5,
    source: "Walmart",
    dealLink: "#",
    category: "Fashion"
  },
  {
    id: "4",
    title: "Samsung 65\" 4K UHD Smart TV with HDR and Alexa Built-in",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop&crop=center",
    oldPrice: 899.99,
    newPrice: 549.99,
    discount: 39,
    rating: 4.6,
    source: "Target",
    dealLink: "#",
    expiry: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    category: "Electronics"
  },
  {
    id: "5",
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    oldPrice: 99.99,
    newPrice: 59.99,
    discount: 40,
    rating: 4.9,
    source: "Amazon",
    dealLink: "#",
    category: "Home & Garden"
  },
  {
    id: "6",
    title: "Adidas Ultraboost 22 Running Shoes - Women's Premium Athletic Footwear",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center",
    oldPrice: 180.00,
    newPrice: 108.00,
    discount: 40,
    rating: 4.4,
    source: "eBay",
    dealLink: "#",
    category: "Fashion"
  },
  {
    id: "7",
    title: "Canon EOS R5 Mirrorless Camera with 24-105mm Lens Kit",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
    oldPrice: 3899.99,
    newPrice: 2999.99,
    discount: 23,
    rating: 4.8,
    source: "Best Buy",
    dealLink: "#",
    category: "Electronics"
  },
  {
    id: "8",
    title: "Dyson V11 Absolute Pro Cordless Vacuum Cleaner with Extra Tools",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    oldPrice: 599.99,
    newPrice: 399.99,
    discount: 33,
    rating: 4.7,
    source: "Target",
    dealLink: "#",
    category: "Home & Garden"
  },
  {
    id: "9",
    title: "LEGO Creator Expert Taj Mahal Building Set - 5923 Pieces",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop&crop=center",
    oldPrice: 369.99,
    newPrice: 259.99,
    discount: 30,
    rating: 4.9,
    source: "Amazon",
    dealLink: "#",
    category: "Toys"
  },
  {
    id: "10",
    title: "Apple Watch Series 8 GPS + Cellular 45mm with Sport Band",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop&crop=center",
    oldPrice: 529.99,
    newPrice: 349.99,
    discount: 34,
    rating: 4.6,
    source: "Walmart",
    dealLink: "#",
    isHot: true,
    category: "Electronics"
  },
  {
    id: "11",
    title: "KitchenAid Professional 5 Plus Series Stand Mixer with Stainless Bowl",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    oldPrice: 449.99,
    newPrice: 279.99,
    discount: 38,
    rating: 4.8,
    source: "eBay",
    dealLink: "#",
    category: "Home & Garden"
  },
  {
    id: "12",
    title: "Fitbit Charge 5 Advanced Fitness Health Tracker with Built-in GPS",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
    oldPrice: 199.99,
    newPrice: 129.99,
    discount: 35,
    rating: 4.3,
    source: "Best Buy",
    dealLink: "#",
    category: "Health"
  }
];

export const getFilteredProducts = (
  products: Product[],
  filters: {
    categories: string[];
    sources: string[];
    priceRange: [number, number];
    discountMin: number;
    rating: number;
  },
  searchTerm: string = ""
) => {
  return products.filter(product => {
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      if (!product.title.toLowerCase().includes(searchLower) &&
          !product.category.toLowerCase().includes(searchLower) &&
          !product.source.toLowerCase().includes(searchLower)) {
        return false;
      }
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Source filter
    if (filters.sources.length > 0 && !filters.sources.includes(product.source)) {
      return false;
    }

    // Price range filter
    if (product.newPrice < filters.priceRange[0] || product.newPrice > filters.priceRange[1]) {
      return false;
    }

    // Discount filter
    if (product.discount < filters.discountMin) {
      return false;
    }

    // Rating filter
    if (product.rating < filters.rating) {
      return false;
    }

    return true;
  });
};