import { Users, DollarSign, Clock, Calendar, Smartphone, FileText } from "lucide-react";

const modules = [
  {
    icon: Users,
    title: "Core HR",
    desc: "Employee records, org structure, documents, visa and Emirates ID tracking.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=75",
  },
  {
    icon: DollarSign,
    title: "Payroll & WPS",
    desc: "Multi-entity payroll with automatic SIF file generation for UAE WPS submission.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=75",
  },
  {
    icon: Clock,
    title: "Attendance",
    desc: "Biometric and app-based attendance with shift management and overtime calculations.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=75",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    desc: "Leave policies, approval workflows, and annual leave accrual per UAE Labour Law.",
    img: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&w=600&q=75",
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service",
    desc: "Mobile-first ESS portal for payslips, leave requests, and document access.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=75",
  },
  {
    icon: FileText,
    title: "Reports & Compliance",
    desc: "Government-ready reports, audit trails, and MOHRE compliance documentation.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=75",
  },
];

export default function ZaadWorksModules() {
  return (
    <section
      id="modules"
      className="relative py-24 overflow-hidden"
      aria-labelledby="modules-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--sec-2)]" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="section-label mb-3">Platform modules</p>
          <h2
            id="modules-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Everything your HR team needs.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <article key={mod.title} className="card overflow-hidden group">
              {/* Image header */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={mod.img}
                  alt={mod.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 ov-card-b" />
                <div className="absolute bottom-3 left-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                    <mod.icon size={14} className="text-orange-400" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2">{mod.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{mod.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
