"use client";

import { ThemeProvider } from "next-themes";
import React, { useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation'; // Use navigation router in App Router

export function Providers({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Listener for Supabase auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Supabase Auth Event:', event); // Optional: for debugging
        if (event === 'SIGNED_IN') {
          console.log('User signed in, redirecting to homepage...');
          // Redirect to homepage after sign-in
          router.push('/');
          // Refresh the page to ensure server components reload with new auth state
          router.refresh(); 
        } else if (event === 'SIGNED_OUT') {
          // Optional: Handle sign-out redirection if needed (e.g., to login page)
          // router.push('/login');
          // router.refresh(); 
        }
      }
    );

    // Cleanup listener on component unmount
    return () => {
      // Call unsubscribe on the subscription object
      authListener?.subscription?.unsubscribe();
    };
  }, [router]); // Add router to dependency array

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
