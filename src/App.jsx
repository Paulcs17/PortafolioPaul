const skills = [
  "Java",
  "JavaScript",
  "React",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Flask",
  "Responsive Design",
  "UI para negocios",
];

const services = [
  {
    title: "Landing pages para negocios",
    text: "Páginas modernas, rápidas y enfocadas en generar confianza, contactos y ventas para gimnasios, barberías, restaurantes y negocios locales.",
  },
  {
    title: "Sistemas web a medida",
    text: "Desarrollo de sistemas funcionales con lógica real de negocio, paneles, formularios, reservas, roles de usuario y flujos administrativos.",
  },
  {
    title: "Interfaces modernas y responsive",
    text: "Diseños adaptados a móvil, tablet y escritorio para que el proyecto se vea profesional en cualquier dispositivo.",
  },
];

const projects = [
  {
    title: "Sistema de Tickets Municipal",
    stack: "Python · Flask · SQLite · Bootstrap",
    description:
      "Aplicación web para registrar, asignar y gestionar tickets internos. Incluye autenticación por roles, panel administrativo, historial de acciones y flujo de soporte técnico.",
    highlights: ["Roles de usuario", "Gestión de tickets", "Dashboard", "Lógica de negocio"],
    accent: "from-sky-500/20 to-indigo-400/10",
    emoji: "🛠️",
  },
  {
    title: "Landing Page de Gimnasio",
    stack: "React · Tailwind CSS · Vite",
    description:
      "Landing comercial diseñada para mostrar una marca fitness moderna. Incluye hero visual, planes, galería, testimonios y estructura orientada a conversión.",
    highlights: ["Diseño visual", "Responsive", "Branding", "UI moderna"],
    accent: "from-violet-500/20 to-fuchsia-400/10",
    emoji: "🏋️",
  },
  {
    title: "Sistema de Reservas para Gimnasio",
    stack: "React · Tailwind CSS · Vite",
    description:
      "Demo funcional para reservar clases, visualizar cupos disponibles y revisar reservas recientes. Pensado para mostrar interacción, lógica comercial y experiencia de usuario.",
    highlights: ["Reservas", "Cupos disponibles", "Dashboard demo", "UX comercial"],
    accent: "from-amber-500/20 to-orange-400/10",
    emoji: "📅",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-sky-400" />
            <div>
              <p className="text-lg font-bold tracking-wide">PAUL CÁRDENAS</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Web Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-sky-400">Sobre mí</a>
            <a href="#services" className="transition hover:text-sky-400">Servicios</a>
            <a href="#projects" className="transition hover:text-sky-400">Proyectos</a>
            <a href="#skills" className="transition hover:text-sky-400">Skills</a>
            <a href="https://es.fiverr.com/paul_acs/" target="_blank" rel="noreferrer" className="transition hover:text-sky-400">Fiverr</a>
          </nav>

          <a
            href="https://es.fiverr.com/paul_acs/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Contrátame en Fiverr
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              Desarrollador web orientado a soluciones reales
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Paul Alexander <span className="text-sky-400">Cárdenas Sánchez</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Desarrollo landing pages modernas, sistemas web funcionales y experiencias responsive pensadas para negocios reales. Mi enfoque es crear proyectos que se vean profesionales y que también resuelvan problemas concretos.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-7 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
              >
                Ver proyectos
              </a>
              <a
                href="mailto:paul17alexander@gmail.com"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
              >
                Contactar
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-sky-400">3</p>
                <p className="mt-1 text-sm text-white/60">Proyectos sólidos</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-sky-400">Responsive</p>
                <p className="mt-1 text-sm text-white/60">Diseño adaptable</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-sky-400">Full Web</p>
                <p className="mt-1 text-sm text-white/60">UI + lógica</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Perfil profesional</p>
              <h3 className="mt-3 text-2xl font-bold">Desarrollo soluciones web que se ven bien y funcionan.</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Me enfoco en crear proyectos que generen buena impresión visual, experiencia moderna y estructura profesional para portafolios, demos y negocios.
              </p>
            </div>
            <div className="rounded-[2rem] border border-sky-400/20 bg-sky-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Tecnologías clave</p>
              <h3 className="mt-3 text-2xl font-bold">React, Python, JavaScript y sistemas orientados a negocio.</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Desarrollo desde landing pages visuales hasta sistemas administrativos y demos funcionales.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Lo que vendo mejor</p>
              <h3 className="mt-3 text-2xl font-bold">Landing pages, sistemas web y soluciones para negocios.</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Ideal para clientes que buscan presencia online profesional o sistemas simples con valor real.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Objetivo</p>
              <h3 className="mt-3 text-2xl font-bold">Crear proyectos que inspiren confianza desde el primer vistazo.</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Mi portafolio está pensado para mostrar resultados, claridad visual y capacidad técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Sobre mí</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Desarrollador enfocado en proyectos que se puedan mostrar y vender.</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-base leading-8 text-white/70">
              Soy Paul Alexander Cárdenas Sánchez y me especializo en crear experiencias web modernas, visuales y funcionales. Trabajo con Java, JavaScript, React, Python, HTML y CSS para construir desde landing pages comerciales hasta sistemas con lógica de negocio real. Mi enfoque está en combinar diseño, claridad y funcionalidad para que cada proyecto se vea profesional y tenga utilidad práctica.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Servicios</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Lo que puedo desarrollar para negocios y clientes</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-sky-400/30">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Proyectos destacados</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tres proyectos pensados para demostrar habilidades reales</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-8`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl">{project.emoji}</span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Proyecto
                </span>
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm font-semibold text-sky-300">{project.stack}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 rounded-full bg-sky-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
                Ver proyecto
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Skills</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tecnologías con las que construyo mis proyectos</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-sky-400/20 bg-sky-400/10 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Trabajemos juntos</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Disponible para proyectos freelance en Fiverr.</h2>
            <p className="mt-4 max-w-xl text-white/75">
              Si buscas una landing page profesional, una interfaz moderna o un sistema web funcional, puedes ver mi perfil y contratarme directamente desde Fiverr.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-black/20 p-6">
            <div className="rounded-2xl border border-white/10 bg-neutral-950 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Perfil freelance</p>
              <h3 className="mt-3 text-2xl font-bold">Paul A. Cárdenas en Fiverr</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Revisa mis servicios, portafolio y disponibilidad para trabajos freelance directamente en mi perfil.
              </p>
              <a
                href="https://es.fiverr.com/paul_acs/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-bold text-sky-400 transition hover:bg-neutral-900"
              >
                Ir a mi Fiverr
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}