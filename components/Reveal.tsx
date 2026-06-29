"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  /** When set, animates direct children with this stagger instead of the wrapper */
  stagger?: number;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 44,
  delay = 0,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        gsap.set(stagger ? el.children : el, { opacity: 1, y: 0 });
        return;
      }

      const targets = stagger ? Array.from(el.children) : el;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  // No inline opacity:0 — GSAP sets the hidden state in a layout effect before
  // paint, so no-JS visitors and crawlers still see the content.
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
