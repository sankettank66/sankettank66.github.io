import React, { useState } from 'react';
import BlurFade from './Blur-fade';
import Image from 'next/image';
import { IconCaretDown, IconCaretRight } from '@tabler/icons-react';
import img from '@/app/assets/lucent-logo.jpg';
import img2 from '@/app/assets/wethedevelopers_logo.jpg';
import SparklesText from './SparklesText';

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // State to track expanded item index

  let obj = [
    {
      companyName: 'Lucent Innovation',
      designation: 'MERN Stack Developer',
      duration: 'January 2024 - Present',
      image: img,
      website: 'https://www.lucentinnovation.com',
      description: `<ul>
        <li><strong>Developed a sophisticated chatbot for the organization</strong> featuring AI capabilities, FAQ display, data feeding, image uploading, and an admin panel for user management. Implemented with <strong>React</strong>, <strong>Ant Design</strong>, <strong>Moment.js</strong>, and <strong>React Quill</strong>, and integrated with <strong>OpenAI's ChatGPT</strong>, <strong>Google Gemini</strong>, and <strong>Falcon</strong> models for enhanced functionality.</li><br/>
        <li><strong>Designed a health report analyzer</strong> allowing users to upload PDFs of blood reports. Implemented functionalities to calculate counts of <strong>Red Blood Cells</strong>, <strong>White Blood Cells</strong>, <strong>Platelets</strong>, and <strong>BMI</strong>. Integrated APIs and developed using <strong>Material UI</strong> for streamlined user experience.</li><br/>
        <li><strong>Worked on a TypeScript and React project</strong>, focusing on API integration and implementing heartbeat data visualization using the <strong>Mantine UI</strong> library. Contributed to bug fixes and UI enhancements for the company’s <strong>Next.js</strong> website, creating new components and leveraging <strong>Tailwind CSS</strong> for responsive styling.</li><br/>
        <li><strong>Enhanced the company's website</strong> by developing visually appealing components using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, optimizing for high performance.</li><br/>
      </ul>`,
    },
    {
      companyName: 'WeTheDevelopers',
      designation: 'Front End Developer Intern',
      duration: 'August 2023 - September 2023',
      image: img2,
      website: 'https://www.wethedevelopers.com',
      description: `<div>
    <p>Developed a Project called <strong>FinCatalyst</strong> using React, integrating real-time data from CoinCap APIs.</p>
    <p>Implemented user authentication with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.</p>
    <p>Integrated data from 50+ exchanges for accurate exchange details, using <strong>Tailwind CSS</strong> for responsive design.</p>
  </div>`,
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
    <div id='work' className='px-4 sm:px-6 lg:px-8 pt-6'>
      <BlurFade inView>
        <SparklesText text='Work Experience' sparklesCount={5} className='text-4xl text-center text-black dark:text-white mb-4' />
        <div className="grid gap-4">
          {obj.map((experience, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-black">
              <div className='p-4 cursor-pointer' onClick={() => toggleExpand(index)}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <Image src={experience.image} alt={`${experience.companyName} Logo`} className="rounded-full" fill />
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

export default WorkExperience;
