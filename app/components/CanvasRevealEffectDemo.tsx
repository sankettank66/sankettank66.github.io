"use client";
import React from "react";

import { IconBrandHackerrank, IconBrandLeetcode, IconChessKing } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import BlurFade from "./ui/Blur-fade";
import SparklesText from "./ui/SparklesText";

export function CanvasRevealEffectDemo({ theme }: { theme: boolean }) {
    return (
        <>
            <div className="py-6" id="achievements">
                <BlurFade inView>
                    <SparklesText text='Achievements' sparklesCount={5} className='text-4xl text-center text-black dark:text-white py-6' />
                    <div className="flex flex-col lg:flex-row items-center justify-center bg-transparent w-full gap-4 mx-auto px-8">
                        <Card title="Leetcode: Knight with Highest Rating (1873)" icon={<IconBrandLeetcode size={200} color={'#F89F1B'} />}>
                            <CanvasRevealEffect
                                animationSpeed={5.1}
                                containerClassName="bg-[#F89F1B]"
                            />
                        </Card>
                        <Card title="HackerRank: Java 5-Star Achiever" icon={<IconBrandHackerrank size={200} color="#068932" />}>
                            <CanvasRevealEffect
                                animationSpeed={5.1}
                                containerClassName="bg-[#068932]"
                            // colors={[
                            //     [6, 137, 50],
                            //     [0, 77, 26],
                            // ]}
                            // dotSize={2}
                            />
                            {/* Radial gradient for the cute fade */}
                            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                        </Card>
                        <Card title="College Chess Champion (4th Rank)" icon={<IconChessKing size={200} color={theme ? "white" : "black"} />}>
                            <CanvasRevealEffect
                                animationSpeed={3}
                                containerClassName="bg-brown-700"
                                colors={[[125, 211, 252]]}
                            />
                        </Card>
                    </div >
                </BlurFade>
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-white dark:bg-black border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};


export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
