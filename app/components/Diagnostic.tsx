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
    <section className="pt-30 pb-25 bg-off-white" id="servicios">
      <div className="max-w-345 mx-auto px-15">
        <div className="mb-14">
          <div className="eyebrow eyebrow-muted">El punto de partida</div>
          <h2 className="text-[56px] text-navy leading-none mb-5">
            ¿Dónde está
            <br />
            tu empresa <em className="text-copper">hoy?</em>
          </h2>
          <p className="text-[17px] text-ink-3 leading-[1.7] max-w-160">
            No hay un perfil único de empresa que necesite IBP. Trabajamos con
            organizaciones en distintos momentos de su recorrido.{" "}
            <strong className="font-medium text-ink-2">
              El punto de entrada depende de dónde estés parado.
            </strong>
          </p>
        </div>

        <div className="grid grid-cols-3 border border-rule rounded-xl overflow-hidden mb-10">
          {cases.map((c, i) => (
            <div
              key={c.label}
              className={`pt-10 px-9 pb-11 bg-off-white transition-colors hover:bg-cream cursor-default${
                i < cases.length - 1 ? " border-r border-rule" : ""
              }`}
            >
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink-4 mb-4">
                {c.label}
              </div>
              <div className="font-heading text-[20px] text-navy leading-[1.2] mb-4">
                {c.statement}
              </div>
              <p className="text-[14px] text-ink-3 leading-[1.6] mb-6">
                {c.body}
              </p>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-copper bg-copper-pale px-3 py-1.25 rounded-[20px]">
                {c.signal}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-7">
          <div className="flex-1 h-px bg-rule" />
          <span className="text-[13px] text-ink-4 italic whitespace-nowrap">
            Si reconocés alguna de estas señales, hay una respuesta
          </span>
          <span className="text-[20px] text-copper opacity-60">↓</span>
          <div className="flex-1 h-px bg-rule" />
        </div>
      </div>
    </section>
  );
}
