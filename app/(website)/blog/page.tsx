import React from 'react';
import { client } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Link from 'next/link';
import Image from 'next/image';

// --- Interfaces (Ensure these match your actual Sanity schema) ---
interface SanityImageReference {
  _type: 'image';
  asset?: {
    _ref: string;
    _type: 'reference';
  };
}

interface Post {
  _id: string;
  title?: string; // Make potentially missing fields optional
  slug?: string;
  publishedAt?: string;
  mainImage?: SanityImageReference;
  excerpt?: string;
  author?: {
    name?: string;
  };
}

// --- Data Fetching --- 
async function fetchPublishedPosts(): Promise<Post[]> {
  if (!client) {
    console.error("Sanity client is not initialized.");
    return [];
  }
  try {
    // Fetch only posts with required fields defined (title, slug, _id)
    // Ensure mainImage and its asset are fetched if mainImage exists
    const query = `
      *[
        _type == "post" && 
        defined(slug.current) && 
        defined(title) && 
        !(_id in path('drafts.**'))
      ] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        mainImage { 
          _type,
          asset->{_ref, _type} // Ensure asset is expanded
        },
        excerpt,
        author->{
          name
        }
      }
    `;
    const posts: Post[] = await client.fetch(query);
    return posts || []; 
  } catch (error) {
    console.error("Failed to fetch Sanity posts:", error);
    return [];
  }
}

// --- Helper Function for Image URL (Optional but good practice) ---
function getImageUrl(image: SanityImageReference | undefined | null): string | null {
  // Robust check before calling urlForImage
  if (image && image.asset && image._type === 'image') {
    try {
      return urlForImage(image).width(600).height(338).fit('crop').url();
    } catch (e) {
      console.error("Error generating image URL:", e);
      return null; // Handle potential errors in urlForImage itself
    }
  }
  return null;
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