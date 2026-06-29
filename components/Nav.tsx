"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          Jesse Karanga
          <span className="text-clay">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft transition-colors duration-200 hover:text-clay"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-[0.18em] text-clay transition-colors duration-200 hover:text-ink"
        >
          A1690 · M.AAK
        </a>
      </nav>
    </header>
  );
}
