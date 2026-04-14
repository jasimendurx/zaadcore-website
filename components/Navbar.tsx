"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ZaadLogo from "./ZaadLogo";

const navLinks = [
  { label: "ZaadWorks", href: "/zaadworks" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" aria-label="ZaadCore home">
              <ZaadLogo size="sm" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="/contact" className="btn-primary text-sm py-2 px-5">
                Get in touch
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#0f1623] border-l border-white/5 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <ZaadLogo size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/5">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
