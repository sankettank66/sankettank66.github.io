import React from 'react';
import BlurFade from './Blur-fade';
import SparklesText from './SparklesText';

const About = () => {
    const redirectToWebsite = (website:string) => {
        window.open(website, '_blank');  // Open link in new tab
    };

    return (
        <div id='about' className='pt-6 px-4 sm:px-6 lg:px-8'>
            <BlurFade className='mx-auto' inView>
                <div className='text-center'>
                    <SparklesText text='About Me' sparklesCount={5} className='text-4xl text-black dark:text-white mb-4' />
                    <div className='text-black dark:text-gray-400 max-w-3xl mx-auto'>
                        I build systems that solve real problems — whether it's frontend performance at scale, AI-driven workflows, or full-stack features that need to ship fast and work reliably. My journey started in MERN and frontend engineering, and it grew into product-level ownership: optimizing architectures, integrating AI models, building internal tools, and delivering seamless user experiences.
Today, I work as a Full Stack Developer at <span
                            onClick={() => redirectToWebsite('https://www.odoo.com')}
                            className='text-blue-400 cursor-pointer hover:underline'
                        >Odoo India</span>, contributing to R&D in the Logistics team and shipping features used by real businesses. Along the way, I've delivered talks at developer communities, built multiple production-grade projects, and explored everything from Next.js and Node.js to AI agents and automation frameworks.

I'm driven by one thing: pushing my technical ceiling higher — whether that means learning a new system, architecting a cleaner solution, or building products that don't just work, but stand out.
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}

export default About;
