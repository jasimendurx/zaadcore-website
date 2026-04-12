"use client";

interface ZaadLogoProps {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ZaadLogo({ variant = "full", size = "md", className = "" }: ZaadLogoProps) {
  const sizes = {
    sm: { mark: 28, text: "text-lg" },
    md: { mark: 36, text: "text-2xl" },
    lg: { mark: 48, text: "text-3xl" },
  };
  const { mark: s, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Z-mark: three bars + diagonal slash + diamond spark */}
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="zGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="slateGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        {/* Background hex/square */}
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#slateGrad)" />
        {/* Top bar */}
        <rect x="10" y="12" width="28" height="5" rx="2.5" fill="url(#zGrad)" />
        {/* Middle bar (shorter, offset) */}
        <rect x="10" y="21.5" width="20" height="5" rx="2.5" fill="url(#zGrad)" opacity="0.7" />
        {/* Bottom bar */}
        <rect x="10" y="31" width="28" height="5" rx="2.5" fill="url(#zGrad)" />
        {/* Diagonal slash */}
        <line x1="35" y1="12" x2="13" y2="36" stroke="url(#zGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        {/* Diamond spark */}
        <polygon points="42,8 44,12 42,16 40,12" fill="#fb923c" opacity="0.9" />
      </svg>

      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span
            className={`${text} font-bold tracking-tight`}
            style={{
              fontFamily: "var(--font-syne)",
              background: "linear-gradient(135deg, #fff 0%, #fb923c 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ZaadCore
          </span>
        </div>
      )}
    </div>
  );
}
