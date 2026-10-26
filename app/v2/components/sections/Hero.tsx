"use client";

import { useSyncExternalStore } from "react";
import { VFXProvider, VFXSpan } from "@vfx-js/react";
import { useTheme } from "next-themes";
import { profile, stats } from "../../data/profile";

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  const renderTitle = (text: string) =>
    isDark ? (
      <VFXSpan shader="rgbShift" style={{ color: "#fff" }}>
        {text}
      </VFXSpan>
    ) : (
      <span style={{ color: "#000" }}>{text}</span>
    );

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
            <span>{renderTitle("Sanket")}</span>
            <span>
              {renderTitle("Tank")}
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
