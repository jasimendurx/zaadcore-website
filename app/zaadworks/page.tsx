import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ZaadWorksHero from "@/components/zaadworks/Hero";
import ZaadWorksModules from "@/components/zaadworks/Modules";
import ZaadWorksFeatures from "@/components/zaadworks/Features";
import ZaadWorksCompliance from "@/components/zaadworks/Compliance";
import ZaadWorksCTA from "@/components/zaadworks/CTA";

export const metadata: Metadata = {
  title: "ZaadWorks — HRMS for UAE",
  description:
    "ZaadWorks is a WPS-compliant HRMS built for UAE businesses. Payroll, attendance, leave management, and employee self-service in one platform.",
  alternates: {
    canonical: "https://zaadcore.com/zaadworks",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://zaadcore.com" },
    { "@type": "ListItem", position: 2, name: "ZaadWorks", item: "https://zaadcore.com/zaadworks" },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ZaadWorks",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://zaadcore.com/zaadworks",
  description:
    "ZaadWorks is a WPS-compliant HRMS for UAE businesses with payroll, attendance, leave management, and employee self-service.",
  publisher: {
    "@type": "Organization",
    name: "ZaadCore",
    url: "https://zaadcore.com",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "UAE WPS & MOHRE compliant payroll",
    "Arabic and English interface",
    "Multi-entity payroll management",
    "Attendance tracking",
    "Leave management",
    "Employee self-service portal",
    "Document management",
    "Visa and Emirates ID tracking",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ZaadWorks UAE WPS compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ZaadWorks is fully compliant with the UAE Wages Protection System (WPS) and MOHRE regulations. It handles SIF file generation and submission automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Does ZaadWorks support Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ZaadWorks supports both Arabic and English across the full interface, including payslips, reports, and the employee self-service portal.",
      },
    },
    {
      "@type": "Question",
      name: "Can ZaadWorks handle multiple companies or entities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ZaadWorks supports multi-entity payroll management, allowing you to manage multiple companies or business units from a single platform.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a demo of ZaadWorks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact ZaadCore at hello@zaadcore.com or through the contact page at zaadcore.com/contact. We will schedule a demo within 24 hours.",
      },
    },
  ],
};

export default function ZaadWorksPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <ZaadWorksHero />
        <ZaadWorksModules />
        <ZaadWorksFeatures />
        <ZaadWorksCompliance />
        <ZaadWorksCTA />
      </main>
    </SiteShell>
  );
}
