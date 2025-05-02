import React from 'react';
import { client, sanityFetch } from "@/sanity/lib/client";
import HomePageClient from '@/components/HomePageClient';
// Import shared types from the new central location
import type { Post } from '@/lib/types'; 

// --- Data Fetching (Similar to blog page) --- 
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
        "slug": slug.current,
        publishedAt,
        mainImage { 
          _type,
          asset->{_ref, "_type": "reference"} // Explicitly set _type
        },
        excerpt,
        author->{
          name
        },
        categories[]->{ // Fetch category titles
          _id,
          title
        }
      }
    `;
    // Use sanityFetch, providing the query and relevant tags for revalidation
    const posts = await sanityFetch<Post[]>({ 
      query,
      tags: ['post'] // Tag requests for revalidation (adjust tag as needed)
    });
    return posts || []; 
  } catch (error) {
    console.error("Failed to fetch Sanity posts for homepage:", error);
    return [];
  }
}

// --- Server Page Component --- 
// This component runs on the server, fetches data, and passes it to the client component
export default async function ServerHomePage() {
  const posts = await fetchPublishedPosts();

  // Render the client component, passing the fetched posts as props
  return <HomePageClient posts={posts} />;
}
