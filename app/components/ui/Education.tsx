import React, { useState } from 'react';
import BlurFade from './Blur-fade';
import Image from 'next/image';
import { IconCaretDown, IconCaretRight } from '@tabler/icons-react';
import img from '@/app/assets/VVP_LOGO.jpg';
import img2 from '@/app/assets/KRISHNA_SCHOOL.jpg';
import SparklesText from './SparklesText';

const Education = () => {
    const [expandedIndex, setExpandedIndex] = useState<number>(0); // State to track expanded item index

    let obj = [
        {
            companyName: 'V.V.P. Engineering College - Rajkot',
            designation: 'Bachelor of Engineering in Information Technology',
            duration: '2020 - 2024',
            image: img,
            website: 'https://vvpedulink.ac.in/',
            description: `<p>I got graduated in Information Technology with <strong>8.0 CGPA</strong>. I have learned various technologies like <strong>C, C++, Java, Python, HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL,</strong> etc. I have also participated in various hackathons and workshops.</p>
`,
        },
        {
            companyName: 'Krishna Science School - Rajkot',
            designation: 'H.S.C. (Science)',
            duration: '2018 - 2020',
            image: img2,
            website: 'https://krishnainternationalschool.com/',
            description: `<p>I completed my Higher Secondary Education in Science Stream with <strong>80%</strong>.<br>
I scored <strong>95 PR</strong> in JEE, <strong>98 PR</strong> in GUJCET, and achieved an ACPC rank of <strong>916</strong>.</p>
`,
        }
    ];

    // Function to toggle expanded state of an item
    const toggleExpand = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand clicked item
        }
    };

    // Function to redirect to the company's website
    const redirectToWebsite = (website: string) => {
        window.open(website, '_blank');  // Open link in new tab
    };

    return (
        <div id='education' className='px-4 sm:px-6 lg:px-8 pt-6'>
            <BlurFade inView>
                <SparklesText text='Education' sparklesCount={5} className='text-4xl text-center text-black dark:text-white mb-4' />
                <div className="grid gap-4">
                    {obj.map((experience, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-black">
                            <div className='p-4 cursor-pointer' onClick={() => toggleExpand(index)}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-4'>
                                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                            <Image src={experience.image} alt={`${experience.companyName} Logo`} className="rounded-full" layout="fill" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className={`text-sm lg:text-lg font-semibold ${experience.website ? 'text-gray-900 dark:text-white hover:underline' : 'text-gray-500'} cursor-pointer flex items-center`} onClick={(e) => {
                                                e.stopPropagation();  // Prevent parent onClick from firing
                                                if (experience.website) redirectToWebsite(experience.website);
                                            }}>
                                                {experience.companyName}
                                                {expandedIndex === index ? <IconCaretDown /> : <IconCaretRight />}
                                            </div>
                                            <div className='text-gray-700 dark:text-gray-300'>{experience.designation}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <div className='text-gray-700 dark:text-gray-300 text-sm'>
                                            {experience.duration}
                                        </div>
                                    </div>
                                </div>
                                {expandedIndex === index && (
                                    <div className='transition-all duration-300 ease-in-out mt-2'>
                                        <div className='text-gray-600 dark:text-gray-400' dangerouslySetInnerHTML={{ __html: experience.description }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </BlurFade>
        </div>
    );
};

export default Education;
