"use client";
import { useRef } from "react";
import Image from "next/image";
import { getCurrentYear } from "../utils/getCurrentYear";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const navLinks = [
  "Inicio",
  "Cómo trabajamos",
  "Servicios",
  "Recursos",
  "Sobre nosotros",
];
const serviceLinks = ["Sistema IBP", "Asesoría en Análisis de Negocio"];

export default function Footer() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px", // Trigger when the component is 100px in view
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="bg-footer-bg pt-16 md:pt-18 pb-8 md:pb-10"
      id="contacto"
    >
      <motion.div
        variants={item}
        className="max-w-345 mx-auto px-5 md:px-8 lg:px-15"
      >
        {/* Main grid: 1col → 2col → [280px 1fr 1fr 1fr] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr] gap-8 md:gap-10 lg:gap-15 pb-10 lg:pb-14 border-b border-white/8 mb-6 md:mb-8">
          {/* Brand — spans both cols on sm so it's full-width above the link cols */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/Logo-horizontal-blanco.svg"
              alt="Orquestba Logo"
              width={180}
              height={100}
            />
            <span className="text-[11px] text-white tracking-[0.08em] mb-4 md:mb-5">
              Our Request to Data · IBP
            </span>
            <p className="text-[13px] text-white/35 leading-[1.65] mb-5 md:mb-6 max-w-xs lg:max-w-none">
              Conectamos datos, áreas y decisiones para que tu empresa tenga
              claridad, dirección y capacidad de adaptación.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-8 h-8 border border-white/12 rounded-md flex items-center justify-center text-white/40 no-underline transition-colors hover:border-copper hover:text-copper-light"
                aria-label="LinkedIn"
              >
                <span className="text-[13px] font-semibold leading-none">
                  in
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div variants={item}>
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-4 md:mb-5">
              Navegación
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-white/35 no-underline transition-colors hover:text-white/75"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-4 md:mb-5">
              Servicios
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-white/35 no-underline transition-colors hover:text-white/75"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — spans both cols on sm so it sits below the link cols */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-1">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-4 md:mb-5">
              Contacto
            </div>
            {[
              "info@orquestba.com.ar",
              "+54 11 1234 5678",
              "Buenos Aires, Argentina",
            ].map((item) => (
              <div
                key={item}
                className="text-[13.5px] text-white/40 mb-2.5 leading-normal"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center"
        >
          <motion.div variants={item} className="text-xs text-white/20">
            © {getCurrentYear()} Orquestba. Todos los derechos reservados.
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-4 md:gap-6">
            {["Política de privacidad", "Términos y condiciones"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="text-xs text-white/20 no-underline transition-colors hover:text-white/50"
                >
                  {label}
                </a>
              ),
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
