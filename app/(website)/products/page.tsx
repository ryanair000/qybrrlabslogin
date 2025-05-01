'use client';

import React from 'react';
// Remove Header and Footer imports from the page file
// import Header from "@/components/Header"; 
// import Footer from "@/components/Footer";
import ProductCardCoffee from '@/components/ProductCardCoffee'; // Import the new card

// Updated placeholder data structure
const placeholderProducts = [
  {
    id: 'prod_1',
    slug: 'taiwan-coloring-book',
    imageUrl: '/placeholder-product1.png', // Replace
    title: 'Taiwan Coloring Book - Digital Download',
    price: 5,
    discountedPrice: 4,
  },
   {
    id: 'prod_2',
    slug: 'taiwan-coloring-page',
    imageUrl: '/placeholder-product2.png', // Replace
    title: 'Taiwan Coloring Page!',
    price: 2,
    discountedPrice: 0,
  },
  {
    id: 'prod_3',
    slug: 'jungle-wallpaper',
    imageUrl: '/placeholder-product3.png', // Replace
    title: 'FREE Jungle Wallpaper!',
    price: 0,
  },
  {
    id: 'prod_4',
    slug: 'custom-photo-illustration',
    imageUrl: '/placeholder-product4.png', // Replace
    title: 'Custom Photo Illustration',
    price: 25,
    discountedPrice: 15,
    inventoryTag: 'Only 5 left',
  },
   {
    id: 'prod_5',
    slug: 'send-card-sticker',
    imageUrl: '/placeholder-product5.png', // Replace
    title: 'Send a card & a sticker to a friend!',
    price: 15,
    discountedPrice: 12,
    inventoryTag: 'Only 5 left',
  },
  {
    id: 'prod_6',
    slug: 'commission-gif',
    imageUrl: '/placeholder-product6.png', // Replace
    title: 'Commission a hand-drawn GIF',
    price: 15,
    discountedPrice: 10,
    inventoryTag: 'Only 3 left',
  },
];

export default function ProductsPage() {
  // --- Filtering/Sorting logic would go here ---
  const products = placeholderProducts;

  return (
    // The outer div and background can likely be removed if the layout handles it,
    // but we'll keep it for now to minimize layout shifts.
    // Consider moving styling like min-h-screen and bg-gray-50 to the layout if appropriate.
    <div className="flex flex-col flex-grow bg-gray-50"> 
      {/* Remove Header rendering from the page */}
      {/* <Header /> */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Optional: Add a page title here if desired */}
        {/* <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h1> */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {/* Existing Products Map */}
          {products.map((product) => (
            <ProductCardCoffee key={product.id} product={product} />
          ))}

          {/* Manually Added Product Card for Socio */}
          <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Optional: Image placeholder */}
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 flex items-center justify-center">
              {/* Placeholder Icon or Image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c.966 0 1.891-.39 2.574-1.073l.726-.726a2.5 2.5 0 00-3.536-3.536l-.726.726A2.5 2.5 0 0012 20.25z" /> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 5.25L17.5 2" />
              </svg>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Socio - Snap, Caption, Share!
              </h3>
              <p className="text-sm text-gray-500 mb-3 flex-grow">A powerful social media caption generator to boost your engagement.</p>
              
              <div className="text-xs text-gray-700 mb-1">
                Developed by: <span className="font-medium">Lokimax</span>
              </div>
              <div className="text-xs text-gray-500 mb-3">
                Release Date: <span className="font-medium">01/05/2025</span>
              </div>

              <div className="mt-auto">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Free Caption Generations Now!
                </span>
                {/* Optional: Link/Button */}
                {/* <a href="#" className="mt-3 block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">Learn More</a> */}
              </div>
            </div>
          </div>

          {/* Fallback message if needed */}
          {products.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-10">
              No products available yet.
            </p>
          )}
        </div>

      </main>

      {/* Remove Footer rendering from the page */}
      {/* <Footer /> */}
    </div>
  );
} 