"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button
        type="button"
        className="copy-email"
        onClick={copy}
        aria-label={`Copy email address ${email}`}
      >
        {copied ? "Copied" : "Copy email"}
        <span className="copy-email__mark" aria-hidden="true">
          {copied ? "✓" : "⧉"}
        </span>
      </button>
      <span className="visually-hidden" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard." : ""}
      </span>
    </>
  );
}
