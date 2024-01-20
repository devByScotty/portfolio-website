import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I'm a dedicated junior developer, my primary focus revolves around creating mobile-responsive front-end UI applications 
          that seamlessly integrate with APIs and backend technologies. I am driven by a passion for constant learning and staying 
          up-to-date with the latest advancements in the field. 
          I firmly believe that there are various approaches to problem-solving, and I am always open to exploring new methods.
          </p>

          <p className='py-2 text-gray-600'>
          While my core skills lie in developing front-end applications using HTML, CSS, JavaScript, C++, and React, 
          I am eager to expand my knowledge and proficiency in backend technologies. 
          I understand the importance of integrating backend functionalities into my projects to enhance their overall functionality and user experience. 
          I have a natural ability to quickly grasp new tech stacks, allowing me to adapt and learn backend technologies as needed.
          </p>

          <p className='py-2 text-gray-600'>
          As an aspiring developer, I firmly believe that being exceptional in my craft entails selecting the most suitable tools for each unique task at hand. 
          By constantly evaluating and choosing the best technologies and approaches, 
          I strive to deliver optimal solutions that meet the specific requirements and goals of each project
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
