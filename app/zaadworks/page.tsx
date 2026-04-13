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

      <section className="relative pb-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-6 md:p-8 border border-orange-500/20 grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="glass rounded-full px-3 py-1.5 text-slate-300">🏢 HRMS Product</span>
                <span className="glass rounded-full px-3 py-1.5 text-slate-300">🇦🇪 Built for UAE</span>
                <span className="glass rounded-full px-3 py-1.5 text-slate-300">✅ WPS Ready</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                ZaadWorks is a dedicated product by ZaadCore. This page covers complete product details,
                modules, compliance capability, and implementation outcomes for UAE organizations.
              </p>
            </div>
            <img
              src="/vectors/zaadworks-matrix.svg"
              alt="ZaadWorks product data vector"
              className="w-full rounded-2xl border border-slate-700/50"
            />
          </div>
        </div>
      </section>

      <ProductSuite />
      <Features />
      <Compliance />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
