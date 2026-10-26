"use client";

import { HeroHighlight } from "./ui/hero-highlight";
export function HeroHighlightDemo({children}:{children: React.ReactNode}) {
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
