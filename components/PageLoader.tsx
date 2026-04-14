"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0a0e1a] flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="w-5 h-5 rounded-full border-2 border-orange-500/30 border-t-orange-500 animate-spin" />
    </div>
  );
}
