import Image from 'next/image';
import React from 'react';
import carRentalImg from '../public/assets/projects/car-rental.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const gymApp = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={carRentalImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Car Hub</h2>
                    <h3>React JS / CSS / Javascript / Node.js / Express / MongoDb  </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        A Next.js web application that allows users to
                        explore and view cars with detailed specifications and dynamic images fetched from the Pexels API
                    </p>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Tech Stack 
                        Next.js Framework: Utilizes Next.js for server-side rendering and static site generation.  <br />
                        TypeScript: Written in TypeScript for type safety and improved developer experience. <br />
                        Pexels API Integration: Fetches real-time images of cars based on user input. <br />
                        Custom Components: Built with reusable React components such as CarCard, CarDetails, and CustomButton. <br />
                        Image Optimization: Efficient image loading and optimization using Next.js’ built-in Image component. <br />
                    </p>
                    <a
                        href='https://github.com/devByScotty/next-js-car--rental-software'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://next-js-car-rental-software.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next.js
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />Material Ui - CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node.js -- Express
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> API - Pexel API
                            </p>
                           

                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default gymApp;
