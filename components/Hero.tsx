"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { asset } from "../lib/asset";
import { SITE_URL } from "../app/data/projects";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const lines = gsap.utils.toArray<HTMLElement>(".hero-line span");

      if (prefersReduced) {
        gsap.set([".hero-line span", ".hero-fade", ".hero-media", ".clay-pop"], {
          opacity: 1,
          yPercent: 0,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(lines, { yPercent: 120 })
        .to(lines, { yPercent: 0, duration: 1.05, stagger: 0.1 })
        .from(
          ".clay-pop",
          { scaleY: 0, transformOrigin: "bottom", duration: 0.9, ease: "power3.out" },
          0.25
        )
        .from(
          ".hero-media",
          { opacity: 0, yPercent: 8, duration: 1.2, ease: "power2.out" },
          0.4
        )
        .from(
          ".hero-fade",
          { opacity: 0, y: 22, duration: 0.9, stagger: 0.1 },
          "-=0.8"
        );

      gsap.to(".hero-media-inner", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative mx-auto max-w-[1300px] px-5 pt-32 pb-12 sm:px-8 sm:pt-40 md:pb-20"
    >
      <div className="grid items-end gap-10 md:grid-cols-12">
        {/* Headline */}
        <div className="md:col-span-7">
          <p className="hero-fade eyebrow mb-7">
            Arch. Jesse Karanga · M.AAK · A1690
          </p>
          <h1 className="font-serif text-[clamp(2.7rem,9vw,7.2rem)] font-light leading-[0.92] tracking-[-0.025em] text-ink">
            {["Timeless", "spaces, built"].map((line, i) => (
              <span key={i} className="hero-line block overflow-hidden pb-[0.06em]">
                <span className="block">{line}</span>
              </span>
            ))}
            <span className="hero-line block overflow-hidden pb-[0.06em]">
              <span className="block">
                with <span className="italic text-clay">purpose</span>.
              </span>
            </span>
          </h1>

          <div className="hero-fade mt-8 max-w-md">
            <p className="text-base leading-relaxed text-ink-soft">
              Transforming visions into timeless spaces — where creativity meets
              precision. A registered architect designing sustainable homes,
              commercial and civic buildings across Kenya.
            </p>
          </div>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="cursor-pointer rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-bone transition-colors duration-200 hover:bg-clay"
            >
              View the work
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:bg-ink hover:text-bone"
            >
              Studio site ↗
            </a>
          </div>
        </div>

        {/* Portrait with clay block pop */}
        <div className="md:col-span-5">
          <div className="relative ml-auto w-full max-w-sm">
            <div className="clay-pop clay-block absolute -bottom-4 -right-4 h-full w-full" />
            <div className="hero-media group relative aspect-[4/5] w-full overflow-hidden bg-sky">
              <div className="hero-media-inner absolute inset-0">
                <Image
                  src={asset("/real/team-f1.jpeg")}
                  alt="Arch. Jesse Karanga Kimani"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 36vw"
                  className="photo object-cover object-top"
                />
              </div>
              <span className="absolute bottom-4 left-4 z-10 bg-ink/70 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone backdrop-blur-sm">
                Jesse Karanga · Principal Architect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
