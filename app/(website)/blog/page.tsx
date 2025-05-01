import React from 'react';
import { client, sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/lib/sanity/image";
import Link from 'next/link';
import Image from 'next/image';
// Import shared types
import type { Post, SanityImageReference } from '@/lib/types'; 

// --- Data Fetching --- 
async function fetchPublishedPosts(): Promise<Post[]> {
  // We don't need the client directly here anymore unless for generateStaticParams if added
  // if (!client) { ... }

  try {
    const query = `
      *[
        _type == "post" && 
        defined(slug.current) && 
        defined(title) && 
        !(_id in path('drafts.**'))
      ] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current, // Fetch slug as object if needed by type, else just slug.current
        publishedAt,
        mainImage { 
          _type,
          asset->{_ref, _type} // Ensure asset is expanded
        },
        excerpt,
        author->{
          name
        },
        categories[]->{ // Add categories if needed
          _id,
          title
        }
      }
    `;
    // Use sanityFetch, providing the query and relevant tags for revalidation
    const posts = await sanityFetch<Post[]>({ 
      query,
      tags: ['post'] // Tag requests for revalidation
    });
    return posts || []; 
  } catch (error) {
    console.error("Failed to fetch Sanity posts:", error);
    return [];
  }
}

// --- Helper Function for Image URL (Optional but good practice) ---
function getImageUrl(image: SanityImageReference | undefined | null): string | null {
  // Return null early if image or asset is missing
  if (!image || !image.asset || image._type !== 'image') {
    return null;
  }
  
  // Now TypeScript knows image and image.asset are defined here
  try {
    // Use non-null assertion (!) since we've checked image and image.asset
    // This explicitly tells TypeScript that 'image' is not null/undefined here.
    const imageUrlData = urlForImage(image!); 

    // The original urlForImage returns an object {src, width, height}
    // We only need the src for this helper
    return imageUrlData?.src || null; 

  } catch (e) {
    console.error("Error generating image URL:", e);
    return null; // Handle potential errors in urlForImage itself
  }
}

// --- Page Component --- 
export default async function BlogIndexPage() {
  const posts = await fetchPublishedPosts();

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">
        Blog
      </h1>
      
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            // Skip rendering this post if essential data is missing
            if (!post._id || !post.slug || !post.title) {
              console.warn('Skipping post due to missing essential data:', post);
              return null; 
            }

            const imageUrl = getImageUrl(post.mainImage);
            const postUrl = `/post/${post.slug}`;

            return (
              <article key={post._id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                {imageUrl ? (
                  <Link href={postUrl} className="block aspect-video relative bg-gray-100">
                    <Image 
                      src={imageUrl}
                      alt={post.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                ) : (
                  // Optional: Placeholder if no image
                  <div className="aspect-video bg-gray-100"></div> 
                )}
                
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <Link href={postUrl} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900 hover:text-indigo-600">{post.title}</p>
                      {post.excerpt && (
                        <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
                      )}
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric'
                          })}
                        </time>
                      )}
                      {post.author?.name && post.publishedAt && (
                         <span aria-hidden="true">&middot;</span>
                      )}
                      {post.author?.name && (
                         <span>by {post.author.name}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No blog posts published yet.
        </div>
      )}
    </main>
  );
} 