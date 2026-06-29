import Reveal from "./Reveal";

const experience = [
  {
    role: "Consultant Architect",
    org: "Private Practice",
    period: "Mar 2017 — Present",
    note: "Project Manager & Lead Consultant on residential, apartment and institutional commissions.",
  },
  {
    role: "Company Architect",
    org: "CEMEX Holdings Ltd",
    period: "Oct 2015 — Mar 2017",
    note: "Contractor's Architect on design-build projects including the KES 1.6B National Police Housing scheme.",
  },
  {
    role: "Graduate Architect",
    org: "DesignSpec Ltd",
    period: "Feb 2014 — Oct 2015",
    note: "Concept and scheme design for hospitals, county offices and residences.",
  },
];

const education = [
  { title: "Registered Architect — A1690", org: "BORAQS, Kenya", year: "2017" },
  { title: "Bachelor of Architecture", org: "JKUAT", year: "2014" },
  { title: "K.C.S.E.", org: "Nyahururu High School", year: "2002" },
];

const skills = [
  { name: "ArchiCAD", level: "Excellent", w: "96%" },
  { name: "MS Office (Word, Excel)", level: "Excellent", w: "92%" },
  { name: "PowerPoint", level: "Excellent", w: "90%" },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="border-t border-line bg-ink text-bone"
    >
      <div className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <p className="eyebrow mb-5">03 — Background</p>
          <h2 className="mb-16 font-serif text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.02] tracking-[-0.01em]">
            Education &amp; <span className="italic text-clay">experience</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Experience */}
          <div className="md:col-span-7">
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-concrete-2">
              Professional Experience
            </h3>
            <Reveal as="ol" stagger={0.12} className="flex flex-col">
              {experience.map((e) => (
                <li
                  key={e.org}
                  className="grid grid-cols-1 gap-2 border-t border-bone/15 py-7 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h4 className="font-serif text-2xl">{e.role}</h4>
                    <p className="mt-1 text-clay">{e.org}</p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-concrete-2">
                      {e.note}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-concrete-2 sm:text-right">
                    {e.period}
                  </span>
                </li>
              ))}
            </Reveal>
          </div>

          {/* Education + skills */}
          <div className="md:col-span-5">
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-concrete-2">
              Education
            </h3>
            <Reveal as="ul" stagger={0.1} className="mb-14 flex flex-col">
              {education.map((ed) => (
                <li
                  key={ed.title}
                  className="flex items-baseline justify-between gap-4 border-t border-bone/15 py-5"
                >
                  <div>
                    <p className="font-serif text-lg leading-tight">
                      {ed.title}
                    </p>
                    <p className="text-sm text-concrete-2">{ed.org}</p>
                  </div>
                  <span className="font-mono text-sm text-clay">{ed.year}</span>
                </li>
              ))}
            </Reveal>

            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-concrete-2">
              Software
            </h3>
            <Reveal stagger={0.1} className="flex flex-col gap-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm">{s.name}</span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-concrete-2">
                      {s.level}
                    </span>
                  </div>
                  <div className="h-px w-full bg-bone/15">
                    <div
                      className="h-px bg-clay"
                      style={{ width: s.w }}
                    />
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
