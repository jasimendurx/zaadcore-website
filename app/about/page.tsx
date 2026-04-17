import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { ArrowRight, Zap, Globe, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About ZaadCore",
  description:
    "ZaadCore is a UAE-based software studio building enterprise platforms and HRMS products for MENA businesses. Learn about our values and approach.",
  alternates: {
    canonical: "https://zaadcore.com/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://zaadcore.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://zaadcore.com/about" },
  ],
};

const values = [
  {
    icon: Zap,
    title: "Craft",
    desc: "We care about the quality of what we ship — not just whether it ships. Details matter.",
  },
  {
    icon: Globe,
    title: "Clarity",
    desc: "Every decision is communicated clearly. No hidden complexity, no surprises in delivery.",
  },
  {
    icon: Target,
    title: "Execution",
    desc: "We bias toward action. Fast, deliberate iterations. Tangible outcomes over endless planning.",
  },
  {
    icon: Shield,
    title: "Ownership",
    desc: "We own outcomes, not just tasks. If something is not working, we fix it — not hand it off.",
  },
];

const moments = [
  {
    title: "Design & Product Planning",
    desc: "Structured sessions that convert vision into execution",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=75",
  },
  {
    title: "Engineering Collaboration",
    desc: "Hands-on cross-functional teams embedded in delivery",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=75",
  },
  {
    title: "Sprint Reviews",
    desc: "Transparent progress with measurable outcomes every sprint",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          className="relative min-h-[88vh] flex items-center overflow-hidden"
          aria-labelledby="about-heading"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=60"
              alt=""
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
            autoPlay muted loop playsInline
          >
            <source
              src="https://player.vimeo.com/external/390318954.sd.mp4?s=71026b9fcb95f6f4dc16bde46a677f15ff08b0f8&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 ov-lr" />
          <div className="absolute inset-0 ov-tb" />
          <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

          {/* Left orange glow */}
          <div
            className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <p className="section-label mb-5">About ZaadCore</p>
                <h1
                  id="about-heading"
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.06] mb-6 text-white"
                >
                  We build software that{" "}
                  <span className="text-accent">people actually use.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
                  ZaadCore is a UAE-based software studio. We focus on execution quality,
                  architectural clarity, and long-term product reliability — combining
                  strategy, engineering, and design into one delivery system.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UAE-Based Team", "Product + Engineering", "Long-term Partner", "Enterprise Grade"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs text-slate-400 border border-white/8 rounded-full bg-white/3">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — image with floating badge */}
              <div className="hidden lg:block relative">
                <div className="absolute -top-4 -right-6 z-20 card-glass rounded-xl px-4 py-3 shadow-xl">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Based in</div>
                  <div className="text-sm font-bold text-white">Dubai, UAE</div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                    alt="ZaadCore team at work"
                    className="w-full h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 ov-img-b" />
                </div>

                <div className="absolute -bottom-4 -left-6 z-20 card-glass rounded-xl px-4 py-3 shadow-xl">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">Focus</div>
                  <div className="text-sm font-bold text-white">UAE &amp; MENA market</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-28 ov-b pointer-events-none" />
        </section>

        {/* ── WHAT WE DO ────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden" aria-labelledby="what-we-do">
          <div className="absolute inset-0 bg-[var(--sec-2)]" />
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 id="what-we-do" className="text-2xl font-bold text-white mb-5">
                  What we do
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">
                  We build enterprise platforms that teams depend on every day. Our work
                  spans HRMS products, operations platforms, workflow automation systems,
                  and AI-ready data architectures — primarily for businesses operating
                  across UAE and the broader MENA region.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our flagship product is{" "}
                  <a href="/zaadworks" className="text-orange-400 hover:text-orange-300 transition-colors">
                    ZaadWorks
                  </a>
                  {" "}— a WPS-compliant HRMS built specifically for UAE businesses.
                  We also take on custom enterprise software projects where we can make
                  a real difference.
                </p>
              </div>

              <div className="space-y-0">
                {[
                  { label: "Location", value: "Dubai, United Arab Emirates" },
                  { label: "Focus", value: "Enterprise software & HRMS" },
                  { label: "Market", value: "UAE and MENA region" },
                  { label: "Contact", value: "hello@zaadcore.com" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm text-slate-500">{row.label}</span>
                    <span className="text-sm font-medium text-slate-200">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden" aria-labelledby="values-heading">
          <div className="absolute inset-0 bg-[var(--sec-1)]" />
          <div className="absolute inset-0 bg-stripe pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <h2 id="values-heading" className="text-2xl font-bold text-white mb-10">
              How we work
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <article key={v.title} className="card p-6 hover:border-orange-500/15 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                    <v.icon size={16} className="text-orange-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM IN ACTION ────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--sec-2)]" />
          <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white">The team in action</h2>
              <p className="text-slate-500 mt-1 text-sm">Real environments. Real collaboration. Real delivery.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {moments.map((item) => (
                <article
                  key={item.title}
                  className="group relative rounded-xl overflow-hidden border border-white/7 h-64"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ov-img-b" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden" aria-labelledby="about-cta">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=50"
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
            <div className="max-w-xl">
              <h2 id="about-cta" className="text-3xl font-bold text-white mb-4">
                Want to build with us?
              </h2>
              <p className="text-slate-400 mb-7 leading-relaxed">
                We are open to custom enterprise projects in UAE and MENA. Reach out
                and we will respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  Contact us <ArrowRight size={14} />
                </a>
                <a href="/zaadworks" className="btn-ghost">
                  See ZaadWorks
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
