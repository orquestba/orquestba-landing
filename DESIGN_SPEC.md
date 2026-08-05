# ORQUESTBA — Design Spec v3 (Landing Redesign)

> Documento de referencia para Claude Code / Claude Design. Objetivo: rediseñar la landing (https://www.orquestba.com/) sin perder el copy aprobado ni la esencia de marca, eliminando los patrones que la hacen leer como "generada por IA" y dándole carácter propio.
>
> Reemplaza al DESIGN_SPEC v2. Recoge todas las decisiones tomadas hasta la v4 del prototipo.
>
> No se cambia: contenido, copy aprobado, mensajería, estructura de audiencias, servicios.
> Sí se cambia: sistema tipográfico, disciplina de color, hero, nombres de nav, y la ejecución visual de varias secciones.

---

## 0. Contexto de marca (resumen — detalle completo en ORQUESTBA_Brandbook.md)

ORQUESTBA es una consultora boutique argentina de IBP (Integrated Business Planning / Planificación Integrada de Negocio) para PyMEs y startups. Ayuda a que Finanzas, Operaciones y Ventas dejen de operar en silos y planifiquen desde la misma lectura de datos.

Tono: McKinsey + Oliver Wight — consultivo, directo, sin hype. El logo son dos arcos concéntricos cobre-dorado que NO cierran: representan un ciclo continuo, no un proyecto con fin. Esa idea (un ciclo que no cierra) debe aparecer en al menos un elemento estructural del sitio, no solo en el ícono del logo.

Idioma: 100% español rioplatense (voseo). "IBP", "framework" y "forecasting" se usan tal cual. El nombre siempre en mayúsculas: ORQUESTBA.

---

## 1. Decisiones cerradas (no reabrir sin evidencia nueva)

1. **Color: navy/copper disciplinado.** La variante casi-negra se descartó (leía marrón fangoso contra el cobre). El navy se queda porque ya carga peso de marca.
2. **Tipografía: se elimina el pairing serif + sans.** Es la combinación default de casi toda herramienta de generación de landings hoy — dejó de ser elección y pasó a ser un "tell". Reemplazada por un sistema de 3 roles, todo sans (sección 3).
3. **Hero: se eliminó el diagrama orbital** (nodos flotando en círculo alrededor de "sistema"). Era el patrón de landing-IA más reconocible que existe. El hero muestra headline, subtext y CTA. **Actualizado 2026-08-05:** se probó un motivo de arcos concéntricos como fondo y no convenció; se reemplazó por una grilla de puntos cobre sutil que se ilumina cerca del cursor (`HeroDots.tsx`) — decorativo, sin etiquetas ni nodos, no es el diagrama orbital descartado.
4. **Títulos sin palabras en cobre.** Colorear una palabra suelta dentro del heading ("Lo que necesita es _claridad_") se volvió un tell de IA. Cada título va en UN solo color (navy sobre claro, off-white sobre navy). **Única excepción: la palabra "claridad" en el H1 del hero.** El cobre queda reservado para elementos de acción (CTA, links, tab activo, bullets, acentos puntuales).
5. **Patrón de títulos de sección: título funcional + bajada con voz.** El título orienta ("¿qué es esto?") de un vistazo; la voz de marca (más literaria/diagnóstica) vive en la bajada. Nada de títulos puramente evocativos que no orientan.
6. **Estructura: 6 secciones** (hero, problema, cómo trabajamos, servicios, contacto, footer) + la banda de niveles de madurez como transición. Single exit funnel: todos los CTAs van al formulario. No hay páginas secundarias que compitan con la conversión.
7. **Nada de:** gradientes, blobs, degradés, sombras decorativas, pills grandes rellenos, numeración 01/02/03 sobre cards idénticas (salvo secuencia real), viñetas em-dash "—", ilustraciones tipo "ícono flotando en círculo", fotos de stock genéricas, acordeón/FAQ para contenido que no son preguntas.

---

## 2. Tokens de color

Mismos hex que el brandbook. La regla nueva es de **disciplina de uso**, no de paleta.

```css
:root {
  /* Primary */
  --navy: #0e1c2f;
  --navy-dark: #080f1a;
  --copper: #b8692a;
  --copper-light: #d4854a;
  /* Surface */
  --off-white: #fdfcfa;
  --cream: #f6f3ee;
  --copper-pale: #f2e4d6;
  /* Text (ink) */
  --ink-1: #171210;
  --ink-2: #3d3530;
  --ink-3: #7a726a;
  --ink-4: #b8b0a8;
}
```

**Reglas de uso:**

- Cero gradientes. Todo fondo sólido y plano.
- Cobre = un solo acento por vista. Si aparece en 3+ lugares en una misma sección visible, recortar.
- Bordes hairline (`1px solid` baja opacidad: `rgba(253,252,250,0.12)` sobre navy, `rgba(23,18,16,0.10)` sobre claro) en lugar de sombras.
- Botones: `border-radius: 6px`, nunca pill (`999px`).
- Alternancia de fondos para dar ritmo: Hero (navy) → Problema (off-white) → Madurez (transición) → Cómo trabajamos (cream) → Servicios (navy) → Contacto (cream) → Footer (navy-dark).

**Nota de intensidad (referencia Kin Analytics):** hay margen para que el cobre pegue un poco más fuerte como acento puntual (Kin usa su neón así), sin abandonar la paleta ni romper la disciplina de "un acento por vista". Explorable, no obligatorio.

---

## 3. Tipografía — sistema de 3 roles, todo sans (NUNCA serif)

| Rol             | Fuente        | Pesos    | Uso                                              |
| --------------- | ------------- | -------- | ------------------------------------------------ |
| **Display**     | Space Grotesk | 500, 700 | H1, H2, headlines                                |
| **Body/UI**     | IBM Plex Sans | 400, 500 | Párrafos, nav, botones, forms                    |
| **Mono/labels** | IBM Plex Mono | 500      | Labels, badges, KPIs/cifras, numeración de pasos |

Las tres son Google Fonts (cargar vía `next/font/google`, sin instalar paquetes).

Escala de referencia: H1 hero 34/48/60px (700, lh 1.1) · H2 sección 28/36/44px (700, lh 1.15) · Body 16/16/17px (400, lh 1.6) · Label/eyebrow 11px (500, uppercase, ls 0.08em, mono) · Botones 13.5px (500).

**Por qué este sistema** (para no revertirlo por gusto): Space Grotesk es geométrica y con carácter propio a tamaños grandes, sin caer en el molde "editorial premium" (serif+sans) que domina. IBM Plex Sans fue diseñada por IBM para contextos técnicos/enterprise — coherente con el posicionamiento "Business Analyst", más específica que Inter (el default de todo). IBM Plex Mono refuerza el "dato" como materia prima del trabajo; se usa para cifras, labels y badges, nunca para párrafos largos.

---

## 4. Gestos de identidad propios (para despegarse del look IA)

Tres gestos baratos que le dan sello sin agregar decoración ni secciones (inspiración: Kin Analytics, sin copiarla):

1. **La barra "/" como prefijo de labels/eyebrows.** Ej. `/EL PROBLEMA`, `/CÓMO TRABAJAMOS`. Gesto mínimo en IBM Plex Mono que evoca paths/comandos — coherente con "producto de datos" y con el mono ya presente. Barato y reconocible. (Explorable — validar que no choque con el tono formal.)
2. **Cobre como acento saturado y puntual**, no tímido (ver nota de intensidad en sección 2).
3. **Repetir el arco roto con disciplina.** El motivo del logo (dos arcos concéntricos que no cierran) debe aparecer de forma consistente y controlada en más de un lugar (no solo el ícono), como Kin repite su hexágono. Un motivo geométrico repetido con criterio es lo que hace sentir un sitio "diseñado" y no ensamblado.

**Qué NO tomar de referencias tipo Kin:** su densidad (carruseles, doble grid de logos, FAQ, mega-menús, contadores) — ORQUESTBA es boutique y su fuerza es la precisión diagnóstica, no el volumen. Nada de fotos de stock ni íconos genéricos.

---

## 5. Nombres de navegación (nombres estándar de industria — decisión acordada con Franco)

Los nombres evocativos viejos (Contexto / Método / Tu empresa / Modelá) se reemplazan por nombres estándar que se entienden sin adivinar:

| Nav                     | Sección                             | id               |
| ----------------------- | ----------------------------------- | ---------------- |
| `Por qué IBP`           | El problema, por audiencia          | #problema        |
| `Cómo trabajamos`       | Las 4 etapas                        | #como-trabajamos |
| `Servicios`             | Los 2 servicios                     | #servicios       |
| `Contacto`              | Formulario                          | #contacto        |
| `orquestba.com`         | Portal (en minúsculas, intencional) | —                |
| `Iniciar Diagnóstico →` | CTA botón → formulario              | #contacto        |

(La banda de niveles de madurez, #madurez, existe como transición pero no está en el nav — decisión abierta si se suma.)

---

## 6. Sección por sección

### 6.1 Hero — navy

Simple, mucho espacio negativo. Sin diagramas ni ilustración con etiquetas/nodos. Fondo: grilla de puntos cobre sutil, interactiva al cursor (ver nota en sección 1, punto 3) — decorativo puro, no compite con el texto.

- Headline (Space Grotesk, "claridad" en cobre — única excepción de color en título): `Tu empresa tiene datos. Lo que necesita es claridad.`
- Subtext (Plex Sans, ink-3 sobre navy): `Conectamos Finanzas, Operaciones y Ventas bajo la misma lectura. Traducimos el dato en dirección de negocio.`
- CTA primario sólido cobre: `Iniciar Diagnóstico →`

### 6.2 El problema, por audiencia — off-white

Sección central de la marca: el visitante entra esperando leer sobre la empresa y termina leyendo sobre sí mismo.

- Título: `Cada área tiene su propia versión de los números`
- Bajada: `Lo llaman distinto, pero es el mismo problema: trabajar por silos desconecta la estrategia de la operación. Encontrá dónde te pega a vos.`
- **Patrón: split persistente "Problema / IBP"** (NO acordeón, NO FAQ). Fila de 4 tabs de área arriba (Dirección / Finanzas / Operaciones / Comercial; activo con borde inferior 2px cobre, sin fondo relleno). Debajo, dos columnas SIEMPRE visibles:
  - Izquierda "El problema que sentís": label mono ink-3, estado actual/fricción, sin acento cobre.
  - Derecha "Cómo responde IBP": label mono cobre, estado resuelto, tratamiento visual diferenciado (panel navy o copper-pale) para que el contraste se lea de un vistazo. Las dos columnas NO deben verse iguales.
  - Divisoria central fina (línea cobre o marca discreta del arco roto).
  - Mobile: columnas apiladas (problema arriba, IBP abajo).
- Copy aprobado por área (usar TAL CUAL, no condensar): ver brandbook, sección "Lo que frena a tu empresa" — pares problema/IBP para Dirección, Finanzas, Operaciones, Comercial.

### 6.3 Niveles de madurez — banda de transición (entre Problema y Cómo trabajamos)

Mensaje informativo: el cliente puede estar en cualquiera de 3 etapas y en las tres ORQUESTBA lo ayuda. NO es un proceso secuencial con flechas — son 3 estados alternativos.

- Título: `Trabajamos con empresas en cualquier etapa`
- Bajada: `Reconocé en cuál estás hoy. En las tres, el punto de entrada es el mismo diagnóstico.`
- **Formato (a definir en ejecución):** se probó sticky-scroll vertical (panel izq nivel activo que se reemplaza + contenido a la derecha). NOTA: el sticky/scroll dio bugs de altura; si se usa, implementar con GSAP ScrollTrigger, no con position:sticky manual. Alternativa estática válida si el scroll complica. Debe leerse como espectro de madurez, no como 3 cards idénticas. Sin numeración decorativa.
- Contenido:
  - **Inicial** — `Cada área tiene su versión. El negocio no tiene la suya.` Áreas en silos, sin lectura unificada. Construir desde la base.
  - **Intermedio** — `Tenés procesos. Tenés datos. Pero conviven sin integrarse.` Ya hay procesos/KPIs pero al cruzar números algo falta. Refinar sin desarmar.
  - **Avanzado** — `Entendés tu negocio, confiás en tu sistema y querés escalar.` Áreas se hablan, datos fluyen. Es momento de escalar.

### 6.4 Cómo trabajamos (El Camino) — cream

Las 4 etapas del proceso.

- Título: `Cómo trabajamos`
- Bajada: `Cuatro etapas para pasar de datos dispersos a un ciclo de planificación que no se detiene.`
- **SIN scroll pinning / scrollytelling** (causaba un hueco vacío de varias pantallas — bug conocido). Bloque estático y compacto que ocupa solo el alto de su contenido.
- **Formato objetivo (a definir/iterar):** un círculo con las 4 etapas como puntos que se iluminan por turno de forma natural y orgánica (animación autónoma, lenta, NO por scroll); los textos de cada etapa quedan fijos y legibles (no rotan). El círculo debe heredar el "no cierra" del logo (break intencional), no ser un anillo perfecto. Mientras se define, dejar las 4 etapas como bloque estático simple (fila horizontal / 2x2 / apiladas en mobile).
- Numeración mono ETAPA 01–04 (secuencia real, justificada).
- Copy (usar tal cual):
  - **01 · Base:** `Mapeamos el punto de partida: qué información existe, cómo fluye entre las áreas y dónde se rompe la cadena.`
  - **02 · Estructura:** `Diseñamos la arquitectura de gestión: los criterios, indicadores y cadencia que hacen posible que Finanzas, Operaciones y Ventas planifiquen desde la misma lectura.`
  - **03 · Sistema:** `Construimos el portal web a medida: los tableros, indicadores y escenarios proyectados que tu empresa necesita para transformar el dato en dirección.`
  - **04 · Ciclo:** `Cuando el ciclo está en marcha, lo que sigue es mejorar. Cada período planificado deja a la empresa mejor preparada para el siguiente — bienvenida a la Mejora Continua.`

### 6.5 Servicios — navy

- Título: `Dos formas de empezar`
- Bajada: `Según el punto de partida de tu empresa, el camino hacia la integración arranca distinto.`
- 2 cards de servicio SIN íconos genéricos. Jerarquía tipográfica (label mono + título display + body + lista con bullets cuadrados cobre). Botones radius 6px.
  - **Asesoría en Análisis de Negocio** + lista: Diagnóstico del modelo de gestión actual · Organización de fuentes de datos y criterios de medición · Diseño de la arquitectura de información · Hoja de ruta hacia la integración.
  - **ORQUESTBA Framework** (Instalás IBP) + lista: Un tablero de gestión para Finanzas, Operaciones y Ventas · KPIs y forecasting integrados en tiempo real · Simulación de escenarios · Acompañamiento en la adopción de IBP como framework.
- **QUITADO:** el bloque ISO 9001 con pills "Base → Estructura → Sistema → Mejora continua" (patrón SaaS genérico, sobrecarga). Si se quiere conservar el fundamento ISO, integrarlo como línea de texto discreta, sin pills ni flechas.

### 6.6 Contacto — cream

- Título: `Empecemos por un diagnóstico`
- Bajada: `Planificar no es decidir el próximo período, es decidir cómo llegás a él. Completá el formulario y coordinamos una primera conversación sin compromiso.`
- Datos (labels mono): Email `orquestba@gmail.com` · Teléfono `+54 9 11 65535769` · Ubicación `Buenos Aires, Argentina`.
- Formulario: Nombre, Apellido, Empresa, Email, Mensaje. Inputs planos, borde 1px, focus = borde cobre 2px (sirve de focus ring). CTA `Enviar mensaje →`.

### 6.7 Footer — navy-dark

Aplicar sistema tipográfico. Logo + tagline (`Planificación Integrada de Negocio · IBP` / `Traducimos el dato en dirección de negocio.`) · Navegación (Por qué IBP / Cómo trabajamos / Servicios / Contacto / orquestba.com) · Servicios · Contacto. Ícono LinkedIn outline. Línea inferior: © 2026 ORQUESTBA + Política de privacidad + Términos.

---

## 7. Checklist de autocrítica (antes de cerrar cada sección)

- [ ] ¿Ningún título tiene palabras en cobre, salvo "claridad" en el hero?
- [ ] ¿Cada sección usa título funcional + bajada con voz?
- [ ] ¿Hay algún gradiente, sombra o blob? → eliminar.
- [ ] ¿El cobre aparece más de dos veces en una misma vista? → recortar.
- [ ] ¿Alguna grilla de 3-4 columnas es idéntica a otra? → romper la simetría en al menos un caso.
- [ ] ¿La numeración corresponde a una secuencia real? → si es decorativa, quitar.
- [ ] ¿Quedó algún em-dash "—" como viñeta? → cuadrado cobre 6px.
- [ ] ¿Algún botón/badge con pill o radius grande? → 6px.
- [ ] ¿Quedó algún scroll pinning que reserve altura vacía? → eliminar.
- [ ] Contraste AA para texto sobre navy (verificar ink-3/ink-4 si se usan ahí).

---

## 8. Notas de implementación (Claude Code)

- Stack actual: Next.js — mantener, no migrar.
- Fuentes: Google Fonts vía `next/font/google`, sin paquetes nuevos.
- Iconografía puntual (si hace falta): Tabler Icons outline, con moderación, nunca protagonista.
- Scroll/pinning (si se retoma en "niveles de madurez" o en el círculo): usar GSAP ScrollTrigger con `pin: true` / `scrub: true` (auto-calcula el spacer), NO `position:sticky` con alturas vh hardcodeadas. Auditar que ningún padre tenga `overflow:hidden`, `transform` o `will-change` que rompa el pin. Usar el hook `useGSAP` de `@gsap/react`, no `useEffect` crudo.
- Skill de proyecto recomendada: `.claude/skills/orquestba-design/SKILL.md` con el resumen ejecutable de este spec, para que futuras sesiones de Claude Code respeten el criterio sin repetir contexto.
- Mobile-first: verificar que el split de "El problema" y cualquier layout multicolumna tengan versión apilada legible.

---

_ORQUESTBA Design Spec v3_
