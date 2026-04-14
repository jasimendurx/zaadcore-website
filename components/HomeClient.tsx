"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Zap,
  Brain,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

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

export default function HomeClient() {
  return (
    <>
      {/* ══════════ HERO ══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/96 via-[#080d18]/80 to-[#080d18]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/40 via-transparent to-[#080d18]" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

        {/* Orange radial glow */}
        <div
          className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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

            {/* Right — hero image card */}
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

              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
                  alt="ZaadCore engineering"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 via-[#080d18]/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 card-glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-orange-500">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">UAE WPS-Compliant HRMS</div>
                      <div className="text-xs text-slate-400">Ready to deploy · Dubai, UAE</div>
                    </div>
                  </div>
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080d18] to-transparent pointer-events-none" />
      </section>

      {/* ══════════ CAPABILITIES ══════════════════════════════ */}
      <section
        id="services"
        className="relative py-24 overflow-hidden"
        aria-labelledby="capabilities-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0f1e]" />
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14">
            <p className="section-label mb-3">What we build</p>
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl font-bold text-white max-w-lg"
            >
              Three capabilities. One team.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <article className="card overflow-hidden h-full flex flex-col group">
                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1524] via-[#0e1524]/30 to-transparent" />
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
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ZAADWORKS PRODUCT ═════════════════════════ */}
      <section
        id="products"
        className="relative py-24 overflow-hidden"
        aria-labelledby="zaadworks-heading"
      >
        {/* Dark BG with mesh */}
        <div className="absolute inset-0 bg-[#080d18]" />
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

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
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
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                    alt="ZaadWorks dashboard"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 to-transparent" />

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

      {/* ══════════ PROCESS ═══════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        aria-labelledby="process-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0f1e]" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        {/* Faint bg image */}
        <div className="absolute inset-0 opacity-[0.06]">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=40"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0f1e]/80" />
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14">
            <p className="section-label mb-3">How we work</p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              From brief to production.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <article className="card p-6 h-full relative overflow-hidden group hover:border-orange-500/20 transition-colors">
                  {/* Step number as large bg watermark */}
                  <span
                    className="absolute -bottom-2 -right-1 text-7xl font-black text-white/[0.03] select-none pointer-events-none leading-none"
                  >
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ═══════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-28 overflow-hidden"
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
        <div className="absolute inset-0 bg-[#080d18]/88" />
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
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
