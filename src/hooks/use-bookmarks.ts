import { useState, useEffect } from 'react';

/**
 * A custom hook that manages bookmarked product IDs with persistence using localStorage
 * @returns An object containing the bookmarked products set and functions to manipulate it
 */
export const useBookmarks = () => {
  // Initialize state from localStorage or empty Set if not available
  const [bookmarkedProducts, setBookmarkedProducts] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('dealDartsBookmarks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return new Set(parsed);
      } catch (error) {
        console.error('Failed to parse bookmarks from localStorage:', error);
        return new Set<string>();
      }
    }
    return new Set<string>();
  });

  // Persist to localStorage whenever bookmarkedProducts changes
  useEffect(() => {
    localStorage.setItem('dealDartsBookmarks', JSON.stringify([...bookmarkedProducts]));
  }, [bookmarkedProducts]);

  /**
   * Toggle a product's bookmark status
   * @param productId The ID of the product to toggle
   * @returns A boolean indicating if the product is now bookmarked (true) or not (false)
   */
  const toggleBookmark = (productId: string): boolean => {
    let isNowBookmarked = false;
    
    setBookmarkedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
        isNowBookmarked = true;
      }
      return newSet;
    });
    
    return isNowBookmarked;
  };

  /**
   * Check if a product is bookmarked
   * @param productId The ID of the product to check
   * @returns A boolean indicating if the product is bookmarked
   */
  const isBookmarked = (productId: string): boolean => {
    return bookmarkedProducts.has(productId);
  };

  /**
   * Clear all bookmarks
   */
  const clearBookmarks = () => {
    setBookmarkedProducts(new Set());
  };

  return {
    bookmarkedProducts,
    toggleBookmark,
    isBookmarked,
    clearBookmarks
  };
};
