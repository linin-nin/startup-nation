"use client";

import { pages } from "@/lib/pages";
import { motion } from "framer-motion";
import Image from "next/image";
import { arrows } from "@/lib/pages";
import { useState } from "react";

const AboutUs = () => {
  const [Slide, setSlide] = useState(0);

  return (
    <section>
      <div className="py-3 mt-4 ">
        <h1 className="title border-t-2 border-b-2 py-3">We provide</h1>
      </div>
      <div className="flex justify-between mb-6">
        {/* slide */}
        <div className="">
          <h2 className="title">{pages[Slide].numPage}/04</h2>
          <div className="relative pl-[150px]">
            <div className="relative">
              <div className="relative border-2 xl:w-[1100px] lg:w-[1000px] h-[530px] border-white mr-16 max-xl:mr-0    ">
                <Image
                  src={pages[Slide].coverImage}
                  alt="cover"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="inset-0 absolute bg-gradient-to-t from-black"></div>
                <h1
                  className="text-[40px] w-[100%] text-center absolute top-[70%] 
                              myscreen:text-[90px] myscreen:w-48 myscreen:-left-20 myscreen:top-[40%] myscreen:leading-[85px] "
                >
                  {pages[Slide].slideTitle}
                </h1>
              </div>
              {/* list  */}
              <div className="content-list ml-4 grid grid-cols-2 gap-6">
                <ul className="mt-6 sm:mt-4 list-disc">
                  {pages[Slide].benifit.map((item) => (
                    <li
                      className="mt-5  text-[17px] md:text-[26px]"
                      key={item.content}
                    >
                      {item.content}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 sm:mt-4 list-disc">
                  {pages[Slide].benifit.map((item) => (
                    <li
                      className="mt-5  text-[17px] md:text-[26px]"
                      key={item.content}
                    >
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* arrow */}
        <div className="flex justify-center items-center">
          <div className="arrow">
            <div
              onClick={() => setSlide(Slide - 1)}
              className="arrow-btn p-5 mt-5"
            >
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
            <div
              onClick={() => setSlide(Slide + 1)}
              className="arrow-btn p-5 mt-5 "
            >
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
    </section>
  );
};

export default AboutUs;
