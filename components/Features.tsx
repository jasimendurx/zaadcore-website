"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Database, Shield, Globe, Workflow, Bell } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First ESS",
    desc: "Employees access their payslips, apply for leave, update personal info, and clock in — all from a Progressive Web App. Works offline too.",
    metric: "4.8★",
    metricLabel: "App Store rating",
  },
  {
    icon: Database,
    title: "Multi-Entity Payroll",
    desc: "Run payroll across multiple legal entities simultaneously. Each entity gets its own WPS SIF file, payslip branding, and salary structures.",
    metric: "1-click",
    metricLabel: "WPS file generation",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Row-level security, role-based access, full audit trails, and data encryption at rest and in transit. SOC 2 compliant infrastructure.",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
  },
  {
    icon: Globe,
    title: "Arabic Interface",
    desc: "Full RTL Arabic support for employee-facing interfaces. HR dashboard available in English. Switch languages with one click.",
    metric: "160+",
    metricLabel: "Nationalities supported",
  },
  {
    icon: Workflow,
    title: "Smart Leave Workflows",
    desc: "Multi-level approval chains, automatic leave balance deduction, carry-forward rules, and public holiday auto-exclusion.",
    metric: "Auto",
    metricLabel: "Balance calculations",
  },
  {
    icon: Bell,
    title: "Proactive Alerts",
    desc: "Get notified before visa, Emirates ID, labour card, and passport expiries. 90, 60, and 30-day automated alerts via email and SMS.",
    metric: "Zero",
    metricLabel: "Expired documents missed",
  },
];

function CounterBadge({ metric, label }: { metric: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-col items-center glass-bright rounded-xl px-4 py-2 transition-all duration-500 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <span
        className="text-lg font-bold text-gradient-orange"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {metric}
      </span>
      <span className="text-[10px] text-slate-500">{label}</span>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0e1a 0%, #0e1525 50%, #0a0e1a 100%)",
        }}
      />
      <div
        className="absolute inset-0 grid-pattern opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <span className="text-slate-400">Why ZaadWorks</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Built Different.</span>
            <br />
            <span className="text-gradient-orange">Designed for MENA.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Generic HR software forces you to adapt to their system.
            ZaadWorks was built around UAE labour law, culture, and workflows from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-orange-500/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center transition-all group-hover:bg-orange-500/20 group-hover:scale-110">
                  <feat.icon size={18} className="text-orange-400" />
                </div>
                <CounterBadge metric={feat.metric} label={feat.metricLabel} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
