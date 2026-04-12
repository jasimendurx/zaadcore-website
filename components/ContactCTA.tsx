"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0e1a 0%, #0f172a 50%, #0a0e1a 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <div
              className="rounded-3xl p-12 lg:p-16"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(30,41,59,0.6) 100%)",
                border: "1px solid rgba(249,115,22,0.2)",
                boxShadow: "0 0 80px rgba(249,115,22,0.08)",
              }}
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-white">Ready to Transform</span>
                <br />
                <span className="text-gradient-orange">Your HR Operations?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Join hundreds of UAE businesses running on ZaadWorks.
                Get a personalised demo in 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#demo-form"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white text-base transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 0 32px rgba(249,115,22,0.4)",
                  }}
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </a>
                <a
                  href="tel:+97142000000"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl glass font-medium text-slate-300 text-base hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-orange-400" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form + info */}
        <div id="demo-form" className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get in Touch
            </h3>
            <p className="text-slate-400 mb-8">
              Our team will reach out within 24 hours to schedule a personalised
              demo tailored to your business size and industry.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: Mail, label: "Email us", value: "hello@zaadcore.com" },
                { icon: Phone, label: "Call us", value: "+971 4 200 0000" },
                { icon: MapPin, label: "Office", value: "Dubai, UAE" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Free 14-day trial — no credit card",
                "Personalised onboarding support",
                "UAE-local team, Arabic support",
                "Data hosted in UAE (Tier 3 DC)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(30,41,59,0.5)",
                border: "1px solid rgba(148,163,184,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-orange-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    Request Received!
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Our team will reach out to you within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    Book a Demo
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmed Al-Rashid"
                        className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ahmed@company.ae"
                        className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your Company LLC"
                        className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5">No. of Employees</label>
                      <select
                        value={form.employees}
                        onChange={(e) => setForm({ ...form, employees: e.target.value })}
                        className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-orange-500/50 transition-colors"
                      >
                        <option value="">Select range</option>
                        <option>1 - 25</option>
                        <option>26 - 100</option>
                        <option>101 - 500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Message (optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder="Tell us about your HR challenges..."
                      className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      boxShadow: "0 0 24px rgba(249,115,22,0.35)",
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Book My Demo
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
