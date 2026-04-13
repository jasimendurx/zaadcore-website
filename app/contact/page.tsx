"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle2 } from "lucide-react";
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

const contactInfo = [
  { icon: Mail,   label: "Email",    value: "hello@zaadcore.com",      href: "mailto:hello@zaadcore.com" },
  { icon: Phone,  label: "Phone",    value: "+971 4 200 0000",          href: "tel:+97142000000" },
  { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates", href: "#" },
  { icon: Clock,  label: "Hours",    value: "Sun–Thu · 9AM–6PM GST",   href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  }

  return (
    <SiteShell>
      <main className="relative">

        {/* ══════════ HERO ══════════ */}
        <section className="relative min-h-[82vh] overflow-hidden flex items-center">
          {/* Background video */}
          <video className="absolute inset-0 w-full h-full object-cover opacity-30" autoPlay muted loop playsInline>
            <source src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>

          {/* Fallback photo */}
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=50" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a14]/95 via-[#060a14]/85 to-[#060a14]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/50 via-transparent to-[#0a0e1a]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

          {/* Orange orb */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 glass-dark rounded-full px-4 py-2 text-sm mb-8 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-slate-300 font-medium">Contact ZaadCore</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.04] mb-7"
                  style={{ fontFamily: "var(--font-syne)" }}>
                  <span className="text-white">Start the</span><br />
                  <span className="text-gradient-orange">conversation.</span><br />
                  <span className="text-white">Ship faster.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
                  Share your goals and timeline. Our team responds with a practical, well-reasoned path forward.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="space-y-3">
                  {contactInfo.map((item) => (
                    <a key={item.label} href={item.href}
                      className="flex items-center gap-4 p-4 glass-dark rounded-xl border border-slate-700/40 hover:border-orange-500/25 transition-all duration-300 group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                        <item.icon size={16} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</div>
                        <div className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Right — office grid */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:grid grid-cols-2 gap-4">
                <div className="col-span-2 relative rounded-2xl overflow-hidden border border-slate-700/40 h-52">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80" alt="Dubai HQ" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-semibold" style={{ fontFamily: "var(--font-syne)" }}>Dubai HQ</div>
                    <div className="text-slate-300 text-xs">Main delivery office</div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 h-40">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80" alt="Remote team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-white text-sm font-semibold">Remote Team</div>
                    <div className="text-slate-400 text-xs">MENA distributed</div>
                  </div>
                </div>
                <div className="glass-dark rounded-2xl border border-slate-700/40 p-5 h-40 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Online now</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>&lt;24h</div>
                    <div className="text-xs text-slate-400">Guaranteed response</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0e1a] to-transparent pointer-events-none" />
        </section>

        {/* ══════════ FORM SECTION ══════════ */}
        <section className="relative py-24 bg-[#0a0e1a]">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — what to expect */}
              <FadeUp>
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">What to Expect</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  From first message to<span className="text-gradient-orange"> first sprint.</span>
                </h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  We don't do long sales cycles. Once we understand your goals, we propose a
                  concrete path — architecture, timeline, team composition — within days.
                </p>

                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery call",       desc: "We map your goals, constraints, and timeline in a focused 30-minute session." },
                    { step: "02", title: "Architecture proposal", desc: "We deliver a written technical recommendation and delivery roadmap." },
                    { step: "03", title: "First sprint",          desc: "We begin shipping within days of alignment — no lengthy onboarding." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm text-orange-400 mt-0.5" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", fontFamily: "var(--font-syne)" }}>
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-syne)" }}>{item.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 glass-dark rounded-2xl border border-slate-700/40">
                  <div className="text-sm font-semibold text-white mb-1">Prefer email directly?</div>
                  <a href="mailto:hello@zaadcore.com" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">hello@zaadcore.com</a>
                  <div className="text-xs text-slate-500 mt-1">We typically reply within a few hours.</div>
                </div>
              </FadeUp>

              {/* Right — form */}
              <FadeUp delay={0.15}>
                <div className="glass-dark rounded-3xl p-8 sm:p-10 border border-slate-700/50">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-5">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        <CheckCircle2 size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>Message sent!</h3>
                        <p className="text-slate-400">We'll get back to you within 24 hours with a clear path forward.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>Send us a message</h3>
                        <p className="text-sm text-slate-400">Fill out the form and we'll be in touch within 24 hours.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          {[
                            { id: "name",  label: "Full Name",   placeholder: "Ahmed Al-Mansoori", type: "text" },
                            { id: "email", label: "Work Email",  placeholder: "ahmed@company.ae",  type: "email" },
                          ].map((f) => (
                            <div key={f.id}>
                              <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">{f.label}</label>
                              <input type={f.type} placeholder={f.placeholder} required
                                className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all" />
                            </div>
                          ))}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          {[
                            { id: "company", label: "Company Name", placeholder: "Gulf Dynamics LLC",  type: "text" },
                            { id: "size",    label: "Team Size",    placeholder: "50–200 employees",   type: "text" },
                          ].map((f) => (
                            <div key={f.id}>
                              <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">{f.label}</label>
                              <input type={f.type} placeholder={f.placeholder}
                                className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all" />
                            </div>
                          ))}
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">What are you building?</label>
                          <textarea rows={4} placeholder="Describe your project, goals, or the problem you're solving..."
                            className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all resize-none" />
                        </div>
                        <button type="submit" disabled={loading}
                          className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(249,115,22,0.3)] disabled:opacity-70 disabled:scale-100"
                          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                          {loading ? (
                            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                          ) : (
                            <><Send size={16} />Send Message<ArrowRight size={15} /></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
