"use client"

// import { motion } from "framer-motion"
import { pages } from '@/lib/pages'
import Image from 'next/image'
import { arrows } from '@/lib/pages'



const AboutUs = () => {

    const handleClick = () => {}

  return (
    <section>
        <div className="py-3 mt-4">
            <h1 className='title border-t-2 border-b-2 py-3'>We provide</h1>
        </div>
        <div className="my-1">
            {/* {pages.map((page)=>( */}
                <div>
                    <h2 className='my-4 font-normal text-lg'>{pages[0].numPage}/04</h2>
                    <div className="page">
                            <div className='relative'>
                                <div className='relative'>
                                    <div className='relative border-2 border-white mr-16 max-lx:mr-0    '>
                                        <Image
                                            src={pages[2].coverImage}
                                            alt='cover'
                                            width={1000}
                                            height={50}
                                        />
                                        <div className='inset-0 absolute bg-gradient-to-t from-black'></div>
                                    </div>
                                    <h1 className='slideTitle md:text-8xl max-xl:inset-x-0 max-xl:text-center max-xl:bottom-6'>
                                        {pages[0].slideTitle}
                                    </h1>
                                </div>
                                <ul className='content sm:mt-3'>
                                    {pages[0].benifit.map((item)=>(
                                        <li className='mt-2 text-normal leading-4 max-sm:text-xl max-sm:leading-3' key={item.content}>
                                            {item.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="arrow max-xl:mt-5">
                                {arrows.map((item)=>(
                                    <div key={item.arrow} onClick={handleClick} className="arrow-btn max-xl:-rotate-90">
                                        <Image
                                            src={item.arrow}
                                            width={50}
                                            height={50}
                                            alt='arrow'
                                            className='max-lg:w-10 max-lg:h-10'
                                        />
                                    </div>
                                ))}
                            </div>   
                    </div>  
                </div>
            {/* ))} */}
        </div>
    </section>
  )
}

export default AboutUs