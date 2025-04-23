import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Link from 'next/link';

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="py-5 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} {props?.copyright}. All rights reserved.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          <Link href="/about" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            About
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Contact
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link href="/archive" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            All Posts
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link href="/signup" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-5 md:justify-end">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
