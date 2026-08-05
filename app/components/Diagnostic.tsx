"use client";

import { forwardRef, useRef } from "react";
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

const MaturityMeter = forwardRef<SVGCircleElement>(function MaturityMeter(
  _,
  ref,
) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 lg:w-28"
      aria-hidden="true"
      fill="none"
    >
      <g transform="rotate(-90 60 60)">
        {/* track — the broken ring: 88 of 100 drawn, same gap as the logo */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="6"
          pathLength={100}
          strokeDasharray="88 100"
          strokeLinecap="butt"
        />
        {/* progress — same geometry, scrubbed by scroll */}
        <circle
          ref={ref}
          cx="60"
          cy="60"
          r="48"
          stroke="var(--color-copper)"
          strokeWidth="6"
          pathLength={100}
          strokeDasharray="88 100"
          strokeDashoffset={88}
          strokeLinecap="butt"
        />
      </g>
    </svg>
  );
});

export default function Diagnostic() {
  const rootRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);
  const meterRef = useRef<SVGCircleElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

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

          const tl = gsap.timeline({ defaults: { ease: "none" } });

          tl.fromTo(
            meterRef.current,
            { strokeDashoffset: 88 },
            { strokeDashoffset: 0, duration: 1 },
            0,
          );

          tl.to(layersRef.current[0], { autoAlpha: 0, y: -14, duration: 0.07 }, 0.3)
            .fromTo(
              layersRef.current[1],
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.07 },
              0.33,
            )
            .to(layersRef.current[1], { autoAlpha: 0, y: -14, duration: 0.07 }, 0.64)
            .fromTo(
              layersRef.current[2],
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.07 },
              0.67,
            );

          ScrollTrigger.create({
            animation: tl,
            trigger: g,
            start: () =>
              `top ${(document.getElementById("main-nav")?.offsetHeight ?? 0) + 24}px`,
            end: () => `+=${distance()}`,
            pin: p,
            pinSpacing: false,
            pinType: "transform",
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
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
            Reconocé en cuál estás hoy. En las tres, el punto de entrada es
            el mismo diagnóstico.
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
            <MaturityMeter ref={meterRef} />

            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase text-white/45">
              <span>Inicial</span>
              <span className="flex-1 h-px bg-white/15" />
              <span>Intermedio</span>
              <span className="flex-1 h-px bg-white/15" />
              <span>Avanzado</span>
            </div>

            <div className="grid mt-8">
              {cases.map((c, i) => (
                <div
                  key={c.label}
                  ref={(el) => {
                    layersRef.current[i] = el;
                  }}
                  className={["[grid-area:1/1]", i > 0 ? "opacity-0 invisible" : ""].join(
                    " ",
                  )}
                >
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/50 mb-4">
                    {c.label}
                  </div>
                  <p className="font-heading text-[26px] lg:text-[30px] text-white leading-[1.15]">
                    {c.statement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — complete content, zero JS required to read it. The
              gap between articles sets how long the pin dwells per
              state. */}
          <div
            ref={streamRef}
            className="flex flex-col gap-16 md:gap-40 lg:gap-52"
          >
            {cases.map((c) => (
              <article key={c.label} className="max-w-140">
                <div className="md:hidden font-mono text-[11px] tracking-[0.08em] uppercase text-white/50 mb-3">
                  {c.label}
                </div>
                <h3 className="md:hidden font-heading text-[22px] text-white leading-[1.2] mb-4">
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
