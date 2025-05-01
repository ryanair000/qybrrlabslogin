/* eslint-disable */
// Centralized TypeScript type definitions

// Interface for Sanity Image References (as used in blog/page.tsx)
export interface SanityImageReference {
  _type: 'image';
  asset?: {
    _ref: string;
    _type: 'reference';
  };
}

// Interface for Sanity Category Reference (used within Post)
export interface SanityCategoryReference {
    _id: string;
    title: string;
    // Add other category fields if needed
}

// Interface for Sanity Post documents (as used in blog/page.tsx and page.tsx)
// Includes optional fields and the category reference
export interface Post {
  _id: string;
  title?: string; 
  slug?: { current: string; _type: 'slug'; }; // Adjusted slug type based on common Sanity patterns
  publishedAt?: string;
  mainImage?: SanityImageReference;
  excerpt?: string;
  author?: {
    name?: string;
  };
  categories?: SanityCategoryReference[]; // Array of category references
}

// Interface for Product data (based on ProductCardCoffee.tsx)
export type Product = {
  id: string;
  slug: string; // Assuming product pages will use slugs like /products/[slug]
  imageUrl: string;
  title: string;
  price: number;
  discountedPrice?: number; // Optional discounted price
  inventoryTag?: string; // Optional tag like "Only 5 left"
  currency?: string; // Optional currency symbol/code
}; 