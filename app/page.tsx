import Nav from "./components/Nav";
import RoleTabs from "./components/RoleTabs";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">
              Integrated Business Planning · IBP
            </span>
          </div>

          <h1 className="hero-headline">
            Tu empresa
            <br />
            tiene datos.
            <br />
            Lo que necesita
            <br />
            es <em>claridad.</em>
          </h1>

          <p className="hero-sub">
            Orquesta conecta <strong>finanzas, operaciones y ventas</strong> en
            un sistema de planificación integrado — para que cada área trabaje
            con la misma información y cada decisión llegue a tiempo.
          </p>

          <div className="hero-actions">
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

          <div className="hero-trust">
            <div className="hero-trust-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1L8.8 5.1H13.2L9.7 7.7L11.1 12L7 9.3L2.9 12L4.3 7.7L0.8 5.1H5.2L7 1Z"
                  fill="rgba(255,255,255,0.3)"
                />
              </svg>
              Basado en ISO 9001
            </div>
            <div className="hero-trust-dot" />
            <div className="hero-trust-item">Sin compromiso inicial</div>
            <div className="hero-trust-dot" />
            <div className="hero-trust-item">Respuesta en 24h</div>
          </div>
        </div>

        <div className="hero-right">
          <svg
            viewBox="0 0 560 600"
            className="hero-viz"
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

            <line
              x1="280"
              y1="300"
              x2="140"
              y2="160"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="280"
              y1="300"
              x2="420"
              y2="160"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="280"
              y1="300"
              x2="460"
              y2="300"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="280"
              y1="300"
              x2="420"
              y2="440"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="280"
              y1="300"
              x2="140"
              y2="440"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="280"
              y1="300"
              x2="100"
              y2="300"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            <circle
              cx="140"
              cy="160"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="140" cy="160" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="140"
              y="155"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              Finanzas
            </text>
            <text
              x="140"
              y="170"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Control
            </text>

            <circle
              cx="420"
              cy="160"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="420" cy="160" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="420"
              y="155"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              Ventas
            </text>
            <text
              x="420"
              y="170"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Clientes
            </text>

            <circle
              cx="460"
              cy="300"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="460" cy="300" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="460"
              y="295"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              Operaciones
            </text>
            <text
              x="460"
              y="310"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Logística
            </text>

            <circle
              cx="420"
              cy="440"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="420" cy="440" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="420"
              y="435"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              RRHH
            </text>
            <text
              x="420"
              y="450"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Personas
            </text>

            <circle
              cx="140"
              cy="440"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="140" cy="440" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="140"
              y="435"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              Compras
            </text>
            <text
              x="140"
              y="450"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Proveedores
            </text>

            <circle
              cx="100"
              cy="300"
              r="38"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle cx="100" cy="300" r="4" fill="rgba(255,255,255,0.5)" />
            <text
              x="100"
              y="295"
              fontFamily="DM Sans,sans-serif"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
              textAnchor="middle"
              fontWeight="500"
            >
              Dirección
            </text>
            <text
              x="100"
              y="310"
              fontFamily="DM Sans,sans-serif"
              fontSize="10"
              fill="rgba(255,255,255,0.3)"
              textAnchor="middle"
            >
              &amp; Estrategia
            </text>

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

      {/* ═══ PAIN POINTS POR ROL ════════════════════════════════════ */}
      <RoleTabs />

      {/* ═══ MÉTODO ══════════════════════════════════════════════════ */}
      <section className="section-method" id="metodo">
        <div className="container">
          <div className="method-top">
            <div className="eyebrow">Cómo trabajamos</div>
            <h2 className="method-headline">
              Un método.
              <br />
              Cuatro etapas.
              <br />
              <em>Sin humo.</em>
            </h2>
            <p className="method-sub">
              Conectamos datos, áreas y decisiones para que tu empresa tenga
              claridad, dirección y capacidad de adaptación.
            </p>
          </div>
        </div>

        <div className="method-arch-wrap">
          <div className="container">
            <div className="method-arch-labels">
              <span className="arch-label">← Inicio</span>
              <span className="arch-label">Continuidad →</span>
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

            <div className="method-phases-grid">
              <div className="method-phase-card">
                <div className="phase-etapa">Etapa 01</div>
                <div className="phase-card-name">Base</div>
                <p className="phase-card-desc">
                  Relevamos la situación actual para entender dónde está parada
                  la empresa y qué información ya existe.
                </p>
                <div className="phase-timing">2–3 semanas</div>
              </div>
              <div className="method-phase-card">
                <div className="phase-etapa">Etapa 02</div>
                <div className="phase-card-name">Estructura</div>
                <p className="phase-card-desc">
                  Organizamos la información, definimos criterios y alineamos
                  las áreas bajo una lógica común.
                </p>
                <div className="phase-timing">3–4 semanas</div>
              </div>
              <div className="method-phase-card">
                <div className="phase-etapa">Etapa 03</div>
                <div className="phase-card-name">Sistema</div>
                <p className="phase-card-desc">
                  Desarrollamos el portal de gestión empresarial que integra
                  áreas clave y soporta la planificación.
                </p>
                <div className="phase-timing">6–10 semanas</div>
              </div>
              <div className="method-phase-card">
                <div className="phase-etapa">Etapa 04</div>
                <div className="phase-card-name">Mejora continua</div>
                <p className="phase-card-desc">
                  Acompañamos el uso del sistema, hacemos ajustes y ayudamos a
                  la empresa a seguir mejorando.
                </p>
                <div className="phase-timing">Continuo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN A: ¿QUÉ ESTRUCTURA TENÉS HOY? ════════════════ */}
      <section className="section-diagnostic" id="servicios">
        <div className="container">
          <div className="diagnostic-top">
            <div className="eyebrow eyebrow-muted">El punto de partida</div>
            <h2 className="diagnostic-headline">
              ¿Dónde está
              <br />
              tu empresa <em>hoy?</em>
            </h2>
            <p className="diagnostic-intro">
              No hay un perfil único de empresa que necesite IBP. Trabajamos con
              organizaciones en distintos momentos de su recorrido.{" "}
              <strong>
                El punto de entrada depende de dónde estés parado.
              </strong>
            </p>
          </div>

          <div className="diagnostic-grid">
            <div className="diagnostic-card">
              <div className="diagnostic-card-q">Caso A</div>
              <div className="diagnostic-card-statement">
                Introducís IBP por primera vez.
              </div>
              <p className="diagnostic-card-body">
                Tu empresa no tiene un sistema integrado. Los datos están
                dispersos, las áreas operan en silos y las decisiones se toman
                sin visibilidad común. Necesitás construir desde la base.
              </p>
              <div className="diagnostic-card-signal">
                Punto de partida: cero
              </div>
            </div>

            <div className="diagnostic-card">
              <div className="diagnostic-card-q">Caso B</div>
              <div className="diagnostic-card-statement">
                Tenés piezas del sistema pero no están integradas.
              </div>
              <p className="diagnostic-card-body">
                Ya existían procesos, herramientas o KPIs, pero hay áreas que
                quedaron afuera, datos que no se conectan o indicadores que no
                reflejan la realidad. Necesitás refinar sin desarmar lo que
                funciona.
              </p>
              <div className="diagnostic-card-signal">
                Punto de partida: parcial
              </div>
            </div>

            <div className="diagnostic-card">
              <div className="diagnostic-card-q">Caso C</div>
              <div className="diagnostic-card-statement">
                Tu sistema funciona, pero querés ir más lejos.
              </div>
              <p className="diagnostic-card-body">
                Contás con un sistema operativo, pero querés mayor
                automatización, forecasting más preciso, nuevas fuentes de datos
                o expansión hacia otras unidades de negocio. Necesitás subir el
                nivel de madurez.
              </p>
              <div className="diagnostic-card-signal">
                Punto de partida: avanzado
              </div>
            </div>
          </div>

          <div className="diagnostic-connector">
            <div className="diagnostic-connector-line" />
            <div className="diagnostic-connector-text">
              Si reconocés alguna de estas señales, hay una respuesta
            </div>
            <div className="diagnostic-connector-arrow">↓</div>
            <div className="diagnostic-connector-line" />
          </div>
        </div>
      </section>

      {/* ═══ SECCIÓN B: ¿QUÉ ESTRUCTURA QUERÉS QUE TENGA? ════════ */}
      <section className="section-aspiration" id="nosotros">
        <div className="container">
          <div className="aspiration-top">
            <div className="aspiration-eyebrow">El destino</div>
            <h2 className="aspiration-headline">
              ¿Qué estructura
              <br />
              querés que <em>tenga?</em>
            </h2>
            <p className="aspiration-intro">
              No hay un único punto de entrada. Trabajamos desde donde estás —
              ya sea que estés introduciendo IBP por primera vez, refinando lo
              que existe, o subiendo el nivel de madurez de tu sistema.
            </p>
          </div>

          <div className="aspiration-paths">
            <div className="aspiration-path">
              <div className="aspiration-path-tag">
                Para empresas que empiezan
              </div>
              <div className="aspiration-path-title">
                Asesoría en Análisis de Negocio
              </div>
              <p className="aspiration-path-body">
                Para organizaciones que necesitan{" "}
                <strong>entender su situación actual</strong> antes de dar el
                salto a un sistema integrado. Construimos la base desde adentro
                hacia afuera.
              </p>
              <ul className="aspiration-path-items">
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Diagnóstico de la situación actual de información y procesos
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Organización de datos y criterios de gestión por área
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Definición de la arquitectura base para escalar
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Preparación para la implementación de un sistema integrado
                </li>
              </ul>
              <a href="#diagnostico" className="aspiration-path-cta">
                Empezar por el diagnóstico
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5"
                    stroke="#D4854A"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="aspiration-path">
              <div className="aspiration-path-tag">
                Para empresas listas para sistematizar
              </div>
              <div className="aspiration-path-title">Sistema IBP</div>
              <p className="aspiration-path-body">
                Para organizaciones que quieren{" "}
                <strong>
                  conectar sus áreas en una sola plataforma de gestión
                </strong>{" "}
                — con visibilidad en tiempo real, forecasting integrado y
                planificación continua.
              </p>
              <ul className="aspiration-path-items">
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Integración de finanzas, ventas y operaciones en un solo
                  sistema
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  KPIs e indicadores clave en tiempo real para la dirección
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Forecasting, presupuestación y planificación de escenarios
                </li>
                <li className="aspiration-path-item">
                  <div className="aspiration-path-item-dot" />
                  Acompañamiento continuo y evolución del sistema con el negocio
                </li>
              </ul>
              <a href="#diagnostico" className="aspiration-path-cta">
                Ver el sistema IBP
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5-3.5 3.5"
                    stroke="#D4854A"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="aspiration-cta-row" id="diagnostico">
            <div className="aspiration-cta-text">
              <h3 className="aspiration-cta-headline">
                ¿Tu empresa tiene la estructura
                <br />
                <em>para crecer?</em>
              </h3>
              <p className="aspiration-cta-sub">
                En una sesión de diagnóstico analizamos tu situación actual e
                identificamos los puntos críticos. Sin compromiso. Sin
                tecnicismos.
              </p>
            </div>
            <div className="aspiration-cta-actions">
              <a href="#" className="btn-primary-large">
                Agendar diagnóstico gratuito
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3.5 9h11M10 5l4.5 4-4.5 4"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="aspiration-cta-micro">
                Sin compromiso · Respuesta en 24h
              </div>
            </div>
          </div>

          <div className="aspiration-iso-note">
            <div className="aspiration-iso-left">
              <div className="aspiration-iso-badge">ISO 9001</div>
              <div className="aspiration-iso-sub">Estándar base</div>
            </div>
            <div className="aspiration-iso-right">
              <p className="aspiration-iso-claim">
                Los fundamentos de ISO 9001 —enfoque al cliente, gestión por
                procesos, mejora continua y decisiones basadas en evidencia— son
                la columna vertebral del flujo que estructura todo nuestro
                trabajo:
              </p>
              <div className="aspiration-iso-flow">
                <div className="aspiration-iso-stage">Base</div>
                <div className="aspiration-iso-arrow">→</div>
                <div className="aspiration-iso-stage">Estructura</div>
                <div className="aspiration-iso-arrow">→</div>
                <div className="aspiration-iso-stage">Sistema</div>
                <div className="aspiration-iso-arrow">→</div>
                <div className="aspiration-iso-stage">Mejora continua</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════════ */}
      <footer id="contacto">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-name">Orquesta</div>
              <div className="footer-brand-sub">Our Request to Data · IBP</div>
              <p className="footer-brand-desc">
                Conectamos datos, áreas y decisiones para que tu empresa tenga
                claridad, dirección y capacidad de adaptación.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link">
                  in
                </a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Navegación</div>
              <ul className="footer-links">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Cómo trabajamos</a>
                </li>
                <li>
                  <a href="#">Servicios</a>
                </li>
                <li>
                  <a href="#">Recursos</a>
                </li>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Servicios</div>
              <ul className="footer-links">
                <li>
                  <a href="#">Sistema IBP</a>
                </li>
                <li>
                  <a href="#">Asesoría en Análisis de Negocio</a>
                </li>
              </ul>
            </div>

            <div id="contacto-data">
              <div className="footer-col-title">Contacto</div>
              <div className="footer-contact-item">info@orquesta.com.ar</div>
              <div className="footer-contact-item">+54 11 1234 5678</div>
              <div className="footer-contact-item">Buenos Aires, Argentina</div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 2024 Orquesta. Todos los derechos reservados.
            </div>
            <div className="footer-legal">
              <a href="#">Política de privacidad</a>
              <a href="#">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
