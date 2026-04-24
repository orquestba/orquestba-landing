"use client";

import { useEffect, useState } from "react";

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
      style={{
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="nav-inner">
        {/* TOOD: Change logo for real Orquestba logo */}
        <a href="#" className="nav-logo">
          <svg
            className="nav-logo-mark"
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
          <div className="nav-logo-text">
            <div className="nav-logo-name">Orquesta</div>
            <div className="nav-logo-sub">Our Request to Data</div>
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#metodo">Método</a>
          </li>
          <li>
            <a href="#recursos">Recursos</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <a href="#diagnostico" className="nav-cta">
          Agendar diagnóstico <span className="nav-cta-arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
