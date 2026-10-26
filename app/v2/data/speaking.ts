export type TalkLink = {
  label: string;
  href: string;
};

export type Talk = {
  index: string;
  date: string;
  dateTime: string;
  format: string;
  event: string;
  title: string;
  description: string;
  audience?: string;
  location?: string;
  links: TalkLink[];
};

export const talks: Talk[] = [
  {
    index: "01",
    date: "21 Jun 2025",
    dateTime: "2025-06-21",
    format: "Workshop",
    event: "Build Your Own Agentic AI · Lucent Innovation",
    title: "Hands-On Workshop: Building an MCP Server with GitHub Copilot & Google ADK",
    description:
      "A hands-on build session covering MCP server fundamentals, GitHub Copilot, Google ADK, and the practical wiring needed to get an agentic tool working end to end.",
    links: [
      {
        label: "Sessionize",
        href: "https://sessionize.com/s/sankettank66/hands-on-workshop-building-an-mcp-server-with-gith/149042",
      },
    ],
  },
  {
    index: "02",
    date: "30 Aug 2025",
    dateTime: "2025-08-30",
    format: "Talk",
    event: "AI × DevOps × Web Meetup · Dwij Infotech",
    title: "Agentic Dev with Refact AI: MCP & Vibe Coding",
    description:
      "A practical look at agentic development workflows with Refact AI, MCP, and vibe coding — where the leverage is real, and where the guardrails still matter.",
    links: [
      {
        label: "Sessionize",
        href: "https://sessionize.com/s/sankettank66/agentic-dev-with-refact-ai-mcp-vibe-coding/149043",
      },
    ],
  },
  {
    index: "03",
    date: "20 Sep 2025",
    dateTime: "2025-09-20",
    format: "Talk",
    event: "JS Gujarat · Ahmedabad Management Association",
    title: "Improve Your Web Performance Using Core Web Vitals (LCP, CLS & INP)",
    description:
      "A field-focused walkthrough of Core Web Vitals: what each metric actually measures, how to diagnose the causes, and which fixes move the needle for real users.",
    audience: "120+ attendees",
    location: "Ahmedabad, India",
    links: [
      {
        label: "Sessionize",
        href: "https://sessionize.com/s/sankettank66/improve-your-web-performance-using-core-web-vitals/149045",
      },
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/sankettank66_jsgujarat-javascriptcommunity-webperformance-activity-7372866954472153089-MKOJ",
      },
      {
        label: "Event",
        href: "https://luma.com/vrclvpyv",
      },
    ],
  },
];

export type CommunityEntry = {
  event: string;
  role: string;
  date: string;
  dateTime: string;
  location?: string;
  href?: string;
};

export const community: CommunityEntry[] = [
  {
    event: "Open Source Day 2025",
    role: "Social Media Team · Volunteer",
    date: "05 Oct 2025",
    dateTime: "2025-10-05",
    location: "Silver Oak University, Ahmedabad",
    href: "https://osd.opensourceweekend.org/2025/",
  },
  {
    event: "Cloud Community Days 2025",
    role: "Social Media Team Member",
    date: "05 Jul 2025",
    dateTime: "2025-07-05",
    location: "Town Hall, Gandhinagar",
    href: "https://gdg.community.dev/events/details/google-gdg-cloud-gandhinagar-presents-google-cloud-community-day-gandhinagar-2025/",
  },
  {
    event: "Autonomous Hacks 26",
    role: "Hackathon Crew Member",
    date: "10 Jan 2026",
    dateTime: "2026-01-10",
    location: "Silver Oak University, Ahmedabad",
    href: "https://gdg.community.dev/events/details/google-gdg-gandhinagar-presents-autonomoushacks-26-offline-finale/cohost-gdg-on-campus-silver-oak-university-ahmedabad-india/",
  },
  {
    event: "Hack This Fall Community 2025",
    role: "Hackathon Mentor",
    date: "09 Nov 2025",
    dateTime: "2025-11-09",
    location: "MobileFirst Applications, Ahmedabad",
    href: "https://luma.com/hackthisfall-events?period=past&e=evt-3ZhfTAGQypQKc5r",
  },
  {
    event: "DevFest 2025",
    role: "Social Media Team Member",
    date: "02 Nov 2025",
    dateTime: "2025-11-02",
    location: "Narayani Heights, Gandhinagar",
    href: "https://gdg.community.dev/events/details/google-gdg-gandhinagar-presents-devfest-gandhinagar-1/cohost-gdg-gandhinagar/",
  },
  {
    event: "DevFest 2026",
    role: "AV Team · Audio Visual & Sponsorship",
    date: "01 Nov 2026",
    dateTime: "2026-11-01",
    location: "Helipad Exhibition Center, Gandhinagar",
    href: "https://gdg.community.dev/events/details/google-gdg-gandhinagar-presents-devfest-gandhinagar-2026/cohost-gdg-gandhinagar/",
  },
].sort((a, b) => b.dateTime.localeCompare(a.dateTime));
