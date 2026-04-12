"use client";

import { motion } from "framer-motion";
import { Users, Clock, Calendar, DollarSign, FileText, BarChart3, Smartphone, Lock, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Users,
    title: "Employee Management",
    desc: "Complete employee lifecycle from onboarding to offboarding. Visa, passport, Emirates ID tracking built-in.",
    color: "#f97316",
  },
  {
    icon: Clock,
    title: "Attendance & GPS",
    desc: "Real-time GPS geofencing attendance. Clock-in from mobile, auto-shift detection, OT calculations.",
    color: "#6366f1",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    desc: "Approval workflows, leave balances, carry-forward rules, and UAE public holidays auto-populated.",
    color: "#10b981",
  },
  {
    icon: DollarSign,
    title: "WPS Payroll",
    desc: "Generate SIF files for WPS in one click. Full gratuity, MOHRE-compliant payslips, multi-entity payroll.",
    color: "#f97316",
  },
  {
    icon: FileText,
    title: "Document Vault",
    desc: "Encrypted employee document storage. Expiry alerts for visas, labour cards, and permits.",
    color: "#8b5cf6",
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    desc: "Headcount trends, turnover rates, payroll summaries, and leave utilization — all in real-time.",
    color: "#06b6d4",
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service",
    desc: "PWA for employees: apply leave, view payslips, update personal info — available in Arabic.",
    color: "#f59e0b",
  },
  {
    icon: Lock,
    title: "Multi-Tenant Security",
    desc: "Enterprise-grade RLS, role-based access, audit trails, and data isolation across legal entities.",
    color: "#ef4444",
  },
];

const upcomingProducts = [
  {
    name: "ZaadRecruit",
    desc: "AI-powered recruitment and applicant tracking system",
    eta: "Q3 2026",
    icon: "🎯",
  },
  {
    name: "ZaadLearn",
    desc: "Employee learning & development platform with certifications",
    eta: "Q4 2026",
    icon: "📚",
  },
  {
    name: "ZaadPerf",
    desc: "Continuous performance management and OKR tracking",
    eta: "Q1 2027",
    icon: "📈",
  },
  {
    name: "ZaadOps",
    desc: "Business operations automation and workflow engine",
    eta: "2027",
    icon: "⚡",
  },
];

export default function ProductSuite() {
  return (
    <section id="products" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e1a]">
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ZaadWorks section */}
        <div id="zaadworks" className="mb-24">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="text-orange-400 font-semibold">ZaadWorks</span>
              <span className="text-slate-500">by ZaadCore</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">Now Available</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-white">Enterprise HRMS,</span>
              <br />
              <span className="text-gradient-orange">Built for UAE.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every feature your HR team needs — WPS payroll, GPS attendance, leave workflows,
              and full MOHRE compliance — in one unified platform.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 group hover:border-orange-500/20 transition-all duration-300 cursor-default"
                style={{ borderColor: "rgba(148,163,184,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${mod.color}20` }}
                >
                  <mod.icon size={20} style={{ color: mod.color }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{mod.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA under ZaadWorks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all hover:gap-3"
              style={{ color: "#f97316" }}
            >
              Start with ZaadWorks — Free Demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* ZaadCore product roadmap */}
        <div id="roadmap">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
              <span className="text-slate-400">The ZaadCore Platform</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-white">One Platform.</span>
              <br />
              <span className="text-gradient-slate">Infinite Possibilities.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              ZaadCore is building a suite of enterprise products for the MENA workforce.
              ZaadWorks is the first — more are coming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Current product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.08) 100%)",
                border: "1px solid rgba(249,115,22,0.25)",
              }}
            >
              <div className="absolute top-3 right-3">
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
                  Live
                </span>
              </div>
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                ZaadWorks
              </h3>
              <p className="text-xs text-slate-400">Enterprise HRMS · WPS Payroll · Attendance · ESS</p>
            </motion.div>

            {/* Upcoming products */}
            {upcomingProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
                className="glass rounded-2xl p-6 relative opacity-70 hover:opacity-90 transition-opacity"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-slate-700/60 text-slate-500">
                    {product.eta}
                  </span>
                </div>
                <div className="text-2xl mb-3">{product.icon}</div>
                <h3 className="font-bold text-slate-300 mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
