import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaadcore.com"),
  title: {
    default: "ZaadCore — Software Studio in Dubai, UAE",
    template: "%s | ZaadCore",
  },
  description:
    "ZaadCore is a UAE-based software studio building enterprise platforms for MENA. Our flagship product is ZaadWorks — a WPS-compliant HRMS for UAE businesses.",
  keywords: [
    "software studio Dubai",
    "enterprise software UAE",
    "HRMS UAE",
    "WPS compliant payroll",
    "HR software Dubai",
    "ZaadCore",
    "ZaadWorks",
    "UAE labour law compliance",
    "workforce management MENA",
    "custom software development Dubai",
    "enterprise platform MENA",
  ],
  authors: [{ name: "ZaadCore", url: "https://zaadcore.com" }],
  creator: "ZaadCore",
  publisher: "ZaadCore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://zaadcore.com",
    siteName: "ZaadCore",
    title: "ZaadCore — Software Studio in Dubai, UAE",
    description:
      "Enterprise software and HRMS products built for UAE and MENA businesses. WPS-compliant, Arabic+English, production-grade.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZaadCore — Software Studio, Dubai UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZaadCore — Software Studio in Dubai, UAE",
    description:
      "Enterprise platforms and WPS-compliant HRMS built for UAE and MENA.",
    images: ["/og-image.png"],
    creator: "@zaadcore",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://zaadcore.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zaadcore.com/#organization",
  name: "ZaadCore",
  url: "https://zaadcore.com",
  logo: {
    "@type": "ImageObject",
    url: "https://zaadcore.com/logo.png",
  },
  description:
    "ZaadCore is a UAE-based software studio that builds enterprise platforms and workforce management products for MENA businesses.",
  sameAs: [
    "https://linkedin.com/company/zaadcore",
    "https://twitter.com/zaadcore",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@zaadcore.com",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
    areaServed: ["AE", "SA", "KW", "QA", "BH", "OM"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ZaadCore Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "ZaadWorks",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://zaadcore.com/zaadworks",
          description:
            "WPS-compliant HRMS with payroll, attendance, leave management, and employee self-service for UAE businesses.",
          featureList: [
            "UAE WPS & MOHRE compliance",
            "Arabic and English interface",
            "Multi-entity payroll",
            "Attendance tracking",
            "Leave management",
            "Employee self-service portal",
          ],
          offers: {
            "@type": "Offer",
            priceCurrency: "AED",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zaadcore.com/#website",
  name: "ZaadCore",
  url: "https://zaadcore.com",
  publisher: {
    "@id": "https://zaadcore.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://zaadcore.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#0a0e1a] text-slate-200 antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
