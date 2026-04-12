import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSuite from "@/components/ProductSuite";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductSuite />
      <Features />
      <Compliance />
      <Pricing />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
