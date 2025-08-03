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
  },
  // Additional Products
  {
    id: "13",
    title: "Microsoft Surface Pro 9 13\" Touch Screen with Type Cover Bundle",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop&crop=center",
    oldPrice: 1299.99,
    newPrice: 999.99,
    discount: 23,
    rating: 4.5,
    source: "Amazon",
    dealLink: "#",
    category: "Electronics"
  },
  {
    id: "14",
    title: "Calvin Klein Men's Classic Fit Suit - Navy Blue Wool Blend",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center",
    oldPrice: 299.99,
    newPrice: 149.99,
    discount: 50,
    rating: 4.2,
    source: "Walmart",
    dealLink: "#",
    category: "Fashion"
  },
  {
    id: "15",
    title: "Ninja Foodi Personal Blender with 18oz BPA-Free Cup",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    oldPrice: 79.99,
    newPrice: 39.99,
    discount: 50,
    rating: 4.6,
    source: "Target",
    dealLink: "#",
    expiry: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
    isHot: true,
    category: "Home & Garden"
  },
  {
    id: "16",
    title: "Hydro Flask Water Bottle 32oz with Straw Lid - Stainless Steel",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
    oldPrice: 44.99,
    newPrice: 29.99,
    discount: 33,
    rating: 4.8,
    source: "eBay",
    dealLink: "#",
    category: "Sports"
  },
  {
    id: "17",
    title: "Kindle Paperwhite 11th Generation with 6.8\" Display & Adjustable Light",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    oldPrice: 139.99,
    newPrice: 89.99,
    discount: 36,
    rating: 4.7,
    source: "Amazon",
    dealLink: "#",
    category: "Books"
  },
  {
    id: "18",
    title: "Fenty Beauty by Rihanna Gloss Bomb Universal Lip Luminizer Set",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center",
    oldPrice: 89.99,
    newPrice: 59.99,
    discount: 33,
    rating: 4.5,
    source: "Best Buy",
    dealLink: "#",
    category: "Beauty"
  },
  {
    id: "19",
    title: "Michelin Defender T+H All-Season Tire 225/60R16 Set of 4",
    image: "https://images.unsplash.com/photo-1486837149511-64e1a6f3e9e7?w=400&h=400&fit=crop&crop=center",
    oldPrice: 599.99,
    newPrice: 399.99,
    discount: 33,
    rating: 4.4,
    source: "Walmart",
    dealLink: "#",
    category: "Automotive"
  },
  {
    id: "20",
    title: "Disney Princess Castle Dollhouse with 12 Dolls & Furniture Set",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=400&fit=crop&crop=center",
    oldPrice: 199.99,
    newPrice: 119.99,
    discount: 40,
    rating: 4.9,
    source: "Target",
    dealLink: "#",
    category: "Toys"
  },
  {
    id: "21",
    title: "Nature's Way Vitamin D3 2000 IU - 240 Softgels Immune Support",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center",
    oldPrice: 24.99,
    newPrice: 14.99,
    discount: 40,
    rating: 4.6,
    source: "Amazon",
    dealLink: "#",
    category: "Health"
  },
  {
    id: "22",
    title: "Blue Diamond Almonds Variety Pack - 24 Count Snack Packs",
    image: "https://images.unsplash.com/photo-1599909512294-d2cf51b4e2e0?w=400&h=400&fit=crop&crop=center",
    oldPrice: 34.99,
    newPrice: 22.99,
    discount: 34,
    rating: 4.3,
    source: "eBay",
    dealLink: "#",
    category: "Food"
  },
  {
    id: "23",
    title: "iPhone 14 Pro Max 128GB - Deep Purple with MagSafe Case Bundle",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
    oldPrice: 1199.99,
    newPrice: 899.99,
    discount: 25,
    rating: 4.8,
    source: "Best Buy",
    dealLink: "#",
    expiry: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
    isHot: true,
    category: "Electronics"
  },
  {
    id: "24",
    title: "Levi's 501 Original Fit Jeans for Men - Classic Stonewash",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    oldPrice: 69.99,
    newPrice: 39.99,
    discount: 43,
    rating: 4.4,
    source: "Walmart",
    dealLink: "#",
    category: "Fashion"
  },
  {
    id: "25",
    title: "Breville Barista Express Espresso Machine with Built-in Grinder",
    image: "https://images.unsplash.com/photo-1495906917867-f2f7d55b9b4b?w=400&h=400&fit=crop&crop=center",
    oldPrice: 699.99,
    newPrice: 499.99,
    discount: 29,
    rating: 4.7,
    source: "Target",
    dealLink: "#",
    category: "Home & Garden"
  },
  {
    id: "26",
    title: "Wilson Evolution Indoor Basketball - Official Size 29.5\"",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop&crop=center",
    oldPrice: 64.99,
    newPrice: 44.99,
    discount: 31,
    rating: 4.8,
    source: "Amazon",
    dealLink: "#",
    category: "Sports"
  },
  {
    id: "27",
    title: "Stephen King Complete Collection - 20 Bestselling Horror Novels",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    oldPrice: 299.99,
    newPrice: 179.99,
    discount: 40,
    rating: 4.9,
    source: "eBay",
    dealLink: "#",
    category: "Books"
  },
  {
    id: "28",
    title: "Rare Beauty Soft Pinch Liquid Blush Set - 6 Shades Collection",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    oldPrice: 129.99,
    newPrice: 89.99,
    discount: 31,
    rating: 4.6,
    source: "Best Buy",
    dealLink: "#",
    category: "Beauty"
  },
  {
    id: "29",
    title: "Mobil 1 Advanced Full Synthetic Motor Oil 5W-30 - 5 Quart Pack",
    image: "https://images.unsplash.com/photo-1492077766443-f3744c930a2a?w=400&h=400&fit=crop&crop=center",
    oldPrice: 34.99,
    newPrice: 24.99,
    discount: 29,
    rating: 4.5,
    source: "Walmart",
    dealLink: "#",
    category: "Automotive"
  },
  {
    id: "30",
    title: "Pokémon Trading Card Game Battle Academy Complete Starter Set",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    oldPrice: 24.99,
    newPrice: 16.99,
    discount: 32,
    rating: 4.7,
    source: "Target",
    dealLink: "#",
    category: "Toys"
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