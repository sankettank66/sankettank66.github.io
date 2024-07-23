import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
    const words = [
        "Full Stack Developer",
        "Frontend Developer",
        "React Enthusiast",
        "Problem Solver"
    ];
    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Hello 👋<br />
                I am Sanket Tank a
                <FlipWords words={words} /> <br />
                Turning Concepts into Unforgettable Experiences
            </div>
        </div>
    );
}
