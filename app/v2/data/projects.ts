export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: "lexi" | "localmind" | "nse-radar" | "watchshare";
  index: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  role: string;
  context: string;
  evidence: string;
  bullets: string[];
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "lexi",
    index: "01",
    title: "Lexi",
    year: "2026",
    category: "AI tooling / Browser extension",
    summary:
      "A browser-native AI workspace that keeps prompts, files, and model choice close to the page.",
    role: "Product engineering",
    context: "Manifest V3 extension",
    evidence: "5 model providers",
    bullets: [
      "Built a Manifest V3 extension with a Shadow DOM interface that stays isolated from host-page styles.",
      "Added a five-provider model layer covering OpenAI, Anthropic, Gemini, Groq, and Ollama, with streaming responses and local key storage.",
      "Designed the extension around user-owned keys and zero server-side prompt storage.",
    ],
    stack: ["TypeScript", "React", "Manifest V3", "Shadow DOM", "LLM APIs"],
    links: [{ label: "GitHub", href: "https://github.com/sankettank66/Lexi" }],
  },
  {
    id: "localmind",
    index: "02",
    title: "localmind",
    year: "2026",
    category: "Developer tooling / Local AI",
    summary:
      "A zero-dependency Go CLI for running multiple Ollama models in parallel and comparing their output.",
    role: "Systems tooling",
    context: "Local-first CLI",
    evidence: "Parallel model runs",
    bullets: [
      "Built a concurrent runner that streams responses from multiple local models and reports time-to-first-token, load time, and total time.",
      "Kept the binary dependency-free using Go's standard library and a focused terminal interface.",
      "Focused on repeatable local benchmarking for model choice and prompt iteration.",
    ],
    stack: ["Go", "Ollama", "Concurrency", "CLI"],
    links: [{ label: "GitHub", href: "https://github.com/sankettank66/localmind" }],
  },
  {
    id: "nse-radar",
    index: "03",
    title: "NSE Radar",
    year: "2026",
    category: "Real-time data / Market intelligence",
    summary:
      "A live NSE options dashboard that makes open-interest shifts readable during market hours.",
    role: "Real-time frontend",
    context: "Live product",
    evidence: "200+ OI entries",
    bullets: [
      "Built the dashboard with Next.js 16 and TypeScript, using a WebSocket-backed NSE proxy for live option-chain data.",
      "Refreshes open-interest data every 60 seconds and surfaces 200+ OI entries without blocking the interface.",
      "Kept the UI dense but legible with sortable strikes, change markers, and a focused mobile layout.",
    ],
    stack: ["Next.js 16", "TypeScript", "WebSockets", "NSE API"],
    links: [
      { label: "Live site", href: "https://nse-radar.vercel.app" },
      { label: "GitHub", href: "https://github.com/sankettank66/nse-radar" },
    ],
  },
  {
    id: "watchshare",
    index: "04",
    title: "WatchShare",
    year: "2025",
    category: "Real-time collaboration / WebRTC",
    summary:
      "A peer-to-peer screening room for watching together without uploading media to a server.",
    role: "Real-time collaboration",
    context: "Live product",
    evidence: "Peer-to-peer media",
    bullets: [
      "Implemented peer-to-peer screen, audio, and video sharing with PeerJS and WebRTC.",
      "Added room creation, join flows, and in-call controls for a lightweight watch-party experience.",
      "Designed the product around browser-native media with no central video storage.",
    ],
    stack: ["Next.js", "TypeScript", "WebRTC", "PeerJS"],
    links: [
      { label: "Live site", href: "https://watch-share.vercel.app" },
      { label: "GitHub", href: "https://github.com/sankettank66/WatchShare" },
    ],
  },
];
