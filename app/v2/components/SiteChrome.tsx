import { navItems, profile, socials } from "../data/profile";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function SiteChrome() {
  return (
    <>
      <header className="mobile-bar">
        <a className="mobile-brand" href="#top">
          <span className="brand__mark">{profile.initials}</span>
          <span className="mobile-brand__copy">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </span>
          <span className="visually-hidden">Back to top</span>
        </a>
        <div className="mobile-bar__actions">
          <ThemeToggle />
          <MobileNav />
        </div>
      </header>

      <aside className="rail" aria-label="Portfolio index">
        <div className="rail__head">
          <a className="brand" href="#top">
            <span className="brand__mark">{profile.initials}</span>
            <span className="brand__copy">
              <span className="brand__name">{profile.name}</span>
              <span className="brand__role">{profile.role}</span>
            </span>
            <span className="visually-hidden">Back to top</span>
          </a>

          <p className="rail__status">
            <span className="status-dot" aria-hidden="true" />
            Currently building at {profile.currentCompany}
          </p>
        </div>

        <nav className="rail-nav" aria-label="Sections">
          <p className="eyebrow">Index</p>
          <ol>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span className="mono">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="rail__foot">
          <div className="rail__meta">
            <span>Based in</span>
            <span>{profile.location}</span>
          </div>

          <ThemeToggle />

          <div className="rail__socials" aria-label="Professional links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{social.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <p className="rail__copyright">© 2026 / v2</p>
        </div>
      </aside>
    </>
  );
}
