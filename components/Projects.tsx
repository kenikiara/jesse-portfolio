"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, categories, type Category } from "../app/data/projects";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const root = useRef<HTMLElement>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        gsap.set(".project-card", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".project-grid", start: "top 80%" },
        }
      );
    },
    { scope: root }
  );

  // Re-fade cards when the filter changes
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.05 }
      );
    },
    { dependencies: [filter], scope: root }
  );

  return (
    <section
      id="work"
      ref={root}
      className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-36"
    >
      <div className="mb-12 flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-5">02 — Selected Work</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.02] tracking-[-0.01em] text-ink">
            Projects across <br className="hidden sm:block" />
            <span className="italic text-clay">Kenya</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`cursor-pointer rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-200 ${
                filter === c
                  ? "border-ink bg-ink text-bone"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.id} className="project-card group">
            <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden bg-bone-2">
              <Image
                src={asset(`/projects/${p.image}.jpg`)}
                alt={`${p.title} — ${p.location}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="duotone object-cover"
              />
              <span className="absolute left-3 top-3 bg-bone/90 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink">
                {p.category}
              </span>
              {p.cost && (
                <span className="absolute bottom-3 right-3 bg-clay px-2.5 py-1 font-mono text-[0.66rem] font-bold tracking-wide text-bone">
                  {p.cost}
                </span>
              )}
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-xs text-clay">{p.index}</span>
              <div className="flex-1">
                <h3 className="font-serif text-xl leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{p.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-concrete">
                  {p.scope}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-concrete">
                  <span className="text-ink-soft">{p.role}</span>
                  <span className="text-line">·</span>
                  <span>{p.firm}</span>
                  <span className="text-line">·</span>
                  <span>{p.period}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
