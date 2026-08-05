"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Title from "./shared/Title";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cases = [
  {
    label: "Inicial",
    statement: "Cada área tiene su versión. El negocio no tiene la suya.",
    body: "Tus áreas operan en silos. No hay una lectura unificada del negocio. Tu empresa no tiene un sistema de gestión integrado. Los datos están dispersos y las decisiones se toman sin visibilidad común. Necesitás construir desde la base.",
  },
  {
    label: "Intermedio",
    statement: "Tenés procesos. Tenés datos. Pero conviven sin integrarse.",
    body: "Ya existían procesos, herramientas o KPIs, pero cuando querés cruzar los números, algo siempre falta. Necesitás refinar sin desarmar lo que funciona.",
  },
  {
    label: "Avanzado",
    statement: "Entendés tu negocio, confiás en tu sistema y querés escalar.",
    body: "Tu sistema de gestión es confiable. Las áreas se hablan, los datos fluyen y las decisiones tienen respaldo. Es momento de escalar.",
  },
];

export default function Diagnostic() {
  const rootRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);
  const levelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(rootRef.current ?? undefined);

      mm.add(
        {
          pinned:
            "(min-width: 48em) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const conditions = ctx.conditions as Record<string, boolean>;
          if (!conditions.pinned) return;

          const g = gridRef.current;
          const p = panelRef.current;
          const s = streamRef.current;
          if (!g || !p || !s) return;

          const distance = () => Math.max(0, s.offsetHeight - p.offsetHeight);
          // Right column barely overflows — not worth pinning.
          if (distance() < 240) return;

          let activeIdx = -1;
          const setActive = (idx: number) => {
            if (idx === activeIdx) return;
            activeIdx = idx;

            levelRefs.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                color: i === idx ? "#d4854a" : "rgba(255,255,255,0.2)",
                scale: i === idx ? 1.03 : 1,
                y: i === idx ? -2 : 0,
                opacity: i === idx ? 1 : 0.7,
                duration: 0.35,
                ease: "power2.out",
                overwrite: "auto",
              });
            });

            articleRefs.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                opacity: i === idx ? 1 : 0.45,
                y: i === idx ? 0 : 12,
                duration: 0.35,
                ease: "power2.out",
                overwrite: "auto",
              });
            });
          };

          ScrollTrigger.create({
            trigger: g,
            start: () =>
              `top ${(document.getElementById("main-nav")?.offsetHeight ?? 0) + 64}px`,
            end: () => `+=${distance()}`,
            pin: p,
            pinSpacing: false,
            pinType: "transform",
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          });

          // One trigger per article, keyed to its heading — the active
          // stage follows what the reader is actually looking at, not a
          // scroll-percentage estimate of it.
          cases.forEach((_, i) => {
            const heading = headingRefs.current[i];
            if (!heading) return;

            ScrollTrigger.create({
              trigger: heading,
              start: "top 38%",
              end: "bottom 38%",
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            });
          });
        },
      );

      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [] },
  );

  return (
    <section
      id="madurez"
      ref={rootRef}
      className="bg-navy py-16 md:py-20 lg:py-30"
    >
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
        <div className="mb-10 lg:mb-16 max-w-160">
          <div className="eyebrow eyebrow-light">Niveles de madurez</div>
          <Title className="text-white">
            Trabajamos con empresas en cualquier etapa
          </Title>
          <Title.Lede light>
            Reconocé en cuál estás hoy. En las tres, el punto de entrada es el
            mismo diagnóstico.
          </Title.Lede>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-[minmax(260px,360px)_1fr] md:gap-x-16 lg:gap-x-24"
        >
          {/* LEFT — the pin target. Hidden on mobile and under
              reduced-motion: the right column alone is a complete,
              self-sufficient section. */}
          <div
            ref={panelRef}
            className="hidden md:block motion-reduce:hidden self-start"
          >
            <div className="flex flex-col gap-3 lg:gap-4">
              {cases.map((c, i) => (
                <span
                  key={c.label}
                  ref={(el) => {
                    levelRefs.current[i] = el;
                  }}
                  className={[
                    "font-heading text-[30px] lg:text-[40px] leading-[1.08] tracking-[-0.01em]",
                    i === 0 ? "text-copper-light" : "text-white/20",
                  ].join(" ")}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — complete content, zero JS required to read it. The
              gap between articles sets how long the pin dwells per
              state. */}
          <div
            ref={streamRef}
            className="flex flex-col gap-14 md:gap-20 lg:gap-28"
          >
            {cases.map((c, i) => (
              <article
                key={c.label}
                ref={(el) => {
                  articleRefs.current[i] = el;
                }}
                className="max-w-140"
              >
                {/* <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/50 mb-3">
                  {c.label}
                </div> */}
                <h3
                  ref={(el) => {
                    headingRefs.current[i] = el;
                  }}
                  className="font-heading text-[26px] lg:text-[32px] text-white leading-[1.15] mb-4 lg:mb-5"
                >
                  {c.statement}
                </h3>
                <p className="text-[15px] lg:text-[17px] text-white/60 leading-[1.75]">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
