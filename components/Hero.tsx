"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Globe, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "98%", label: "WPS Compliance Rate" },
  { value: "60%", label: "Faster Payroll Runs" },
  { value: "24/7", label: "Employee Self-Service" },
  { value: "MOHRE", label: "Fully Integrated" },
];

const badges = [
  { icon: Shield, label: "UAE Labour Law Compliant" },
  { icon: Zap, label: "Real-time Attendance" },
  { icon: Globe, label: "Arabic & English" },
];

const highlights = [
  "WPS payroll and SIF generation",
  "Multi-entity operations and workflows",
  "Employee self-service and approvals",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/70 via-[#0a0e1a]/85 to-[#0a0e1a]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-24 w-[620px] h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-slate-300">Now available in UAE</span>
              <span className="text-orange-400 font-medium">ZaadWorks HRMS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-white">HRMS That Fits</span>
              <br />
              <span className="text-gradient-orange">UAE Operations</span>
              <br />
              <span className="text-gradient-slate">From Day One.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-lg text-slate-300 leading-relaxed mb-8"
            >
              ZaadWorks gives HR, payroll, and operations teams one unified system to run attendance,
              leave, payroll, and compliance with speed and clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-2 mb-8"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="text-orange-400" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  boxShadow: "0 0 32px rgba(249, 115, 22, 0.4), 0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                Book Product Demo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#zaadworks"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-slate-200 font-medium text-base glass hover:border-slate-600 transition-all duration-200 hover:text-white"
              >
                <Play size={16} className="text-orange-400" />
                Explore Modules
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
                  className="glass rounded-2xl p-3 text-center"
                >
                  <div
                    className="text-xl sm:text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    <span className="text-gradient-orange">{stat.value}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="rounded-3xl p-5 sm:p-6 border border-slate-700/70"
              style={{
                background: "linear-gradient(160deg, rgba(15,23,42,0.88) 0%, rgba(30,41,59,0.72) 100%)",
                boxShadow: "0 28px 90px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src="/vectors/zaadworks-matrix.svg"
                alt="ZaadWorks interface visual"
                className="w-full rounded-2xl border border-slate-700/60"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 text-xs text-slate-200">
              🇦🇪 Built for UAE workforces
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 text-xs text-slate-200">
              ⚡ Fast onboarding in days
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-slate-500">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-orange-500/50 to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
