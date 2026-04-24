export default function Hero() {
  return (
    <section className="bg-navy min-h-[calc(100vh-68px)] grid grid-cols-2 relative overflow-hidden">
      {/* Left */}
      <div
        className="flex flex-col justify-center py-25 pr-15 relative z-2"
        style={{ paddingLeft: "calc((100vw - 1380px) / 2 + 60px)" }}
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/12 rounded-[20px] py-1.5 pr-3.5 pl-2.5 mb-10 w-fit">
          <div className="w-1.5 h-1.5 bg-copper-light rounded-full" />
          <span className="text-[12px] font-medium text-white/60 tracking-[0.08em]">
            Integrated Business Planning · IBP
          </span>
        </div>

        <h1 className="text-[68px] leading-none text-white mb-7">
          Tu empresa
          <br />
          tiene datos.
          <br />
          Lo que necesita
          <br />
          es <em className="text-copper-light">claridad.</em>
        </h1>

        <p className="text-[18px] font-light text-white/60 leading-[1.65] max-w-120 mb-12">
          Orquesta conecta{" "}
          <strong className="font-medium text-white/85">
            finanzas, operaciones y ventas
          </strong>{" "}
          en un sistema de planificación integrado — para que cada área trabaje
          con la misma información y cada decisión llegue a tiempo.
        </p>

        <div className="flex items-center gap-5 mb-18">
          <a href="#diagnostico" className="btn-primary">
            Agendar diagnóstico gratuito
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#metodo" className="btn-ghost-light">
            Ver cómo funciona →
          </a>
        </div>

        <div className="flex items-center gap-5 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-[13px] text-white/40">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L8.8 5.1H13.2L9.7 7.7L11.1 12L7 9.3L2.9 12L4.3 7.7L0.8 5.1H5.2L7 1Z"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
            Basado en ISO 9001
          </div>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="text-[13px] text-white/40">
            Sin compromiso inicial
          </div>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="text-[13px] text-white/40">Respuesta en 24h</div>
        </div>
      </div>

      {/* Right — visualization */}
      <div className="relative flex items-center justify-center pt-15 pr-20 pb-15 pl-10">
        <svg
          viewBox="0 0 560 600"
          className="absolute inset-0 w-full h-full opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="560" height="600" fill="url(#grid)" />

          <circle
            cx="280"
            cy="300"
            r="64"
            fill="rgba(184,105,42,0.12)"
            stroke="rgba(184,105,42,0.35)"
            strokeWidth="1.5"
          />
          <circle
            cx="280"
            cy="300"
            r="44"
            fill="rgba(184,105,42,0.10)"
            stroke="rgba(184,105,42,0.25)"
            strokeWidth="1"
          />
          <circle cx="280" cy="300" r="6" fill="#B8692A" />
          <text
            x="280"
            y="307"
            fontFamily="Georgia,serif"
            fontSize="12"
            fill="rgba(255,255,255,0.6)"
            textAnchor="middle"
            fontStyle="italic"
          >
            sistema
          </text>

          {[
            { x1: 280, y1: 300, x2: 140, y2: 160 },
            { x1: 280, y1: 300, x2: 420, y2: 160 },
            { x1: 280, y1: 300, x2: 460, y2: 300 },
            { x1: 280, y1: 300, x2: 420, y2: 440 },
            { x1: 280, y1: 300, x2: 140, y2: 440 },
            { x1: 280, y1: 300, x2: 100, y2: 300 },
          ].map((l, i) => (
            <line
              key={i}
              {...l}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {[
            { cx: 140, cy: 160, label: "Finanzas", sub: "& Control" },
            { cx: 420, cy: 160, label: "Ventas", sub: "& Clientes" },
            { cx: 460, cy: 300, label: "Operaciones", sub: "& Logística" },
            { cx: 420, cy: 440, label: "RRHH", sub: "& Personas" },
            { cx: 140, cy: 440, label: "Compras", sub: "& Proveedores" },
            { cx: 100, cy: 300, label: "Dirección", sub: "& Estrategia" },
          ].map(({ cx, cy, label, sub }) => (
            <g key={label}>
              <circle
                cx={cx}
                cy={cy}
                r="38"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <circle cx={cx} cy={cy} r="4" fill="rgba(255,255,255,0.5)" />
              <text
                x={cx}
                y={cy - 5}
                fontFamily="DM Sans,sans-serif"
                fontSize="11"
                fill="rgba(255,255,255,0.55)"
                textAnchor="middle"
                fontWeight="500"
              >
                {label}
              </text>
              <text
                x={cx}
                y={cy + 10}
                fontFamily="DM Sans,sans-serif"
                fontSize="10"
                fill="rgba(255,255,255,0.3)"
                textAnchor="middle"
              >
                {sub}
              </text>
            </g>
          ))}

          <circle
            cx="280"
            cy="300"
            r="90"
            fill="none"
            stroke="rgba(184,105,42,0.06)"
            strokeWidth="1"
          />
          <circle
            cx="280"
            cy="300"
            r="130"
            fill="none"
            stroke="rgba(184,105,42,0.04)"
            strokeWidth="1"
          />
          <circle
            cx="280"
            cy="300"
            r="170"
            fill="none"
            stroke="rgba(184,105,42,0.03)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
}
