import Image from "next/image";
import Reveal from "./Reveal";
import { asset } from "../lib/asset";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1300px] px-5 py-24 sm:px-8 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        {/* Studio image */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="group relative aspect-[4/5] w-full overflow-hidden bg-bone-2">
              <Image
                src={asset("/real/desk2.jpg")}
                alt="Jesse's architecture studio — drafting board and drawings"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="photo object-cover"
              />
              <span className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone drop-shadow">
                The studio · Ruiru
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <Reveal>
            <p className="eyebrow mb-6">01 — The Approach</p>
            <h2 className="font-serif text-[clamp(1.7rem,3.6vw,3rem)] font-light leading-[1.15] tracking-[-0.01em] text-ink">
              Great design is more than aesthetics — it&apos;s{" "}
              <span className="italic text-clay">harmony</span> between form and
              function. Every structure tells a story, and I craft narratives
              that blend functionality with timeless elegance.
            </h2>
          </Reveal>

          <Reveal as="div" stagger={0.12} className="mt-10 grid gap-px sm:grid-cols-3">
            {[
              {
                t: "Space, light & material",
                d: "Designs resolved around how light moves and how materials meet.",
              },
              {
                t: "Client-centred",
                d: "Concepts shaped to each client, from inception through completion.",
              },
              {
                t: "Built to endure",
                d: "Sustainable solutions and current technology, made to last.",
              },
            ].map((item) => (
              <div key={item.t} className="border-t-2 border-ink pt-5">
                <h3 className="mb-2 font-serif text-lg text-ink">{item.t}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
