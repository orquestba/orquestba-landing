"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./shared/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import horizontalLogo from "@/public/Logo-horizontal-azul.svg";

const links = [
  { href: "#problema", label: "Por qué IBP" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#servicios", label: "Servicios" },
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

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // smooth
      }}
      id="main-nav"
      className="sticky top-0 z-100 bg-off-white flex flex-col"
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(23,18,16,0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-345 mx-auto px-5 py-6 md:px-8 lg:py-4 lg:px-15 flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="#main-nav" className="shrink-0">
          <Image
            src={horizontalLogo}
            loading="eager"
            alt="Orquestba Logo"
            height={80}
            width={150}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-md font-medium text-ink-2 no-underline transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            color="copper"
            href="#contacto"
            icon={<ArrowRight size={14} className="opacity-70" />}
          >
            Iniciar Diagnóstico
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.25 p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-rule/30 px-5 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-2 no-underline py-3 border-b border-rule/50 last:border-b-0 transition-colors hover:text-navy"
              onClick={(e) => {
                setMenuOpen(false);
                handleAnchorClick(e, link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              color="copper"
              href="#contacto"
              className="w-full justify-center"
              icon={<ArrowRight size={14} className="opacity-70" />}
            >
              Iniciar Diagnóstico
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
