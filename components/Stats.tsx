"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 12, suffix: "+", label: "Years in practice" },
  { value: 13, suffix: "", label: "Projects delivered" },
  { value: 2, prefix: "KES ", suffix: "B+", label: "In built value" },
  { value: 3, suffix: "", label: "Firms · counties statewide" },
];

export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const nums = gsap.utils.toArray<HTMLElement>(".stat-num");
      nums.forEach((el) => {
        const end = Number(el.dataset.value);
        if (prefersReduced) {
          el.textContent = String(end);
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="border-y border-line bg-bone-2/50"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-2 py-10 md:py-14"
          >
            <div className="flex items-baseline font-serif text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-none text-ink">
              {s.prefix && (
                <span className="mr-1 text-[0.45em] text-concrete">
                  {s.prefix}
                </span>
              )}
              <span className="stat-num tabular-nums" data-value={s.value}>
                0
              </span>
              <span className="text-clay">{s.suffix}</span>
            </div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-concrete">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
