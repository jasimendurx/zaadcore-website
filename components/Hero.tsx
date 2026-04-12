"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

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

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg grid-pattern"
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center"
      >
        {/* Announcement badge */}
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
          <span className="text-slate-400">Now available in UAE</span>
          <span className="text-orange-400 font-medium">ZaadWorks HRMS →</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="text-white">The Operating</span>
          <br />
          <span className="text-gradient-orange">Platform</span>
          <br />
          <span className="text-white">for Modern</span>
          <br />
          <span className="text-gradient-slate">Workforces.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10"
        >
          ZaadCore builds enterprise-grade workforce products for MENA.
          Starting with{" "}
          <span className="text-orange-400 font-semibold">ZaadWorks</span> —
          a fully WPS-compliant HRMS engineered for UAE&#39;s multicultural teams.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-slate-300"
            >
              <b.icon size={14} className="text-orange-400" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              boxShadow: "0 0 32px rgba(249, 115, 22, 0.4), 0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            Get a Free Demo
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#zaadworks"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-slate-300 font-medium text-base glass hover:border-slate-600 transition-all duration-200 hover:text-white"
          >
            <Play size={16} className="text-orange-400" />
            See ZaadWorks
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-gradient-orange">{stat.value}</span>
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%)",
            border: "1px solid rgba(249,115,22,0.15)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(249,115,22,0.08)",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4">
              <div className="bg-slate-800/60 rounded-lg px-3 py-1 text-xs text-slate-500 max-w-xs">
                app.zaadworks.com/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="p-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar mockup */}
              <div className="col-span-2 hidden sm:block">
                <div className="flex flex-col gap-2">
                  {["Dashboard", "Employees", "Attendance", "Leave", "Payroll"].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-xs font-medium ${
                        i === 0
                          ? "bg-orange-500/20 text-orange-400"
                          : "text-slate-600 hover:text-slate-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content mockup */}
              <div className="col-span-12 sm:col-span-10">
                {/* KPI row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Total Employees", val: "248", trend: "+12" },
                    { label: "Present Today", val: "221", trend: "89%" },
                    { label: "Leave Requests", val: "7", trend: "pending" },
                    { label: "Payroll Run", val: "AED 1.2M", trend: "this month" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="glass-bright rounded-xl p-3">
                      <div className="text-[10px] text-slate-500 mb-1">{kpi.label}</div>
                      <div className="text-base font-bold text-white">{kpi.val}</div>
                      <div className="text-[10px] text-orange-400">{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 glass-bright rounded-xl p-4 h-28">
                    <div className="text-xs text-slate-500 mb-2">Attendance Trend</div>
                    <div className="flex items-end gap-1 h-16">
                      {[60, 75, 70, 85, 90, 88, 92, 87, 95, 91, 89, 94].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 11
                              ? "linear-gradient(to top, #f97316, #fb923c)"
                              : "rgba(51,65,85,0.8)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="glass-bright rounded-xl p-4 h-28">
                    <div className="text-xs text-slate-500 mb-2">Leave Types</div>
                    <div className="flex flex-col gap-1.5 mt-2">
                      {[
                        { type: "Annual", pct: 65, color: "#f97316" },
                        { type: "Sick", pct: 20, color: "#6366f1" },
                        { type: "Other", pct: 15, color: "#334155" },
                      ].map((l) => (
                        <div key={l.type} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                          <div className="text-[10px] text-slate-500 flex-1">{l.type}</div>
                          <div className="text-[10px] text-slate-400">{l.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-slate-600">Scroll to explore</div>
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
