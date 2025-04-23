import React, { Suspense } from "react";
import { fetchPostsBySearchQuery } from "@/lib/sanity/groq";
import PostList from "@/components/postlist";
import Container from "@/components/container";

async function SearchResults({ query }) {
  const posts = await fetchPostsBySearchQuery(query);

  return (
    <>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No posts found matching your search.
        </p>
      )}
    </>
  );
}

export default function SearchPage({ searchParams }) {
  const query = searchParams?.q;

  if (!query) {
    return (
      <Container>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-yellow-300 lg:text-4xl lg:leading-snug">
          Search
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Please enter a search term in the navigation bar.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-yellow-300 lg:text-4xl lg:leading-snug">
        Search Results for "{query}"
      </h1>
      <Suspense fallback={<p className="text-center">Loading search results...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </Container>
  );
} 