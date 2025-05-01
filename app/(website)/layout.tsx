// Remove client-side imports from layout
// import React, { useState } from 'react';
// import { useWeb3Forms, Web3FormsProvider } from "@web3forms/react"; 
import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import NewsletterSection from "@/components/NewsletterSection"; // Import the new component

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
export default async function Layout({ children, params }) {
  // const settings = await getSettings(); // Keep if needed by Footer/other server parts

  return (
    <>
      <Header />
      <main>{children}</main>
      
      {/* Render the Client Component for the Newsletter */}
      {/* Provider might not be needed if hook doesn't require context */}
      {/* Check Web3Forms docs if <Web3FormsProvider> is required */}
      <NewsletterSection />
      {/* </Web3FormsProvider> */}

      <Footer /> 
    </>
  );
}

// enable revalidate for all pages in this layout
// export const revalidate = 60;
