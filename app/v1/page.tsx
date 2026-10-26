'use client'

import { IconMoon, IconSun } from "@tabler/icons-react";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { useState } from "react";
import ShimmerButton from "./components/ui/ShimmerButton";
import Social from "./components/Social";
import Projects from "./components/Projects";
import TechCloud from "./components/ui/cloud-wrapper";
import Education from "./components/ui/Education";
import WorkExperience from "./components/ui/Work-Experience";
import About from "./components/ui/About";
import Heading from "./components/ui/Heading";
import { CanvasRevealEffectDemo } from "./components/CanvasRevealEffectDemo";

export default function LegacyHome() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <div className={dark ? "v1-page dark" : "v1-page"}>
      <div className="mx-auto">
        <FloatingNavDemo />
        <HeroHighlightDemo>
          <div className="max-w-5xl overflow-x-hidden">
            <Heading />
            <About />
            <WorkExperience />
            <Education />
            <TechCloud externalTheme={dark ? "dark" : "light"} />
            <Projects />
            <CanvasRevealEffectDemo theme={dark} />
            <Social />
          </div>
        </HeroHighlightDemo>
        <ShimmerButton
          onClick={toggleTheme}
          className="fixed z-50 cursor-pointer top-5 right-5 p-2 rounded-full"
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {dark ? <IconSun color="white" /> : <IconMoon color="white" />}
        </ShimmerButton>
      </div>
    </div>
  );
}
