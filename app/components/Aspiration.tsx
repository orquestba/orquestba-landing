"use client";
import { useRef, Fragment } from "react";
import Button from "./shared/Button";
import { ArrowRight } from "lucide-react";
import Title from "./shared/Title";
import { motion, useInView } from "framer-motion";

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
    title: "Instalas IBP Framework",
    body: (
      <>
        Conectamos Finanzas, Ventas y Operaciones bajo un sistema de
        Planificación Integrada de Negocio. IBP no es un software - es el
        framework de trabajo alrededor del cual tu empresa toma decisiones.
        Comercial sabe lo que puede prometer. Operaciones sabe lo que necesita
        para cumplirlo. Finanzas reconcilia el plan.
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

const isoStages = ["Base", "Estructura", "Sistema", "Mejora continua"];

export default function Aspiration() {
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
      className="py-16 md:py-20 lg:py-30 bg-navy relative overflow-hidden"
      id="tu-empresa"
    >
      {/* Background glows */}
      <div
        className="absolute -top-50 -right-50 w-175 h-175 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,105,42,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-37.5 -left-25 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,105,42,0.04) 0%, transparent 65%)",
        }}
      />

      <motion.div
        variants={item}
        className="max-w-345 mx-auto px-5 md:px-8 lg:px-15 relative z-1"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <div className="eyebrow eyebrow-light">El destino</div>

          <Title className="text-white max-w-150">
            Tu empresa habita la realidad que{" "}
            <Title.Highlight>imaginaste</Title.Highlight>
          </Title>

          <p className="text-[15px] lg:text-[17px] font-light text-white/55 leading-[1.7] max-w-160 mt-4 lg:mt-5">
            Diseñemos como
          </p>
        </motion.div>

        {/* Path cards */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 mb-12 lg:mb-16 rounded-xl overflow-hidden"
        >
          {paths.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/4 border border-white/8 p-6 md:p-8 lg:pt-13 lg:px-13 lg:pb-14 transition-colors hover:bg-copper/[0.07] hover:border-copper/25"
            >
              {/* gradient top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-copper to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-copper-light bg-copper/15 px-3 py-1 rounded-[20px] mb-5 lg:mb-7">
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
                    <div className="w-1.25 h-1.25 rounded-full bg-copper opacity-70 shrink-0 mt-1.75" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="link"
                href="#modela"
                icon={<ArrowRight size={14} />}
              >
                {p.ctaLabel}
              </Button>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        {/* <motion.div
          variants={item}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between pt-8 lg:pt-10 border-t border-white/8 mb-8 lg:mb-10"
          id="diagnostico"
        >
          <motion.div variants={item}>
            <h3 className="font-heading text-2xl md:text-[28px] lg:text-[32px] text-white mb-2 leading-[1.15]">
              ¿Tu empresa tiene la estructura
              <br className="hidden md:block" />{" "}
              <span className="text-copper">para crecer?</span>
            </h3>
            <p className="text-sm lg:text-[15px] text-white/45 leading-normal max-w-120">
              En una sesión de diagnóstico analizamos tu situación actual e
              identificamos los puntos críticos. Sin compromiso. Sin
              tecnicismos.
            </p>
          </motion.div>
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <Button size="lg" href="#" icon={<ArrowRight size={18} />}>
              Iniciar diagnóstico
            </Button>
          </div>
        </motion.div> */}

        {/* ISO note */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start md:items-center px-5 md:px-8 lg:px-10 py-6 lg:py-8 bg-white/5 border border-copper/20 rounded-[10px]"
        >
          <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-2 shrink-0">
            <div className="font-heading text-base lg:text-lg italic text-copper-light border border-copper/50 px-4 md:px-5 py-2 rounded whitespace-nowrap tracking-wider">
              ISO 9001
            </div>
            <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25 whitespace-nowrap">
              Estándar base
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[13px] lg:text-sm text-white/60 leading-[1.55]">
              Los fundamentos de ISO 9001 —enfoque al cliente, gestión por
              procesos, mejora continua y decisiones basadas en evidencia— son
              la columna vertebral del flujo que estructura todo nuestro
              trabajo:
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {isoStages.map((stage, i) => (
                <Fragment key={stage}>
                  <span className="text-[11px] lg:text-xs font-semibold text-white/75 bg-white/6 border border-white/10 px-3 md:px-3.5 py-1.25 rounded-[20px] whitespace-nowrap">
                    {stage}
                  </span>
                  {i < isoStages.length - 1 && (
                    <span className="text-xs text-copper-light opacity-60">
                      →
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
