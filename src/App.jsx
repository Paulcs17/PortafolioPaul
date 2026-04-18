const skills = [
  "React",
  "JavaScript",
  "Python",
  "Flask",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Java",
];

const services = [
  {
    title: "Landing Pages for Businesses",
    text: "Modern pages designed to attract clients, build trust, and present a business professionally.",
  },
  {
    title: "Custom Web Systems",
    text: "Web applications with real business logic: dashboards, bookings, admin panels, and user roles.",
  },
  {
    title: "Responsive Design",
    text: "Interfaces that look clean and professional on mobile, tablet, and desktop.",
  },
];

const projects = [
  {
    title: "FlowDesk Ticket System",
    stack: "Python · Flask · SQLite · Bootstrap",
    description:
      "A web system created to help teams organize internal requests, assign tasks efficiently, and improve workflow visibility with role-based access and admin control.",
    highlights: [
      "Task Management",
      "User Roles",
      "Admin Dashboard",
      "Workflow",
    ],
    emoji: "🛠️",
    demo: "https://sistemadetickets.onrender.com/",
    code: "https://github.com/Paulcs17/SistemaDeTickets",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
  },
  {
    title: "Iron Temple Gym Landing",
    stack: "React · Tailwind CSS · Vite",
    description:
      "A conversion-focused landing page built to attract clients, strengthen trust, and present a fitness brand with a modern and professional look.",
    highlights: ["Conversion Focus", "Responsive", "Modern UI"],
    emoji: "🏋️",
    demo: "https://landing-page-gym-8jkh.vercel.app",
    code: "https://github.com/Paulcs17/LandingPage-Gym",
    accent: "from-fuchsia-500/20 via-violet-400/10 to-transparent",
  },
  {
    title: "GymFlow Booking System",
    stack: "React · Tailwind CSS · Vite",
    description:
      "A booking experience prototype where users can reserve classes, review availability, and interact with a practical flow designed for real business scenarios.",
    highlights: ["Booking", "Availability", "User Flow"],
    emoji: "📅",
    demo: "https://gym-reservation-demo.vercel.app",
    code: "https://github.com/Paulcs17/GymReservation-demo",
    accent: "from-amber-500/20 via-orange-400/10 to-transparent",
  },
];

const stats = [
  { value: "3", label: "Featured projects" },
  { value: "100%", label: "Responsive layout" },
  { value: "Real", label: "Business-focused work" },
];

const reasons = [
  "Real solutions, not just design",
  "Clean and professional presentation",
  "Clear communication throughout the project",
  "Focus on usability and business value",
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <div className="fixed inset-0 -z-20 bg-neutral-950" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_20%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
              <span className="text-sm font-black text-sky-300">PC</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.32em] text-white/40">
                PORTFOLIO
              </p>
              <p className="text-lg font-bold tracking-tight">Paul Cárdenas</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-sky-400">
              Services
            </a>
            <a href="#projects" className="transition hover:text-sky-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-sky-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-sky-400">
              Contact
            </a>
          </nav>

          <a
            href="https://es.fiverr.com/paul_acs/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-sky-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-sky-500/35"
          >
            Start a Project
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24"
      >
        <div className="absolute left-6 top-20 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute right-6 top-10 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative">
            <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
              Web developer focused on real business solutions
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              I build websites and systems that help businesses get more clients
              and stay organized.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              I create modern landing pages and functional web systems focused
              on trust, usability, and practical results for real businesses.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "JavaScript", "Python", "Flask"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium text-white/50">
              Focused on real business solutions, not just design.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-7 py-4 text-center text-sm font-bold text-black shadow-lg shadow-sky-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-sky-500/35"
              >
                View Projects
              </a>

              <a
                href="https://es.fiverr.com/paul_acs/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-sky-400 hover:text-sky-400"
              >
                Fiverr Profile
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                What I Build
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight">
                Landing pages and systems that solve real problems.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                I focus on projects that combine clean presentation with useful
                functionality and strong business value.
              </p>
            </div>

            <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/15 to-sky-400/5 p-6 shadow-[0_20px_60px_rgba(56,189,248,0.08)]">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                Core Stack
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight">
                React, JavaScript, Python, and Flask.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                A solid combination for modern interfaces and practical business
                solutions.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:col-span-2">
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-black text-sky-400">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What I can build for your business
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl transition group-hover:bg-sky-400/15" />
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sm font-bold text-sky-300">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Why work with me
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              I focus on useful projects, clear communication, and clean
              execution.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/15 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.10)]">
                  ✓
                </span>
                <p className="text-sm leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Selected work built to demonstrate real value
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group rounded-[2rem] border border-white/10 bg-gradient-to-br ${p.accent} p-[1px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]`}
            >
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-neutral-950/95 p-7">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

                <div className="relative flex items-center justify-between">
                  <div className="text-4xl">{p.emoji}</div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Featured
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-sky-300">
                  {p.stack}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-sky-400 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-sky-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-sky-500/35"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-sky-400 hover:text-sky-400"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technologies I use to build modern web projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-sky-400/25 hover:text-sky-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/12 to-sky-400/5 p-8 shadow-[0_20px_60px_rgba(56,189,248,0.06)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Available for freelance projects
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">
              If you need a professional landing page or a functional web
              system, you can contact me through Fiverr. I usually respond
              within 24 hours.
            </p>
          </div>

          <a
            href="https://es.fiverr.com/paul_acs/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-sky-400 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-900"
          >
            Go to Fiverr
          </a>
        </div>
      </section>
    </div>
  );
}