"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { useTheme } from "next-themes";
import type { ArchitectureLayer } from "../data/expertise";

const ArchitectureCanvas = dynamic(() => import("./ArchitectureCanvas"), {
  ssr: false,
  loading: () => <span className="stack-loading" aria-hidden="true" />,
});

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

type StackMode = "webgl" | "reduced" | "constrained" | "no-webgl";

let cachedMode: StackMode | null = null;

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function detectMode(): StackMode {
  if (cachedMode) return cachedMode;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cachedMode = "reduced";
    return cachedMode;
  }

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  if (
    connection?.saveData ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  ) {
    cachedMode = "constrained";
    return cachedMode;
  }

  if (!supportsWebGL()) {
    cachedMode = "no-webgl";
    return cachedMode;
  }

  cachedMode = "webgl";
  return cachedMode;
}

export function ArchitectureScene({ layers }: { layers: ArchitectureLayer[] }) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const [forceLoad, setForceLoad] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const mode = mounted ? detectMode() : "loading";
  const shouldLoad =
    mounted &&
    nearViewport &&
    mode !== "no-webgl" &&
    (mode === "webgl" || forceLoad);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !mounted) return undefined;

    if (!("IntersectionObserver" in window)) {
      const frame = globalThis.requestAnimationFrame(() => setNearViewport(true));
      return () => globalThis.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px 0px" },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, [mounted]);

  const activeLayer = layers[active];

  const focusTab = (index: number) => {
    const next = (index + layers.length) % layers.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(layers.length - 1);
    }
  };

  const fallbackReason =
    mode === "reduced"
      ? "Reduced motion is on. The static stack is shown."
      : mode === "constrained"
        ? "A lighter stack is shown for this connection."
        : mode === "no-webgl"
          ? "WebGL is unavailable. The static stack is shown."
          : null;

  return (
    <div className="stack-shell">
      <div className="stack-stage" ref={stageRef}>
        <div className={`stack-poster${loaded ? " is-hidden" : ""}`} aria-hidden="true">
          {layers.map((layer, index) => (
            <span
              className="poster-layer"
              key={layer.id}
              style={{ "--layer-index": index } as React.CSSProperties}
            >
              <span>{layer.label}</span>
              <span className="mono">{layer.meta}</span>
            </span>
          ))}
          <span className="poster-spine" />
        </div>

        {shouldLoad ? (
          <div className="architecture-canvas" aria-hidden="true">
            <ArchitectureCanvas
              layers={layers}
              active={active}
              dark={isDark}
              onReady={() => setLoaded(true)}
            />
          </div>
        ) : null}

        <div className="stack-state">
          <span className="eyebrow">{shouldLoad ? "Live / WebGL" : "Static stack"}</span>
          {!shouldLoad ? (
            <p>
              {fallbackReason ??
                (mode === "loading"
                  ? "Checking this browser's graphics support."
                  : "The interactive stack loads as this section comes into view.")}
            </p>
          ) : null}
          {!shouldLoad && (mode === "reduced" || mode === "constrained") ? (
            <button
              type="button"
              className="stack-enable"
              onClick={() => {
                setForceLoad(true);
                setNearViewport(true);
              }}
            >
              Load 3D view <span aria-hidden="true">↗</span>
            </button>
          ) : null}
        </div>

        <span className="stack-corner stack-corner--tl" aria-hidden="true" />
        <span className="stack-corner stack-corner--br" aria-hidden="true" />
      </div>

      <div
        className="stack-controls"
        role="tablist"
        aria-label="Architecture layers"
        aria-orientation="horizontal"
      >
        {layers.map((layer, index) => (
          <button
            key={layer.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`stack-tab-${layer.id}`}
            aria-selected={active === index}
            aria-controls="stack-detail"
            tabIndex={active === index ? 0 : -1}
            className="stack-tab"
            onClick={() => setActive(index)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            <span className="mono">{layer.meta.split(" / ")[0]}</span>
            <span>{layer.label}</span>
          </button>
        ))}
      </div>

      <div
        className="stack-detail"
        id="stack-detail"
        role="tabpanel"
        aria-labelledby={`stack-tab-${activeLayer.id}`}
        aria-live="polite"
      >
        <div>
          <span className="eyebrow">{activeLayer.meta}</span>
          <h3>{activeLayer.label}</h3>
        </div>
        <p>{activeLayer.detail}</p>
      </div>
    </div>
  );
}
