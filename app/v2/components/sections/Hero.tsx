'use client';
import { VFXProvider, VFXSpan } from "@vfx-js/react";
import { profile, stats } from "../../data/profile";
export function Hero() {
  return (
    <VFXProvider>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero__meta">
          <span>Portfolio / 2026</span>
          <span className="hero__signal">
            <span aria-hidden="true" />
            Full-stack engineer
          </span>
          <span>Gandhinagar, IN</span>
        </div>

        <div className="hero__title-wrap">
          <h1 id="hero-title" className="hero__title">
            <span>
              <VFXSpan shader="rgbShift">Sanket</VFXSpan>
            </span>
            <span>
              <VFXSpan shader="rgbShift">Tank</VFXSpan>
              <span className="hero__period">.</span>
            </span>
          </h1>
          <div className="hero__title-note" aria-hidden="true">
            <span>Interface</span>
            <span>Infrastructure</span>
            <span>Impact</span>
          </div>
        </div>

        <div className="hero__lower">
          <p className="hero__lede">{profile.summary}</p>
          <div className="hero__actions">
            <a className="button button--accent" href="#work">
              Selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <dl className="hero__stats" aria-label="Selected signals">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </VFXProvider>
  );
}
