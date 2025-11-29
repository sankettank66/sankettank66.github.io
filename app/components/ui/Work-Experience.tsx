import React, { useState } from 'react';
import BlurFade from './Blur-fade';
import Image from 'next/image';
import { IconCaretDown, IconCaretRight } from '@tabler/icons-react';
import img from '@/app/assets/lucent-logo.jpg';
import img2 from '@/app/assets/wethedevelopers_logo.jpg';
import SparklesText from './SparklesText';

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // State to track expanded item index

  const obj = [
  {
    companyName: 'Odoo India',
    designation: 'Full Stack Developer',
    duration: 'August 2025 – Present',
    image: 'https://apps.odoocdn.com/web/image/loempia.module/194894/icon_image/84x84?unique=0fe8c89', // add your Odoo image
    website: 'https://www.odoo.com',
    description: `<ul>
      <li>Working on core logistics modules including <strong>Inventory</strong>, <strong>MRP</strong>, <strong>Barcode</strong>, and <strong>Shopfloor</strong>, implementing scalable backend features using <strong>Odoo Python ORM</strong>, <strong>PostgreSQL</strong>, and <strong>XML</strong>-based UI components.</li><br/>
      <li>Developing interactive and modern frontend experiences using <strong>OWL JS</strong> and <strong>JavaScript</strong>, improving workflow efficiency and enhancing usability across manufacturing and warehouse operations.</li><br/>
    </ul>`,
  },
  {
    companyName: 'Lucent Innovation',
    designation: 'Software Engineer',
    duration: 'January 2024 – July 2025',
    image: img,
    website: 'https://www.lucentinnovation.com',
    description: `<ul>
      <li>Led migration of legacy <strong>Shopify apps</strong> to a modern <strong>React</strong> architecture, achieving a <strong>6x improvement in LCP</strong> (12s → &lt; 2s) and significantly boosting performance, engagement, and conversion rates.</li><br/>
      <li>Earned the <strong>"Built for Shopify"</strong> badge for multiple apps by optimizing Core Web Vitals (<strong>LCP, INP, CLS</strong>) and meeting strict Shopify Partner standards, increasing app credibility and discoverability in the Shopify App Store.</li><br/>
      <li>Developed an <strong>AI-powered chatbot</strong> using React and Ant Design, integrating <strong>OpenAI ChatGPT</strong> and <strong>Google Gemini</strong>. Enabled real-time communication via WebSockets, reducing response time by <strong>25%</strong> and improving user satisfaction.</li><br/>
      <li>Enhanced the company website with high-performance <strong>Next.js</strong> components, achieving a <strong>30%–35%</strong> increase in speed, responsiveness, and overall UX quality.</li><br/>
    </ul>`,
  },
  {
    companyName: 'WeTheDevelopers',
    designation: 'Front End Developer Intern',
    duration: 'August 2023 – September 2023',
    image: img2,
    website: 'https://www.wethedevelopers.com',
    description: `<div>
      <p>Built <strong>FinCatalyst</strong> using React with real-time data from CoinCap APIs.</p>
      <p>Implemented authentication with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.</p>
      <p>Integrated data from 50+ exchanges for accurate market insights, styled using <strong>Tailwind CSS</strong>.</p>
    </div>`,
  },
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
