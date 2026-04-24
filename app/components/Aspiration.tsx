const paths = [
  {
    tag: "Para empresas que empiezan",
    title: "Asesoría en Análisis de Negocio",
    body: (
      <>
        Para organizaciones que necesitan{" "}
        <strong className="font-medium text-white/80">
          entender su situación actual
        </strong>{" "}
        antes de dar el salto a un sistema integrado. Construimos la base desde
        adentro hacia afuera.
      </>
    ),
    items: [
      "Diagnóstico de la situación actual de información y procesos",
      "Organización de datos y criterios de gestión por área",
      "Definición de la arquitectura base para escalar",
      "Preparación para la implementación de un sistema integrado",
    ],
    ctaLabel: "Empezar por el diagnóstico",
  },
  {
    tag: "Para empresas listas para sistematizar",
    title: "Sistema IBP",
    body: (
      <>
        Para organizaciones que quieren{" "}
        <strong className="font-medium text-white/80">
          conectar sus áreas en una sola plataforma de gestión
        </strong>{" "}
        — con visibilidad en tiempo real, forecasting integrado y planificación
        continua.
      </>
    ),
    items: [
      "Integración de finanzas, ventas y operaciones en un solo sistema",
      "KPIs e indicadores clave en tiempo real para la dirección",
      "Forecasting, presupuestación y planificación de escenarios",
      "Acompañamiento continuo y evolución del sistema con el negocio",
    ],
    ctaLabel: "Ver el sistema IBP",
  },
];

const isoStages = ["Base", "Estructura", "Sistema", "Mejora continua"];

export default function Aspiration() {
  return (
    <section className="py-30 bg-navy relative overflow-hidden" id="nosotros">
      {/* Background glows */}
      <div
        className="absolute -top-50 -right-50 w-175 h-175 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,105,42,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-37.5 -left-25 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,105,42,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-345 mx-auto px-15 relative z-1">
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow eyebrow-light">El destino</div>
          <h2 className="text-[56px] text-white leading-none">
            ¿Qué estructura
            <br />
            querés que <em className="text-copper-light">tenga?</em>
          </h2>
          <p className="text-[17px] font-light text-white/55 leading-[1.7] max-w-160 mt-5">
            No hay un único punto de entrada. Trabajamos desde donde estás — ya
            sea que estés introduciendo IBP por primera vez, refinando lo que
            existe, o subiendo el nivel de madurez de tu sistema.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-2 gap-0.5 mb-16 rounded-xl overflow-hidden">
          {paths.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/4 border border-white/4pt-[52px] px-13 pb-14 transition-colors hover:bg-copper/[0.07] hover:border-copper/25"
            >
              {/* gradient top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-copper to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-copper-light bg-copper/15 px-3 py-1 rounded-[20px] mb-7">
                {p.tag}
              </div>
              <div className="font-heading text-[32px] text-white leading-[1.1] mb-4">
                {p.title}
              </div>
              <p className="text-[15px] text-white/50 leading-[1.7] mb-9">
                {p.body}
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] text-white/50 leading-normal"
                  >
                    <div className="w-1.25 h-1.25 rounded-full bg-copper opacity-70 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#diagnostico" className="path-cta">
                {p.ctaLabel}
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
          ))}
        </div>

        {/* CTA row */}
        <div
          className="flex items-center justify-between pt-10 border-t border-white/8 mb-10"
          id="diagnostico"
        >
          <div>
            <h3 className="font-heading text-[32px] text-white mb-2 leading-[1.15]">
              ¿Tu empresa tiene la estructura
              <br />
              <em className="text-white/40">para crecer?</em>
            </h3>
            <p className="text-[15px] text-white/45 leading-normal">
              En una sesión de diagnóstico analizamos tu situación actual e
              identificamos los puntos críticos. Sin compromiso. Sin
              tecnicismos.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0">
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
            <div className="text-[12px] text-white/25 text-right">
              Sin compromiso · Respuesta en 24h
            </div>
          </div>
        </div>

        {/* ISO note */}
        <div className="grid grid-cols-[auto_1fr] gap-10 items-center px-10 py-8 bg-white/5 border border-copper/20 rounded-[10px]">
          <div className="flex flex-col items-start gap-2 shrink-0">
            <div className="font-heading text-[18px] italic text-copper-light border border-copper/50 px-5 py-2 rounded whitespace-nowrap tracking-wider">
              ISO 9001
            </div>
            <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25 whitespace-nowrap">
              Estándar base
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[14px] text-white/60 leading-[1.55] max-w-140">
              Los fundamentos de ISO 9001 —enfoque al cliente, gestión por
              procesos, mejora continua y decisiones basadas en evidencia— son
              la columna vertebral del flujo que estructura todo nuestro
              trabajo:
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {isoStages.map((stage, i) => (
                <>
                  <div
                    key={stage}
                    className="text-[12px] font-semibold text-white/75 bg-white/6 border border-white/10 px-3.5 py-1.25 rounded-[20px] whitespace-nowrap"
                  >
                    {stage}
                  </div>
                  {i < isoStages.length - 1 && (
                    <div
                      key={`arrow-${i}`}
                      className="text-[12px] text-copper-light opacity-60"
                    >
                      →
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
