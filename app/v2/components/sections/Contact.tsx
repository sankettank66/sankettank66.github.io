import { profile, socials } from "../../data/profile";
import { CopyEmail } from "../CopyEmail";
import { SectionHeading } from "../SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        index="07"
        title="Contact"
        note="For roles, collaborations, or speaking. Email is the fastest way to reach me."
      />

      <div className="contact">
        <div className="contact__primary">
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
            <span aria-hidden="true">↗</span>
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <div className="contact__grid">
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="social-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <span>{social.label}</span>
                    <span className="social-list__handle">{social.handle}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact__note">
            <p className="eyebrow">A good starting point</p>
            <p>
              Tell me what you&apos;re building, where the system is getting in
              the way, or what you want to make faster. I&apos;ll reply with a
              clear next step.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div>
          <span className="footer__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <p>
            Designed and built by {profile.name}. Next.js, React Three Fiber,
            and a lot of CSS.
          </p>
        </div>
        <div className="footer__meta">
          <span className="mono">© 2026 / v2</span>
          <a href="/v1/">View archived v1 portfolio</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}
