import Image from 'next/image';
import React from 'react';
import furnitureshopImg from '../public/assets/projects/furniture-shop.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';


const furnitureShop = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={furnitureshopImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Trvia Furniture Shop</h2>
                    <h3>React JS / CSS / Javascript / Node.js / Express / PostgreSQL - Supabase  </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Trivia is an e-commerce web application designed for users to browse and purchase products with ease.
                        It offers a seamless shopping experience by incorporating modern UI/UX principles. Key features include product browsing,
                        user authentication, cart management, and order tracking. Users can view their
                        profile, check purchase history, and enjoy a responsive, intuitive design that ensures accessibility across devices.
                    </p>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Frontend: React, Material UI, React Router<br />
                        Backend: Node.js, Express <br />
                        Database: PostgreSQL (Supabase integration) <br />
                        Authentication: Custom JWT-based authentication <br />
                        State Management: React Context API / LocalStorage <br />
                        Styling: Material UI, Custom CSS, and responsive design principles <br />
                        API: RESTful API for handling product data and user orders <br />
                    </p>
                    <a
                        href='https://github.com/devByScotty/react-js-furniture-shop'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://react-furniture-shop.onrender.com'
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
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node.js -- Express
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> PostreSQL
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Material UI
                            </p>

                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default furnitureShop
