import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import the shared Product type
import type { Product } from '@/lib/types';

// Remove the local Product type definition
/*
type Product = { ... };
*/

// Props type for the component
interface ProductCardCoffeeProps {
  product: Product; // Use imported Product type
}

const ProductCardCoffee: React.FC<ProductCardCoffeeProps> = ({ product }) => {
  const displayPrice = product.price === 0 ? 'Free' : `$${product.price.toFixed(0)}`; // Assuming whole dollars
  const discountedPrice = product.discountedPrice !== undefined ? `$${product.discountedPrice.toFixed(0)} for members` : null;

  return (
    <Link href={`/products/${product.slug}`} className="block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group transition-all duration-200 hover:shadow-md">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] bg-gray-100"> {/* Adjust aspect ratio as needed */}
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />
        {/* Inventory Tag Overlay */}
        {product.inventoryTag && (
          <span className="absolute top-2 left-2 bg-red-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            {product.inventoryTag}
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 mb-2 truncate group-hover:text-purple-700">
          {product.title}
        </h3>
        <div className="flex items-center text-sm space-x-2">
          <span className="font-semibold text-gray-800">{displayPrice}</span>
          {discountedPrice && (
            <span className="text-xs bg-pink-100 text-pink-700 font-medium px-1.5 py-0.5 rounded">
              {discountedPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCardCoffee; 