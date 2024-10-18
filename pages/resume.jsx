import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Johannes | Resume</title>
        <meta
          name='description'
          content='I’m a full stack developer  specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/LOGO3.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Johannes Mathelele</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/johannes-mathelele-a2393a25a'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/devByScotty'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        <p>
          Im Enthusiastic and a ambitious Junior Full Stack Developer with a strong passion for creating innovative and efficient solutions.
          Skilled in customer service, team collaboration, and problem-solving, with a desire to excel in a fast-paced and dynamic environment.
          Proficient in various programming languages and eager to expand knowledge and expertise in web development.
          Committed to delivering high-quality projects and contributing to the success of the team.
          Excellent communication skills and a natural ability to build positive relationships.
          Motivated and determined to continuously learn and grow as a web developer.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Junior Full Stack Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Linux
            <span className='px-2'>|</span> C#
            <span className='px-2'>|</span> MongoDb
            <span className='px-2'>|</span> RestAPI

          </p>
          <div className='text-center py-4'>
            <p className='my-2'>Here is a link to a more detailed resume</p>
            <a
              href='./assets/JMResume.pdf'
              download='Johannes_Mathelele_Resume'
              className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </>
  );
};

export default resume;
