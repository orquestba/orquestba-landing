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

// Rail colors. The idle tone has to stay readable on navy on its own — it is
// the only place the level names exist on desktop. Keep it in sync with the
// static `text-white/35` fallback on the spans below.
const LEVEL_ACTIVE = "#d4854a"; // --color-copper-light
const LEVEL_IDLE = "rgba(255,255,255,0.35)";

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

          let activeIdx = -1;
          const setActive = (idx: number) => {
            if (idx === activeIdx) return;
            activeIdx = idx;

            levelRefs.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                color: i === idx ? LEVEL_ACTIVE : LEVEL_IDLE,
                scale: i === idx ? 1.03 : 1,
                y: i === idx ? -2 : 0,
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

          // Right column barely overflows — not worth pinning. Guards the pin
          // only: the state triggers below don't depend on it, and skipping
          // them used to leave the inactive levels stuck at their static color.
          if (distance() >= 240) {
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
          }

          setActive(0);

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
          {/* LEFT — the pin target. `.level-rail` shows it only where the
              pinned animation actually runs (md+, no reduced motion); below
              that each article carries its own level label instead.
              aria-hidden: the inline labels are the accessible copy. */}
          <div
            ref={panelRef}
            aria-hidden="true"
            className="level-rail self-start"
          >
            <div className="flex flex-col gap-3 lg:gap-4">
              {cases.map((c, i) => (
                <span
                  key={c.label}
                  ref={(el) => {
                    levelRefs.current[i] = el;
                  }}
                  className={[
                    "font-heading text-[30px] lg:text-[48px] leading-[1.08] tracking-[-0.01em]",
                    i === 0 ? "text-copper-light" : "text-white/35",
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
                className="max-w-150"
              >
                <div className="level-inline-label eyebrow eyebrow-light flex items-center gap-3">
                  <span className="whitespace-nowrap">/ {c.label}</span>
                  <span aria-hidden className="h-px flex-1 bg-white/12" />
                </div>
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
