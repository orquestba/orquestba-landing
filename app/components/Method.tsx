"use client";
import { useRef } from "react";
import ArchDraw from "./ArchDraw";
import Title from "./shared/Title";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    num: "01",
    name: "Base",
    desc: "Mapeamos el punto de partida: qué información existe, cómo fluye entre las áreas y dónde se rompe la cadena.",
    timing: "2–3 semanas",
  },
  {
    num: "02",
    name: "Estructura",
    desc: "Diseñamos la arquitectura de gestión: los criterios, indicadores y cadencia que hacen posible que Finanzas, Operaciones y Ventas planifiquen desde la misma lectura.",
    timing: "3–4 semanas",
  },
  {
    num: "03",
    name: "Sistema",
    desc: "Construimos el portal web a medida: los tableros, indicadores y escenarios proyectados que tu empresa necesita para transformar el dato en dirección.",
    timing: "6–10 semanas",
  },
  {
    num: "04",
    name: "Ciclo",
    desc: "Cuando el ciclo está en marcha, lo que sigue es mejorar. Cada período planificado deja a la empresa mejor preparada para el siguiente — bienvenida a la Mejora Continua.",
    timing: "Continuo",
  },
];

export default function Method() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    // once: true,
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
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="pt-16 md:pt-20 lg:pt-25 bg-cream overflow-hidden"
      id="metodo"
    >
      <motion.div
        variants={item}
        className="max-w-345 mx-auto px-5 md:px-8 lg:px-15 mb-10 lg:mb-14"
      >
        <div className="eyebrow">El camino</div>

        <Title>
          Construimos el puente entre tu punto de{" "}
          <Title.Highlight>partida y tu destino</Title.Highlight>
        </Title>
        <p className="text-[15px] lg:text-[17px] text-ink-3 leading-[1.7] max-w-160 mt-4 lg:mt-5">
          Conectamos datos, áreas y decisiones. El dato alinea, las áreas
          deciden.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="w-full relative bg-cream overflow-hidden"
      >
        <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
          <ArchDraw />

          {/* Phase cards grid */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-cream border-t border-rule"
          >
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                className={[
                  "pt-8 px-6 pb-10 md:pt-10 md:px-8 lg:pt-12 lg:px-10 lg:pb-13",
                  "border-b border-rule md:border-b-0",
                  "relative transition-colors hover:bg-cream-dark",
                  "lg:border-r lg:border-rule",
                  i === phases.length - 1 ? "lg:border-r-0 border-b-0" : "",
                  i % 2 === 0 ? "md:border-r md:border-rule" : "md:border-r-0",
                ].join(" ")}
              >
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-4 mb-3 lg:mb-4">
                  Etapa {phase.num}
                </div>
                <div className="font-heading text-[26px] lg:text-[32px] text-navy mb-3 lg:mb-4 leading-[1.1]">
                  {phase.name}
                </div>
                <p className="text-sm lg:text-[14.5px] text-ink-3 leading-[1.65] mb-5 lg:mb-7">
                  {phase.desc}
                </p>
                {/* <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-copper">
                  {phase.timing}
                </div> */}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
