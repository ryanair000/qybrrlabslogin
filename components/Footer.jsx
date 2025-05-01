import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
// Import necessary Heroicons (adjust path based on solid/outline preference)
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter, // Represents X
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa'; // Using react-icons/fa for common brands

// You might need to install react-icons: npm install react-icons

export default function Footer() {
  // Define social links for easier management
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'X', href: '#', icon: FaTwitter },
    { name: 'YouTube', href: '#', icon: FaYoutube },
    { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  ];

  return (
    <footer className="border-t border-gray-200 mt-20 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="inline-block mb-2">
               <Image
                  src="/logo.png" // Path relative to /public
                  alt="QybrrLabs Logo"
                  width={120} // Adjust width as needed (maybe smaller than header)
                  height={32} // Adjust height as needed
                  className="h-auto" // Maintain aspect ratio
                />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} QybrrLabs. unlock endless possibilities
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Optional: Curator Link (Removed as it seems out of place) */}
          {/* <div className="text-sm text-gray-600">
            curated by <a href="#" className="font-semibold text-gray-800 hover:underline">Mobbin</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
} 