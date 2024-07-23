'use client'
import { IconMoon, IconSun } from "@tabler/icons-react";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { useEffect, useState } from "react";
import ShimmerButton from "./components/ui/ShimmerButton";
import Social from "./components/Social";
import Projects from "./components/Projects";
import TechCloud from "./components/ui/cloud-wrapper";
import Education from "./components/ui/Education";
import WorkExperience from "./components/ui/Work-Experience";
import About from "./components/ui/About";
import Heading from "./components/ui/Heading";
import { CanvasRevealEffectDemo } from "./components/CanvasRevealEffectDemo";
export default function Home() {
  const [dark, setDark] = useState(window.localStorage.getItem('dark') === 'true' || false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#FFFFFF';
    }
  }, [dark]);

  const toggleTheme = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    window.localStorage.setItem('dark', JSON.stringify(newDarkMode));
  };


  return (
    <>
      <div className="mx-auto">
        <FloatingNavDemo />
        <HeroHighlightDemo >
          <div className="max-w-5xl overflow-x-hidden">
            <Heading />
            <About />
            <WorkExperience />
            <Education />
            <TechCloud />
            <Projects />
            <CanvasRevealEffectDemo theme={dark} />
            <Social />
          </div>
        </HeroHighlightDemo>
        <ShimmerButton onClick={toggleTheme} className="fixed z-50 cursor-pointer top-5 right-5 p-2 rounded-full">{dark ? (<IconSun color="white" />) : (<IconMoon color="white" />)}</ShimmerButton>
        {/* <SparklesPreview /> */}
        {/* <TracingBeamDemo /> */}
      </div>
    </>
  );
}