const phases = [
  {
    num: "01",
    name: "Base",
    desc: "Relevamos la situación actual para entender dónde está parada la empresa y qué información ya existe.",
    timing: "2–3 semanas",
  },
  {
    num: "02",
    name: "Estructura",
    desc: "Organizamos la información, definimos criterios y alineamos las áreas bajo una lógica común.",
    timing: "3–4 semanas",
  },
  {
    num: "03",
    name: "Sistema",
    desc: "Desarrollamos el portal de gestión empresarial que integra áreas clave y soporta la planificación.",
    timing: "6–10 semanas",
  },
  {
    num: "04",
    name: "Mejora continua",
    desc: "Acompañamos el uso del sistema, hacemos ajustes y ayudamos a la empresa a seguir mejorando.",
    timing: "Continuo",
  },
];

export default function Method() {
  return (
    <section className="pt-25 bg-cream overflow-hidden" id="metodo">
      <div className="max-w-345mx-auto px-15 mb-14">
        <div className="eyebrow">Cómo trabajamos</div>
        <h2 className="text-[56px] text-navy leading-none">
          Un método.
          <br />
          Cuatro etapas.
          <br />
          <em className="text-copper">Sin humo.</em>
        </h2>
        <p className="text-[17px] text-ink-3 leading-[1.7] max-w-160 mt-5">
          Conectamos datos, áreas y decisiones para que tu empresa tenga
          claridad, dirección y capacidad de adaptación.
        </p>
      </div>

      <div className="w-full relative bg-cream overflow-hidden">
        <div className="max-w-345 mx-auto px-15">
          <div className="flex justify-between px-10 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
              ← Inicio
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
              Continuidad →
            </span>
          </div>

          <svg
            viewBox="0 0 1440 220"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={{ width: "100%", display: "block", marginBottom: "-2px" }}
          >
            <defs>
              <linearGradient
                id="archGrad"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#B8692A" stopOpacity="0.15" />
                <stop offset="30%" stopColor="#B8692A" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#0E1C2F" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0E1C2F" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <line
              x1="60"
              y1="160"
              x2="1380"
              y2="160"
              stroke="#C8C0B8"
              strokeWidth="1.2"
            />
            <path
              d="M 60 160 Q 720 20 1380 160"
              stroke="#B8692A"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              fill="none"
            />
            <path
              d="M 200 160 Q 720 55 1240 160"
              stroke="#0E1C2F"
              strokeWidth="1"
              strokeOpacity="0.15"
              fill="none"
            />
            <line
              x1="260"
              y1="80"
              x2="260"
              y2="160"
              stroke="#C8C0B8"
              strokeWidth="1"
            />
            <rect
              x="255"
              y="74"
              width="10"
              height="10"
              fill="#B8692A"
              opacity="0.7"
            />
            <line
              x1="600"
              y1="38"
              x2="600"
              y2="160"
              stroke="#C8C0B8"
              strokeWidth="1"
            />
            <rect
              x="595"
              y="32"
              width="10"
              height="10"
              fill="#0E1C2F"
              opacity="0.4"
            />
            <line
              x1="940"
              y1="30"
              x2="940"
              y2="160"
              stroke="#C8C0B8"
              strokeWidth="1"
            />
            <rect
              x="935"
              y="24"
              width="10"
              height="10"
              fill="#0E1C2F"
              opacity="0.3"
            />
            <line
              x1="1200"
              y1="60"
              x2="1200"
              y2="160"
              stroke="#C8C0B8"
              strokeWidth="1"
            />
            <rect
              x="1195"
              y="54"
              width="10"
              height="10"
              fill="#0E1C2F"
              opacity="0.25"
            />
            <circle cx="260" cy="160" r="5" fill="#B8692A" />
            <circle cx="600" cy="160" r="5" fill="#B8692A" opacity="0.7" />
            <circle cx="940" cy="160" r="5" fill="#B8692A" opacity="0.55" />
            <circle cx="1200" cy="160" r="5" fill="#B8692A" opacity="0.4" />
            <text
              x="720"
              y="190"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="#B8B0A8"
              textAnchor="middle"
              letterSpacing="3"
            >
              PROCESO COMPLETO · 4–6 MESES
            </text>
          </svg>

          <div className="grid grid-cols-4 bg-cream border-t border-rule">
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                className={`pt-12 px-10 pb-13 border-r border-rule relative transition-colors hover:bg-cream-dark${
                  i === phases.length - 1 ? " border-r-0" : ""
                }`}
              >
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-4 mb-4">
                  Etapa {phase.num}
                </div>
                <div className="font-heading text-[32px] text-navy mb-4 leading-[1.1]">
                  {phase.name}
                </div>
                <p className="text-[14.5px] text-ink-3 leading-[1.65] mb-7">
                  {phase.desc}
                </p>
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-copper">
                  {phase.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
