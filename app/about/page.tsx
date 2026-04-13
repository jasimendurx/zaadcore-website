"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Users, Globe, Zap, Shield } from "lucide-react";
import SiteShell from "@/components/SiteShell";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const values = [
  { icon: Zap,    title: "Craft",     desc: "We care about the quality of what we ship — not just whether it ships.",          iconColor: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: Globe,  title: "Clarity",   desc: "Every decision is communicated clearly — no hidden complexity, no surprises.",    iconColor: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  { icon: ArrowRight, title: "Execution", desc: "We bias toward action. Fast iterations. Real progress. Tangible outcomes.", iconColor: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
  { icon: Shield, title: "Ownership", desc: "We own outcomes, not tasks. If something isn't working, we fix it.",             iconColor: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
];

const moments = [
  { title: "Design & Product Planning",    desc: "Structured sessions that convert vision into execution",        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" },
  { title: "Engineering Collaboration",    desc: "Hands-on cross-functional teams embedded in delivery",          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" },
  { title: "Client Sprint Reviews",        desc: "Transparent progress with measurable outcomes every sprint",    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="relative">

        {/* ══════════ HERO ══════════ */}
        <section className="relative min-h-[88vh] overflow-hidden flex items-center">
          {/* Background video */}
          <video className="absolute inset-0 w-full h-full object-cover opacity-30" autoPlay muted loop playsInline>
            <source src="https://player.vimeo.com/external/390318954.sd.mp4?s=71026b9fcb95f6f4dc16bde46a677f15ff08b0f8&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>

          {/* Fallback + overlay layers */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=50" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #060a14/95 0%, #0a0e1a/88 50%, #0b1222/80 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/60 via-transparent to-[#0a0e1a]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

          {/* Orange orb */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-16 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 glass-dark rounded-full px-4 py-2 text-sm mb-8 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-slate-300 font-medium">About ZaadCore</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.04] mb-7"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  <span className="text-white">We build software</span><br />
                  <span className="text-gradient-orange">that people</span><br />
                  <span className="text-white">actually use.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
                  ZaadCore is a UAE-based software solutions company focused on execution quality,
                  measurable outcomes, and long-term product reliability. Strategy, design, and
                  engineering in one delivery system.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2">
                  {["UAE-Based Team", "Product + Engineering", "Long-term Partner", "Enterprise Grade"].map((tag) => (
                    <span key={tag} className="glass-dark rounded-full px-4 py-1.5 text-sm text-slate-400 border border-slate-700/50">{tag}</span>
                  ))}
                </motion.div>
              </div>

              {/* Right image */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:block relative">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 shadow-2xl shadow-black/50">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80" alt="ZaadCore team" className="w-full h-[460px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
                </div>
                <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-6 glass-dark rounded-xl px-4 py-3 border border-slate-700/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                      <Users size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">20+ Engineers</div>
                      <div className="text-xs text-slate-400">Across UAE & MENA</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0e1a] to-transparent pointer-events-none" />
        </section>

        {/* ══════════ VALUES ══════════ */}
        <section className="relative py-24 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-16">
              <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">What Drives Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">Our Values</span>
                <span className="text-gradient-orange"> in Motion</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Craft, clarity, execution, and ownership define how we work with every client.
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <article className={`glass-dark rounded-2xl p-6 border ${v.border} hover:border-opacity-50 transition-all duration-300 card-lift h-full`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${v.bg} border ${v.border}`}>
                      <v.icon size={20} className={v.iconColor} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>{v.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                  </article>
                </FadeUp>
              ))}
            </div>

            {/* Team moments */}
            <FadeUp className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>The team in action</h3>
              <p className="text-slate-400">Real environments, real collaboration, real delivery.</p>
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {moments.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.1}>
                  <article className="group relative rounded-2xl overflow-hidden border border-slate-700/50 card-lift h-72">
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-syne)" }}>{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ STATS ══════════ */}
        <section className="relative py-20 bg-[#0b1222] overflow-hidden">
          {/* bg video */}
          <video className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" autoPlay muted loop playsInline>
            <source src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0b1222]/80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { value: "5+",    label: "Years in the market",  sub: "UAE-based since founding" },
                  { value: "20+",   label: "Team members",         sub: "Engineers, designers, PMs" },
                  { value: "12+",   label: "Products shipped",     sub: "Across 6 industries" },
                  { value: "99.9%", label: "Platform uptime",      sub: "SLA-backed reliability" },
                ].map((s) => (
                  <div key={s.label} className="glass-dark rounded-2xl p-6 border border-slate-700/40 hover:border-orange-500/20 transition-colors">
                    <div className="text-3xl font-bold text-gradient-orange mb-2" style={{ fontFamily: "var(--font-syne)" }}>{s.value}</div>
                    <div className="text-white font-semibold mb-1">{s.label}</div>
                    <div className="text-xs text-slate-500">{s.sub}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="relative py-20 bg-[#0b1222]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="glass-dark rounded-3xl p-10 sm:p-14 text-center border border-slate-700/50">
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">Work With Us</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                  Want to build with ZaadCore?
                </h3>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                  Let us map your software roadmap, define the architecture, and start executing. We respond within 24 hours.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(249,115,22,0.3)]" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                    Contact Us <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/zaadworks" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-dark text-slate-300 font-medium border border-slate-700/50 hover:border-slate-500/50 transition-all">
                    Explore ZaadWorks
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
