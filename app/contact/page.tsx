"use client";

import { useState } from "react";
import { ArrowRight, Send, CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import SiteShell from "@/components/SiteShell";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We map your goals, constraints, and timeline in a focused 30-minute conversation.",
  },
  {
    num: "02",
    title: "Architecture proposal",
    desc: "We deliver a written technical recommendation and delivery roadmap — within days.",
  },
  {
    num: "03",
    title: "First sprint",
    desc: "We begin shipping within days of alignment. No lengthy onboarding.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  }

  return (
    <SiteShell>
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          className="relative min-h-[82vh] flex items-center overflow-hidden"
          aria-labelledby="contact-heading"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=60"
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
            autoPlay muted loop playsInline
          >
            <source
              src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/96 via-[#080d18]/82 to-[#080d18]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/40 via-transparent to-[#080d18]" />
          <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
          <div
            className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-24">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left */}
              <div>
                <p className="section-label mb-5">Get in touch</p>
                <h1
                  id="contact-heading"
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.06] mb-5 text-white"
                >
                  Let&apos;s build{" "}
                  <span className="text-accent">something.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10">
                  Share what you are working on. We will get back to you within 24 hours
                  with a clear, practical path forward.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: "hello@zaadcore.com", href: "mailto:hello@zaadcore.com" },
                    { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates", href: "#" },
                    { icon: Clock, label: "Response", value: "Within 24 hours", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 px-5 py-4 card-glass rounded-xl hover:border-orange-500/15 transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <item.icon size={15} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-sm font-medium text-slate-200">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — office image grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {/* Dubai HQ full-width */}
                <div className="col-span-2 relative rounded-xl overflow-hidden border border-white/8 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
                    alt="Dubai HQ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-semibold text-white">Dubai HQ</p>
                    <p className="text-xs text-slate-400">Main delivery office</p>
                  </div>
                </div>

                {/* Team photo */}
                <div className="relative rounded-xl overflow-hidden border border-white/8 h-36">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
                    alt="Remote team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-xs font-semibold text-white">Remote Team</p>
                    <p className="text-[10px] text-slate-400">MENA distributed</p>
                  </div>
                </div>

                {/* Response time card */}
                <div className="card-glass rounded-xl border border-white/8 p-5 h-36 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium">Online now</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-0.5">&lt;24h</div>
                    <div className="text-xs text-slate-400">Guaranteed response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080d18] to-transparent pointer-events-none" />
        </section>

        {/* ── FORM + PROCESS ────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden" aria-labelledby="form-section">
          <div className="absolute inset-0 bg-[#0a0f1e]" />
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Process */}
              <div>
                <h2 id="form-section" className="text-xl font-bold text-white mb-8">
                  What happens next
                </h2>
                <div className="space-y-8 mb-10">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-orange-400 mt-0.5"
                        style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.18)" }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office image below steps */}
                <div className="relative rounded-xl overflow-hidden border border-white/8 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80"
                    alt="ZaadCore team"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-semibold text-white">Strategy to delivery</p>
                    <p className="text-xs text-slate-400">One team end-to-end</p>
                  </div>
                </div>

                <div className="card p-5 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1">Prefer email?</p>
                  <a
                    href="mailto:hello@zaadcore.com"
                    className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    hello@zaadcore.com
                  </a>
                  <p className="text-xs text-slate-600 mt-1">
                    We typically reply within a few hours.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="card p-8 rounded-2xl">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <CheckCircle2 size={24} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Message received</h3>
                      <p className="text-sm text-slate-400">
                        We will get back to you within 24 hours with a clear path forward.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-1">Send a message</h2>
                    <p className="text-sm text-slate-500 mb-7">We respond within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full bg-white/3 border border-white/7 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                            Work Email
                          </label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            required
                            className="w-full bg-white/3 border border-white/7 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Company name"
                          className="w-full bg-white/3 border border-white/7 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2">
                          What are you building?
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe your project, goals, or the problem you are trying to solve..."
                          className="w-full bg-white/3 border border-white/7 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-500/40 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send message
                            <ArrowRight size={13} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
