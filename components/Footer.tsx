import ZaadLogo from "./ZaadLogo";

const links = {
  Product: [
    { label: "ZaadWorks HRMS", href: "/zaadworks" },
    { label: "Features", href: "/zaadworks#features" },
    { label: "UAE Compliance", href: "/zaadworks#compliance" },
    { label: "Request Demo", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <ZaadLogo size="sm" className="mb-4" />
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Enterprise software and HRMS products built for UAE and MENA businesses.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com/company/zaadcore"
                aria-label="ZaadCore on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-slate-300 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:hello@zaadcore.com"
                aria-label="Email ZaadCore"
                className="text-xs text-slate-600 hover:text-slate-300 transition-colors"
              >
                hello@zaadcore.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} ZaadCore Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">Dubai, UAE</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-600">Systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
