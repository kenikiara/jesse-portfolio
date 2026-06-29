"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const certs = [
  {
    src: "/certs/registration.png",
    title: "Architect Registration",
    issuer: "Board of Registration — Cap. 525",
    year: "2018",
  },
  {
    src: "/certs/practising.png",
    title: "Practising Certificate",
    issuer: "BORAQS, Kenya",
    year: "2025",
  },
  {
    src: "/certs/aak-membership.png",
    title: "AAK Membership",
    issuer: "Architectural Association of Kenya",
    year: "2026",
  },
  {
    src: "/certs/indemnity.png",
    title: "Professional Indemnity",
    issuer: "Sanlam — Cover to KES 2,000,000",
    year: "2024",
  },
];

export default function Certifications() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <p className="eyebrow mb-5">04 — Verified</p>
        <h2 className="mb-12 max-w-2xl font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.08] tracking-[-0.01em] text-ink">
          Licensed, insured and in good standing.
        </h2>
      </Reveal>

      <Reveal
        as="div"
        stagger={0.1}
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {certs.map((c, i) => (
          <button
            key={c.src}
            onClick={() => setActive(i)}
            className="group cursor-pointer text-left"
          >
            <div className="relative mb-3 aspect-[3/4] w-full overflow-hidden border border-line bg-white">
              <Image
                src={c.src}
                alt={`${c.title} — ${c.issuer}`}
                fill
                sizes="(max-width: 768px) 50vw, 22vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5" />
            </div>
            <h3 className="font-serif text-base leading-tight text-ink">
              {c.title}
            </h3>
            <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-concrete">
              {c.issuer} · {c.year}
            </p>
          </button>
        ))}
      </Reveal>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certs[active].title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-5 backdrop-blur-sm"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-5 top-5 cursor-pointer font-mono text-xs uppercase tracking-[0.2em] text-bone hover:text-clay"
          >
            Close ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl"
          >
            <Image
              src={certs[active].src}
              alt={`${certs[active].title} — ${certs[active].issuer}`}
              width={900}
              height={1200}
              className="max-h-[85vh] w-auto mx-auto bg-white object-contain"
            />
            <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.16em] text-concrete-2">
              {certs[active].title} · {certs[active].issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
