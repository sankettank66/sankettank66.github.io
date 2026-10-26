import { architectureLayers, expertise } from "../../data/expertise";
import { ArchitectureScene } from "../ArchitectureScene";
import { SectionHeading } from "../SectionHeading";

export function Systems() {
  return (
    <section id="systems" className="section" aria-labelledby="systems-title">
      <SectionHeading
        id="systems-title"
        index="06"
        title="Systems"
        note="The parts of the stack I reach for — and the architecture I use to keep them legible."
      />

      <div className="systems-grid">
        <div className="expertise-list">
          {expertise.map((group) => (
            <div className="expertise" key={group.label}>
              <div className="expertise__head">
                <span className="mono">{group.index}</span>
                <h3>{group.label}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ArchitectureScene layers={architectureLayers} />
      </div>
    </section>
  );
}
