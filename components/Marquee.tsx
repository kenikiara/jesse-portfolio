const words = [
  "Sustainable Design",
  "Residential",
  "Institutional",
  "Civic",
  "Documentation",
  "Site Supervision",
  "ArchiCAD",
  "Concept Design",
];

export default function Marquee() {
  const strip = [...words, ...words];
  return (
    <section
      aria-hidden="true"
      className="border-y border-line bg-ink py-5 text-bone overflow-hidden"
    >
      <div className="flex w-max marquee-track">
        {strip.map((w, i) => (
          <span
            key={i}
            className="flex items-center font-serif text-2xl font-light italic md:text-3xl"
          >
            {w}
            <span className="mx-8 text-clay md:mx-12">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
}
