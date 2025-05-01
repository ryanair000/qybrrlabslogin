import React from 'react';
import { client } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Next Image for optimization

// We likely don't need Header/Footer imports here if app/(website)/layout.tsx handles them.

// Function to fetch posts (could also be directly in the component or imported)
// We'll use a direct client query here for simplicity
async function fetchPublishedPosts() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage,
      excerpt,
      author->{
        name
      }
    }
  `);
  return posts;
}


export default async function BlogIndexPage() {
  const posts = await fetchPublishedPosts();

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl">
        Blog
      </h1>
      
      {/* Blog Post Grid */}
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              {post.mainImage && (
                <Link href={`/post/${post.slug}`} className="block aspect-video relative">
                  <Image 
                    src={urlForImage(post.mainImage).width(600).height(338).url()}
                    alt={post.title || 'Blog post image'}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              )}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <Link href={`/post/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900 hover:text-indigo-600">{post.title}</p>
                    {post.excerpt && (
                      <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
                    )}
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  {/* Optional: Author info can go here */}
                  {/* Example: 
                  <div className="flex-shrink-0">
                     <span className="sr-only">{post.author?.name}</span>
                      If you fetch author image:
                     <Image className="h-10 w-10 rounded-full" src={urlForImage(post.author.image).url()} alt="" width={40} height={40} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author?.name}</p> 
                  </div> 
                  */}                 
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </time>
                    {post.author?.name && (
                       <> 
                        <span aria-hidden="true">&middot;</span>
                        <span>by {post.author.name}</span>
                       </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No blog posts published yet.
        </div>
      )}
    </main>
  );
} 