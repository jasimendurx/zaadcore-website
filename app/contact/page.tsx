import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact ZaadCore",
  description:
    "Contact ZaadCore for software solutions, product development, and ZaadWorks HRMS demos.",
  alternates: {
    canonical: "https://zaadcore.com/contact",
  },
};

const offices = [
  {
    city: "Dubai",
    detail: "Main Delivery Office",
    img: "/vectors/office-network.svg",
  },
  {
    city: "Remote Engineering",
    detail: "Distributed team across MENA",
    img: "/vectors/team-collab.svg",
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <Navbar mode="company" />

      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <video className="absolute inset-0 w-full h-full object-cover opacity-25" autoPlay muted loop playsInline>
          <source
            src="https://player.vimeo.com/external/403733771.sd.mp4?s=d40ab8ecf526f8f8d5f4fefbd3fad43ba6f8b917&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/70 via-[#0a0e1a]/85 to-[#0a0e1a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
            <span className="text-orange-400">📬</span>
            <span className="text-slate-300">Contact ZaadCore</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            <span className="text-white">Start the conversation.</span>
            <br />
            <span className="text-gradient-orange">Ship faster together.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Share your goals and timeline. Our team responds quickly with a practical path forward. ⏱️
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div className="glass rounded-3xl p-8 border border-slate-700/60">
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Reach Us Directly
            </h2>
            <div className="space-y-4 text-slate-300">
              <p><span className="text-orange-400">✉️</span> hello@zaadcore.com</p>
              <p><span className="text-orange-400">📞</span> +971 4 200 0000</p>
              <p><span className="text-orange-400">📍</span> Dubai, United Arab Emirates</p>
              <p><span className="text-orange-400">🕐</span> Sunday to Thursday, 9:00 AM to 6:00 PM</p>
            </div>

            <a
              href="mailto:hello@zaadcore.com"
              className="inline-block mt-8 px-6 py-3 rounded-xl text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
            >
              Email ZaadCore
            </a>
          </div>

          <div className="space-y-6">
            <img src="/vectors/contact-orbit.svg" alt="Contact network diagram" className="w-full rounded-3xl border border-slate-700/60" />
            <div className="grid sm:grid-cols-2 gap-4">
              {offices.map((office) => (
                <article key={office.city} className="relative rounded-2xl overflow-hidden border border-slate-700/60">
                  <img src={office.img} alt={office.city} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold" style={{ fontFamily: "var(--font-syne)" }}>{office.city}</h3>
                    <p className="text-xs text-slate-300">{office.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
