---
name: ui-ux-pro-max
description: Professional UI/UX skill for building polished, accessible, animated components in this project. Use when designing new sections, improving visual quality, building components, or working with Framer Motion animations.
---

# UI UX Pro Max

You are a senior UI/UX engineer and design systems expert. When this skill is active, apply the following standards to every component or section you build.

---

## This Project's Design System

**Stack:** Next.js 16 · Tailwind CSS v4 · Framer Motion · Lucide React · shadcn/ui (via 21st.dev)

**Theme (CSS variables in `app/globals.css`):**
```
--bg: #080d18          dark background
--surface: #0e1524     card background
--surface-2: #141d2e   elevated surface
--border: rgba(255,255,255,0.07)
--text: #e2e8f0        primary text
--muted: #64748b       secondary text
--accent: #f97316      orange (brand)
--accent-light: #fb923c
```

**Font:** Manrope (variable `--font-manrope`), weights 400–800

**Utility classes available:**
- `.card` — dark surface card with border
- `.card-glass` — frosted glass card
- `.btn-primary` — orange CTA button
- `.btn-ghost` — outlined ghost button
- `.text-accent` — orange gradient text
- `.section-label` — small uppercase orange label
- `.bg-dots` / `.bg-grid` / `.bg-stripe` / `.bg-mesh` — background patterns
- `.img-overlay-dark` / `.img-overlay-left` — image gradient overlays
- `.fade-up` / `.animate-float` / `.animate-float-slow` — CSS animations

**Tailwind utilities to prefer:** `text-slate-*`, `border-white/*`, `bg-white/*`, `orange-*`

---

## Layout Standards

- Max width: `max-w-6xl mx-auto px-5 sm:px-8`
- Section padding: `py-20` to `py-28`
- Grid: `grid lg:grid-cols-2 gap-12 items-center` or `sm:grid-cols-2 lg:grid-cols-3 gap-5`
- Heading sizes: `text-4xl sm:text-5xl lg:text-[3.5rem]` with `leading-[1.06] tracking-tight`
- Body text: `text-lg text-slate-400 leading-relaxed`
- Card border radius: `rounded-2xl` for cards, `rounded-xl` for inner elements

---

## Visual Quality Rules

1. **Every section needs a background treatment** — combine at least two of: color overlay, `bg-grid`/`bg-dots`, radial orange glow, gradient fade
2. **Section dividers** — always add a 1px top line with the orange glow:
   ```jsx
   <div className="absolute top-0 left-0 right-0 h-px"
     style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
   ```
3. **Cards** — use `.card` with `hover:border-orange-500/20 transition-colors`
4. **Icons** — always in a container: `w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center`
5. **Labels** — every section starts with `<p className="section-label mb-5">…</p>`
6. **Spacing** — be generous; tight spacing looks cheap
7. **Images** — always add a gradient overlay (`img-overlay-dark` or custom) and a caption badge

---

## Framer Motion Patterns

Always use `"use client"` when using Framer Motion.

**Fade up on scroll (preferred):**
```tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-80px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
>
```

**Stagger children:**
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

<motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
  {items.map(i => <motion.div key={i} variants={item}>…</motion.div>)}
</motion.div>
```

**Floating badge:**
```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
```

**Hover scale on cards:**
```tsx
<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
```

---

## 21st.dev Component Usage

When a component is needed (dialog, accordion, tabs, tooltip, etc.), prefer pulling from 21st.dev:
```bash
npx shadcn@latest add "https://21st.dev/r/{author}/{component}"
```

The `cn()` utility is in `@/lib/utils` — always use it for conditional classes:
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-class", condition && "conditional-class")} />
```

---

## Accessibility Checklist

- `aria-labelledby` on every `<section>`
- `aria-label` on icon-only buttons
- `alt` text on every `<img>` (empty `alt=""` for decorative)
- Focus rings on interactive elements: `focus:outline-none focus:ring-2 focus:ring-orange-500/50`
- Color contrast: text on dark bg must meet WCAG AA (slate-400 on #080d18 passes)
- Semantic HTML: `<main>`, `<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`

---

## Component Template

Use this as the starting point for any new section:

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionName() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="section-id">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-5">Label</p>
          <h2 id="section-id" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Heading <span className="text-accent">here</span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">Description</p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Anti-patterns — Never Do These

- No light backgrounds (`bg-white`, `bg-gray-100`) — this is a dark theme site
- No hardcoded hex colors in className — use CSS variables or Tailwind slate/orange
- No pixel values in Tailwind — use spacing scale
- No `useEffect` for animations that Framer Motion can handle
- No `!important` overrides
- No inline styles except for radial gradients that can't be expressed in Tailwind
- No missing `transition-colors` on hover states
- No empty sections without a background pattern
