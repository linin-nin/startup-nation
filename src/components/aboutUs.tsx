"use client";

// import { motion } from "framer-motion"
import { pages } from "@/lib/pages";
import Image from "next/image";
import { arrows } from "@/lib/pages";

const AboutUs = () => {
  const handleClick = () => { };

  return (
    <section>
      <div className="py-3 mt-4">
        <h1 className="title border-t-2 border-b-2 py-3">We provide</h1>
      </div>
      <div className="my-1">
        {/* {pages.map((page)=>( */}
        <div>
          <h2 className="my-4 font-normal text-4xl">{pages[0].numPage}/04</h2>
          <div className="page myscreen:pl-20">
            <div className="relative">
              <div className="relative">
                <div className="relative border-2 border-white mr-16 max-xl:mr-0    ">
                  <Image
                    src={pages[2].coverImage}
                    alt="cover"
                    width={1050}
                    height={50}
                  />
                  <div className="inset-0 absolute bg-gradient-to-t from-black"></div>
                  <h1
                    className="text-[40px] w-[100%] text-center absolute top-[70%] 
                                myscreen:text-[90px] myscreen:w-48 myscreen:-left-20 myscreen:top-[40%] myscreen:leading-[85px] "
                  >
                    {pages[0].slideTitle}
                  </h1>
                </div>
                {/* list  */}
                <div className="content-list ml-4 grid grid-cols-2 gap-6">
                  <ul className="mt-6 sm:mt-4 list-disc">
                    {pages[0].benifit.map((item) => (
                      <li
                        className="mt-5  text-[17px] md:text-[26px]"
                        key={item.content}
                      >
                        {item.content}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 sm:mt-4 list-disc">
                    {pages[0].benifit.map((item) => (
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
            <div className="arrow hide xl:mt-44">
              {arrows.map((item) => (
                <div
                  key={item.arrow}
                  onClick={handleClick}
                  className="arrow-btn p-5 mt-5"
                >
                  <Image
                    src={item.arrow}
                    width={50}
                    height={50}
                    alt="arrow"
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default AboutUs;
