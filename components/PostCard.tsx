import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import the image URL builder and types
import { urlForImage } from '@/lib/sanity/image';
import type { Post, SanityImageReference } from '@/lib/types'; // Import Post and SanityImageReference

// Props type for the component (using imported Post type)
interface PostCardProps {
  post: Post;
}

// Make the component a Functional Component with typed props
const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // Destructure or access properties safely
  const title = post?.title || 'Untitled';
  const description = post?.excerpt || ''; // Use excerpt

  // Generate image URL using the helper function
  let imageUrl: string | null = null;
  if (post?.mainImage) {
    try {
      // urlForImage returns { src, width, height }, we need src
      const imageData = urlForImage(post.mainImage);
      imageUrl = imageData?.src || null;
    } catch (e) {
      console.error("Error generating image URL for PostCard:", e);
    }
  }
  // Fallback image if generation fails or no mainImage
  const finalImageUrl = imageUrl || '/placeholder-card.png'; 

  const tag = post?.categories?.[0]?.title || 'Misc';
  const date = post?.publishedAt;
  // Use the slug object structure from the Post type
  const postSlug = post?.slug?.current || '#';

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No date';

  return (
    <Link href={`/post/${postSlug}`} className="bg-white rounded-lg overflow-hidden flex flex-col group border border-gray-200 transition-all duration-300 hover:border-gray-300">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={finalImageUrl} // Use the generated or fallback URL
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          // Add sizes prop for optimization if needed
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-semibold px-1.5 py-0.5 rounded shadow-sm z-10">
          {tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-black">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <p className="text-xs text-gray-400 mt-auto">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}

export default PostCard; // Export default 