"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const titleLines = ["Architecture", "for people", "& planet"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const lines = gsap.utils.toArray<HTMLElement>(".hero-line span");

      if (prefersReduced) {
        gsap.set([".hero-line span", ".hero-fade", ".hero-media"], {
          opacity: 1,
          yPercent: 0,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(lines, { yPercent: 120 })
        .to(lines, {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
        })
        .from(
          ".hero-media",
          { opacity: 0, scale: 1.08, duration: 1.4, ease: "power2.out" },
          0.2
        )
        .from(
          ".hero-fade",
          { opacity: 0, y: 22, duration: 0.9, stagger: 0.12 },
          "-=0.7"
        );

      // subtle parallax drift on the portrait
      gsap.to(".hero-media-inner", {
        yPercent: 12,
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
      className="relative mx-auto max-w-[1300px] px-5 pt-32 pb-16 sm:px-8 sm:pt-40 md:pb-24"
    >
      <div className="grid items-end gap-10 md:grid-cols-12">
        {/* Headline */}
        <div className="md:col-span-7">
          <p className="hero-fade eyebrow mb-7">
            Registered Architect — Nairobi, Kenya
          </p>
          <h1 className="font-serif text-[clamp(2.6rem,9vw,7rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="hero-line block overflow-hidden pb-[0.08em]"
              >
                <span className="block">
                  {i === 2 ? (
                    <>
                      &amp; <span className="italic text-clay">planet</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero-fade mt-9 max-w-md">
            <p className="text-base leading-relaxed text-ink-soft">
              I&apos;m{" "}
              <span className="font-medium text-ink">Jesse Karanga Kimani</span>{" "}
              — designing sustainable residential, institutional and civic
              buildings that improve lives and tread lightly on the
              environment.
            </p>
          </div>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-concrete">
            <span>B.Arch · JKUAT</span>
            <span className="text-line">/</span>
            <span>Reg. No. A1690</span>
            <span className="text-line">/</span>
            <span>Member, AAK</span>
          </div>
        </div>

        {/* Portrait / hero image */}
        <div className="md:col-span-5">
          <div className="hero-media group relative aspect-[4/5] w-full overflow-hidden bg-bone-2">
            <div className="hero-media-inner absolute inset-0 scale-110">
              <Image
                src="/projects/hero.jpg"
                alt="Architectural detail — concrete and light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="duotone object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            <span className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone">
              Est. 2014 · A1690
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
