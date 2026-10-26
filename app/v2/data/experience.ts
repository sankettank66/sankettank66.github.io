export type Experience = {
  company: string;
  role: string;
  period: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
  preview: string;
};

export const experience: Experience[] = [
  {
    company: "Adit",
    role: "Full Stack Engineer",
    period: "Jul 2026 — Present",
    start: "2026-07",
    end: "present",
    current: true,
    summary:
      "Working across product architecture, real-time infrastructure, and AI-assisted engineering practice for a healthcare SaaS platform.",
    highlights: [
      "Led the migration to the latest Angular version, modernizing the codebase around maintainability and application performance.",
      "Led the architectural decomposition of a large frontend monolith into 25+ micro-frontends, defining boundaries, integration patterns, and delivery practices.",
      "Migrated real-time messaging infrastructure from Nchan to Centrifugo to support scalable event-driven workflows.",
      "Designed an MCP architecture for integrating AI capabilities, tools, and workflows across products and engineering teams.",
      "Worked across Angular, NestJS, Express.js, Elasticsearch, Docker, Kubernetes, and Syncfusion; established organization-wide Claude Code practices for context, token, and cost efficiency.",
    ],
    stack: ["Angular", "NestJS", "Express.js", "Elasticsearch", "Docker", "Kubernetes", "MCP"],
    href: "https://www.adit.com",
    preview: "/previews/companies/adit.svg",
  },
  {
    company: "Odoo India",
    role: "Full Stack Developer",
    period: "Aug 2025 — Mar 2026",
    start: "2025-08",
    end: "2026-03",
    summary:
      "Built core logistics features across inventory, manufacturing, barcode, and shopfloor workflows.",
    highlights: [
      "Worked on core logistics modules including Inventory, MRP, Barcode, and Shopfloor, implementing scalable backend features with Odoo Python ORM, PostgreSQL, and XML-based UI components.",
      "Developed interactive frontend experiences with OWL JS and JavaScript, improving workflow efficiency across manufacturing and warehouse operations.",
    ],
    stack: ["Python", "Odoo ORM", "PostgreSQL", "OWL JS", "JavaScript", "XML"],
    href: "https://www.odoo.com",
    preview: "/previews/companies/odoo.svg",
  },
  {
    company: "Lucent Innovation",
    role: "Software Engineer",
    period: "Jan 2024 — Jul 2025",
    start: "2024-01",
    end: "2025-07",
    summary:
      "Shipped performance-focused React and Next.js products for Shopify merchants and the company platform.",
    highlights: [
      "Led the migration of legacy Shopify apps to a modern React architecture, achieving a 6x improvement in LCP (12s to under 2s).",
      "Earned the Built for Shopify badge for multiple apps by optimizing Core Web Vitals and meeting strict Shopify Partner standards.",
      "Built an AI-powered chatbot with React and Ant Design, integrating OpenAI and Google Gemini over WebSockets and reducing response time by 25%.",
      "Improved the company website with high-performance Next.js components, increasing speed, responsiveness, and UX quality by 30–35%.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Shopify", "OpenAI", "Gemini", "WebSockets"],
    href: "https://www.lucentinnovation.com",
    preview: "/previews/companies/lucent.svg",
  },
  {
    company: "WeTheDevelopers",
    role: "Front End Developer Intern",
    period: "Aug 2023 — Sep 2023",
    start: "2023-08",
    end: "2023-09",
    summary:
      "Helped build FinCatalyst, a real-time market data product, during an early-career internship.",
    highlights: [
      "Built FinCatalyst with React and real-time CoinCap data, integrating feeds from 50+ exchanges.",
      "Implemented authentication with Node.js, Express.js, and MongoDB.",
      "Styled the product with Tailwind CSS and structured the interface for fast market scanning.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "CoinCap"],
    href: "https://www.wethedevelopers.com",
    preview: "/previews/companies/wethedevelopers.svg",
  },
];

export const education = [
  {
    school: "V.V.P. Engineering College",
    qualification: "B.E. Information Technology",
    period: "2020 — 2024",
    detail: "8.0 CGPA · Rajkot",
  },
  {
    school: "Krishna Science School",
    qualification: "Higher Secondary",
    period: "2018 — 2020",
    detail: "80% · JEE 95 PR · GUJCET 98 PR",
  },
];

export const signals = [
  { label: "LeetCode", value: "Knight · max rating 1873" },
  { label: "HackerRank", value: "Java · 5 star" },
  { label: "Focus", value: "Performance, architecture, real-time" },
];
