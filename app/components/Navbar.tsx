"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#recursos", label: "Recursos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-[100] bg-off-white border-b border-rule h-[68px] flex items-center"
      style={{ boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-[60px] flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/orquestba-logo.svg"
            alt="Orquesta Logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button color="navy" href="#diagnostico" icon={<span className="opacity-70">→</span>}>
            Agendar diagnóstico
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-off-white border-b border-rule px-5 py-6 flex flex-col gap-1 z-[99] shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink-2 no-underline py-3 border-b border-rule/50 last:border-b-0 transition-colors hover:text-navy"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              color="navy"
              href="#diagnostico"
              className="w-full justify-center"
              icon={<span className="opacity-70">→</span>}
            >
              Agendar diagnóstico
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
