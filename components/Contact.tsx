import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-bone-2/40"
    >
      <div className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow mb-7">05 — Get in touch</p>
          <h2 className="max-w-4xl font-serif text-[clamp(2.2rem,7vw,5.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
            Let&apos;s build something{" "}
            <span className="italic text-clay">lasting</span>.
          </h2>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 md:grid-cols-4"
        >
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-concrete">
              Email
            </p>
            <a
              href="mailto:jessekaranga@gmail.com"
              className="text-ink transition-colors hover:text-clay"
            >
              jessekaranga@gmail.com
            </a>
          </div>
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-concrete">
              Telephone
            </p>
            <a
              href="tel:+254703537106"
              className="block text-ink transition-colors hover:text-clay"
            >
              +254 703 537 106
            </a>
            <a
              href="tel:+254736271526"
              className="block text-ink transition-colors hover:text-clay"
            >
              +254 736 271 526
            </a>
          </div>
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-concrete">
              Studio
            </p>
            <p className="text-ink">Muthaiga, Nairobi</p>
            <p className="text-ink-soft">P.O. Box 64065-00620</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-concrete">
              Registration
            </p>
            <p className="text-ink">Reg. No. A1690</p>
            <p className="text-ink-soft">Member, AAK</p>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-serif text-xl text-ink">
            Jesse Karanga Kimani<span className="text-clay">.</span>
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-concrete">
            © {new Date().getFullYear()} · Registered Architect · Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
