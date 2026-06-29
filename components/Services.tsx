import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Architecture",
    desc: "Full design from first concept through to a completed, occupied building.",
    icon: (
      <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
    ),
  },
  {
    n: "02",
    title: "Interior Design",
    desc: "Considered interiors that carry the architecture through to the finishes.",
    icon: <path d="M3 21h18M4 21V10h16v11M8 21v-5h3v5M14 14h2" />,
  },
  {
    n: "03",
    title: "Master Planning",
    desc: "Site strategy and layout, organising space at every scale.",
    icon: <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 13h7v7H4z" />,
  },
  {
    n: "04",
    title: "Construction Management",
    desc: "Documentation, shop drawings and supervision that hold quality on site.",
    icon: <path d="M2 20h20M4 20v-8l8-6 8 6v8M12 20v-5M9 9l6 4" />,
  },
  {
    n: "05",
    title: "Landscape Architecture",
    desc: "Grounds, courts and gardens designed as part of the whole.",
    icon: <path d="M12 22V8M12 8c0-3 2-5 5-5 0 3-2 5-5 5M12 12c0-3-2-5-5-5 0 3 2 5 5 5" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">02 — Services</p>
          <h2 className="mb-14 max-w-3xl font-serif text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.02] tracking-[-0.01em] text-ink">
            One studio, the whole journey from{" "}
            <span className="italic text-clay">sketch to structure</span>.
          </h2>
        </Reveal>

        <Reveal as="div" stagger={0.08} className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-5 border border-line bg-bone p-7 transition-colors duration-300 hover:bg-ink"
            >
              <div className="flex items-center justify-between">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-clay"
                >
                  {s.icon}
                </svg>
                <span className="font-mono text-xs text-concrete transition-colors group-hover:text-concrete-2">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-2xl text-ink transition-colors group-hover:text-bone">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-concrete-2">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Clay motto tile */}
          <a
            href="#contact"
            className="group flex cursor-pointer flex-col justify-between gap-6 bg-clay p-7 text-bone transition-colors duration-300 hover:bg-clay-deep"
          >
            <p className="font-serif text-3xl font-light leading-tight">
              Design with purpose.
            </p>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
              Start a project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
