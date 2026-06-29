"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.fromTo(
        ".featured-img",
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-[70vh] min-h-[480px] overflow-hidden bg-ink">
      <div className="featured-img absolute inset-0 scale-125">
        <Image
          src={asset("/real/render.jpg")}
          alt="From sketch to structure — an architectural render resolving into reality"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1300px] flex-col justify-end px-5 pb-14 sm:px-8">
        <p className="eyebrow mb-4 text-clay">Where lines become buildings</p>
        <h2 className="max-w-3xl font-serif text-[clamp(2rem,6vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-bone">
          From the first <span className="italic">sketch</span> to the final
          <span className="italic text-clay"> structure</span>.
        </h2>
      </div>
    </section>
  );
}
