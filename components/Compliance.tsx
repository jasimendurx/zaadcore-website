"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileCheck, Building2, CreditCard, Globe2, AlertCircle } from "lucide-react";

const complianceItems = [
  {
    icon: FileCheck,
    title: "WPS (Wages Protection System)",
    desc: "Generate SIF files automatically. Direct integration with the UAE Ministry of Human Resources & Emiratisation.",
    critical: true,
  },
  {
    icon: Building2,
    title: "MOHRE Compliance",
    desc: "Labour contracts, termination rules, gratuity calculations — all aligned with UAE Federal Labour Law.",
    critical: true,
  },
  {
    icon: CreditCard,
    title: "Gratuity Calculator",
    desc: "Auto-calculate end-of-service gratuity per UAE Labour Law Article 51. Handles limited and unlimited contracts.",
    critical: false,
  },
  {
    icon: Globe2,
    title: "Multi-Nationality Support",
    desc: "Support 160+ nationalities with Arabic and English interfaces. Visa, Emirates ID, passport expiry tracking.",
    critical: false,
  },
  {
    icon: CheckCircle2,
    title: "Emiratisation (Nafis)",
    desc: "Track Emiratisation targets, generate compliance reports, and monitor Nafis scheme contributions.",
    critical: false,
  },
  {
    icon: AlertCircle,
    title: "Document Expiry Alerts",
    desc: "Automated alerts for visa, labour card, Emirates ID, and passport expiries — 90, 60, and 30 days in advance.",
    critical: false,
  },
];

const checklist = [
  "WPS SIF file generation",
  "MOHRE report export",
  "Gratuity auto-calculation",
  "UAE public holidays",
  "Visa expiry tracking",
  "Emirates ID management",
  "Labour card tracking",
  "Annual leave per UAE law",
  "Sick leave entitlements",
  "Maternity leave rules",
  "Unlimited/limited contracts",
  "End-of-service settlements",
];

export default function Compliance() {
  return (
    <section id="compliance" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0e1a 0%, #0f1628 50%, #0a0e1a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(249,115,22,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-slate-400">Built for UAE compliance</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-white">100% UAE Labour</span>
              <br />
              <span className="text-gradient-orange">Law Ready.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 leading-relaxed"
            >
              ZaadWorks is engineered from the ground up for the UAE regulatory environment.
              Every payroll run, every leave calculation, every employee record follows
              Federal Decree-Law No. 33 of 2021.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-2"
            >
              {checklist.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 size={14} className="text-orange-400 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Compliance cards */}
          <div className="grid grid-cols-1 gap-4">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 glass rounded-2xl p-4 group hover:border-orange-500/20 transition-all"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: item.critical
                      ? "rgba(249,115,22,0.2)"
                      : "rgba(51,65,85,0.6)",
                  }}
                >
                  <item.icon
                    size={16}
                    style={{ color: item.critical ? "#f97316" : "#64748b" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    {item.critical && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
