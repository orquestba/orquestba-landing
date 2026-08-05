type Phase = {
  num: string;
  name: string;
  desc: string;
};

// viewBox 0 0 400 400, centre (200,200). Nodes sit on the 4 cardinal
// points of a ring that spans 316° — the 44° gap (upper-left, between
// stage 04 and stage 01) is the logo's broken arc, echoed at scale.
const NODES: { cx: number; cy: number }[] = [
  { cx: 200, cy: 50 }, // 01 Base — top
  { cx: 350, cy: 200 }, // 02 Estructura — right
  { cx: 200, cy: 350 }, // 03 Sistema — bottom
  { cx: 50, cy: 200 }, // 04 Ciclo — left
];

const STAGE_AREA = [
  "[grid-area:1/2] items-center text-center px-4",
  "[grid-area:2/3] items-start text-left pl-4",
  "[grid-area:3/2] items-center text-center px-4",
  "[grid-area:2/1] items-end text-right pr-4",
];

function StageText({ phase }: { phase: Phase }) {
  return (
    <>
      <div className="font-mono text-[10px] font-medium tracking-[0.15em] uppercase text-ink-3 mb-1.5">
        Etapa {phase.num}
      </div>
      <div className="font-heading text-xl text-navy mb-2">{phase.name}</div>
      <p className="text-[13.5px] text-ink-2 leading-[1.65]">{phase.desc}</p>
    </>
  );
}

const CycleDiagram = ({ phases }: { phases: Phase[] }) => {
  return (
    <div className="arc-cycle">
      {/* Desktop / tablet — broken circle with 4 nodes, autonomous CSS pulse */}
      <div
        className="hidden lg:grid mx-auto max-w-[1120px] place-items-center gap-x-12 gap-y-10
                   [grid-template-columns:minmax(0,1fr)_420px_minmax(0,1fr)]"
      >
        {phases.map((phase, i) => (
          <div
            key={phase.num}
            className={`stage relative flex flex-col max-w-[260px] ${STAGE_AREA[i]}`}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span
              className="stage-tint absolute -inset-x-3 -inset-y-3 rounded-md bg-copper/[0.055] opacity-0 -z-1"
              aria-hidden="true"
            />
            <span
              className={[
                "stage-mark absolute top-0.5 bottom-0.5 w-0.5 bg-copper origin-top opacity-0",
                i === 3 ? "right-0" : "left-0",
              ].join(" ")}
              aria-hidden="true"
            />
            <StageText phase={phase} />
          </div>
        ))}

        <svg
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
          className="[grid-area:2/2] w-full h-full max-w-[420px] max-h-[420px]"
        >
          {/* echo arc — second concentric arc, gap on the opposite side,
              matching the logo's two-arc composition */}
          <path
            d="M 254.70 358.85 A 168 168 0 1 1 358.85 254.70"
            stroke="var(--color-rule)"
            strokeWidth="1"
          />
          {/* node ring — 316° sweep, the 44° gap sits between 04 and 01 */}
          <path
            d="M 141.39 61.92 A 150 150 0 1 1 61.92 141.39"
            stroke="var(--color-rule)"
            strokeWidth="1.5"
          />

          {NODES.map((n, i) => (
            <g key={i} style={{ "--i": i } as React.CSSProperties}>
              <circle cx={n.cx} cy={n.cy} r="4.5" fill="var(--color-ink-4)" />
              <circle
                className="node-dot"
                cx={n.cx}
                cy={n.cy}
                r="4.5"
                fill="var(--color-copper)"
              />
              <circle
                className="node-halo"
                cx={n.cx}
                cy={n.cy}
                r="4.5"
                fill="none"
                stroke="var(--color-copper)"
                strokeWidth="1.25"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Mobile / tablet — vertical rail, same signature motion via the
          same node-dot/node-halo classes. The gap between 03 and 04
          formalizes the "doesn't close" gesture as a visible break,
          not an accidental trailing margin. */}
      <div className="lg:hidden">
        <div className="relative pl-7 border-l-2 border-copper">
          {phases.slice(0, 3).map((phase, i) => (
            <div
              key={phase.num}
              className="relative pb-10"
              style={{ "--i": i } as React.CSSProperties}
            >
              <span
                className="absolute -left-7 top-1.5 w-2 h-2 bg-ink-4"
                aria-hidden="true"
              />
              <span
                className="node-dot absolute -left-7 top-1.5 w-2 h-2 bg-copper"
                aria-hidden="true"
              />
              <div className="max-w-100">
                <StageText phase={phase} />
              </div>
            </div>
          ))}
        </div>

        <div className="h-3.5" aria-hidden="true" />

        <div className="relative pl-7 border-l-2 border-copper">
          {phases.slice(3).map((phase) => (
            <div
              key={phase.num}
              className="relative"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <span
                className="absolute -left-7 top-1.5 w-2 h-2 bg-ink-4"
                aria-hidden="true"
              />
              <span
                className="node-dot absolute -left-7 top-1.5 w-2 h-2 bg-copper"
                aria-hidden="true"
              />
              <div className="max-w-100">
                <StageText phase={phase} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CycleDiagram;
