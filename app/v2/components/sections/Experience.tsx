import { education, experience, signals } from "../../data/experience";
import { PreviewLink } from "../PreviewLink";
import { SectionHeading } from "../SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        index="04"
        title="Experience"
        note="A short record of teams, systems, and the work that changed their trajectory."
      />

      <ol className="experience-list">
        {experience.map((role) => (
          <li className="role" key={`${role.company}-${role.start}`}>
            <div className="role__meta">
              <time className="role__period mono" dateTime={role.start}>
                {role.period}
              </time>
              {role.href ? (
                <PreviewLink className="role__company underline" href={role.href} preview={role.preview}>
                  {role.company} <span aria-hidden="true">&#8599;</span>
                </PreviewLink>
              ) : (
                <span className="role__company">{role.company}</span>
              )}
              {role.current ? <span className="role__current">Current</span> : null}
            </div>

            <div className="role__body">
              <h3>{role.role}</h3>
              <p className="role__summary">{role.summary}</p>
              <ul className="role__highlights">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{" " + highlight}</li>
                ))}
              </ul>
              <div className="tag-list" aria-label={`${role.company} stack`}>
                {role.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="credentials">
        <div>
          <p className="eyebrow">Education</p>
          <div className="credential-list">
            {education.map((item) => (
              <div className="credential" key={item.school}>
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.qualification}</p>
                </div>
                <div className="credential__meta">
                  <span className="mono">{item.period}</span>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Signals</p>
          <dl className="signal-list">
            {signals.map((signal) => (
              <div key={signal.label}>
                <dt>{signal.label}</dt>
                <dd>{signal.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
