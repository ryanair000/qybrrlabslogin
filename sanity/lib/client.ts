import 'server-only' // Ensures this module runs only on the server

import { createClient, type QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers' // Import draftMode

import { apiVersion, dataset, projectId } from '../env'

// Export the read token for use in live query provider
export const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId) throw new Error('Missing SANITY_PROJECT_ID in .env');
if (!dataset) throw new Error('Missing SANITY_DATASET in .env');
if (!apiVersion) throw new Error('Missing SANITY_API_VERSION in .env');
// Note: token is optional, only required for draft mode with visual editing

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for server-side fetching, ISR, tag-based revalidation
  // Add stega config for visual editing (conditionally enabled based on draft mode)
  stega: {
    enabled: draftMode().isEnabled, // Use draftMode hook
    studioUrl: '/studio', // Or your deployed studio URL
    logger: console, // Optional logger
  },
})

// Define the sanityFetch wrapper function
const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags?: string[] // Make tags optional
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required for Draft Mode.')
  }

  // Determine perspective based on draft mode
  const perspective = isDraftMode ? 'previewDrafts' : 'published';

  // Determine caching strategy based on draft mode
  const nextCacheConfig = isDraftMode ? { revalidate: 0 } : { next: { tags } };

  return client.fetch<QueryResponse>(query, params, {
    // Required for the API client to work with outside fetch
    cache: 'default', // Let Next.js handle caching based on tags/revalidation
    // Pass token only in draft mode
    ...(isDraftMode && {
      token: token,
      perspective: perspective,
      useCdn: false, // Always fetch fresh data in draft mode
    }),
    // Conditionally pass tags for published content
    next: {
      ...(tags && { tags }), // Include tags if provided
      ...(isDraftMode && { revalidate: 0 }), // Disable caching in draft mode
    },
    // Enable stega only in draft mode
    stega: isDraftMode,
  })
}
