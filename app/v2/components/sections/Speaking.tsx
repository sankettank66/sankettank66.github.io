import { community, talks } from "../../data/speaking";
import { SectionHeading } from "../SectionHeading";

export function Speaking() {
  return (
    <section id="speaking" className="section" aria-labelledby="speaking-title">
      <SectionHeading
        id="speaking-title"
        index="03"
        title="Speaking"
        note="Workshops and talks on agentic tooling, MCP, and the performance of the web."
      />

      <div className="talk-list">
        {talks.map((talk) => (
          <article className="talk" key={talk.index}>
            <div className="talk__meta">
              <span className="talk__index mono">{talk.index}</span>
              <time className="talk__date mono" dateTime={talk.dateTime}>
                {talk.date}
              </time>
              <span className="talk__format">{talk.format}</span>
            </div>

            <div className="talk__body">
              <p className="eyebrow">{talk.event}</p>
              <h3>{talk.title}</h3>
              <p className="talk__description">{talk.description}</p>
              {talk.audience || talk.location ? (
                <p className="talk__context">
                  {[talk.audience, talk.location].filter(Boolean).join(" · ")}
                </p>
              ) : null}
            </div>

            <div className="talk__links">
              {talk.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="community">
        <div>
          <p className="eyebrow">Community</p>
          {community.map((item) => (
            <div className="community__item" key={item.event}>
              <div>
                <h3>{item.event}</h3>
                <p>{item.role}</p>
              </div>
              <div className="community__meta">
                <span>{item.date}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
        <a
          className="text-link"
          href="https://sessionize.com/sankettank66"
          target="_blank"
          rel="noreferrer"
        >
          Full speaker profile on Sessionize <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
