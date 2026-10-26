"use client";

import Image from "next/image";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

const PREVIEW_WIDTH = 320;
const PREVIEW_HEIGHT = 220;
const VIEWPORT_GUTTER = 12;

type PreviewLinkProps = {
  href: string;
  preview: string;
  className?: string;
  children: ReactNode;
};

export function PreviewLink({ href, preview, className, children }: PreviewLinkProps) {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const frame = useRef<number | null>(null);
  const point = useRef({ x: 0, y: 0 });

  const spring = reducedMotion
    ? { stiffness: 1000, damping: 100, mass: 0.1 }
    : { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const paint = () => {
    frame.current = null;

    if (typeof window === "undefined") return;

    const maxX = Math.max(VIEWPORT_GUTTER, window.innerWidth - PREVIEW_WIDTH - VIEWPORT_GUTTER);
    const maxY = Math.max(VIEWPORT_GUTTER, window.innerHeight - PREVIEW_HEIGHT - VIEWPORT_GUTTER);
    const nextX = Math.min(Math.max(point.current.x - PREVIEW_WIDTH / 2, VIEWPORT_GUTTER), maxX);
    const nextY = Math.min(Math.max(point.current.y - PREVIEW_HEIGHT / 2, VIEWPORT_GUTTER), maxY);

    x.set(nextX);
    y.set(nextY);
  };

  const schedulePosition = (clientX: number, clientY: number) => {
    point.current = { x: clientX, y: clientY };
    if (frame.current === null) {
      frame.current = requestAnimationFrame(paint);
    }
  };

  const show = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    schedulePosition(event.clientX, event.clientY);
    setVisible(true);
  };

  const move = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    schedulePosition(event.clientX, event.clientY);
  };

  const hide = () => setVisible(false);

  useEffect(() => {
    const hidePreview = () => setVisible(false);
    window.addEventListener("scroll", hidePreview, { passive: true });
    window.addEventListener("blur", hidePreview);

    return () => {
      window.removeEventListener("scroll", hidePreview);
      window.removeEventListener("blur", hidePreview);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
        onPointerEnter={show}
        onPointerMove={move}
        onPointerLeave={hide}
        onPointerCancel={hide}
      >
        {children}
      </a>
      <motion.div
        className={`preview-card${visible ? " is-visible" : ""}`}
        style={{ x, y }}
        aria-hidden="true"
      >
        <Image src={preview} alt="" fill sizes="320px" loading="lazy" />
      </motion.div>
    </>
  );
}
