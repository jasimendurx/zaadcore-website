"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  BarChart3,
  ShoppingCart,
  ShoppingBag,
  Bot,
  MessageSquare,
  Smartphone,
  Wrench,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL = `https://wa.me/971582366125?text=${encodeURIComponent("Hi ZaadCore, I'd like to discuss a project.")}`;

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    desc: "Bespoke, high-performance websites built to your brand — from landing pages to full corporate portals.",
    tags: ["UI/UX Design", "SEO-Ready", "Responsive"],
  },
  {
    icon: BarChart3,
    title: "Business CRMs",
    desc: "Tailor-made CRM systems that fit your sales pipeline, customer lifecycle, and reporting needs.",
    tags: ["Lead Management", "Automation", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    desc: "End-to-end online stores with secure payments, inventory management, and conversion-focused design.",
    tags: ["Payments", "Inventory", "Multi-currency"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Integrations",
    desc: "Custom Shopify themes, apps, and third-party integrations to extend your storefront capabilities.",
    tags: ["Custom Themes", "API Integrations", "Automation"],
  },
  {
    icon: Bot,
    title: "AI Agent Bots",
    desc: "Intelligent AI agents that handle support, lead qualification, scheduling, and internal workflows.",
    tags: ["LLM-Powered", "Multi-channel", "Custom Training"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Bots",
    desc: "Automated WhatsApp flows for customer support, order updates, reminders, and sales engagement.",
    tags: ["WhatsApp Business API", "Flows", "24/7 Automation"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for Android and iOS — from MVP to production-grade.",
    tags: ["Android", "iOS", "React Native"],
  },
  {
    icon: Wrench,
    title: "Application Maintenance",
    desc: "Ongoing support, bug fixes, upgrades, and performance improvements for existing applications.",
    tags: ["Monitoring", "Bug Fixes", "Upgrades"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesClient() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[46vh] flex items-center overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div
          className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d18]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">What we do</p>
            <h1
              id="services-heading"
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.06] mb-4 text-white max-w-2xl"
            >
              Software that{" "}
              <span className="text-accent">works for you</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              From custom websites to AI-powered automation — we design, build, and maintain
              digital products tailored to your business.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a project
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section ref={gridRef} className="relative py-16 overflow-hidden" aria-label="Our services">
        <div className="absolute inset-0 bg-[var(--sec-2)]" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate={gridInView ? "show" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariant}
                className="card p-6 rounded-2xl hover:border-orange-500/20 transition-colors group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/15 transition-colors">
                  <service.icon size={18} className="text-orange-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full text-slate-400 border border-white/8"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--sec-1)]" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <p className="section-label mb-4">Ready to build?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-xl mx-auto">
              Let&apos;s talk about your project
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm sm:text-base">
              Share what you&apos;re working on and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get in touch
                <ArrowRight size={15} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
