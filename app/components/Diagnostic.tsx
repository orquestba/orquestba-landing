"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "./shared/Title";

const cases = [
  {
    label: "Inicial",
    statement: "Cada área tiene su versión. El negocio no tiene la suya",
    body: "Tus áreas operan en silos. No hay una lectura unificada del negocio. Tu empresa no tiene un sistema de gestión integrado. Los datos están dispersos y las decisiones se toman sin visibilidad comun. Necesitas construir desde la base.",
    signal: "Punto de partida: cero",
  },
  {
    label: "Intermedio",
    statement: "Tenés procesos. Tenés datos. Pero conviven sin integrarse",
    body: "Ya existían procesos, herramientas o KPIs, pero cuando queres cruzar los números, algo siempre falta. Necesitas refinar sin desarmar lo que funciona.",
    signal: "Punto de partida: parcial",
  },
  {
    label: "Avanzado",
    statement: "Entendés tu negocio, confias en tu sistema y queres escalar",
    body: "Tu sistema de gestión es confiable. Las áreas se hablan, los datos fluyen y las decisiones tienen respaldo. Es momento de escalar.",
    signal: "Punto de partida: avanzado",
  },
];

export default function Diagnostic() {
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
      className="py-16 md:py-20 lg:pt-30 lg:pb-25 bg-off-white"
      id="contexto"
    >
      <motion.div
        variants={item}
        className="max-w-345 mx-auto px-5 md:px-8 lg:px-15"
      >
        <div className="mb-10 lg:mb-14">
          <div className="eyebrow eyebrow-muted">El punto de partida</div>
          <Title>
            Identifiquemos el{" "}
            <Title.Highlight>punto de partida</Title.Highlight>
          </Title>
          <p className="text-[15px] lg:text-[17px] text-ink-3 leading-[1.7] max-w-160">
            No hay un solo camino para la integración.{" "}
          </p>
        </div>

        {/* Cases grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-rule rounded-xl overflow-hidden mb-8 lg:mb-10"
        >
          {cases.map((c, i) => (
            <div
              key={c.label}
              className={[
                "p-6 md:p-8 lg:p-10 bg-off-white transition-colors hover:bg-cream cursor-default",
                i < cases.length - 1
                  ? "border-b border-rule md:border-b-0"
                  : "",
                i === 0 ? "md:border-r lg:border-r border-rule" : "",
                i === 1 ? "lg:border-r border-rule" : "",
              ].join(" ")}
            >
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink-4 mb-3 lg:mb-4">
                {c.label}
              </div>
              <div className="font-heading text-lg lg:text-xl text-navy leading-[1.2] mb-3 lg:mb-4">
                {c.statement}
              </div>
              <p className="text-sm text-ink-3 leading-[1.6] mb-5 lg:mb-6">
                {c.body}
              </p>
              {/* <span className="inline-flex items-center gap-2 text-xs font-semibold text-copper bg-copper-pale px-3 py-1.25 rounded-[20px]">
                {c.signal}
              </span> */}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 pt-5 lg:pt-7"
        >
          <div className="flex-1 h-px bg-rule" />
          <span className="text-xs md:text-[13px] text-ink-4 italic whitespace-nowrap text-center">
            Si reconocés alguna de estas señales, hay una respuesta
          </span>
          <span className="text-lg md:text-xl text-copper opacity-60">↓</span>
          <div className="flex-1 h-px bg-rule" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
