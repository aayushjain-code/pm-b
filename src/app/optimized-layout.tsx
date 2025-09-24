"use client";

import { memo, Suspense } from "react";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";
import SEO from "@/components/SEO";
import { usePerformance } from "@/hooks/usePerformance";

// Lazy load components for better performance
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <div className="h-16 bg-white shadow-lg" />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-gray-900" />,
  ssr: true,
});

const ThemeProvider = dynamic(() => import("@/components/ThemeProvider"), {
  loading: () => <div />,
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

interface OptimizedLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const OptimizedLayout = memo<OptimizedLayoutProps>(
  ({ children, title, description, keywords, image, url }) => {
    // Performance monitoring
    usePerformance();

    return (
      <html lang="en" className={inter.className}>
        <head>
          <SEO
            title={title}
            description={description}
            keywords={keywords}
            image={image}
            url={url}
          />
          {/* Preload critical resources */}
          <link
            rel="preload"
            href="/images/praman-logo.jpeg"
            as="image"
            type="image/jpeg"
          />
          <link
            rel="preload"
            href="/fonts/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        </head>
        <body className={`${inter.className} antialiased`}>
          <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
              <ThemeProvider>
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </ThemeProvider>
            </Suspense>
          </ErrorBoundary>

          {/* Performance monitoring script */}
          {process.env.NODE_ENV === "development" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                // Log performance metrics
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    if (navigation) {
                      console.log('🚀 Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
                    }
                  }, 0);
                });
              `,
              }}
            />
          )}
        </body>
      </html>
    );
  }
);

OptimizedLayout.displayName = "OptimizedLayout";

export default OptimizedLayout;


