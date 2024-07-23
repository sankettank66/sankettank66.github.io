import Image from 'next/image';
import React from 'react';
import BlurFade from './Blur-fade';
import img from "@/app/assets/sanket-color.jpg";

const Heading = () => {
    return (
        <div className='pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' id='home'>
            <BlurFade inView>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
                            Hello, I'm Sanket👋
                        </h1>
                        <p className="text-sm lg:text-base mt-4 text-neutral-500 dark:text-gray-400 font-medium">
                            Tech Enthusiast. I love building things and helping people. Very active on Linkedin. Turning Concepts into Unforgettable Experiences.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-48 h-48 lg:w-64 lg:h-64 relative">
                            <Image
                                src={img}
                                alt="my image"
                                className="rounded-full object-cover"
                                layout="fill"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}

export default Heading;
