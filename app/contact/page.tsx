"use client";

import { useState } from "react";
import { ArrowRight, Send, CheckCircle2, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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

        {/* ── HERO + FORM ───────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          aria-labelledby="contact-heading"
        >
          {/* Background */}
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
          <div className="absolute inset-0 ov-lr" />
          <div className="absolute inset-0 ov-tb" />
          <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
          <div
            className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24">
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Left — heading + contact info */}
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

                <div className="space-y-3 mb-4">
                  {[
                    { icon: Mail, label: "Email", value: "hello@zaadcore.com", href: "mailto:hello@zaadcore.com" },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: "Chat with us now",
                      href: `https://wa.me/971582366125?text=${encodeURIComponent("Hi ZaadCore, I'd like to discuss a project.")}`,
                      external: true,
                    },
                    { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates", href: "#" },
                    { icon: Clock, label: "Response", value: "Within 24 hours", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

                {/* Process steps inline */}
                {/* <div className="space-y-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">What happens next</p>
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-orange-400 mt-0.5"
                        style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.18)" }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-0.5">{step.title}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Right — form */}
              <div className="card p-8 rounded-2xl">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
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
                          rows={5}
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

          <div className="absolute bottom-0 left-0 right-0 h-28 ov-b pointer-events-none" />
        </section>

        {/* ── TRUST + OFFICE ────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden" aria-labelledby="trust-heading">
          <div className="absolute inset-0 bg-[var(--sec-2)]" />
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — office imagery */}
              <div>
                <p className="section-label mb-4">Our workspace</p>
                <h2 id="trust-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  A Dubai-based team built for enterprise delivery.
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  We operate from Dubai with a distributed MENA team. Every project has a
                  dedicated delivery lead, clear milestones, and direct communication — no
                  account managers, no handoffs.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative rounded-xl overflow-hidden border border-white/8 h-52">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                      alt="Dubai office"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ov-img-b" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-sm font-semibold text-white">Dubai HQ</p>
                      <p className="text-xs text-slate-400">Main delivery office · UAE</p>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-white/8 h-36">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ov-img-b" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-xs font-semibold text-white">MENA Team</p>
                    </div>
                  </div>
                  <div className="card-glass rounded-xl p-5 h-36 flex flex-col justify-between border border-white/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400 font-medium">Online now</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-0.5">&lt;24h</div>
                      <div className="text-xs text-slate-400">Guaranteed response time</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — FAQ + trust signals */}
              <div>
                <p className="section-label mb-4">Common questions</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Before you reach out.
                </h2>

                <div className="space-y-0">
                  {[
                    {
                      q: "What types of projects do you take on?",
                      a: "Enterprise platforms, HRMS, CRMs, mobile apps, e-commerce, AI automation, and WhatsApp bots — primarily for UAE and MENA businesses.",
                    },
                    {
                      q: "How quickly can you start?",
                      a: "After an initial scoping call and written proposal, most projects kick off within one to two weeks. No lengthy procurement cycles.",
                    },
                    {
                      q: "Do you work with startups or only enterprises?",
                      a: "Both. We work with startups building their first product and established businesses replacing legacy systems. The fit depends on scope and ambition, not size.",
                    },
                    {
                      q: "What does the engagement look like?",
                      a: "Discovery call → written architecture proposal → sprint-based delivery → ongoing support. You have direct access to the team throughout.",
                    },
                    {
                      q: "Is ZaadWorks available for demo?",
                      a: "Yes. Reach out via the form or WhatsApp and we will schedule a live walkthrough of the platform tailored to your business context.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="py-5 border-b border-white/5 last:border-0"
                    >
                      <p className="text-sm font-semibold text-white mb-2">{item.q}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden" aria-labelledby="contact-cta">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[var(--sec-1)]/90" />
          <div className="absolute inset-0 bg-mesh pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-4">Ready to start?</p>
                <h2 id="contact-cta" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Prefer a quicker path?
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Skip the form and reach us directly on WhatsApp. We typically respond
                  within the hour during business hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/971582366125?text=${encodeURIComponent("Hi ZaadCore, I'd like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center"
                >
                  WhatsApp us now <ArrowRight size={14} />
                </a>
                <a href="mailto:hello@zaadcore.com" className="btn-ghost flex-1 justify-center">
                  hello@zaadcore.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
