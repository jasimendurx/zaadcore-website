"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ZaadLogo from "./ZaadLogo";

type NavLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    desc: string;
    href: string;
    badge?: string;
  }[];
};

const companyLinks: NavLink[] = [
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "ZaadWorks", desc: "Enterprise HRMS for UAE", href: "/zaadworks", badge: "Live" },
      { label: "Platform Roadmap", desc: "What is coming next", href: "/#products", badge: "2026" },
    ],
  },
  { label: "Solutions", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productLinks: NavLink[] = [
  { label: "Overview", href: "#hero" },
  { label: "Modules", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Compliance", href: "#compliance" },
  { label: "ZaadCore", href: "/" },
];

export default function Navbar({ mode = "company" }: { mode?: "company" | "product" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navLinks = mode === "product" ? productLinks : companyLinks;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070b15]/95 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <ZaadLogo size="sm" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={13} className="opacity-50" />}
                  </a>

                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 glass rounded-xl p-2 shadow-xl shadow-black/40"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                                    {child.label}
                                  </span>
                                  {child.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-medium">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5">{child.desc}</p>
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={mode === "product" ? "#contact" : "/contact"}
                className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2"
              >
                {mode === "product" ? "See Pricing" : "Start a Project"}
              </a>
              <a
                href={mode === "product" ? "#contact" : "/zaadworks"}
                className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_24px_rgba(249,115,22,0.4)]"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.25)",
                }}
              >
                {mode === "product" ? "Get a Demo" : "Explore ZaadWorks"}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0e1a] border-l border-slate-800/60 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <ZaadLogo size="sm" />
                <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                    {link.children && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 hover:text-slate-200 rounded-lg transition-colors"
                          >
                            {child.label}
                            {child.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                                {child.badge}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="pt-6 border-t border-slate-800/60 flex flex-col gap-3">
                <a
                  href={mode === "product" ? "#contact" : "/contact"}
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-sm text-slate-400 py-2.5 hover:text-white transition-colors"
                >
                  {mode === "product" ? "See Pricing" : "Start a Project"}
                </a>
                <a
                  href={mode === "product" ? "#contact" : "/zaadworks"}
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-sm font-semibold text-white py-3 rounded-xl"
                  style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
                >
                  {mode === "product" ? "Get a Demo" : "Explore ZaadWorks"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
