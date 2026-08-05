"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MethodCard from "./MethodCard";
import Title from "./shared/Title";
import {
  staggerContainer as container,
  fadeUpItem as item,
} from "./shared/motion";

gsap.registerPlugin(useGSAP);

const phases = [
  {
    num: "01",
    name: "Base",
    desc: "Mapeamos el punto de partida: qué información existe, cómo fluye entre las áreas y dónde se rompe la cadena.",
  },
  {
    num: "02",
    name: "Estructura",
    desc: "Diseñamos la arquitectura de gestión: los criterios, indicadores y cadencia que hacen posible que Finanzas, Operaciones y Ventas planifiquen desde la misma lectura.",
  },
  {
    num: "03",
    name: "Sistema",
    desc: "Construimos el portal web a medida: los tableros, indicadores y escenarios proyectados que tu empresa necesita para transformar el dato en dirección.",
  },
  {
    num: "04",
    name: "Ciclo",
    desc: "Cuando el ciclo está en marcha, lo que sigue es mejorar. Cada período planificado deja a la empresa mejor preparada para el siguiente — bienvenida a la Mejora Continua.",
  },
];

const DWELL = 2.2;
const TRAVEL = 0.9;
const RESET_OUT = 0.5;
const RESET_IN = 0.4;

export default function Method() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const railRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(railRef.current ?? undefined);

      // Desktop only: below lg the stages are stacked and the rail is a
      // static gutter line, so there is nothing to travel along.
      mm.add(
        "(min-width: 64em) and (prefers-reduced-motion: no-preference)",
        () => {
          const nodes = nodeRefs.current.filter(Boolean) as HTMLSpanElement[];
          const fills = fillRefs.current.filter(Boolean) as HTMLSpanElement[];
          if (nodes.length !== phases.length || fills.length !== phases.length)
            return;

          const root = getComputedStyle(document.documentElement);
          const copper = root.getPropertyValue("--color-copper").trim();
          const cream = root.getPropertyValue("--color-cream").trim();
          const ink4 = root.getPropertyValue("--color-ink-4").trim();

          const lit = { backgroundColor: copper, borderColor: copper };
          const idle = { backgroundColor: cream, borderColor: ink4 };

          // The markup renders every node and fill lit so the section is
          // complete without JS. Once the timeline exists, it owns the state.
          const reset = () => {
            gsap.set(fills, { scaleX: 0, transformOrigin: "left center" });
            gsap.set(nodes[0], lit);
            gsap.set(nodes.slice(1), idle);
          };
          reset();

          const tl = gsap.timeline({ repeat: -1, paused: true });
          tl.to({}, { duration: DWELL });

          fills.forEach((fill, i) => {
            tl.to(fill, { scaleX: 1, duration: TRAVEL, ease: "power2.inOut" });

            const next = nodes[i + 1];
            if (!next) return;
            // Light the node just before the fill lands on it, so the
            // arrival reads as one gesture instead of two.
            tl.to(
              next,
              { ...lit, duration: 0.35, ease: "power2.out" },
              `-=${TRAVEL * 0.15}`,
            );
            tl.to({}, { duration: DWELL });
          });

          // The rail never runs backwards: it fades out, resets empty and
          // fades back in. That cut is the cycle starting over, not undoing.
          tl.to({}, { duration: DWELL + 0.4 });
          tl.to([...fills, ...nodes], {
            opacity: 0,
            duration: RESET_OUT,
            ease: "power1.in",
          });
          tl.call(reset);
          tl.to([...fills, ...nodes], {
            opacity: 1,
            duration: RESET_IN,
            ease: "power1.out",
          });

          const el = railRef.current;
          if (!el) return;

          const io = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) tl.play();
              else tl.pause();
            },
            { threshold: 0.2 },
          );
          io.observe(el);

          return () => {
            io.disconnect();
            tl.kill();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: railRef, dependencies: [] },
  );

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="py-16 md:py-20 lg:py-25 bg-cream"
      id="como-trabajamos"
    >
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <div className="eyebrow">El camino</div>

          <Title>Cómo trabajamos</Title>
          <Title.Lede className="mt-4 lg:mt-5">
            Cuatro etapas para pasar de datos dispersos a un ciclo de
            planificación que no se detiene.
          </Title.Lede>
        </motion.div>

        <motion.div
          ref={railRef}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10"
        >
          {phases.map((phase, i) => (
            <MethodCard
              key={phase.num}
              num={phase.num}
              name={phase.name}
              desc={phase.desc}
              isLast={i === phases.length - 1}
              nodeRef={(el) => {
                nodeRefs.current[i] = el;
              }}
              fillRef={(el) => {
                fillRefs.current[i] = el;
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
