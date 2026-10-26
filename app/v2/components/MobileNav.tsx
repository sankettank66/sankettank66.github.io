"use client";

import { useRef } from "react";
import { navItems, socials } from "../data/profile";

export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        type="button"
        className="mobile-menu"
        aria-label="Index, open navigation"
        onClick={open}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span>Index</span>
      </button>

      <dialog
        ref={dialogRef}
        className="mobile-dialog"
        aria-label="Site navigation"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="mobile-dialog__panel">
          <div className="mobile-dialog__head">
            <span className="eyebrow">Index / 2026</span>
            <button type="button" className="mobile-dialog__close" onClick={close}>
              Close
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="mobile-dialog__nav" aria-label="Sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                <span className="mono">{item.index}</span>
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <div className="mobile-dialog__foot">
            <a href="#contact" onClick={close}>
              Start a conversation
            </a>
            <div className="mobile-dialog__socials">
              {socials.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
