import CycleDiagram from "./CycleDiagram";
import Title from "./shared/Title";

const phases = [
  {
    num: "01",
    name: "Base",
    desc: "Mapeamos el punto de partida: qué información existe, cómo fluye entre las áreas y dónde se rompe la cadena.",
  },
  {
    num: "02",
    name: "Estructura",
    desc: "Diseñamos la arquitectura de gestión: los criterios, indicadores y cadencia que hacen posible que Finanzas, Operaciones y Ventas planifiquen desde la misma lectura.",
  },
  {
    num: "03",
    name: "Sistema",
    desc: "Construimos el portal web a medida: los tableros, indicadores y escenarios proyectados que tu empresa necesita para transformar el dato en dirección.",
  },
  {
    num: "04",
    name: "Ciclo",
    desc: "Cuando el ciclo está en marcha, lo que sigue es mejorar. Cada período planificado deja a la empresa mejor preparada para el siguiente — bienvenida a la Mejora Continua.",
  },
];

export default function Method() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-25 bg-cream" id="como-trabajamos">
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15 mb-10 lg:mb-14">
        <div className="eyebrow">El camino</div>

        <Title>Cómo trabajamos</Title>
        <Title.Lede className="mt-4 lg:mt-5">
          Cuatro etapas para pasar de datos dispersos a un ciclo de
          planificación que no se detiene.
        </Title.Lede>
      </div>

      <div className="w-full relative bg-cream pb-16 md:pb-20 lg:pb-25">
        <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
          <CycleDiagram phases={phases} />
        </div>
      </div>
    </section>
  );
}
