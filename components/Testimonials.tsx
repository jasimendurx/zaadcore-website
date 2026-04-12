"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ZaadWorks cut our monthly payroll run from 3 days to under 3 hours. The WPS SIF file generation is seamless — our finance team was amazed.",
    author: "Sarah Al-Rashidi",
    role: "HR Director",
    company: "Gulf Dynamics LLC",
    location: "Dubai, UAE",
    employees: "180 employees",
    rating: 5,
  },
  {
    quote:
      "We went from spreadsheets to a fully automated leave and attendance system in one week. The GPS geofencing works perfectly for our 5 site locations.",
    author: "Mohammed Farooq",
    role: "Operations Manager",
    company: "BuildCore Contracting",
    location: "Abu Dhabi, UAE",
    employees: "320 employees",
    rating: 5,
  },
  {
    quote:
      "Managing 12 nationalities across 3 legal entities was a nightmare before ZaadWorks. Now everything is in one place — visa expiries, payroll, leave balances.",
    author: "Priya Nambiar",
    role: "Group HR Manager",
    company: "Al Futtaim Ventures",
    location: "Dubai, UAE",
    employees: "450 employees",
    rating: 5,
  },
];

const logos = [
  "Gulf Dynamics", "BuildCore", "Al Futtaim", "Dunes Group",
  "Khaleeji Tech", "MENA Holdings", "Emirates Retail",
];

export default function Testimonials() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0e1a 0%, #0b1120 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Trusted by HR Leaders</span>
            <br />
            <span className="text-gradient-orange">Across UAE.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From small businesses to holding groups — companies across the Emirates
            trust ZaadWorks to run their HR operations.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote size={20} className="text-orange-500/30 absolute -top-1 -left-1" />
                <p className="text-sm text-slate-300 leading-relaxed pl-4">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${["#f97316", "#6366f1", "#10b981"][i]}, ${["#ea580c", "#4f46e5", "#059669"][i]})`,
                  }}
                >
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{t.employees} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-8">
            Companies running on ZaadWorks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-6 py-3 glass rounded-xl"
              >
                <span className="text-sm font-semibold text-slate-500">{logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
