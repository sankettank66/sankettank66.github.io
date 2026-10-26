import { profile, socials } from "./data/profile";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import { ExperienceSection } from "./components/sections/Experience";
import { Speaking } from "./components/sections/Speaking";
import { Systems } from "./components/sections/Systems";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://sankettank.me",
  email: `mailto:${profile.email}`,
  jobTitle: profile.currentRole,
  description: profile.shortBio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gandhinagar",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.currentCompany,
    url: "https://www.adit.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "V.V.P. Engineering College",
  },
  sameAs: socials.map((social) => social.href),
  knowsAbout: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Node.js",
    "Micro-frontends",
    "Web Performance",
    "Core Web Vitals",
    "MCP",
  ],
};

export default function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <Speaking />
      <Work />
      <Systems />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
