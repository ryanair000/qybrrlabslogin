import { Inter, Fira_Code } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/app/providers";
import { cx } from "@/utils/all";
import Analytics from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code"
});

export default function RootLayout({
  children
}) {
  return (
    <html
      lang="en"
      className={cx(inter.variable, firaCode.variable)}
      suppressHydrationWarning>
      <body>
        {process.env.NODE_ENV === "development" ? (
          <>
            <Providers>
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
          </>
        ) : (
          <>
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <Analytics />}
            <Providers>
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
          </>
        )}
      </body>
    </html>
  );
} 