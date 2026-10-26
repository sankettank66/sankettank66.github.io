import { SectionHeading } from "../SectionHeading";
import { ProjectLedger } from "../ProjectLedger";

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        index="05"
        title="Selected work"
        note="Products where interface decisions, system constraints, and measurable outcomes meet."
      />
      <ProjectLedger />
      <p className="section-footnote">
        Built and maintained independently unless noted. Every project links to its source or live surface.
      </p>
    </section>
  );
}
