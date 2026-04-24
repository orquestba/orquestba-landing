const cases = [
  {
    label: "Caso A",
    statement: "Introducís IBP por primera vez.",
    body: "Tu empresa no tiene un sistema integrado. Los datos están dispersos, las áreas operan en silos y las decisiones se toman sin visibilidad común. Necesitás construir desde la base.",
    signal: "Punto de partida: cero",
  },
  {
    label: "Caso B",
    statement: "Tenés piezas del sistema pero no están integradas.",
    body: "Ya existían procesos, herramientas o KPIs, pero hay áreas que quedaron afuera, datos que no se conectan o indicadores que no reflejan la realidad. Necesitás refinar sin desarmar lo que funciona.",
    signal: "Punto de partida: parcial",
  },
  {
    label: "Caso C",
    statement: "Tu sistema funciona, pero querés ir más lejos.",
    body: "Contás con un sistema operativo, pero querés mayor automatización, forecasting más preciso, nuevas fuentes de datos o expansión hacia otras unidades de negocio. Necesitás subir el nivel de madurez.",
    signal: "Punto de partida: avanzado",
  },
];

export default function Diagnostic() {
  return (
    <section className="py-16 md:py-20 lg:pt-[120px] lg:pb-[100px] bg-off-white" id="servicios">
      <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-[60px]">

        <div className="mb-10 lg:mb-14">
          <div className="eyebrow eyebrow-muted">El punto de partida</div>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] text-navy leading-[1.05] lg:leading-none mb-4 lg:mb-5">
            ¿Dónde está
            <br />
            tu empresa{" "}
            <em className="text-copper">hoy?</em>
          </h2>
          <p className="text-[15px] lg:text-[17px] text-ink-3 leading-[1.7] max-w-[640px]">
            No hay un perfil único de empresa que necesite IBP. Trabajamos con
            organizaciones en distintos momentos de su recorrido.{" "}
            <strong className="font-medium text-ink-2">
              El punto de entrada depende de dónde estés parado.
            </strong>
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-rule rounded-xl overflow-hidden mb-8 lg:mb-10">
          {cases.map((c, i) => (
            <div
              key={c.label}
              className={[
                "p-6 md:p-8 lg:p-10 bg-off-white transition-colors hover:bg-cream cursor-default",
                // borders
                i < cases.length - 1 ? "border-b border-rule md:border-b-0" : "",
                i === 0 ? "md:border-r lg:border-r border-rule" : "",
                i === 1 ? "lg:border-r border-rule" : "",
              ].join(" ")}
            >
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink-4 mb-3 lg:mb-4">
                {c.label}
              </div>
              <div className="font-heading text-[18px] lg:text-[20px] text-navy leading-[1.2] mb-3 lg:mb-4">
                {c.statement}
              </div>
              <p className="text-[14px] text-ink-3 leading-[1.6] mb-5 lg:mb-6">
                {c.body}
              </p>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-copper bg-copper-pale px-3 py-[5px] rounded-[20px]">
                {c.signal}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-5 lg:pt-7">
          <div className="flex-1 h-px bg-rule" />
          <span className="text-[12px] md:text-[13px] text-ink-4 italic whitespace-nowrap text-center">
            Si reconocés alguna de estas señales, hay una respuesta
          </span>
          <span className="text-[18px] md:text-[20px] text-copper opacity-60">↓</span>
          <div className="flex-1 h-px bg-rule" />
        </div>

      </div>
    </section>
  );
}
