import CustomizedButton from '../CustomizedButton';
import { BackgroundBeams } from './Background-Beams';
import BlurFade from './Blur-fade';
import SparklesText from './SparklesText';
import IconCloud from './tech-cloud';

const TechCloud = () => {
    const iconSlugs = [
        "typescript",
        "javascript",
        "java",
        "react",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "vercel",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "figma",
        "materialui",
    ];
    return (
        <>
            <div className='pt-6' id='skills'>
                <BlurFade inView className='mx-auto '>
                    <SparklesText text='Skills' sparklesCount={5} className='pb-6 text-4xl text-center text-black dark:text-white' />
                    <div className='flex flex-col gap-8 px-4'>
                        <div className="relative flex w-full h-2/4  items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-neutral-950 px-20 pb-20 pt-8 backdrop-blur-2xl shadow-lg">
                            <IconCloud iconSlugs={iconSlugs} />
                            <BackgroundBeams />
                        </div>
                        <div className='bg-white dark:bg-transparent rounded-lg backdrop-blur-2xl shadow-lg p-4'>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                                <CustomizedButton text='Javascript' className='my-2' />
                                <CustomizedButton text='Java' className='my-2' />
                                <CustomizedButton text='React' className='my-2' />
                                <CustomizedButton text='Next' className='my-2' />
                                <CustomizedButton text='Mantine UI' className='my-2' />
                                <CustomizedButton text='Ant Design' className='my-2' />
                                <CustomizedButton text='Tailwind UI' className='my-2' />
                                <CustomizedButton text='Material UI' className='my-2' />
                                <CustomizedButton text='Node JS' className='my-2' />
                                <CustomizedButton text='Express JS' className='my-2' />
                                <CustomizedButton text='Docker' className='my-2' />
                                <CustomizedButton text='SQL' className='my-2' />
                                <CustomizedButton text='MongoDB' className='my-2' />
                                <CustomizedButton text='Prisma' className='my-2' />
                                <CustomizedButton text='HTML' className='my-2' />
                                <CustomizedButton text='CSS' className='my-2' />
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </>
    )
}

export default TechCloud