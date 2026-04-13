import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const showcase = [
    {
      title: "Enterprise Delivery Teams",
      img: "/vectors/team-collab.svg",
    },
    {
      title: "Product Strategy Workshops",
      img: "/vectors/strategy-board.svg",
    },
    {
      title: "Data and Platform Engineering",
      img: "/vectors/analytics-desk.svg",
    },
  ];

  const serviceCards = [
    {
      title: "Enterprise Platforms",
      emoji: "🏗️",
      desc: "Multi-module platforms for operations, HR, finance, and internal workflows.",
      points: ["Architecture and planning", "Full-stack implementation", "Scale and reliability"],
      img: "/vectors/strategy-board.svg",
    },
    {
      title: "Automation Systems",
      emoji: "⚡",
      desc: "Business process automations that cut repetitive work and improve speed-to-execution.",
      points: ["Workflow design", "Integration orchestration", "Monitoring and support"],
      img: "/vectors/office-network.svg",
    },
    {
      title: "AI-Ready Foundations",
      emoji: "🤖",
      desc: "Data and architecture patterns that make your systems ready for intelligent features.",
      points: ["Data readiness", "Model-friendly APIs", "Governance and security"],
      img: "/vectors/analytics-desk.svg",
    },
  ];

  const deliveryFlow = [
    {
      phase: "01",
      name: "Discover",
      text: "We map business constraints, goals, stakeholders, and outcomes.",
    },
    {
      phase: "02",
      name: "Design",
      text: "We define product architecture, UX direction, and delivery scope.",
    },
    {
      phase: "03",
      name: "Deliver",
      text: "We ship in fast iterations with measurable progress and quality control.",
    },
    {
      phase: "04",
      name: "Scale",
      text: "We optimize performance, add features, and support long-term growth.",
    },
  ];

  return (
    <main className="relative">
      <Navbar mode="company" />

      <section id="hero" className="relative min-h-screen mesh-bg grid-pattern overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=27e75f73089c7479afd1cdccb9d2635e942cd0d6&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-36 -left-32 w-[640px] h-[640px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-44 -right-20 w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
                <span className="text-orange-400">⚙️</span>
                <span className="text-slate-300">Software Solutions Company</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-white">ZaadCore Builds</span>
                <br />
                <span className="text-gradient-orange">Software That Moves</span>
                <br />
                <span className="text-gradient-slate">Real Businesses.</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
                We design and ship production-grade products for operations,
                workforce, and process automation. One team. One architecture.
                Faster outcomes. 🚀
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🧠 Product Engineering</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🔗 Systems Integration</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">📊 Data-Led Delivery</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/zaadworks"
                  className="text-center px-7 py-3.5 rounded-2xl text-white font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 0 32px rgba(249,115,22,0.35)",
                  }}
                >
                  Explore ZaadWorks
                </a>
                <a href="/contact" className="text-center px-7 py-3.5 rounded-2xl glass text-slate-200">
                  Talk to ZaadCore
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-2xl">
                {[
                  { k: "12+", v: "Products Delivered" },
                  { k: "6", v: "Industries" },
                  { k: "99.9%", v: "Infra Uptime" },
                  { k: "24h", v: "Client Response" },
                ].map((item) => (
                  <div key={item.v} className="glass rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-white">{item.k}</div>
                    <div className="text-[11px] text-slate-400">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-5 -right-4 glass rounded-xl px-3 py-2 text-xs text-slate-200 animate-float">
                💡 Product + Platform DNA
              </div>
              <img
                src="/vectors/zaadcore-network.svg"
                alt="ZaadCore product engineering network"
                className="w-full rounded-3xl border border-slate-700/50 shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-24 bg-[#0a0f1d] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-white">What We Build</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We blend strategy, engineering, and design to deliver software that creates measurable impact. 🎯
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((item) => (
              <article key={item.title} className="glass rounded-2xl overflow-hidden hover:border-orange-500/30 transition-colors">
                <img src={item.img} alt={item.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h3 className="text-xl text-white font-semibold mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((point) => (
                      <li key={point} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0b1222] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-white">How We Deliver</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A practical process that keeps strategy and engineering aligned from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryFlow.map((step) => (
              <article key={step.phase} className="glass rounded-2xl p-6">
                <div className="text-sm text-orange-400 font-semibold mb-2">{step.phase}</div>
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {step.name}
                </h3>
                <p className="text-sm text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">Real Teams.</span>
                <span className="text-gradient-orange"> Real Delivery.</span>
              </h2>
              <p className="text-slate-400">Visual snapshots of the product-build environments we operate in. 📷</p>
            </div>
            <a href="/about" className="text-orange-400 font-semibold text-sm">See full company story →</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {showcase.map((item) => (
              <article key={item.title} className="group relative rounded-2xl overflow-hidden border border-slate-700/60">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative py-24 bg-[#090e1a] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[320px]"
            style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.16) 0%, transparent 72%)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-5">
                <span>📦</span>
                <span className="text-slate-300">Product Portfolio</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">ZaadWorks</span>
                <span className="text-slate-400"> is our first live product.</span>
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl">
                ZaadWorks is a dedicated HRMS built for UAE organizations. It is part of the broader ZaadCore mission
                to ship practical, market-ready software solutions.
              </p>
              <a
                href="/zaadworks"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
              >
                Visit ZaadWorks Page 👉
              </a>
            </div>

            <div>
              <img
                src="/vectors/zaadworks-matrix.svg"
                alt="ZaadWorks visual system"
                className="w-full rounded-3xl border border-slate-700/50 shadow-xl shadow-black/30"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              {
                title: "Workforce Dashboard",
                img: "/vectors/zaadworks-matrix.svg",
              },
              {
                title: "Team Operations",
                img: "/vectors/team-collab.svg",
              },
              {
                title: "Compliance Monitoring",
                img: "/vectors/office-network.svg",
              },
            ].map((item) => (
              <article key={item.title} className="relative rounded-2xl overflow-hidden border border-slate-700/60">
                <img src={item.img} alt={item.title} className="h-52 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-3 left-3 text-white font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-gradient-brand">Built in UAE. Built for Scale.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                ZaadCore helps ambitious teams convert complexity into clean, reliable software.
                We work as a long-term execution partner, not just a delivery vendor. 🤝
              </p>
              <p className="text-slate-400 mb-8">
                From discovery to launch, we focus on usability, performance, and business clarity.
                Every product decision is tied to operational outcomes.
              </p>
              <a
                href="/about"
                className="inline-flex px-6 py-3 rounded-xl text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
              >
                Open About Page
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/vectors/strategy-board.svg"
                alt="Product workshop"
                className="rounded-2xl h-44 w-full object-cover border border-slate-700/60"
                loading="lazy"
              />
              <img
                src="/vectors/team-collab.svg"
                alt="Team meeting"
                className="rounded-2xl h-44 w-full object-cover border border-slate-700/60"
                loading="lazy"
              />
              <img
                src="/vectors/office-network.svg"
                alt="Office collaboration"
                className="rounded-2xl h-44 w-full object-cover border border-slate-700/60 col-span-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 bg-[#0c1222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                Let us build your next software advantage.
              </h3>
              <p className="text-slate-400 mb-5">hello@zaadcore.com · Dubai, UAE · Response in under 24 hours ⏱️</p>
              <ul className="space-y-2">
                {[
                  "Discovery call and roadmap alignment",
                  "Technical architecture recommendation",
                  "Execution timeline with milestones",
                ].map((item) => (
                  <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60">
              <img
                src="/vectors/contact-orbit.svg"
                alt="ZaadCore contact collaboration"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white text-sm font-semibold">Start with a practical discovery session</span>
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
