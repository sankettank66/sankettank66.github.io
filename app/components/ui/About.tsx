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
                        As a MERN Stack Developer at{' '}
                        <span
                            onClick={() => redirectToWebsite('https://www.lucentinnovation.com')}
                            className='text-blue-400 cursor-pointer hover:underline'
                        >
                            Lucent Innovation
                        </span>
                        , I leverage my Bachelor of Engineering in Information Technology to drive innovative solutions. With a passion for continuous learning, I've engaged in 3 Hackathons and contributed to tech communities like DecodeCafe and Ace Meetup by Atlassian. I thrive on tackling challenges and expanding my skills as a self-taught developer.
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}

export default About;
