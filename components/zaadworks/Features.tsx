import { CheckCircle2 } from "lucide-react";

const features = [
  "Automatic SIF file generation for WPS submission",
  "Multi-currency payroll with AED as primary",
  "End-of-service gratuity calculations per UAE law",
  "Probation period tracking and alerts",
  "Visa expiry and Emirates ID renewal reminders",
  "Annual leave encashment on resignation or termination",
  "Bulk payroll processing across multiple entities",
  "Role-based access control for HR and finance teams",
  "Full audit log for all payroll and HR transactions",
  "Custom approval workflows for leave and expenses",
  "Mobile app for employees and managers",
  "Export to Excel, PDF, and CSV for all reports",
];

export default function ZaadWorksFeatures() {
  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* BG with faint image */}
      <div className="absolute inset-0 bg-[var(--sec-1)]" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=40"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--sec-1)]/85" />
      </div>
      <div className="absolute inset-0 bg-stripe pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Features</p>
            <h2
              id="features-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
            >
              Built for how UAE businesses actually operate.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              ZaadWorks handles the complexity of UAE payroll and labour law compliance
              so your HR team can focus on people, not paperwork.
            </p>

            {/* Feature image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80"
                alt="ZaadWorks team"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 ov-img-b" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-white">Purpose-built for UAE</p>
                <p className="text-xs text-slate-400">Compliant from day one</p>
              </div>
            </div>
          </div>

          {/* Right — feature list */}
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 py-3 border-b border-white/5 last:border-0">
                <CheckCircle2 size={12} className="text-orange-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
