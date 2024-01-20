import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property-website.png';
import cryptoImg from '../public/assets/projects/coin-ranker-app.png'
import weatherImg from '../public/assets/projects/weather-app.png'
import sneakerImg from '../public/assets/projects/sneaker-website.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property App'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherImg}
            projectUrl='/weatherApp'
            tech='React JS'

          />
          <ProjectItem
            title='Sneaker App'
            backgroundImg={sneakerImg }
            projectUrl='/sneaker'
            tech='HTML CSS JAVASCRIPT'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
