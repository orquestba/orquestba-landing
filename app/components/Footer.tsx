const navLinks = [
  "Inicio",
  "Cómo trabajamos",
  "Servicios",
  "Recursos",
  "Sobre nosotros",
];
const serviceLinks = ["Sistema IBP", "Asesoría en Análisis de Negocio"];

const getCurrentYear = () => {
  const now = new Date();

  return now.getFullYear();
};

export default function Footer() {
  return (
    <footer className="bg-footer-bg pt-18 pb-10" id="contacto">
      <div className="max-w-345] mx-auto px-15">
        <div className="grid grid-cols-[280px_1fr_1fr_1fr] gap-15 pb-14 border-b border-white/8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-heading text-[20px] text-white mb-1">
              Orquestba
            </div>
            <div className="text-[11px] text-white/30 tracking-[0.08em] mb-5">
              Our Request to Data · IBP
            </div>
            <p className="text-[13px] text-white/35 leading-[1.65] mb-6">
              Conectamos datos, áreas y decisiones para que tu empresa tenga
              claridad, dirección y capacidad de adaptación.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 border border-white/12 rounded-md flex items-center justify-center text-[13px] text-white/40 no-underline transition-colors hover:border-copper hover:text-copper-light"
              >
                in
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-5">
              Navegación
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[14px] text-white/35 no-underline transition-colors hover:text-white/75"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-5">
              Servicios
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[14px] text-white/35 no-underline transition-colors hover:text-white/75"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-5">
              Contacto
            </div>
            {[
              "info@orquestba.com.ar",
              "+54 11 1234 5678",
              "Buenos Aires, Argentina",
            ].map((item) => (
              <div
                key={item}
                className="text-[13.5px] text-white/40 mb-2.5 leading-normal"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[12px] text-white/20">
            © {getCurrentYear()} Orquestba. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            {["Política de privacidad", "Términos y condiciones"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="text-[12px] text-white/20 no-underline transition-colors hover:text-white/50"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
