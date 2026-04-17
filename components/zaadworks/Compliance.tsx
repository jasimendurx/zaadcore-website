import { Shield, CheckCircle2 } from "lucide-react";

const regulations = [
  {
    title: "UAE Wages Protection System (WPS)",
    desc: "Automatic SIF file generation and submission-ready exports. ZaadWorks ensures 100% WPS compliance for every pay run.",
  },
  {
    title: "MOHRE Labour Law",
    desc: "Gratuity calculations, notice periods, annual leave accrual, and end-of-service benefits — all calculated per current MOHRE regulations.",
  },
  {
    title: "Visa and Emirates ID Tracking",
    desc: "Automated alerts for visa expiry, Emirates ID renewals, and medical fitness certificate renewals.",
  },
  {
    title: "Data Residency",
    desc: "Data storage options compliant with UAE data residency requirements. On-premise deployment available.",
  },
];

export default function ZaadWorksCompliance() {
  return (
    <section
      id="compliance"
      className="relative py-24 overflow-hidden"
      aria-labelledby="compliance-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--sec-2)]" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Dubai imagery */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.08] hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=50"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 ov-lr" />
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
              <Shield size={18} className="text-orange-400" />
            </div>
            <p className="section-label mb-3">Compliance</p>
            <h2
              id="compliance-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
            >
              Fully compliant with UAE regulations.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-7">
              ZaadWorks is designed and maintained to meet UAE federal and local labour
              law requirements, so you never have to worry about regulatory exposure.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["WPS Compliant", "MOHRE Aligned", "UAE Labour Law", "DIFC / ADGM Ready"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-orange-300 bg-orange-500/8 border border-orange-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Compliance image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80"
                alt="UAE compliance documentation"
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 ov-img-b" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-white">Government-ready reports</p>
                <p className="text-xs text-slate-400">Built to UAE standards</p>
              </div>
            </div>
          </div>

          {/* Right — regulation cards */}
          <div className="space-y-4">
            {regulations.map((reg) => (
              <article key={reg.title} className="card p-5 flex gap-4 hover:border-orange-500/15 transition-colors">
                <CheckCircle2 size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{reg.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{reg.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
