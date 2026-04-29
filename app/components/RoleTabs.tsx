"use client";

import { useState, useRef } from "react";
import { Check } from "lucide-react";
import Title from "./shared/Title";
import { motion, useInView } from "framer-motion";

type Role = "business" | "finance" | "supply" | "sales";

const roles: { id: Role; label: string }[] = [
  { id: "business", label: "Dirección" },
  { id: "finance", label: "Finanzas" },
  { id: "supply", label: "Operaciones" },
  { id: "sales", label: "Comercial" },
];

const panels: Record<
  Role,
  {
    painTitle: string;
    painBody: string;
    signals: string[];
    ibpHeadline: string;
    ibpBody: string;
    outcomes: string[];
  }
> = {
  business: {
    painTitle: "Tomás decisiones con información que no sabés si es confiable.",
    painBody:
      "Como Director, ves lo que cada área no puede ver: el problema no es la gente. Tenés buenos equipos en Finanzas, Operaciones y Ventas — el problema es que trabajan desde lecturas distintas. Y cuando se juntan, la reunión se convierte en un debate sobre datos en vez de una decisión sobre el negocio. No es un problema de equipos. Es un problema de estructura.",
    signals: [
      "Cada área llega con su propia versión de los resultados",
      "Las decisiones llegan tarde porque alinear a los equipos lleva más tiempo que resolver el problema",
      "El presupuesto se hace una vez al año y queda obsoleto a los 3 meses",
      "Cada área ejecuta la estrategia desde su propia interpretación",
    ],
    ibpHeadline: "La reunión deja de ser táctica y se vuelve estratégica.",
    ibpBody:
      "IBP sincroniza el ciclo de planificación de Finanzas, Operaciones y Ventas bajo una misma lógica. Cuando tomás una decisión, lo hacés con datos actualizados, validados y compartidos por toda la organización — no con la versión de cada uno.",
    outcomes: [
      "Finanzas, Operaciones y Ventas en el mismo tablero de gestión",
      "Planificación continua: el presupuesto evoluciona con el negocio, no contra él",
      "Reuniones de gestión centradas en decisiones, no en reconciliar datos",
      "La estrategia deja de fragmentarse — y sustenta la decisión",
    ],
  },
  finance: {
    painTitle: "Pasás más tiempo consolidando datos que analizando el negocio.",
    painBody:
      "Tu equipo es el custodio de los números, pero los números están en todas partes. Cada cierre es una carrera contra el tiempo: juntando planillas, reconciliando versiones, persiguiendo información que tendría que fluir sola.",
    signals: [
      "El proceso de cierre mensual lleva semanas en lugar de días",
      "Las proyecciones se construyen sobre supuestos no validados con las áreas",
      "El forecast cambia cada vez que alguien actualiza una planilla",
      "Nadie puede trazar un número del cierre hasta su origen en la operación",
    ],
    ibpHeadline: "Finanzas deja de gestionar el cierre — gestiona el plan.",
    ibpBody:
      "IBP integra los datos financieros con la información de ventas y operaciones. El resultado: menos tiempo consolidando, más tiempo analizando escenarios proyectados.",
    outcomes: [
      "Cierre mensual automatizado y trazable desde una sola fuente",
      "Forecasting financiero integrado con ventas y operaciones",
      "Escenarios financieros con proyección real",
      "KPIs que pulsan la salud financiera del negocio en tiempo real",
    ],
  },
  supply: {
    painTitle:
      "Planeás sobre supuestos — lo que va a vender comercial y lo que va a aprobar finanzas son incógnitas que pagás caro.",
    painBody:
      "Operaciones es la correa de transmisión del negocio, pero opera con información desconectada. Cuando ventas promete algo que no existe, o finanzas recorta un presupuesto que ya está comprometido, el impacto de los sobrecostos lo absorbés vos.",
    signals: [
      "El plan de producción se rehace cada vez que cambia la demanda prevista",
      "Los niveles de inventario no responden a la realidad comercial",
      "Los plazos de entrega de proveedores no están integrados en la planificación",
      "Las urgencias son la norma porque no hay visibilidad anticipada",
    ],
    ibpHeadline:
      "La operación planificada desde la demanda real, no desde supuestos.",
    ibpBody:
      "IBP conecta la demanda real de ventas con la capacidad operativa y los límites financieros. Así, la cadena de abastecimiento planifica en sintonía con el negocio — anticipando, no reaccionando.",
    outcomes: [
      "Planificación de demanda integrada con el pronóstico comercial",
      "Visibilidad de restricciones de capacidad antes de que se vuelvan urgencias",
      "Inventarios optimizados en función de señales reales de venta",
      "Menos urgencias, más anticipación — la operación deja de correr detrás del negocio",
    ],
  },
  sales: {
    painTitle:
      "Vendés, pero la empresa no siempre puede cumplir lo que prometés.",
    painBody:
      "El equipo comercial hace lo que tiene que hacer: construye su pronóstico y sale a vender. El problema es que ese pronóstico no alimenta ningún proceso — operaciones no lo ve, finanzas lo desconoce. La brecha entre lo que prometés y lo que se entrega no se cierra vendiendo mejor. Es un problema de integración.",
    signals: [
      "Construís tu plan de ventas sin saber qué puede producir, entregar o financiar la empresa",
      "Los márgenes reales de cada cliente no son visibles en tiempo real",
      "El pronóstico comercial se construye, pero no alimenta ninguna decisión de planificación",
      "Los compromisos de entrega se hacen sin visibilidad de stock o capacidad",
    ],
    ibpHeadline:
      "Ventas deja de prometer en el vacío — y promete lo que la empresa puede cumplir.",
    ibpBody:
      "IBP conecta el pronóstico comercial con la planificación de operaciones y finanzas. Lo que Ventas compromete, la empresa lo conoce antes de que llegue al cliente. Cerrás la venta sabiendo que la empresa puede cumplir.",
    outcomes: [
      "El pronóstico comercial alimenta la planificación — y la planificación responde al pronóstico",
      "Visibilidad de margen por producto, canal y cliente",
      "Compromisos de entrega basados en stock y capacidad real",
      "El equipo comercial como punto de partida del ciclo de planificación del negocio",
    ],
  },
};

