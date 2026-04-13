"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Zap,
  Brain,
  CheckCircle2,
  ChevronRight,
  Globe,
  Users,
  Server,
  TrendingUp,
} from "lucide-react";

/* ─── helpers ───────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let c = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      c += step;
      if (c >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(c));
    }, 22);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── data ──────────────────────────────────────────────────────── */
const services = [
  {
    icon: Building2, title: "Enterprise Platforms", tag: "Architecture",
    iconColor: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20",
    desc: "Multi-module platforms for operations, HR, finance — built for scale from day one.",
    points: ["Architecture and planning", "Full-stack implementation", "Scale and reliability"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap, title: "Automation Systems", tag: "Integration",
    iconColor: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20",
    desc: "Workflow automations that cut repetitive work and improve execution speed.",
    points: ["Workflow design", "Integration orchestration", "Monitoring and support"],
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Brain, title: "AI-Ready Foundations", tag: "Intelligence",
    iconColor: "text-violet-400", bgColor: "bg-violet-500/10", borderColor: "border-violet-500/20",
    desc: "Architecture patterns that make your systems ready for intelligent AI features.",
    points: ["Data readiness", "Model-friendly APIs", "Governance and security"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

const process = [
  { phase: "01", name: "Discover", icon: Globe,       text: "Map goals, constraints, and stakeholders." },
  { phase: "02", name: "Design",   icon: TrendingUp,  text: "Define architecture, UX, and delivery scope." },
  { phase: "03", name: "Deliver",  icon: Server,      text: "Ship fast iterations with quality control." },
  { phase: "04", name: "Scale",    icon: Users,       text: "Optimise, extend, and support long-term growth." },
];

/* ─── component ─────────────────────────────────────────────────── */
export default function HomeClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOp   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} id="hero" className="relative min-h-screen overflow-hidden flex items-center">
        {/* Parallax bg image */}
        <motion.div style={{ y: bgY, scale: heroScale }} className="absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background video overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity"
          autoPlay muted loop playsInline
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=27e75f73089c7479afd1cdccb9d2635e942cd0d6&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050911]/95 via-[#050911]/82 to-[#050911]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050911]/50 via-transparent to-[#0a0e1a]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

        {/* Orange glow orb */}
        <motion.div
          animate={{ opacity: [0.18, 0.35, 0.18], scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-12 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)" }}
        />

        <motion.div style={{ opacity: heroOp }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2.5 glass-dark rounded-full px-4 py-2 text-sm mb-8 border border-orange-500/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-slate-300 font-medium">Software Solutions · Dubai, UAE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-tight mb-7"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-white">ZaadCore</span><br />
                <span className="text-gradient-orange">Builds Software</span><br />
                <span style={{ WebkitTextStroke: "1px rgba(148,163,184,0.28)", color: "transparent" }}>That Moves</span>{" "}
                <span className="text-slate-200">Businesses.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
                className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
              >
                Production-grade platforms for operations, workforce, and process automation.
                One team. One architecture. Faster outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }}
                className="flex flex-col sm:flex-row gap-3 mb-14"
              >
                <a href="/zaadworks" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  Explore ZaadWorks <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl glass-dark text-slate-300 font-medium border border-slate-700/50 hover:border-slate-500/60 hover:text-white transition-all duration-300">
                  Talk to ZaadCore
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {[
                  { value: 12, suffix: "+", label: "Products" },
                  { value: 6,  suffix: "",  label: "Industries" },
                  { value: 99, suffix: ".9%", label: "Uptime" },
                  { value: 24, suffix: "h",  label: "Response" },
                ].map((s) => (
                  <div key={s.label} className="glass-dark rounded-xl p-4 text-center border border-slate-700/35 hover:border-orange-500/20 transition-colors">
                    <div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] text-slate-500">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — hero card */}
            <motion.div
              initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative"
            >
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 z-20 glass-dark rounded-xl px-4 py-3 border border-slate-700/50 shadow-2xl">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Live Product</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-bold text-white">ZaadWorks</span>
                </div>
              </motion.div>

              <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 shadow-2xl shadow-black/60">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="ZaadCore engineering" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050911]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-2xl p-4 border border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">UAE WPS-Compliant HRMS</div>
                      <div className="text-xs text-slate-400">Ready to deploy · Dubai, UAE</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 -right-6 z-20 glass-dark rounded-xl px-4 py-3 border border-slate-700/50 shadow-2xl">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Response SLA</div>
                <div className="text-sm font-bold text-white">Under 24 hours</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0e1a] to-transparent pointer-events-none" />
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section id="services" className="relative py-20 bg-[#0a0e1a] overflow-hidden">
        {/* Subtle section video */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/390318954.sd.mp4?s=71026b9fcb95f6f4dc16bde46a677f15ff08b0f8&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Build</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-white">Three capabilities.</span><br />
              <span className="text-gradient-orange">One team.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Strategy, engineering, and design — united into one delivery system that ships fast and lasts.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.1}>
                <article className="group glass-dark rounded-2xl overflow-hidden border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 card-lift h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent" />
                    <span className={`absolute top-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full ${svc.bgColor} border ${svc.borderColor} ${svc.iconColor}`}>{svc.tag}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${svc.bgColor} border ${svc.borderColor}`}>
                      <svc.icon size={18} className={svc.iconColor} />
                    </div>
                    <h3 className="text-lg text-white font-semibold mb-3" style={{ fontFamily: "var(--font-syne)" }}>{svc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle2 size={13} className="text-orange-400 shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="relative py-24 bg-[#0b1222] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-[0.05]">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=60" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b1222]/90" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>How We Deliver</h2>
          </FadeUp>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
            {process.map((step, i) => (
              <FadeUp key={step.phase} delay={i * 0.08}>
                <article className="relative glass-dark rounded-2xl p-6 border border-slate-700/40 hover:border-orange-500/20 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-orange-400 group-hover:scale-110 transition-transform" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
                      {step.phase}
                    </div>
                    <step.icon size={16} className="text-slate-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>{step.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ZAADWORKS PRODUCT ══════════ */}
      <section id="products" className="relative py-20 bg-[#090e1a] overflow-hidden">
        {/* Background video */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#090e1a]/60 via-transparent to-[#090e1a]/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 border border-green-500/25" style={{ background: "rgba(34,197,94,0.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Live Product</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">Meet ZaadWorks.</span><br />
                <span className="text-slate-500 text-3xl sm:text-4xl">HRMS built for UAE.</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                WPS-compliant HRMS for multicultural teams. Payroll, attendance, leave management, ESS — all in one platform.
              </p>
              <ul className="space-y-3 mb-10">
                {["100% UAE WPS & MOHRE compliant", "Arabic + English interface", "Multi-entity payroll in one click", "Mobile-first employee self-service"].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={15} className="text-orange-400 shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <a href="/zaadworks" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                Visit ZaadWorks <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl opacity-15 blur-2xl" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.6), transparent)" }} />
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" alt="ZaadWorks dashboard" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a]/80 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                    {[{ label: "WPS Rate", value: "98%" }, { label: "Time Saved", value: "60%" }, { label: "Uptime", value: "99.9%" }].map((s) => (
                      <div key={s.label} className="glass-dark rounded-xl p-3 text-center border border-slate-700/50">
                        <div className="text-sm font-bold text-white">{s.value}</div>
                        <div className="text-[10px] text-slate-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT STRIP ══════════ */}
      <section id="about" className="relative py-16 bg-[#0b1222] border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">About ZaadCore</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  Built in UAE. Built for Scale.
                </h2>
              </div>
              <div className="flex gap-8 sm:gap-12">
                {[{ value: "5+", label: "Years" }, { value: "20+", label: "Team" }, { value: "12+", label: "Products" }].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient-orange mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
              <a href="/about" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark text-slate-300 font-medium border border-slate-700/50 hover:border-orange-500/25 transition-all shrink-0">
                Our Story <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section id="contact" className="relative py-24 overflow-hidden">
        {/* Full-bleed background video */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=27e75f73089c7479afd1cdccb9d2635e942cd0d6&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1222]/95 via-[#0c1222]/88 to-[#0a0e1a]/95" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="glass-dark rounded-3xl p-10 sm:p-14 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">Start a Project</p>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                    <span className="text-white">Let us build your</span><br />
                    <span className="text-gradient-orange">next advantage.</span>
                  </h3>
                  <p className="text-slate-400 mb-8">hello@zaadcore.com · Dubai, UAE · Under 24h response</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(249,115,22,0.3)]" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                      Start a Project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="mailto:hello@zaadcore.com" className="inline-flex items-center px-6 py-3 rounded-xl glass-dark text-slate-300 font-medium border border-slate-700/50 hover:border-slate-500/50 transition-all">
                      Email Directly
                    </a>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80" alt="Contact ZaadCore" className="w-full h-64 object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Start with a discovery call</span>
                    <a href="/contact" className="px-3.5 py-1.5 rounded-lg text-white text-xs font-semibold" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>Contact →</a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
