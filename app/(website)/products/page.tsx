'use client';

import React from 'react';
// Remove Header and Footer imports from the page file
// import Header from "@/components/Header"; 
// import Footer from "@/components/Footer";
import ProductCardCoffee from '@/components/ProductCardCoffee'; // Import the new card

// Placeholder data structure - Now empty as Socio will be rendered manually
const placeholderProducts = [
  // Removed Socio product data
];

export default function ProductsPage() {
  // --- Filtering/Sorting logic would go here ---
  const products = placeholderProducts;

  // Restore original return block
  /* // Remove temporary test JSX
  return (
    <div>
      <h1>Products Page Test</h1>
      <p>If you see this, the basic component structure is fine.</p>
    </div>
  );
  */

 // Original return block (uncommented)
  return (
    <div className="flex flex-col flex-grow"> 
      {/* Remove Header rendering from the page */}
      {/* <Header /> */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Optional: Add a page title here if desired */}
        {/* <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h1> */}

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
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/socio.jpeg"
                  alt="Socio - Snap, Caption, Share!"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content Area */}            
              <div className="p-4 text-center flex-grow flex flex-col">
                <h3 className="font-medium text-gray-900 truncate mb-2 flex-grow">
                  {/* No inner link needed as the whole card is a link */}
                  Socio - Snap, Caption, Share!
                </h3>
                {/* Price Section */}
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {/* Apply badge styling */}
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

          {/* Fallback message if needed (only shows if products array is empty AND Socio card wasn't added) */}
          {/* {products.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-10">
              {/* Consider adjusting message if Socio is the only product expected */}
              No products available yet.
            </p>
          )} */}
        </div>

      </main>

      {/* Remove Footer rendering from the page */}
      {/* <Footer /> */}
    </div>
  ); // End of original return block 
} 