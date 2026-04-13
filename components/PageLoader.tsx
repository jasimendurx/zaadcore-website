"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ZaadLogo from "./ZaadLogo";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [12, 28, 45, 62, 78, 91, 100];
    let i = 0;
    const timer = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 450);
      }
    }, 160);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#070b15] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)" }}
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
            />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6 sm:gap-10 w-full max-w-[280px] mx-auto"
          >
            {/* Logo with glow */}
            <div className="relative">
              <div
                className="absolute inset-0 blur-2xl opacity-30 scale-150"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 70%)" }}
              />
              <ZaadLogo size="lg" />
            </div>

            {/* Progress track */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #f97316, #fb923c, #ea580c)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-slate-600 tracking-[0.2em] uppercase"
                >
                  Initialising
                </motion.p>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-slate-700 tabular-nums"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[11px] text-slate-700 tracking-[0.25em] uppercase"
            >
              Enterprise Software · Dubai, UAE
            </motion.p>
          </motion.div>

          {/* Bottom dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-orange-500/50"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
