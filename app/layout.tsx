import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
    default: "ZaadCore — Enterprise Operating Platform for the Modern Workforce",
    template: "%s | ZaadCore",
  },
  description:
    "ZaadCore builds enterprise-grade workforce management products for MENA. Starting with ZaadWorks — a fully UAE WPS-compliant HRMS built for multicultural teams.",
  keywords: [
    "HRMS UAE",
    "HR software Dubai",
    "WPS compliant payroll",
    "employee management UAE",
    "workforce management MENA",
    "ZaadCore",
    "ZaadWorks",
    "UAE labour law",
    "HR platform Middle East",
    "payroll software UAE",
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
    title: "ZaadCore — Enterprise Operating Platform for the Modern Workforce",
    description:
      "WPS-compliant HRMS, payroll, attendance, and workforce tools built for UAE and MENA businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZaadCore — Workforce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZaadCore — Enterprise Workforce Platform",
    description:
      "WPS-compliant HRMS built for UAE and MENA. Payroll, attendance, ESS, and more.",
    images: ["/og-image.png"],
    creator: "@zaadcore",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/next.svg", type: "image/svg+xml" },
    ],
    apple: "/next.svg",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://zaadcore.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZaadCore",
  url: "https://zaadcore.com",
  logo: "https://zaadcore.com/logo.png",
  description:
    "ZaadCore builds enterprise workforce management products for MENA businesses. Starting with ZaadWorks — UAE WPS-compliant HRMS.",
  sameAs: [
    "https://linkedin.com/company/zaadcore",
    "https://twitter.com/zaadcore",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressLocality: "Dubai",
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
          description:
            "Enterprise HRMS with WPS-compliant payroll, attendance, leave management, and ESS for UAE businesses.",
        },
      },
    ],
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
      data-theme="dark"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#0a0e1a] text-slate-200">
          <PageLoader />
          {children}
        </body>
    </html>
  );
}
