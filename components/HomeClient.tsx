"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Zap,
  Brain,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "ZaadCore engineering team",
    label: "UAE WPS-Compliant HRMS",
    sub: "Ready to deploy · Dubai, UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    alt: "Enterprise software development",
    label: "Enterprise Platforms",
    sub: "Built to scale · Full-stack",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
    alt: "AI and automation systems",
    label: "AI-Ready Foundations",
    sub: "Intelligent workflows · Dubai",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Business analytics dashboard",
    label: "Business CRMs & Analytics",
    sub: "Data-driven decisions · MENA",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const capabilities = [
  {
    icon: Building2,
    title: "Enterprise Platforms",
    desc: "Multi-module systems for HR, operations, and finance — designed to scale and built to last.",
    points: ["Architecture and planning", "Full-stack implementation", "Long-term reliability"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    desc: "Workflow automation that eliminates repetitive work and accelerates execution.",
    points: ["Workflow design", "System integrations", "Monitoring and support"],
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=75",
  },
  {
    icon: Brain,
    title: "AI-Ready Foundations",
    desc: "System architectures designed to support intelligent features and AI workflows.",
    points: ["Data readiness", "Model-friendly APIs", "Governance and access control"],
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=75",
  },
];

const steps = [
  { num: "01", title: "Discover", desc: "We understand your goals, constraints, and team before writing a line of code." },
  { num: "02", title: "Design",   desc: "We define the architecture, interfaces, and delivery scope in a written proposal." },
  { num: "03", title: "Deliver",  desc: "We ship fast iterations with quality gates — not big-bang releases." },
  { num: "04", title: "Scale",    desc: "We stay engaged to extend, optimise, and support as your product grows." },
];

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HomeClient() {
  const [heroIdx, setHeroIdx] = useState(0);
  const heroRef = useRef(null);
  const zaadWorksRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY         = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { scrollYProgress: zaadScroll } = useScroll({ target: zaadWorksRef, offset: ["start end", "end start"] });
  const zaadImgY = useTransform(zaadScroll, [0, 1], ["-8%", "8%"]);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ══════════ HERO ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image — parallax layer */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 origin-center">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        {/* Video atmosphere */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-luminosity"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=27e75f73089c7479afd1cdccb9d2635e942cd0d6&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 ov-lr" />
        <div className="absolute inset-0 ov-tb" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

        {/* Orange radial glow */}
        <div
          className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: heroY, opacity: heroOpacity }}
            >
              {/* <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/8">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-semibold text-orange-300 tracking-wide">
                  Software Studio · Dubai, UAE
                </span>
              </div> */}

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.06] mb-6"
              >
                Software that moves your{" "}
                <span className="text-accent">business forward.</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10">
                ZaadCore builds enterprise-grade platforms for UAE and MENA companies.
                We handle the architecture, engineering, and delivery — so you can focus
                on the product.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <a href="/zaadworks" className="btn-primary">
                  See ZaadWorks <ArrowRight size={15} />
                </a>
                <a href="/contact" className="btn-ghost">
                  Start a project
                </a>
              </div>

              {/* Mini feature pills */}
              <div className="flex flex-wrap gap-2">
                {["UAE WPS Compliant", "Arabic + English", "Enterprise Grade", "Dubai Based"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-slate-400 border border-white/8 rounded-full bg-white/3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — auto-sliding image carousel */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
            >
              {/* Floating badge top-left */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-8 z-20 card-glass rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Live Product</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold text-white">ZaadWorks HRMS</span>
                </div>
              </motion.div>

              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroIdx}
                    src={heroImages[heroIdx].src}
                    alt={heroImages[heroIdx].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 ov-img-b" />

                {/* Caption badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${heroIdx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-5 left-5 right-5 card-glass rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-orange-500">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{heroImages[heroIdx].label}</div>
                        <div className="text-xs text-slate-400">{heroImages[heroIdx].sub}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIdx(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === heroIdx ? "bg-orange-400 w-4" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge bottom-right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 -right-8 z-20 card-glass rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Response SLA</div>
                <div className="text-sm font-bold text-white">Under 24 hours</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 ov-b pointer-events-none" />
      </section>

      {/* ══════════ CAPABILITIES ══════════════════════════════ */}
      <section
        id="services"
        className="relative py-20 overflow-hidden"
        aria-labelledby="capabilities-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--sec-2)]" />
        {/* Video atmosphere */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-luminosity pointer-events-none"
          autoPlay muted loop playsInline
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=27e75f73089c7479afd1cdccb9d2635e942cd0d6&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <FadeIn className="mb-10">
            <p className="section-label mb-3">What we build</p>
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl font-bold text-white max-w-lg"
            >
              Three capabilities. One team.
            </h2>
          </FadeIn>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {capabilities.map((item) => (
              <motion.article
                key={item.title}
                variants={cardItem}
                whileHover={{ scale: 1.015 }}
                className="card overflow-hidden h-full flex flex-col group"
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ov-card-b" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                      <item.icon size={15} className="text-orange-400" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 size={11} className="text-orange-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ ZAADWORKS PRODUCT ═════════════════════════ */}
      <section
        ref={zaadWorksRef}
        id="products"
        className="relative py-20 overflow-hidden"
        aria-labelledby="zaadworks-heading"
      >
        {/* Dark BG with mesh */}
        <div className="absolute inset-0 bg-[var(--sec-1)]" />
        <div className="absolute inset-0 bg-mesh pointer-events-none" />

        {/* Faint bg image */}
        <div className="absolute inset-0 opacity-[0.04]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=40"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <FadeIn>
              {/* <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-300 tracking-wide">Live Product</span>
              </div> */}
              <p className="section-label mb-3">Flagship product</p>
              <h2
                id="zaadworks-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-5"
              >
                ZaadWorks — HRMS built for UAE.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-7">
                Our production-ready HRMS handles payroll, attendance, leave, and employee
                self-service — fully compliant with UAE WPS and MOHRE regulations, with
                Arabic and English support.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "UAE WPS & MOHRE compliant payroll",
                  "Arabic and English interface",
                  "Multi-entity payroll in one platform",
                  "Mobile-first employee self-service",
                  "Attendance and leave management",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="/zaadworks" className="btn-primary">
                Explore ZaadWorks <ArrowRight size={14} />
              </a>
            </FadeIn>

            {/* Right — product screenshot */}
            <FadeIn delay={0.12}>
              <div className="relative">
                {/* Glow behind image */}
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
                  <div className="h-[400px] overflow-hidden">
                    <motion.img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                      alt="ZaadWorks dashboard"
                      style={{ y: zaadImgY }}
                      className="w-full h-[480px] object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 ov-img-b" />

                  {/* Overlay stat badges */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "WPS Rate", value: "100%" },
                      { label: "Languages", value: "AR / EN" },
                      { label: "Uptime", value: "99.9%" },
                    ].map((s) => (
                      <div key={s.label} className="card-glass rounded-lg p-3 text-center">
                        <div className="text-sm font-bold text-white">{s.value}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" aria-labelledby="services-preview-heading">
        <div className="absolute inset-0 bg-[var(--sec-1)]" />
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <FadeIn className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="section-label mb-3">Services</p>
                <h2 id="services-preview-heading" className="text-3xl sm:text-4xl font-bold text-white">
                  What we can build for you
                </h2>
              </div>
              <a href="/services" className="btn-ghost text-sm shrink-0 self-start sm:self-auto">
                View all services <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                title: "Custom Website Design",
                desc: "High-performance, on-brand websites from landing pages to full portals.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
                tag: "Web",
              },
              {
                title: "Mobile App Development",
                desc: "Native and cross-platform apps for Android and iOS, from MVP to launch.",
                img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=70",
                tag: "Android · iOS",
              },
              {
                title: "AI & WhatsApp Bots",
                desc: "Intelligent AI agents and WhatsApp automations for support, sales, and ops.",
                img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=70",
                tag: "AI · Automation",
              },
              {
                title: "Business CRMs",
                desc: "Tailor-made CRM systems matching your pipeline, lifecycle, and reporting needs.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=70",
                tag: "CRM · Analytics",
              },
              {
                title: "E-Commerce & Shopify",
                desc: "End-to-end online stores with payments, inventory, and Shopify integrations.",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=70",
                tag: "E-Commerce",
              },
              {
                title: "App Maintenance",
                desc: "Ongoing support, bug fixes, upgrades, and performance tuning for existing apps.",
                img: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=600&q=70",
                tag: "Support · Ops",
              },
            ].map((service) => (
              <motion.a
                key={service.title}
                href="/services"
                variants={cardItem}
                whileHover={{ scale: 1.015 }}
                className="group block card overflow-hidden hover:border-orange-500/20 transition-colors"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ov-card-b" />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full text-orange-300 border border-orange-500/25 bg-orange-500/10">
                    {service.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-white mb-1.5">{service.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ PROCESS ═══════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        aria-labelledby="process-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--sec-1)]" />
        {/* Video atmosphere */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-[0.09] mix-blend-luminosity pointer-events-none"
          autoPlay muted loop playsInline
        >
          <source
            src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        {/* Orange vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <FadeIn className="mb-10">
            <p className="section-label mb-3">How we work</p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              From brief to production.
            </h2>
          </FadeIn>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step) => (
              <motion.article
                key={step.num}
                variants={cardItem}
                whileHover={{ scale: 1.015 }}
                className="card p-6 h-full relative overflow-hidden group hover:border-orange-500/20 transition-colors"
              >
                <span className="absolute -bottom-2 -right-1 text-7xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                  {step.num}
                </span>
                <span className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ═══════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-20 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[var(--sec-1)]/88" />
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-4">Start a project</p>
                <h2
                  id="cta-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mb-5"
                >
                  Let us build your next platform.
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Share what you are working on. We will respond within 24 hours
                  with a practical path forward.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/contact" className="btn-primary">
                    Get in touch <ArrowRight size={14} />
                  </a>
                  <a href="mailto:hello@zaadcore.com" className="btn-ghost">
                    hello@zaadcore.com
                  </a>
                </div>
              </div>

              {/* Right side mini info cards */}
              <div className="space-y-4">
                {[
                  { label: "Location", value: "Dubai, United Arab Emirates" },
                  { label: "Email", value: "hello@zaadcore.com" },
                  { label: "Response time", value: "Within 24 hours" },
                  { label: "Specialisation", value: "Enterprise & HRMS" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-glass rounded-xl px-5 py-4 flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-500">{item.label}</span>
                    <span className="text-sm font-medium text-slate-200">{item.value}</span>
                    <ChevronRight size={13} className="text-slate-600 ml-2 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
