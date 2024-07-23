"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconBook, IconHome, IconMessage, IconUser,IconBriefcase, IconDevices2, IconComponents, IconStars } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Work Experience",
            link: "#work",
            icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Education",
            link: "#education",
            icon: (
                <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <IconDevices2 className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Projects",
            link: "#projects",
            icon: (
                <IconComponents className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Achievements",
            link: "#achievements",
            icon: (
                <IconStars className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
