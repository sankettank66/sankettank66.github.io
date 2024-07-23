"use client";

import Projects from "./Projects";
import Social from "./Social";
import About from "./ui/About";
import Education from "./ui/Education";
import Heading from "./ui/Heading";
import WorkExperience from "./ui/Work-Experience";
import TechCloud from "./ui/cloud-wrapper";
import { HeroHighlight } from "./ui/hero-highlight";
export function HeroHighlightDemo({children}) {
    const words = [
        "Full Stack Developer",
        "Frontend Developer",
        "React Enthusiast",
        "Problem Solver"
    ];
    return (
        <>
            <HeroHighlight>
               {children}
            </HeroHighlight>
        </>
    );
}
