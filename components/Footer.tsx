"use client";

import { motion } from "framer-motion";
import ZaadLogo from "./ZaadLogo";
import { ExternalLink, AtSign, Code2 } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "ZaadWorks HRMS", href: "#zaadworks" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Changelog", href: "#" },
  ],
  Solutions: [
    { label: "Small Business", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Holding Groups", href: "#" },
    { label: "Free Zones", href: "#" },
  ],
  Compliance: [
    { label: "UAE WPS", href: "#compliance" },
    { label: "MOHRE Integration", href: "#compliance" },
    { label: "Emiratisation", href: "#compliance" },
    { label: "Labour Law", href: "#compliance" },
  ],
  Company: [
    { label: "About ZaadCore", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <ZaadLogo size="md" className="mb-4" />
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              ZaadCore builds enterprise workforce management products for MENA.
              WPS-compliant, built for multicultural teams.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: ExternalLink, href: "#", label: "LinkedIn" },
                { Icon: AtSign, href: "#", label: "Twitter" },
                { Icon: Code2, href: "#", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-orange-400 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} ZaadCore. All rights reserved.
            ZaadWorks is a product of ZaadCore Technologies LLC.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-700">Registered in Dubai, UAE</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-slate-700">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
