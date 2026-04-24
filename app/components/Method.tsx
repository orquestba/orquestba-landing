import ArchDraw from "./ArchDraw";

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
    <section
      className="pt-16 md:pt-20 lg:pt-25 bg-cream overflow-hidden"
      id="metodo"
    >
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15 mb-10 lg:mb-14">
        <div className="eyebrow">Cómo trabajamos</div>
        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] text-navy leading-[1.05] lg:leading-none">
          Un método.
          <br />
          Cuatro etapas.
          <br />
          <em className="text-copper">Sin humo.</em>
        </h2>
        <p className="text-[15px] lg:text-[17px] text-ink-3 leading-[1.7] max-w-160 mt-4 lg:mt-5">
          Conectamos datos, áreas y decisiones para que tu empresa tenga
          claridad, dirección y capacidad de adaptación.
        </p>
      </div>

      <div className="w-full relative bg-cream overflow-hidden">
        <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
          <ArchDraw />

          {/* Phase cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-cream border-t border-rule">
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                className={[
                  "pt-8 px-6 pb-10 md:pt-10 md:px-8 lg:pt-12 lg:px-10 lg:pb-13",
                  "border-b border-rule md:border-b-0",
                  "relative transition-colors hover:bg-cream-dark",
                  "lg:border-r lg:border-rule",
                  i === phases.length - 1 ? "lg:border-r-0 border-b-0" : "",
                  i % 2 === 0 ? "md:border-r md:border-rule" : "md:border-r-0",
                ].join(" ")}
              >
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-4 mb-3 lg:mb-4">
                  Etapa {phase.num}
                </div>
                <div className="font-heading text-[26px] lg:text-[32px] text-navy mb-3 lg:mb-4 leading-[1.1]">
                  {phase.name}
                </div>
                <p className="text-sm lg:text-[14.5px] text-ink-3 leading-[1.65] mb-5 lg:mb-7">
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
