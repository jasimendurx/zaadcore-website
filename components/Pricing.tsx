"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "AED 15",
    per: "per employee / month",
    desc: "For small businesses and startups getting their HR foundation right.",
    features: [
      "Up to 50 employees",
      "Employee records & onboarding",
      "Attendance tracking",
      "Leave management",
      "Basic payroll & WPS",
      "Employee Self-Service (ESS)",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "AED 25",
    per: "per employee / month",
    desc: "For scaling businesses that need advanced HR operations and analytics.",
    features: [
      "Unlimited employees",
      "Everything in Starter",
      "GPS attendance & geofencing",
      "Advanced payroll & multi-entity",
      "MOHRE report generation",
      "HR analytics dashboard",
      "Document vault with expiry alerts",
      "Priority support",
    ],
    cta: "Get a Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "tailored for your scale",
    desc: "For large enterprises and holding groups with complex multi-entity needs.",
    features: [
      "Everything in Growth",
      "Multi-tenant / holding group mode",
      "Custom integrations & API access",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "On-premise deployment option",
      "Training & implementation",
      "White-label available",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0e1a]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(249,115,22,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <Zap size={14} className="text-orange-400" />
            <span className="text-slate-400">Transparent pricing</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Simple, Scalable</span>
            <br />
            <span className="text-gradient-orange">Pricing.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No hidden fees. No long-term lock-in. Start with a free trial,
            scale when you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "glow-orange"
                  : ""
              }`}
              style={
                plan.highlight
                  ? {
                      background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(30,41,59,0.6) 100%)",
                      border: "1px solid rgba(249,115,22,0.3)",
                    }
                  : {
                      background: "rgba(30,41,59,0.4)",
                      border: "1px solid rgba(148,163,184,0.08)",
                      backdropFilter: "blur(20px)",
                    }
              }
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-semibold text-white px-4 py-1.5 rounded-full"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: plan.highlight ? "#f97316" : "#e2e8f0",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-xs text-slate-500">{plan.per}</span>
                  )}
                </div>
                {plan.price === "Custom" && (
                  <span className="text-xs text-slate-500">{plan.per}</span>
                )}
              </div>

              <ul className="flex-1 flex flex-col gap-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-slate-400">
                    <Check
                      size={15}
                      className="flex-shrink-0"
                      style={{ color: plan.highlight ? "#f97316" : "#64748b" }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                style={
                  plan.highlight
                    ? {
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        color: "#fff",
                        boxShadow: "0 0 24px rgba(249,115,22,0.4)",
                      }
                    : {
                        background: "rgba(51,65,85,0.6)",
                        color: "#cbd5e1",
                        border: "1px solid rgba(148,163,184,0.12)",
                      }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-600 mt-8"
        >
          All plans include a 14-day free trial. No credit card required.
          Prices are in AED and exclusive of VAT.
        </motion.p>
      </div>
    </section>
  );
}
