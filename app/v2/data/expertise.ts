export type ExpertiseGroup = {
  label: string;
  index: string;
  items: string[];
};

export const expertise: ExpertiseGroup[] = [
  {
    label: "Interface",
    index: "01",
    items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Core Web Vitals"],
  },
  {
    label: "Services",
    index: "02",
    items: ["Node.js", "NestJS", "Express.js", "Python", "PostgreSQL", "Elasticsearch", "MongoDB"],
  },
  {
    label: "Platform",
    index: "03",
    items: ["Docker", "Kubernetes", "Micro-frontends", "Centrifugo", "WebSockets", "MCP"],
  },
  {
    label: "Practice",
    index: "04",
    items: ["Performance engineering", "Architecture", "Developer experience", "AI-assisted development"],
  },
];

export type ArchitectureLayer = {
  id: string;
  label: string;
  detail: string;
  meta: string;
};

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "shell",
    label: "Shell",
    detail: "Angular shell, routing, authentication, and the shared design system.",
    meta: "ENTRY / 01",
  },
  {
    id: "microfrontends",
    label: "25+ Micro-frontends",
    detail: "Independently owned surfaces with explicit boundaries and integration contracts.",
    meta: "SURFACES / 02",
  },
  {
    id: "services",
    label: "Services",
    detail: "NestJS and Express services, Elasticsearch, and an MCP integration layer.",
    meta: "LOGIC / 03",
  },
  {
    id: "realtime",
    label: "Realtime + Data",
    detail: "Centrifugo, WebSockets, and PostgreSQL moving state without breaking the interface.",
    meta: "STATE / 04",
  },
];
