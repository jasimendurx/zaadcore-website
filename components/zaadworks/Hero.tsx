"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ZaadWorksHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="zaadworks-hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=60"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* Video atmosphere */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-luminosity"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/390318954.sd.mp4?s=71026b9fcb95f6f4dc16bde46a677f15ff08b0f8&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/97 via-[#080d18]/82 to-[#080d18]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/50 via-transparent to-[#080d18]" />
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      {/* Accent glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Live product
              </span>
            </div> */}

            <p className="section-label mb-4">by ZaadCore</p>

            <h1
              id="zaadworks-hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.06] mb-5 text-white"
            >
              ZaadWorks —{" "}
              <span className="text-accent">HRMS built for UAE.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              A complete workforce management platform for UAE businesses. WPS-compliant
              payroll, attendance, leave, and employee self-service — in Arabic and English.
            </p>

            <ul className="space-y-3 mb-9">
              {[
                "100% UAE WPS & MOHRE compliant",
                "Arabic and English interface",
                "Multi-entity payroll",
                "Attendance and leave management",
                "Employee self-service portal",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary">
                Request a demo <ArrowRight size={14} />
              </a>
              <a href="#modules" className="btn-ghost">
                See modules
              </a>
            </div>
          </motion.div>

          {/* Right — product image + floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Top badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 z-20 card-glass rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Compliance</div>
              <div className="text-sm font-bold text-white">UAE WPS Certified</div>
            </motion.div>

            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                alt="ZaadWorks workforce management"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/75 via-[#080d18]/10 to-transparent" />

              {/* Inline stat row */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[
                  { label: "WPS Rate", value: "100%" },
                  { label: "Languages", value: "AR + EN" },
                  { label: "Uptime", value: "99.9%" },
                ].map((s) => (
                  <div key={s.label} className="card-glass rounded-lg p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-6 z-20 card-glass rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Payroll</div>
              <div className="text-sm font-bold text-white">Multi-entity ready</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080d18] to-transparent pointer-events-none" />
    </section>
  );
}
