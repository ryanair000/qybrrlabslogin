import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder type - replace with your actual Product type
type Product = {
  id: string;
  slug: string;
  imageUrl: string;
  collectionName?: string;
  title: string;
  edition?: number;
  name: string;
  price?: number;
  currency?: string;
};

// Props type for the component
interface ProductCardUniswapProps {
  product: Product;
}

const ProductCardUniswap: React.FC<ProductCardUniswapProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="block rounded-xl overflow-hidden bg-[#1B1B1B] border border-transparent hover:border-gray-700 transition-all duration-200 shadow-md group">
      {/* Image Section */}
      <div className="relative w-full aspect-square bg-gray-900"> {/* Assuming square images */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Dark Info Section */}
      <div className="bg-[#131313] px-4 py-3 border-t border-gray-800 flex items-center justify-between">
        <div className="text-white">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
            {product.collectionName || 'QYBRRLABS'}
          </div>
          <h3 className="text-sm font-bold tracking-tight flex items-center">
            {/* Placeholder Icon - Replace with relevant icon if needed */}
            {/* <svg className="w-3 h-3 mr-1.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="..."></path></svg> */}
            {product.title}
          </h3>
          {product.edition && (
            <div className="text-[10px] text-gray-500 mt-0.5">
              Edition of {product.edition.toLocaleString()}
            </div>
          )}
        </div>
        {/* Placeholder QR Code */}
        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 ml-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> {/* Simple placeholder */}
        </div>
      </div>

      {/* White Info Section */}
      <div className="bg-white px-4 py-3">
        <div className="text-sm font-medium text-gray-900 truncate mb-0.5">
          {product.name}
        </div>
        <div className="text-xs font-medium text-gray-500">
          {product.price ? `${product.price.toFixed(3)} ${product.currency || 'ETH'}` : 'Price unavailable'}
        </div>
      </div>
    </Link>
  );
};

export default ProductCardUniswap; 