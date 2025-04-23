# Project Overview: QybrrLabs Blog

## 1. Description

QybrrLabs is a modern blog application focused on AI topics. It utilizes a headless CMS (Sanity) for content management and Supabase for user authentication and potentially other backend features like comments. The frontend is built with Next.js and styled using Tailwind CSS.

## 2. Key Technologies

*   **Framework:** [Next.js](https://nextjs.org/) (using App Router)
*   **Language:** TypeScript / JavaScript
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Content Management:** [Sanity.io](https://www.sanity.io/)
*   **Authentication & Database:** [Supabase](https://supabase.com/)
*   **Deployment:** [Netlify](https://www.netlify.com/)

## 3. Core Features

*   **Blog:** Displays posts fetched from Sanity CMS.
*   **Sanity Studio:** Embedded CMS studio accessible at `/studio`.
*   **User Authentication:**
    *   Sign Up (`/signup`)
    *   Login (`/login`)
    *   Profile Page (`/profile`)
*   **Pricing Page:** Displays different subscription tiers (`/pricing`).
*   **Shop Page:** Basic page structure for courses/products (`/shop`).
*   **Comments System:** Database table and security policies set up in Supabase (frontend implementation pending).
*   **Other Planned Sections:** Navigation links added for "Tools" and "Latest News" (pages need creation).
*   **Theming:** Light/Dark mode toggle.

## 4. Project Structure Highlights

*   `app/`: Contains the Next.js App Router structure, including page routes (`(website)/page.js`, `(website)/post/[slug]/page.js`, etc.) and the Sanity Studio route (`(sanity)`).
*   `components/`: Reusable React components (Navbar, Footer, PostList, etc.).
*   `lib/`: Utility functions and client initializations.
    *   `lib/sanity/`: Configuration, client, schemas, and utilities for Sanity.
    *   `lib/supabase/`: Configuration and client initialization for Supabase.
*   `public/`: Static assets like images.
*   `styles/`: Global CSS and potentially other stylesheets.
*   Configuration Files: `next.config.js`, `tailwind.config.js`, `sanity.config.ts`, `netlify.toml`, etc.

## 5. Local Setup & Development

1.  **Clone:** Clone the repository.
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    *   Create a `.env.local` file in the project root.
    *   Add the following required variables with your actual credentials:
        ```env
        # Sanity (obtain from manage.sanity.io)
        NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
        NEXT_PUBLIC_SANITY_DATASET="production" # Or your dataset name
        SANITY_STUDIO_PROJECT_ID="YOUR_SANITY_PROJECT_ID" # Often same as public one
        SANITY_API_READ_TOKEN="YOUR_SANITY_READ_TOKEN" # Needed for fetching data

        # Supabase (obtain from your Supabase project settings)
        NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
        NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

        # (Optional) Sanity Revalidate Secret (if using ISR webhooks)
        # SANITY_REVALIDATE_SECRET="YOUR_SECRET_STRING"
        ```
    *   **Note:** Ensure `.env.local` is in your `.gitignore` file.
4.  **Run Development Servers:**
    *   For the Next.js frontend:
        ```bash
        npm run dev
        ```
        (Usually available at `http://localhost:3000`)
    *   For the Sanity Studio (in a separate terminal):
        ```bash
        npm run sanity
        ```
        (Usually available at `http://localhost:3333/studio`)

## 6. Deployment (Netlify)

*   Connect the GitHub repository to a new Netlify site.
*   Netlify should automatically detect Next.js (`@netlify/plugin-nextjs`).
*   The `netlify.toml` file configures the build command (`next build`) and publish directory (`.next`).
*   **Crucially**, add all the environment variables listed in step 5.3 (excluding any potentially sensitive tokens like `SANITY_API_READ_TOKEN` if not strictly needed by the *build process* itself, though build-time fetching might require it) to your Netlify site's build environment settings (Site configuration > Build & deploy > Environment > Environment variables). 