export default function RoleTabs() {
  const [active, setActive] = useState<Role>("business");
  const panel = panels[active];

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
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className="py-16 md:py-20 lg:py-30 bg-off-white"
      id="problema"
    >
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
        {/* Header */}
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <div className="eyebrow eyebrow-muted">Lo que frena tu empresa</div>

          <Title>
            Lo llaman distinto. <Title.Highlight>Es lo mismo.</Title.Highlight>
          </Title>

          <p className="text-[15px] lg:text-[17px] text-ink-3 leading-[1.7] max-w-160">
            Cada área lo siente diferente aunque el dolor es compartido.
            Trabajar por silos sale caro — desconecta la estrategia de la
            operación.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={item}
          className="flex overflow-x-auto md:overflow-hidden border-b border-rule scrollbar-none"
        >
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={[
                "px-4 md:px-7 py-3.5 text-[13px] font-body cursor-pointer bg-transparent border-0 whitespace-nowrap select-none shrink-0 -mb-px transition-colors border-b-2",
                active === r.id
                  ? "text-navy font-semibold border-copper"
                  : "text-ink-3 font-medium border-transparent hover:text-navy",
              ].join(" ")}
            >
              {r.label}
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 border border-rule border-t-0 rounded-b-xl overflow-hidden"
        >
          {/* Left */}
          <motion.div
            variants={item}
            className="p-6 md:p-8 lg:p-13 bg-cream border-b border-rule lg:border-b-0 lg:border-r"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-4 mb-4 lg:mb-5">
              El problema que sentís
            </div>

            <h3 className="font-heading text-[22px] md:text-[26px] lg:text-[28px] text-navy mb-3 lg:mb-4 leading-[1.15]">
              {panel.painTitle}
            </h3>

            <p className="text-sm lg:text-[15px] text-ink-2 leading-[1.7] mb-6 lg:mb-8">
              {panel.painBody}
            </p>

            <ul className="flex flex-col gap-2.5">
              {panel.signals.map((s) => (
                <motion.li
                  key={s}
                  variants={item}
                  className="flex items-start gap-3 text-[13px] lg:text-[13.5px] text-ink-3 leading-normal"
                >
                  <span className="text-ink-4 text-xs mt-0.5 shrink-0">—</span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={item}
            className="p-6 md:p-8 lg:p-13 bg-off-white"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-copper mb-4 lg:mb-5">
              Cómo responde IBP
            </div>

            <h3 className="font-heading text-xl md:text-[22px] lg:text-2xl text-navy mb-3 lg:mb-4 leading-[1.2]">
              {panel.ibpHeadline}
            </h3>

            <p className="text-sm lg:text-[15px] text-ink-2 leading-[1.7] mb-6 lg:mb-8">
              {panel.ibpBody}
            </p>

            <ul className="flex flex-col gap-3">
              {panel.outcomes.map((o) => (
                <motion.li
                  key={o}
                  variants={item}
                  className="flex items-start gap-3 text-[13px] lg:text-sm text-ink-2 leading-normal"
                >
                  <div className="w-4.5 h-4.5 bg-copper-pale rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} strokeWidth={1.4} color="#B8692A" />
                  </div>
                  {o}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
