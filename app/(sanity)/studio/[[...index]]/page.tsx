/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';

// Imports the config from the root directory
import config from '../../../../sanity.config';

// Ensure the Studio route is statically generated
export const dynamic = 'force-static';

// Exports the metadata and viewport directly from next-sanity/studio
// This replaces the individual imports that caused the error
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
