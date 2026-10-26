import Image from "next/image";
import portrait from "../../assets/sanket-portrait.webp";
import { principles, profile } from "../../data/profile";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        index="02"
        title="About"
        note="A builder with a bias for clarity, useful systems, and work that survives contact with real users."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lede">
            I&apos;m a full-stack engineer based in Gandhinagar, India. Over the
            last {profile.experience}, I&apos;ve worked on Shopify apps at Lucent
            Innovation, core logistics modules at Odoo India, and now the
            architecture and real-time systems behind a healthcare platform at
            Adit.
          </p>
          <p>
            My work tends to sit where interface and infrastructure meet:
            performance-critical frontends, micro-frontend boundaries,
            event-driven systems, and the developer workflows that keep large
            codebases moving. I care about the decisions that make software
            easier to understand six months later.
          </p>
          <p>
            Outside product work, I speak about agentic development, MCP, and
            web performance, and I stay close to developer communities including
            GDG, GDG Cloud, and CNCF.
          </p>

          <div className="about-facts">
            <div>
              <span className="eyebrow">Currently</span>
              <p>
                {profile.currentRole} at {profile.currentCompany}
              </p>
            </div>
            <div>
              <span className="eyebrow">Previously</span>
              <p>Odoo India · Lucent Innovation · WeTheDevelopers</p>
            </div>
            <div>
              <span className="eyebrow">Based in</span>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>

        <figure className="about-portrait">
          <Image
            src={portrait}
            alt="Sanket Tank, full-stack engineer"
            width={720}
            height={960}
            sizes="(max-width: 900px) 100vw, 34vw"
            loading="lazy"
          />
          <figcaption>
            <span className="mono">Subject / Sanket Tank</span>
            <span className="mono">Gandhinagar, IN</span>
          </figcaption>
        </figure>
      </div>

      <div className="principles">
        {principles.map((principle, index) => (
          <div className="principle" key={principle}>
            <span className="mono">0{index + 1}</span>
            <p>{principle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
