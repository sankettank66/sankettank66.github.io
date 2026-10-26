"use client";
import React from "react";
import { PinContainer } from "./ui/3D-pin";
import Image, { StaticImageData } from "next/image";

export function AnimatedPinDemo({ img, alt, ProjectHeading, title, linkHref, description }: { img: StaticImageData, alt: string, ProjectHeading: string, title: string, linkHref: string, description: string }) {
    return (
        <div className="h-[25rem] w-full flex items-center justify-center ">
            <PinContainer
                title={title}
                href={linkHref}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black dark:text-slate-100">
                        {ProjectHeading}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-black dark:text-slate-500">
                            {description}
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4" >
                        <Image src={img} alt={alt} className="w-full object-contain"/>
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
