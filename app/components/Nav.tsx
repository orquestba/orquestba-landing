"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#recursos", label: "Recursos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-100 bg-off-white border-b border-rule h-17 flex items-center"
      style={{ boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="max-w-345 mx-auto px-15 flex items-center justify-between w-full">
        <a href="#" className="flex items-center gap-3 no-underline">
          <svg
            className="w-8.5 h-8.5"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="17" r="16" stroke="#0E1C2F" strokeWidth="1.5" />
            <circle cx="17" cy="17" r="6" fill="#B8692A" opacity="0.9" />
            <circle cx="17" cy="8" r="2.5" fill="#0E1C2F" />
            <circle cx="25.6" cy="22" r="2.5" fill="#0E1C2F" />
            <circle cx="8.4" cy="22" r="2.5" fill="#0E1C2F" />
            <line
              x1="17"
              y1="10.5"
              x2="17"
              y2="14.5"
              stroke="#0E1C2F"
              strokeWidth="1.2"
            />
            <line
              x1="23.8"
              y1="21"
              x2="20.2"
              y2="18.8"
              stroke="#0E1C2F"
              strokeWidth="1.2"
            />
            <line
              x1="10.2"
              y1="21"
              x2="13.8"
              y2="18.8"
              stroke="#0E1C2F"
              strokeWidth="1.2"
            />
          </svg>
          <div>
            <div className="font-heading text-[18px] text-navy leading-none tracking-[0.01em]">
              Orquesta
            </div>
            <div className="text-[10px] text-ink-3 tracking-[0.08em] mt-0.5">
              Our Request to Data
            </div>
          </div>
        </a>

        <ul className="flex items-center gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] text-ink-2 no-underline transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#diagnostico"
          className="inline-flex items-center gap-2 bg-navy text-white text-[13.5px] font-semibold px-5.5 py- 2.75 rounded no-underline transition-colors hover:bg-navy-soft"
        >
          Agendar diagnóstico <span className="text-[14px] opacity-70">→</span>
        </a>
      </div>
    </nav>
  );
}
