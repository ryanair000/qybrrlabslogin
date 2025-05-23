// Remove client-side imports from layout
// import React, { useState } from 'react';
// import { useWeb3Forms, Web3FormsProvider } from "@web3forms/react"; 
import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import NewsletterSection from "@/components/NewsletterSection"; // Import the new component
import { Analytics } from "@vercel/analytics/react";
import { cx } from "@/utils/all";
import { Inter, Fira_Code } from "next/font/google";
// Remove draftMode related imports
// import { draftMode } from 'next/headers';
// import { VisualEditing } from 'next-sanity';
// import { LiveQueryProvider } from 'next-sanity/preview';
// import { token, client } from "@/sanity/lib/client";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

// Remove the NewsletterSection function definition from here
// function NewsletterSection() { ... }

// Metadata functions remain server-side
async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "QybrrLabs - Blog",
      template: "%s | QybrrLabs"
    },
    description:
      settings?.description ||
      "QybrrLabs - Blog powered by Next.js and Sanity",
    keywords: ["Next.js", "Sanity", "Tailwind CSS", "QybrrLabs"],
    authors: [{ name: "Surjith" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "QybrrLabs",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

// Main Layout (remains async server component)
export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  // Removed isDraftMode check

  return (
    <html lang="en" className={cx(inter.variable, firaCode.variable, "scroll-smooth")}>
      <body className="bg-white flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {/* Removed conditional rendering based on draftMode */}
          {children}
        </div>
        <NewsletterSection />
        <Footer />
        <Analytics />
        {/* Removed conditional VisualEditing component */}
      </body>
    </html>
  );
}

// enable revalidate for all pages in this layout
// export const revalidate = 60;
