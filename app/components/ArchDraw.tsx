import { ArrowRight, ArrowLeft } from "lucide-react";

const ArchDraw = () => {
  return (
    <>
      {/* Arch labels — desktop only */}
      <div className="hidden lg:flex justify-between px-10 mb-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
            <ArrowLeft size={12} />
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
            Inicio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
            Continuidad
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-4">
            <ArrowRight size={12} />
          </span>
        </div>
      </div>

      {/* Arch SVG — desktop only */}
      <div className="hidden lg:block">
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
      </div>
    </>
  );
};

export default ArchDraw;
