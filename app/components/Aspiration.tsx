"use client";
import { useRef } from "react";
import Button from "./shared/Button";
import { ArrowRight } from "lucide-react";
import Title from "./shared/Title";
import { motion, useInView } from "framer-motion";
import {
  staggerContainer as container,
  fadeUpItem as item,
} from "./shared/motion";

const paths = [
  {
    tag: "Para empresas que empiezan",
    title: "Asesoría en Análisis de Negocio",
    body: (
      <>
        Tu empresa genera información. El problema es que cada área la guarda,
        la interpreta y la usa por separado o no sabe interpretarla por falta de
        comunicación entre áreas. Antes de conectar, hay que entender que hay
        que conectar. Mapeamos tu modelo de gestión actual y diseñamos la
        arquitectura que orqueste tus datos.
      </>
    ),
    items: [
      "Diagnóstico del modelo de gestión actual",
      "Organización de fuentes de datos y criterios de medición",
      " Diseño de la arquitectura de información",
      "Hoja de ruta hacia la integración",
    ],
    ctaLabel: "Ir",
  },
  {
    tag: "Para empresas listas para sistematizar",
    title: "Instalás ORQUESTBA Framework",
    body: (
      <>
        Conectamos Finanzas, Ventas y Operaciones bajo un sistema de
        Planificación Integrada de Negocio. El sistema portal es el centro de
        gestión desde donde tu empresa planifica, decide y ejecuta bajo la misma
        lectura. Comercial sabe lo que puede prometer. Operaciones sabe lo que
        necesita para cumplirlo. Finanzas reconcilia el plan.
      </>
    ),
    items: [
      "Un tablero de gestión para Finanzas, Operaciones y Ventas",
      "KPIs y forecasting integrados en tiempo real",
      "Simulación de escenarios",
      " Acompañamiento en la adopción de IBP como framework",
    ],
    ctaLabel: "Empecemos",
  },
];

export default function Aspiration() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px", // Trigger when the component is 100px in view
  });

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="py-16 md:py-20 lg:py-30 bg-navy relative overflow-hidden"
      id="servicios"
    >
      <motion.div
        variants={item}
        className="max-w-345 mx-auto px-5 md:px-8 lg:px-15 relative z-1"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <div className="eyebrow eyebrow-light">Servicios</div>

          <Title className="text-white max-w-150">Dos formas de empezar</Title>

          <Title.Lede light className="mt-4 lg:mt-5">
            Según el punto de partida de tu empresa, el camino hacia la
            integración arranca distinto.
          </Title.Lede>
        </motion.div>

        {/* Path cards */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 mb-12 lg:mb-16"
        >
          {paths.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/4 border border-white/8 p-6 md:p-8 lg:pt-13 lg:px-13 lg:pb-14 transition-colors hover:bg-copper/[0.07] hover:border-copper/25"
            >
              {/* copper accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="font-mono text-[10px] font-medium tracking-[0.15em] uppercase text-copper-light mb-5 lg:mb-7">
                {p.tag}
              </div>
              <div className="font-heading text-2xl lg:text-[32px] text-white leading-[1.1] mb-3 lg:mb-4">
                {p.title}
              </div>
              <p className="text-sm lg:text-[15px] text-white/50 leading-[1.7] mb-6 lg:mb-9">
                {p.body}
              </p>
              <ul className="flex flex-col gap-2.5 lg:gap-3 mb-7 lg:mb-10">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] lg:text-sm text-white/50 leading-normal"
                  >
                    <span className="bullet-marker mt-1.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="link"
                href="#contacto"
                icon={<ArrowRight size={14} />}
              >
                {p.ctaLabel}
              </Button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
