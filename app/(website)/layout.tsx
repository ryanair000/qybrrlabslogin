'use client'; // Add use client for the hook

import React, { useState } from 'react';
import { useWeb3Forms, Web3FormsProvider } from "@web3forms/react";
import { getSettings } from "@/lib/sanity/client";
// import Footer from "@/components/footer"; // Keep your existing Footer for now or decide which one to use
import { urlForImage } from "@/lib/sanity/image";
// import Navbar from "@/components/navbar"; // Remove import for old Navbar
import Header from "@/components/Header"; // Import the new Header
import Footer from "@/components/Footer"; // Import the new Footer

// Define the Newsletter Section as a separate component
function NewsletterSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const {
    submit: onSubmit, 
    // You can use isLoading, isSuccess, isError from the hook if needed
  } = useWeb3Forms({
    // Replace with your actual Web3Forms Access Key
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "94792db3-1819-401d-b5aa-b95496f68385",
    settings: {
      from_name: "QybrrLabs Newsletter Signup",
      subject: "New Newsletter Subscriber!",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResultMessage(msg || "Thank you for subscribing!");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResultMessage(msg || "Something went wrong. Please try again.");
    },
  });

  return (
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-indigo-700 my-16 overflow-hidden">
        {/* Background shapes (optional decoration) */}
        <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
          <svg className="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1"/>
            <defs>
              <linearGradient id="linear1" x1="254.553" y1="107.554" x2="-20.62" y2="384.625" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Unlock the Future of AI, Today.
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100 max-w-2xl mx-auto">
            Be the first to know about new product launches, cutting-edge research, and exclusive insights from QybrrLabs. Join our newsletter!
          </p>
          
          {/* Updated form using onSubmit from the hook */}
          <form onSubmit={onSubmit} className="mt-10 sm:flex sm:justify-center">
             {/* Access Key is handled by the hook config, no hidden input needed unless specified by web3forms */}
            <input 
              id="email-address" 
              name="email" // Ensure name is 'email' for web3forms
              type="email" 
              autoComplete="email" 
              required 
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white rounded-md shadow-sm sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
              >
                Subscribe
              </button>
            </div>
          </form>
          {/* Submission Result Message */}
          {resultMessage && (
            <p className={`mt-6 text-center text-sm ${isSuccess ? 'text-green-200' : 'text-red-200'}`}>
              {resultMessage}
            </p>
          )}
        </div>
      </section>
  );
}

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

export default async function Layout({ children, params }) {
  const settings = await getSettings(); // Keep settings if needed by other parts or the original Footer
  return (
    <>
      {/* Use the new Header component */}
      <Header />

      {/* Removed the mt-2 class from here, can be added to main content area if needed */}
      <main>{children}</main>

      {/* Render the Client Component for the Newsletter */}
      <Web3FormsProvider> { /* Context provider if needed by hook, check docs */ }
        <NewsletterSection />
      </Web3FormsProvider>

      {/* Use the new Footer component */}
      {/* If your original Footer used settings, you might need to adapt the new one or keep the old one */}
      <Footer />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
