"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import ZaadLogo from "./ZaadLogo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/zaadworks" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isLight = mounted && theme === "light";

  const scrolledBg = isLight
    ? "bg-white/97 backdrop-blur-md border-b border-black/5 shadow-sm"
    : "backdrop-blur-md border-b border-white/5 bg-[var(--nav-bg)]";

  const mobileBg = isLight ? "bg-white border-l border-black/8" : "bg-[var(--mobile-menu-bg)] border-l border-white/5";
  const navTextBase = isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-slate-100";
  const mobileTextBase = isLight ? "text-slate-700 hover:text-slate-900 hover:bg-black/5" : "text-slate-300 hover:text-white hover:bg-white/5";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? scrolledBg : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" aria-label="ZaadCore home">
              <ZaadLogo size="sm" />
            </a>

            {/* Desktop Nav + CTA — all right-aligned */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${navTextBase}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="w-px h-4 bg-white/10 mx-2" />
              {mounted && (
                <button
                  onClick={() => setTheme(isLight ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className={`p-2 rounded-lg transition-colors ${
                    isLight
                      ? "text-slate-500 hover:text-slate-800 hover:bg-black/6"
                      : "text-slate-400 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {isLight ? <Moon size={17} /> : <Sun size={17} />}
                </button>
              )}
              <a href="/contact" className="btn-primary text-sm py-2 px-5">
                Get in touch
              </a>
            </div>

            {/* Mobile right: theme toggle + hamburger */}
            <div className="md:hidden flex items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(isLight ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className={`p-2 transition-colors ${
                    isLight ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isLight ? <Moon size={17} /> : <Sun size={17} />}
                </button>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${isLight ? "text-slate-500 hover:text-slate-900" : "text-slate-400 hover:text-white"}`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className={`absolute right-0 top-0 bottom-0 w-64 p-6 flex flex-col ${mobileBg}`}>
            <div className="flex items-center justify-between mb-8">
              <ZaadLogo size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${isLight ? "text-slate-500 hover:text-slate-900" : "text-slate-400 hover:text-white"}`}
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
                  className={`px-4 py-3 rounded-lg transition-colors text-sm font-medium ${mobileTextBase}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={`pt-6 border-t ${isLight ? "border-black/8" : "border-white/5"}`}>
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
