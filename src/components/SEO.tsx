import Head from "next/head";
import { BRAND } from "@/lib/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEO = ({
  title,
  description = BRAND.DESCRIPTION,
  keywords = [
    "3D laser scanning",
    "heritage conservation",
    "digital documentation",
    "LiDAR processing",
    "3D modeling",
    "BIM",
    "architectural surveying",
    "cultural heritage",
    "precision measurement",
    "non-destructive testing",
  ],
  image = "/images/praman-logo.jpeg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = BRAND.FULL_NAME,
  section,
  tags,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${BRAND.FULL_NAME}` : BRAND.FULL_NAME;
  const fullUrl = url ? `https://praman3d.com${url}` : "https://praman3d.com";
  const fullImage = image.startsWith("http")
    ? image
    : `https://praman3d.com${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={BRAND.FULL_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@praman3d" />
      <meta name="twitter:creator" content="@praman3d" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={BRAND.NAME} />

      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BRAND.FULL_NAME,
            alternateName: BRAND.NAME,
            url: "https://praman3d.com",
            logo: fullImage,
            description: BRAND.DESCRIPTION,
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9876543210",
              contactType: "customer service",
              email: "info@praman3d.com",
            },
            sameAs: [
              "https://linkedin.com/company/praman3d",
              "https://twitter.com/praman3d",
            ],
            service: [
              {
                "@type": "Service",
                name: "3D Laser Scanning",
                description:
                  "High-precision 3D laser scanning services for accurate as-built documentation",
              },
              {
                "@type": "Service",
                name: "Heritage Conservation",
                description:
                  "Digital documentation and conservation planning for cultural heritage sites",
              },
            ],
          }),
        }}
      />
    </Head>
  );
};

export default SEO;


