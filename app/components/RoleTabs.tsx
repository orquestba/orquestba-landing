"use client";

import { useState } from "react";

type Role = "business" | "finance" | "supply" | "sales";

const CheckIcon = () => (
  <svg viewBox="0 0 10 10" fill="none">
    <path
      d="M2 5l2 2 4-4"
      stroke="#B8692A"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const roles: { id: Role; label: string }[] = [
  { id: "business", label: "Business Leaders" },
  { id: "finance", label: "Finance Leaders" },
  { id: "supply", label: "Supply Chain Leaders" },
  { id: "sales", label: "Sales & Marketing Leaders" },
];

const panels: Record<
  Role,
  {
    painTitle: string;
    painBody: string;
    signals: string[];
    ibpHeadline: string;
    ibpBody: string;
    outcomes: string[];
  }
> = {
  business: {
    painTitle: "Tomás decisiones con información que no sabés si es confiable.",
    painBody:
      "Como líder de negocio, necesitás visión clara y actualizada para mover la empresa hacia adelante. Pero cada reunión empieza igual: alguien trae un número distinto, nadie sabe cuál es el correcto, y la discusión termina siendo sobre los datos en lugar de sobre la estrategia.",
    signals: [
      "Cada área llega con su propia versión de los resultados",
      "No podés responder en tiempo real a cambios del mercado",
      "El presupuesto se hace una vez al año y queda obsoleto a los 3 meses",
      "La estrategia se fragmenta en la ejecución porque no hay alineación",
    ],
    ibpHeadline: "Una sola fuente de verdad para toda la organización.",
    ibpBody:
      "IBP conecta las áreas bajo un mismo sistema de información. Cuando tomás una decisión, lo hacés con datos actualizados, validados y compartidos por toda la empresa — no con la versión de cada uno.",
    outcomes: [
      "Visibilidad integrada: finanzas, operaciones y ventas en un solo panel",
      "Planificación continua: el presupuesto evoluciona con el negocio, no contra él",
      "Reuniones de gestión centradas en decisiones, no en reconciliar datos",
      "Estrategia conectada con la operación en tiempo real",
    ],
  },
  finance: {
    painTitle: "Pasás más tiempo consolidando datos que analizando el negocio.",
    painBody:
      "Tu equipo es el custodio de los números, pero los números están en todas partes. Cada cierre es una carrera contra el tiempo: juntando planillas, reconciliando versiones, persiguiendo información que tendría que fluir sola.",
    signals: [
      "El proceso de cierre mensual lleva semanas en lugar de días",
      "Las proyecciones se construyen sobre supuestos no validados con las áreas",
      "El forecast cambia cada vez que alguien actualiza una planilla",
      "No hay trazabilidad entre los números financieros y la operación real",
    ],
    ibpHeadline: "Finanzas conectada con la realidad operativa del negocio.",
    ibpBody:
      "IBP integra los datos financieros con la información de ventas y operaciones. El resultado: menos tiempo consolidando, más tiempo analizando. Y proyecciones que reflejan lo que realmente está pasando.",
    outcomes: [
      "Cierre mensual automatizado y trazable desde una sola fuente",
      "Forecasting financiero integrado con ventas y supply chain",
      "Escenarios financieros actualizados en tiempo real ante cambios del negocio",
      "KPIs financieros alineados con los indicadores operativos de cada área",
    ],
  },
  supply: {
    painTitle:
      "Planeás sin saber qué va a vender comercial ni qué va a aprobar finanzas.",
    painBody:
      "Operaciones es la correa de transmisión del negocio, pero opera con información tardía y desconectada. Cuando ventas promete algo que no existe, o finanzas recorta un presupuesto que ya está comprometido, el impacto lo absorbés vos.",
    signals: [
      "El plan de producción se rehace cada vez que cambia la demanda prevista",
      "Los niveles de inventario no responden a la realidad comercial",
      "Los lead times de proveedores no están integrados en la planificación",
      "Las urgencias son la norma porque no hay visibilidad anticipada",
    ],
    ibpHeadline:
      "Supply chain planificada desde la demanda real, no desde supuestos.",
    ibpBody:
      "IBP conecta la señal de demanda de ventas con la capacidad operativa y los límites financieros. Así, la cadena de abastecimiento planifica en sintonía con el negocio — anticipando, no reaccionando.",
    outcomes: [
      "Planificación de demanda integrada con el forecast comercial",
      "Visibilidad de restricciones de capacidad con anticipación suficiente",
      "Inventarios optimizados en base a señales reales de venta",
      "Menos urgencias, más planificación: del modo reactivo al modo anticipatorio",
    ],
  },
  sales: {
    painTitle:
      "Vendés, pero la empresa no siempre puede cumplir lo que prometés.",
    painBody:
      "El equipo comercial vive en el mercado y necesita moverse rápido. Pero cuando el stock no acompaña, el margen no cierra o el plan de demanda que construiste no lo lee nadie más, la brecha entre lo que prometés y lo que se entrega crece.",
    signals: [
      "El forecast comercial no está integrado con la planificación de operaciones",
      "Los márgenes reales de cada cliente no son visibles en tiempo real",
      "Las campañas de marketing no tienen impacto medible sobre el negocio",
      "Los compromisos de entrega se hacen sin visibilidad de stock o capacidad",
    ],
    ibpHeadline:
      "Ventas conectada con la capacidad real de la empresa para cumplir.",
    ibpBody:
      "IBP traduce la señal comercial en información útil para toda la organización. El forecast de ventas alimenta la planificación, los márgenes son visibles por canal y cliente, y los compromisos de entrega se toman con información real.",
    outcomes: [
      "Forecast comercial integrado en el ciclo de planificación",
      "Visibilidad de margen por producto, canal y cliente",
      "Compromisos de entrega basados en stock y capacidad real",
      "Impacto de las acciones comerciales medible sobre el resultado del negocio",
    ],
  },
};

export default function RoleTabs() {
  const [active, setActive] = useState<Role>("business");
  const panel = panels[active];

  return (
    <section className="section-problem" id="problema">
      <div className="container">
        <div className="problem-header">
          <div className="eyebrow eyebrow-muted">El diagnóstico</div>
          <h2 className="problem-headline">
            El problema
            <br />
            no es el mismo
            <br />
            para <em>todos.</em>
          </h2>
          <p className="problem-intro">
            Cada área siente la falta de estructura de una forma distinta. Pero
            el origen es siempre el mismo: la información no fluye.{" "}
            <strong>
              IBP resuelve el problema desde la raíz — para todos a la vez.
            </strong>
          </p>
        </div>

        <div className="role-tabs">
          {roles.map((r) => (
            <button
              key={r.id}
              className={`role-tab${active === r.id ? " active" : ""}`}
              onClick={() => setActive(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="role-panels">
          <div className="role-panel active">
            <div className="role-problem-col">
              <div className="role-col-label">El problema que sentís</div>
              <h3 className="role-pain-title">{panel.painTitle}</h3>
              <p className="role-pain-body">{panel.painBody}</p>
              <ul className="role-pain-signals">
                {panel.signals.map((s) => (
                  <li key={s} className="role-pain-signal">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="role-response-col">
              <div className="role-col-label">Cómo responde IBP</div>
              <h3 className="role-ibp-headline">{panel.ibpHeadline}</h3>
              <p className="role-ibp-body">{panel.ibpBody}</p>
              <ul className="role-ibp-outcomes">
                {panel.outcomes.map((o) => (
                  <li key={o} className="role-ibp-outcome">
                    <div className="role-ibp-outcome-icon">
                      <CheckIcon />
                    </div>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
