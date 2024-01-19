"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { arrows } from "@/lib/pages";

function slide() {
  return (
    <div className='px-5'>
      {/* --------title-----------  */}
      <h1 className='title border-t-2 border-b-2 py-3'>WE PROVIDE</h1>
      {/* number of slide */}
      <h3 className='title'>01/04</h3>

      {/* slide container */}
      <div className='flex'>
        {/* slide */}
        <div className='img-slide '>
          {/* image  */}
          <div className='ml-40 relative '>
            <Image
              src={'/image/img.png'}
              alt='image slide'
              width={900}
              height={0}
            />
            <div className="inset-0 absolute bg-gradient-to-t from-black"></div>
            {/* <div className="absolute -left-10 top-[30%] sm:top-60 text-[10vw] sm:text-[70px]">Working <br /> Space</div> */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className=' text-white opacity-60'>
                <h1 className='text-xl sm:text-6xl tracking-wide'>Working Space</h1>
              </div>
            </div>
          </div>

          {/* list  */}
          <ul className='ml-40 list-disc grid grid-cols-2 gap-3'>
            <li className="mt-5  text-[17px] md:text-[24px]">Lorem ipsum dolor sit amet.</li>
            <li className="mt-5  text-[17px] md:text-[24px]">Lorem ipsum dolor sit amet.</li>
            <li className="mt-5  text-[17px] md:text-[24px]">Lorem ipsum dolor sit amet.</li>
            <li className="mt-5  text-[17px] md:text-[24px]">Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        {/* arrow */}
        <div className='  arrow-container'>

          <div className=' h-full flex flex-col items-center justify-center'>
            {/* arrow up  */}
            <div className="arrow-btn">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.7 } }}
              >
                <Image
                  src={arrows[0].arrow}
                  width={50}
                  height={50}
                  alt="arrow"
                />
              </motion.div>
            </div>
            {/* arrow down */}
            <div className="arrow-btn">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: 10, transition: { duration: 0.7 } }}
              >
                <Image
                  src={arrows[1].arrow}
                  width={50}
                  height={50}
                  alt="arrow"
                  className=""
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default slide