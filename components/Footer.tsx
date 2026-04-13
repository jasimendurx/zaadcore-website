"use client";

import { motion } from "framer-motion";
import ZaadLogo from "./ZaadLogo";
import { ExternalLink, AtSign, Code2, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "ZaadWorks HRMS", href: "/zaadworks" },
    { label: "HRMS Features", href: "/zaadworks#features" },
    { label: "UAE Compliance", href: "/zaadworks#compliance" },
    { label: "Product Demo", href: "/zaadworks#contact" },
    { label: "Roadmap", href: "/#products" },
  ],
  Solutions: [
    { label: "Enterprise Platforms", href: "/#services" },
    { label: "Workflow Automation", href: "/#services" },
    { label: "AI-Ready Systems", href: "/#services" },
    { label: "SaaS Delivery", href: "/#services" },
  ],
  Company: [
    { label: "About ZaadCore", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 bg-[#070b15]">
      {/* Top gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <ZaadLogo size="md" className="mb-5" />
            <p className="text-sm text-slate-500 leading-relaxed mb-7 max-w-xs">
              ZaadCore builds enterprise-grade software products for MENA — combining
              strategy, engineering, and design into one delivery system.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: ExternalLink, href: "#", label: "LinkedIn" },
                { Icon: AtSign, href: "#", label: "Twitter" },
                { Icon: Code2, href: "#", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 border border-slate-800/80 hover:border-orange-500/20"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-slate-800/50 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} ZaadCore Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-700">Dubai, UAE</span>
            <a
              href="/zaadworks"
              className="flex items-center gap-1 text-xs text-slate-600 hover:text-orange-400 transition-colors"
            >
              ZaadWorks <ArrowUpRight size={11} />
            </a>
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
