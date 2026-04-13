import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About ZaadCore",
  description:
    "Learn about ZaadCore, our software delivery philosophy, and the team building products for modern businesses.",
  alternates: {
    canonical: "https://zaadcore.com/about",
  },
};

const teamMoments = [
  {
    title: "Design and product planning",
    img: "/vectors/strategy-board.svg",
  },
  {
    title: "Hands-on engineering collaboration",
    img: "/vectors/team-collab.svg",
  },
  {
    title: "Client sprint review sessions",
    img: "/vectors/office-network.svg",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar mode="company" />

      <section className="relative min-h-[80vh] overflow-hidden flex items-center">
        <video className="absolute inset-0 w-full h-full object-cover opacity-25" autoPlay muted loop playsInline>
          <source
            src="https://player.vimeo.com/external/390318954.sd.mp4?s=71026b9fcb95f6f4dc16bde46a677f15ff08b0f8&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/70 via-[#0a0e1a]/85 to-[#0a0e1a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <span className="text-orange-400">🧭</span>
            <span className="text-slate-300">About ZaadCore</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">We build software</span>
            <br />
            <span className="text-gradient-orange">that people actually use.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mt-6 leading-relaxed">
            ZaadCore is a UAE-based software solutions company focused on execution quality,
            measurable outcomes, and long-term product reliability. We combine strategy,
            design, and engineering into one delivery system. ⚡
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">Our Values in Motion</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Craft, clarity, execution, and ownership define how we work with every client.
                We optimize for outcomes, not vanity metrics. 📈
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🏗️ Craft</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🔎 Clarity</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🚀 Execution</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-slate-300">🤝 Ownership</span>
              </div>
            </div>
            <img
              src="/vectors/about-values.svg"
              alt="ZaadCore values diagram"
              className="w-full rounded-3xl border border-slate-700/60"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMoments.map((item) => (
              <article key={item.title} className="relative rounded-2xl overflow-hidden border border-slate-700/60">
                <img src={item.img} alt={item.title} className="h-72 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0b1222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Want to build with ZaadCore?
              </h3>
              <p className="text-slate-400 mt-2">Let us map your software roadmap and execution plan. 🗺️</p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
