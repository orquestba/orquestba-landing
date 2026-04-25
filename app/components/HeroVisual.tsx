import { motion } from "framer-motion";
const HeroVisual = () => {
  return (
    <div className="hidden lg:flex relative items-center justify-center pt-15 pr-20 pb-15 pl-10">
      <motion.svg
        viewBox="0 0 560 600"
        className="absolute inset-0 w-full h-full opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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

        {/* Centro */}
        <motion.circle
          cx="280"
          cy="300"
          r="64"
          fill="rgba(184,105,42,0.12)"
          stroke="rgba(184,105,42,0.35)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="hover:cursor-pointer"
        />
        <circle
          cx="280"
          cy="300"
          r="44"
          fill="rgba(184,105,42,0.10)"
          stroke="rgba(184,105,42,0.25)"
          strokeWidth="1"
          className="hover:cursor-pointer"
        />
        <circle
          cx="280"
          cy="300"
          r="6"
          fill="#B8692A"
          className="hover:cursor-pointer"
        />

        <text
          x="280"
          y="307"
          fontFamily="Georgia,serif"
          fontSize="12"
          fill="rgba(255,255,255,0.6)"
          textAnchor="middle"
          fontStyle="italic"
          className="hover:cursor-pointer"
        >
          sistema
        </text>

        {/* Líneas */}
        {[
          { x1: 280, y1: 300, x2: 140, y2: 160 },
          { x1: 280, y1: 300, x2: 420, y2: 160 },
          { x1: 280, y1: 300, x2: 460, y2: 300 },
          { x1: 280, y1: 300, x2: 420, y2: 440 },
          { x1: 280, y1: 300, x2: 140, y2: 440 },
          { x1: 280, y1: 300, x2: 100, y2: 300 },
        ].map((l, i) => (
          <motion.line
            key={i}
            {...l}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Nodos */}
        {[
          { cx: 140, cy: 160, label: "Finanzas", sub: "& Control" },
          { cx: 420, cy: 160, label: "Ventas", sub: "& Clientes" },
          { cx: 460, cy: 300, label: "Operaciones", sub: "& Logística" },
          { cx: 420, cy: 440, label: "RRHH", sub: "& Personas" },
          { cx: 140, cy: 440, label: "Compras", sub: "& Proveedores" },
          { cx: 100, cy: 300, label: "Dirección", sub: "& Estrategia" },
        ].map(({ cx, cy, label, sub }, i) => (
          <motion.g
            className="hover:cursor-pointer"
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.08,
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Floating wrapper */}
            <motion.g
              animate={{
                y: i % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
                x: i % 2 === 0 ? [0, 3, 0] : [0, -3, 0],
              }}
              transition={{
                duration: 3.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <circle
                cx={cx}
                cy={cy}
                r="38"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <circle cx={cx} cy={cy} r="4" fill="rgba(255,255,255,0.3)" />

              <text
                x={cx}
                y={cy - 8}
                fontFamily="DM Sans,sans-serif"
                fontSize="12"
                fill="rgba(255,255,255,0.75)"
                textAnchor="middle"
                fontWeight="500"
              >
                {label}
              </text>
              <text
                x={cx}
                y={cy + 14}
                fontFamily="DM Sans,sans-serif"
                fontSize="10"
                fill="rgba(255,255,255,0.3)"
                textAnchor="middle"
              >
                {sub}
              </text>
            </motion.g>
          </motion.g>
        ))}

        {/* Círculos externos */}
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
      </motion.svg>
    </div>
  );
};

export default HeroVisual;
