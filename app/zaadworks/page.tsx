import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSuite from "@/components/ProductSuite";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZaadWorks HRMS",
  description:
    "ZaadWorks is ZaadCore's HRMS product for UAE businesses, with WPS payroll, compliance, attendance, and employee self-service.",
  alternates: {
    canonical: "https://zaadcore.com/zaadworks",
  },
};

export default function ZaadWorksPage() {
  return (
    <main className="relative">
      <Navbar mode="product" />
      <Hero />
      <ProductSuite />
      <Features />
      <Compliance />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
