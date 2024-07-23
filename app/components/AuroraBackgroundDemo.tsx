"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWordsDemo } from "./FlipWordsDemo";
import img from '../Sanket_tank.png'
import Image from "next/image";
import { SparklesCore } from "./ui/sparkles";
export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-row gap-4 items-center justify-center px-4"
            >
                <FlipWordsDemo />
                {/* <div> */}
                <Image
                    src={img}
                    alt="my image"
                    className="bg-transparent rounded-full shadow-[0px_20px_20px_10px_#00000024] hover:shadow-inner hover:ease-in-out transition duration-1500"
                />

                    
                {/* </div> */}
            </motion.div>
        </AuroraBackground>
    );
}
