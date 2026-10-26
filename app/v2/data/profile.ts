export type NavItem = {
  label: string;
  href: string;
  index: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const profile = {
  name: "Sanket Tank",
  initials: "ST",
  role: "Full-stack engineer",
  location: "Gandhinagar, India",
  currentCompany: "Adit",
  currentRole: "Full Stack Engineer",
  email: "sankettank66@gmail.com",
  experience: "2.5+ years",
  summary:
    "I build fast, legible web systems. My work sits between interface, infrastructure, and the people who ship them — from performance-critical frontends to micro-frontend architecture and real-time product work.",
  shortBio:
    "Full-stack engineer with 2.5+ years of experience building web products across React, Next.js, Angular, Node.js, and real-time infrastructure.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about", index: "02" },
  { label: "Speaking", href: "#speaking", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Work", href: "#work", index: "05" },
  { label: "Systems", href: "#systems", index: "06" },
  { label: "Contact", href: "#contact", index: "07" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/sankettank66",
    handle: "@sankettank66",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sankettank66",
    handle: "in/sankettank66",
  },
  {
    label: "Sessionize",
    href: "https://sessionize.com/sankettank66",
    handle: "speaker profile",
  },
  {
    label: "X",
    href: "https://x.com/sankettank6685",
    handle: "@sankettank6685",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sankettank66",
    handle: "sankettank66",
  },
];

export const stats = [
  { value: "2.5+", label: "years building products" },
  { value: "25+", label: "micro-frontends architected" },
  { value: "6×", label: "LCP improvement shipped" },
  { value: "120+", label: "developers in a talk room" },
] as const;

export const principles = [
  "Performance is a product decision.",
  "Architecture should reduce coordination cost.",
  "The interface is the system made visible.",
] as const;
