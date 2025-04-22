# Technical Documentation - QybrrLabs Blog

**Version:** 3.0.0 (based on `package.json`)
**Generated:** (Current Date)

**Table of Contents:**

1.  [Project Overview](#project-overview)
    - [Purpose](#purpose)
    - [Tech Stack](#tech-stack)
2.  [Setup & Installation](#setup--installation)
    - [Prerequisites](#prerequisites)
    - [Cloning](#cloning)
    - [Dependencies](#dependencies)
    - [Environment Variables](#environment-variables)
    - [Running Locally](#running-locally)
3.  [Project Structure](#project-structure)
4.  [Configuration Files](#configuration-files)
    - [Next.js (`next.config.js`)](#nextjs-nextconfigjs)
    - [Tailwind CSS (`tailwind.config.js`)](#tailwind-css-tailwindconfigjs)
    - [PostCSS (`postcss.config.js`)](#postcss-postcssconfigjs)
    - [Sanity Studio (`sanity.config.ts`)](#sanity-studio-sanityconfigts)
    - [Sanity CLI (`sanity.cli.ts`)](#sanity-cli-sanityclits)
    - [TypeScript (`tsconfig.json`)](#typescript-tsconfigjson)
    - [Linting/Formatting (`.eslintrc`, `.prettierrc`)](#lintingformatting-eslintrc-prettierrc)
5.  [Routing (Next.js App Router)](#routing-nextjs-app-router)
    - [Root Layout (`app/layout.tsx`)](#root-layout-applayouttsx)
    - [Route Groups (`app/(website)`, `app/(sanity)`)](#route-groups-appwebsite-appsanity)
    - [Page Structure (e.g., `app/(website)/post/[slug]/page.js`)](#page-structure-eg-appwebsitepostslugpagejs)
    - [Metadata Generation (`generateMetadata`)](#metadata-generation-generatemetadata)
    - [Static Generation (`generateStaticParams`, ISR)](#static-generation-generatestaticparams-isr)
6.  [Styling](#styling)
    - [Tailwind CSS](#tailwind-css)
    - [Global Styles](#global-styles)
    - [Fonts (`next/font`)](#fonts-nextfont)
    - [Dark Mode (`next-themes`)](#dark-mode-next-themes)
7.  [State Management & Providers](#state-management--providers)
    - [`app/providers.jsx` (`ThemeProvider`)](#appprovidersjsx-themeprovider)
8.  [Data Fetching & Sanity Integration](#data-fetching--sanity-integration)
    - [Sanity Client (`lib/sanity/client.ts`)](#sanity-client-libsanityclientts)
    - [Configuration (`lib/sanity/config.ts`)](#configuration-libsanityconfigts)
    - [GROQ Queries (`lib/sanity/groq.js`)](#groq-queries-libsanitygroqjs)
    - [Image Handling (`lib/sanity/image.js`, `@sanity/image-url`)](#image-handling-libsanityimagejs-sanityimage-url)
    - [Sanity Schemas (`lib/sanity/schemas/`)](#sanity-schemas-libsanityschemas)
    - [Portable Text (`blockContent.js`)](#portable-text-blockcontentjs)
    - [Sanity Studio (`sanity dev`)](#sanity-studio-sanity-dev)
    - [Data Import/Export](#data-importexport)
9.  [Components](#components)
    - [Layout Components (`Navbar`, `Footer`, `Container`, `Layout`)](#layout-components-navbar-footer-container-layout)
    - [Page Specific Components (`PostList`, `Featured`)](#page-specific-components-postlist-featured)
    - [UI Components (`ThemeSwitch`, `Loading`)](#ui-components-themeswitch-loading)
10. [Deployment](#deployment)
    - [Build Process](#build-process)
    - [Platform Considerations (Vercel)](#platform-considerations-vercel)
11. [Troubleshooting](#troubleshooting)
    - [Missing Environment Variables](#missing-environment-variables)
    - [Content Not Updating (Caching)](#content-not-updating-caching)
12. [Potential Improvements & Considerations](#potential-improvements--considerations)

---

## 1. Project Overview

### Purpose

_(Based on template name and structure)_ This project, **QybrrLabs**, is a blog built using Next.js and Sanity CMS, based on the Stablo template. It provides a foundation for creating personal or company blogs with a clean design and a powerful content management backend.

_(Please update with specific project goals if different)_

### Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript & JavaScript
- **CMS:** Sanity.io (v3)
- **Styling:** Tailwind CSS v3, PostCSS
- **UI Components:** Headless UI
- **State Management (Theme):** `next-themes`
- **Data Fetching (Sanity):** `next-sanity`
- **Linting/Formatting:** ESLint, Prettier
- **Package Manager:** pnpm (implied by `pnpm-lock.yaml`)
- **Deployment:** Vercel (implied by env vars, logo)

---

## 2. Setup & Installation

### Prerequisites

- Node.js (Check `package.json` engines or Next.js/Sanity requirements for specific version, likely 18+)
- pnpm (or npm/yarn, though lockfile is pnpm)
- Sanity Account ([sanity.io](https://sanity.io/))
- Sanity Project created

### Cloning

```bash
git clone <repository-url>
cd <repository-directory>
```

### Dependencies

```bash
pnpm install
# or npm install / yarn install
```

### Environment Variables

Create a `.env.local` file in the project root by copying `.env.local.example`. Fill in the required values:

```.env.local
# Found in your Sanity project settings (manage.sanity.io)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
SANITY_STUDIO_PROJECT_ID=your_project_id_here # Recommended to set both

# Usually 'production', but verify in your Sanity project settings
NEXT_PUBLIC_SANITY_DATASET=production

# A secret string for securing preview/revalidation endpoints
# Generate a strong random string
SANITY_REVALIDATE_SECRET=your_secret_key_here

# Optional: Set API version if different from default in lib/sanity/config.ts
# NEXT_PUBLIC_SANITY_API_VERSION=YYYY-MM-DD
```

### Running Locally

1.  **Run Sanity Studio:**

    ```bash
    pnpm sanity dev # Or: npm run sanity / yarn sanity
    ```

    Access the studio typically at `http://localhost:3333`.

2.  **Run Next.js Frontend:**
    ```bash
    pnpm dev # Or: npm run dev / yarn dev
    ```
    Access the website typically at `http://localhost:3000`.

---

## 3. Project Structure

```
/
├── app/                      # Next.js App Router Root
│   ├── (sanity)/             # Routes related to Sanity Studio/Preview
│   ├── (website)/            # Main website routes (posts, pages, etc.)
│   │   ├── about/
│   │   ├── archive/
│   │   ├── contact/
│   │   ├── post/[slug]/      # Dynamic route for single posts
│   │   ├── layout.tsx        # Layout specific to website section
│   │   └── page.js           # Homepage entry point
│   │   └── home.js           # Homepage rendering component
│   ├── api/                  # Next.js API Routes
│   ├── layout.tsx            # Root layout
│   ├── providers.jsx         # Client-side providers (ThemeProvider)
│   └── favicon.ico
├── components/               # Reusable React components
│   ├── blog/                 # Blog-specific components
│   ├── ui/                   # Generic UI elements
│   ├── footer.js
│   ├── navbar.js
│   ├── postlist.js
│   ├── themeSwitch.js
│   └── ...
├── lib/                      # Core logic, utilities, external services
│   └── sanity/               # Sanity-specific code
│       ├── schemas/          # Sanity schema definitions
│       ├── plugins/          # Custom Sanity Studio plugins
│       ├── client.ts         # Sanity client & data fetching functions
│       ├── config.ts         # Sanity connection configuration
│       ├── groq.js           # GROQ query definitions
│       └── image.js          # Image URL builder utility
├── public/                   # Static assets (images, fonts)
├── styles/                   # Global CSS, Tailwind base
├── .env.local.example        # Example environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration (for Tailwind)
├── sanity.cli.ts             # Sanity CLI configuration
├── sanity.config.ts          # Sanity Studio configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── ...                     # Other config files (.eslintrc, .prettierrc, etc.)
```

---

## 4. Configuration Files

### Next.js (`next.config.js`)

- Enables `reactStrictMode` and `swcMinify`.
- Configures Image Optimization:
  - Formats: AVIF, WebP.
  - Allows SVG (`dangerouslyAllowSVG: true`).
  - Sets `cdn.sanity.io` as a remote pattern for optimized Sanity images.
- **Warning:** Ignores TypeScript and ESLint errors during production builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true` when `VERCEL_ENV === "production"`). **This is not recommended** and should be disabled unless there's a specific reason.

### Tailwind CSS (`tailwind.config.js`)

- Scans `app`, `pages`, `components` for class usage.
- Enables class-based Dark Mode (`darkMode: "class"`).
- Extends theme:
  - Remaps `gray` to `neutral` colors.
  - Adds custom font families (`Inter`, `Lora`) via CSS variables.
  - Adds custom `aspectRatio` utilities.
- Includes `@tailwindcss/typography` plugin for styling markdown/Portable Text.

### PostCSS (`postcss.config.js`)

- Includes `tailwindcss` and `autoprefixer`. Standard setup for using Tailwind.

### Sanity Studio (`sanity.config.ts`)

- Defines project ID, dataset, base path (`/studio`).
- Uses `deskTool` with custom structure (`pageStructure`).
- Includes plugins: `visionTool`, `singletonPlugin` (for settings), `unsplashImageAsset`, `table`, `codeInput`.
- Loads schema types from `lib/sanity/schemas`.
- Preview configuration seems partially commented out.

### Sanity CLI (`sanity.cli.ts`)

- Imports `projectId` and `dataset` from `lib/sanity/config.ts` to configure API access for CLI commands. Requires environment variables to be set correctly in the shell where CLI commands are run.

### TypeScript (`tsconfig.json`)

- Standard Next.js TypeScript configuration. Includes path aliases (`@/*`).

### Linting/Formatting (`.eslintrc`, `.prettierrc`)

- Configures ESLint (with `eslint-config-next`, `eslint-config-sanity`) and Prettier (with `prettier-plugin-tailwindcss`) for code consistency.

---

## 5. Routing (Next.js App Router)

### Root Layout (`app/layout.tsx`)

- Imports global styles (check if direct `tailwind.css` import is needed).
- Uses `next/font` to load `Inter` and `Lora`.
- Applies fonts via CSS variables (`cx(inter.variable, lora.variable)`).
- Sets base body styles and dark mode classes.
- Includes `suppressHydrationWarning` (needed for `next-themes`).
- Wraps children in `Providers` component.

### Route Groups (`app/(website)`, `app/(sanity)`)

- Uses route groups to organize sections without affecting URL paths.
- `(website)` contains the public-facing blog pages.
- `(sanity)` likely contains routes for the embedded Studio or preview functionality.

### Page Structure (e.g., `app/(website)/post/[slug]/page.js`)

- Follows App Router conventions (`page.js`, `layout.tsx`).
- Uses dynamic segments (`[slug]`) for posts.
- Separates data fetching/metadata (`page.js`) from rendering logic (`./default.js` in the post example).

### Metadata Generation (`generateMetadata`)

- Implemented in layouts (e.g., `app/(website)/layout.tsx`) and pages (e.g., `app/(website)/post/[slug]/page.js`).
- Fetches necessary data (settings, post data) to dynamically generate `title`, `description`, Open Graph tags, etc.
- Uses `sharedMetaData` helper in the website layout.
- **Recommendation:** Ensure `metadataBase` is uncommented and set in the root or website layout for correct Open Graph image URL resolution.

### Static Generation (`generateStaticParams`, ISR)

- `generateStaticParams` is used in `app/(website)/post/[slug]/page.js` (calling `getAllPostsSlugs`) to pre-render all post pages at build time.
- Incremental Static Regeneration (ISR) using `export const revalidate = <seconds>;` is commented out in page/layout files. Uncomment and configure if stale content needs automatic refreshing without full rebuilds. On-demand revalidation via webhooks (using `SANITY_REVALIDATE_SECRET`) is another option not explicitly configured but possible to add.

---

## 6. Styling

### Tailwind CSS

- Primary styling method. Utility classes are used throughout components.
- Configuration in `tailwind.config.js`.
- Uses `@tailwindcss/typography` for styling Portable Text content (`prose` classes).

### Global Styles

- Likely defined in `styles/globals.css` or a similar file imported by the root layout (though `app/layout.tsx` imports `styles/tailwind.css` directly, which is slightly unusual).

### Fonts (`next/font`)

- `Inter` (sans-serif) and `Lora` (serif) are loaded efficiently via `next/font` in `app/layout.tsx` and applied via CSS variables.

### Dark Mode (`next-themes`)

- Enabled via `ThemeProvider` in `app/providers.jsx`.
- Uses `class` strategy in `tailwind.config.js`.
- Theme switching handled by `components/themeSwitch.js`.
- Dark mode styles applied using Tailwind's `dark:` variant.

---

## 7. State Management & Providers

### `app/providers.jsx` (`ThemeProvider`)

- The primary client-side provider.
- Wraps the application in `ThemeProvider` from `next-themes` to manage dark/light mode switching.
- Marked as `"use client";`.

---

## 8. Data Fetching & Sanity Integration

### Sanity Client (`lib/sanity/client.ts`)

- Centralized module for Sanity interaction.
- Uses `createClient` from `next-sanity`.
- Conditionally creates client based on `projectId` availability.
- Exports async functions (`getAllPosts`, `getSettings`, `getPostBySlug`, etc.) wrapping specific GROQ queries.
- Includes basic error checking for missing `projectId` and empty datasets on initialization.
- Provides default empty array/object return values if fetch fails or client is null. **Consider adding more robust error handling or typing.**
- Exports a `fetcher` for potential use with SWR.

### Configuration (`lib/sanity/config.ts`)

- Loads `projectId`, `dataset`, `apiVersion`, `useCdn` from environment variables (`process.env`). Provides fallbacks or defaults.
- Crucial for connecting the frontend and CLI to the correct Sanity project.

### GROQ Queries (`lib/sanity/groq.js`)

- Defines all GROQ queries used by the application.
- Uses `groq` tagged template from `next-sanity`.
- Well-organized with descriptive export names.
- Uses projections extensively to fetch only necessary data.
- Includes queries for posts, settings, authors, categories, slugs (for `generateStaticParams`), related posts, pagination, and search.
- Uses aliases (`blurDataURL`, `ImageColor`) and GROQ functions (`pt::text`, `round`, `length`, etc.).
- **Potential Issue:** Pagination logic in `paginatedquery` needs review (`[$pageIndex...$limit]` might need adjustment).

### Image Handling (`lib/sanity/image.js`, `@sanity/image-url`)

- Uses `@sanity/image-url` library via a helper function `urlForImage` (likely defined in `lib/sanity/image.js`) to generate image URLs from Sanity image assets.
- Supports generating URLs for optimized images (`next/image`) and potentially extracting metadata like `blurDataURL` and palette colors (configured in `postquery`).

### Sanity Schemas (`lib/sanity/schemas/`)

- Defines the content model for Sanity.
- Includes schemas for `post`, `author`, `category`, `settings`, and `blockContent`.
- Schemas are well-structured, using appropriate types (references, slugs, image with hotspot, etc.).
- **Recommendation:** Add `Rule.required()` validation more consistently to essential fields.

### Portable Text (`blockContent.js`)

- Schema definition for the rich text editor (`type: "blockContent"`).
- Allows standard text blocks, marks, lists.
- Enables custom types: `image`, `code` (syntax highlighting), `embed` (YouTube, Spotify, etc. via URL), `table`.
- Uses custom preview components (`IframePreview`, `TablePreview`) for embeds and tables within the Studio.

### Sanity Studio (`sanity dev`)

- The embedded CMS interface. Run locally using `pnpm sanity dev`.
- Configuration in `sanity.config.ts`.
- Allows content editors to manage posts, authors, categories, and settings.

### Data Import/Export

- `package.json` includes scripts (`sanity-import`, `sanity-export`) for exporting/importing dataset content (useful for backups or transferring data). Uses `.tar.gz` format.

---

## 9. Components

_(Overview based on reviewed files)_

### Layout Components (`Navbar`, `Footer`, `Container`, `Layout`)

- **`Navbar` (`components/navbar.js`):** Responsive navigation bar with hardcoded links, logo support, mobile menu (using Headless UI).
- **`Footer` (`components/footer.js`):** Displays copyright, attribution links, Vercel logo, ThemeSwitch. Includes "Purchase Pro" backlink.
- **`Container` (`components/container.js`):** Simple wrapper component likely providing max-width and padding.
- **`Layout` (`components/layout.js`):** Potentially a reusable layout component, possibly wrapping content within Navbar/Footer (though `app/(website)/layout.tsx` seems to handle this).

### Page Specific Components (`PostList`, `Featured`, `PostPage`)

- **`PostList` (`components/postlist.js`):** Displays a grid or list item for a blog post preview (image, category, title, author, date). Configurable appearance.
- **`Featured` (`components/featured.js`):** Likely displays featured posts, potentially using `PostList` internally.
- **`PostPage` (`app/(website)/post/[slug]/default.js`):** Renders the full content of a single blog post, including title, metadata, main image, and the Portable Text body. _(Note: `default.js` was not explicitly reviewed but inferred as the rendering component)_.

### UI Components (`ThemeSwitch`, `Loading`, `CategoryLabel`)

- **`ThemeSwitch` (`components/themeSwitch.js`):** Button/UI element to toggle between dark and light modes. Interacts with `next-themes`.
- **`Loading` (`components/loading.js`):** Likely a spinner or placeholder shown during navigation or data fetching state.
- **`CategoryLabel` (`components/blog/category.js`):** Displays formatted category links, potentially with colors defined in the category schema. _(Note: Component not explicitly reviewed but used in `PostList`)_.

---

## 10. Deployment

### Build Process

- `pnpm build` (or `npm run build`) triggers `next build`.
- Next.js performs static generation for pages like posts (`generateStaticParams`) and other pages unless dynamic rendering or ISR is configured.
- `postbuild` script runs `next-sitemap` to generate `sitemap.xml`.

### Platform Considerations (Vercel)

- The project seems optimized for Vercel (environment variable checks, Vercel logo in footer).
- Ensure environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_STUDIO_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`) are configured in the Vercel project settings.
- Ignoring build errors in `next.config.js` is particularly relevant (though risky) in Vercel's production environment context.
- Consider setting up Sanity Webhooks and an API route for On-Demand Revalidation on Vercel if faster content updates than ISR are needed.

---

## 11. Troubleshooting

### Missing Environment Variables

- **Symptom:** Errors during `next dev` or `next build` related to Sanity connection; Sanity Studio/CLI errors about missing `projectId`.
- **Solution:** Ensure `.env.local` is present, correctly formatted, contains all required variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_STUDIO_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`), and that the values match your Sanity project. Restart dev server after changes. Ensure variables are set in the deployment environment.

### Content Not Updating (Caching)

- **Symptom:** Newly published Sanity content doesn't appear on the website.
- **Local (`next dev`):**
  1.  Confirm post is "Published" in Sanity Studio (correct dataset).
  2.  Check `useCdn` in `lib/sanity/config.ts` (should be `false` for dev).
  3.  **Restart the `next dev` server.**
  4.  Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R).
- **Production (Deployed):**
  1.  **SSG (Default):** Requires a **new build and deployment**.
  2.  **ISR (`revalidate`):** Wait for the revalidation period and a user visit, or trigger manually if On-Demand Revalidation is set up.
  3.  **On-Demand Revalidation:** Check if the webhook fired successfully and the revalidation function ran without errors (check deployment logs).
  4.  **Sanity CDN Cache:** Allow a few minutes for potential CDN propagation (`useCdn: true`).
  5.  **Browser Cache:** Hard refresh.

---

## 12. Potential Improvements & Considerations

- **Build Safety:** Remove `ignoreBuildErrors` and `ignoreDuringBuilds` from `next.config.js`.
- **TypeScript:** Convert remaining `.js`/`.jsx` files to `.ts`/`.tsx` for consistency. Add explicit types for data fetched from Sanity (e.g., using `sanity-codegen`).
- **Error Handling:** Enhance error handling around Sanity `client.fetch` calls.
- **GROQ Pagination:** Verify and correct the slice logic in `paginatedquery`.
- **Metadata:** Set `metadataBase` in layout for reliable Open Graph URLs.
- **ISR/Revalidation:** Implement a suitable content refreshing strategy (ISR or On-Demand Revalidation).
- **Schema Validation:** Add `Rule.required()` to essential Sanity schema fields.
- **Dependencies:** Check if `styled-components` is actively used alongside Tailwind.
- **Code Cleanup:** Remove unused code/logs (e.g., `console.log` in `sanity.config.ts`), check direct `tailwind.css` import.
- **Accessibility (a11y):** While Headless UI helps, perform specific accessibility checks (keyboard navigation, screen reader compatibility, color contrast).
- **Component Structure:** Refactor large components (like `Navbar`) if they become too complex.
- **Search:** Implement frontend search functionality possibly using the `searchquery` GROQ query or a dedicated search service.
