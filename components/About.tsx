import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">01 — Career Statement</p>
            <p className="font-mono text-sm leading-relaxed text-concrete">
              A decade of practice across private commissions, contracting and
              county government work.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.9rem)] font-light leading-[1.18] tracking-[-0.01em] text-ink">
              As an architect, I&apos;m dedicated to designing and delivering{" "}
              <span className="italic text-clay">exceptional buildings</span> —
              understanding each client&apos;s unique needs to create designs
              that exceed expectations. My passion lies in{" "}
              <span className="italic">sustainable architecture</span> that
              positively impacts people&apos;s lives and the environment.
            </h2>
          </Reveal>

          <Reveal
            as="div"
            stagger={0.12}
            className="mt-12 grid gap-px border-t border-line sm:grid-cols-3"
          >
            {[
              {
                t: "Conception to Completion",
                d: "Involved in every phase — concept, documentation and site supervision.",
              },
              {
                t: "Sustainable by Default",
                d: "Buildings that are aesthetically resolved and environmentally responsible.",
              },
              {
                t: "Client-Centred",
                d: "Designs shaped around how people actually live and work.",
              },
            ].map((item) => (
              <div key={item.t} className="border-t border-line pt-5 sm:border-t-0 sm:pt-0">
                <h3 className="mb-2 font-serif text-lg text-ink">{item.t}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
