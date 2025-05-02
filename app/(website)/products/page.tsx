'use client';

import React from 'react';
import Image from 'next/image'; // Import next/image
// Remove Header and Footer imports from the page file
// import Header from "@/components/Header"; 
// import Footer from "@/components/Footer";
import ProductCardCoffee from '@/components/ProductCardCoffee'; // Import the new card
// Import the shared Product type
import type { Product } from '@/lib/types';

// Placeholder data structure - Now empty but typed
const placeholderProducts: Product[] = [
  // Removed Socio product data
];

export default function ProductsPage() {
  // --- Filtering/Sorting logic would go here ---
  const products = placeholderProducts;

  // Original return block (uncommented)
  return (
    <div className="flex flex-col flex-grow"> 
      {/* Removed Header comment */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Removed Optional title comment */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {/* Map for other products (currently empty based on placeholder data) */}
          {products.map((product) => (
            <ProductCardCoffee key={product.id} product={product} />
          ))}

          {/* Manually Added & Linked Product Card for Socio */}
          <a 
            href="https://stately-zuccutto-85f0f7.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              {/* Image Area - Using socio.jpeg */}
              <div className="relative aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
                <Image 
                  src="/socio.jpeg"
                  alt="Socio - Snap, Caption, Share!"
                  fill // Use fill for responsive covering
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  // Add sizes prop for optimization if layout is complex
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              {/* Content Area */}            
              <div className="p-4 text-center flex-grow flex flex-col">
                <h3 className="font-medium text-gray-900 truncate mb-2 flex-grow">
                  {/* Removed inner link comment */}
                  Socio - Snap, Caption, Share!
                </h3>
                {/* Price Section */}
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {/* Removed badge styling comment */}
                    <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                      Free For Members
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Includes 7-day free trial!
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Removed Fallback message comment block */}
        </div>

      </main>

      {/* Removed Footer comment */}
    </div>
  ); // End of original return block 
} 