"use client";
import { useEffect, useRef } from "react";

// Subtle copper dot grid behind the hero content. A single mousemove
// listener updates two CSS custom properties (--mx/--my); the "lit" dot
// layer is revealed only near the cursor via a CSS mask, so the cursor
// interaction costs one style write per frame instead of per-dot JS.
export default function HeroDots() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,105,42,0.3) 1px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,133,74,0.95) 1.5px, transparent 2px)",
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(180px at var(--mx, 50%) var(--my, 50%), black, transparent 70%)",
          maskImage:
            "radial-gradient(180px at var(--mx, 50%) var(--my, 50%), black, transparent 70%)",
        }}
      />
    </div>
  );
}
