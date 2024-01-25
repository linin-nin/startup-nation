"use client";

import { pages } from "@/lib/pages";
import { motion } from "framer-motion";
import Image from "next/image";
import { arrows } from "@/lib/pages";
import { useState } from "react";

const AboutUs = () => {
  const [Slide, setSlide] = useState(0);

  return (
    // <section>
    //   <div className="py-3 mt-4 ">
    //     {/* -------------------------title ---------------------- */}
    //     <h1 className="title border-t-2 border-b-2 py-3">We provide</h1>
    //   </div>
    //   <div className="flex bg-red-300 justify-between mb-6">
    //     {/*----------------- slide----------------- */}
    //     <div className="">
    //       <h2 className="title">{pages[Slide].numPage}/04</h2>
    //       <div className="relative pl-[150px]">
    //         <div className="relative">
    //           <div className="relative border-2 xl:w-[1100px] lg:w-[1000px] h-[530px] border-white mr-16 max-xl:mr-0    ">
    //             <Image
    //               src={pages[Slide].coverImage}
    //               alt="cover"
    //               fill
    //               className="w-full h-full object-cover"
    //             />
    //             <div className="inset-0 absolute bg-gradient-to-t from-black"></div>
    //             <h1
    //               className="text-[40px] w-[100%] text-center absolute top-[70%]
    //                           myscreen:text-[90px] myscreen:w-48 myscreen:-left-20 myscreen:top-[40%] myscreen:leading-[85px] "
    //             >
    //               {pages[Slide].slideTitle}
    //             </h1>
    //           </div>
    //           {/* ----------------list-------------------  */}
    //           <div className="content-list ml-4 grid grid-cols-2 gap-6">
    //             <ul className="mt-6 sm:mt-4 list-disc">
    //               {pages[Slide].benifit.map((item) => (
    //                 <li
    //                   className="mt-5  text-[17px] md:text-[26px]"
    //                   key={item.content}
    //                 >
    //                   {item.content}
    //                 </li>
    //               ))}
    //             </ul>
    //             <ul className="mt-6 sm:mt-4 list-disc">
    //               {pages[Slide].benifit.map((item) => (
    //                 <li
    //                   className="mt-5  text-[17px] md:text-[26px]"
    //                   key={item.content}
    //                 >
    //                   {item.content}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/*--------------- arrow container-------------*/}
    //     <div className="flex justify-center items-center bg-blue-500">
    //       <div className="arrow">
    //         {/* ------------arrow up --------------- */}
    //         <div className="arrow-btn p-5 mt-5">
    //           <motion.div
    //             initial={{ y: 0 }}
    //             whileHover={{ y: -10, transition: { duration: 0.7 } }}
    //           >
    //             <Image
    //               src={arrows[0].arrow}
    //               width={50}
    //               height={50}
    //               alt="arrow"
    //             />
    //           </motion.div>
    //         </div>

    //         {/* -----------arrow down --------------*/}
    //         <div className="arrow-btn p-5 mt-5">
    //           <motion.div
    //             initial={{ y: 0 }}
    //             whileHover={{ y: 10, transition: { duration: 0.7 } }}
    //           >
    //             <Image
    //               src={arrows[1].arrow}
    //               width={50}
    //               height={50}
    //               alt="arrow"
    //               className=""
    //             />
    //           </motion.div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div>
      {/* --------title-----------  */}
      <h1 className="title border-t-2 border-b-2 py-3">WE PROVIDE</h1>
      {/* number of slide */}
      <h3 className="title">{pages[Slide].numPage}/04</h3>

      {/* slide container */}
      <div className="flex">
        {/* slide */}
        <div className="img-slide">
          {/* image  */}
          <div className=" sm:ml-20 relative  ">
            <Image
              src={"/image/img.png"}
              alt="image slide"
              width={1200}
              height={0}
            />
            <div className="inset-0 absolute bg-gradient-to-t from-black"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" text-white opacity-60">
                <h1 className="text-xl sm:text-6xl tracking-wide">
                  Working Space
                </h1>
              </div>

              {/* slide button on mobile screen */}
              {/* left button  */}
              <svg
                className="absolute left-4 sm:hidden opacity-60 hover:opacity-90"
                width="28"
                height="28"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-7.91372e-07 11C-7.91372e-07 13.9174 1.15892 16.7153 3.22182 18.7782C5.28472 20.8411 8.08262 22 11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28472 1.15893 3.22182 3.22183C1.15892 5.28473 -7.91372e-07 8.08262 -7.91372e-07 11ZM5.24822 11.8653L5.24088 11.858C5.01694 11.6313 4.8906 11.326 4.88889 11.0073V10.9927C4.89089 10.6717 5.01909 10.3644 5.24578 10.1371L10.1347 5.24823C10.3638 5.01872 10.6748 4.88966 10.9991 4.88943C11.3235 4.8892 11.6346 5.01782 11.8641 5.247C12.0936 5.47618 12.2227 5.78713 12.2229 6.11147C12.2231 6.4358 12.0945 6.74694 11.8653 6.97644L9.06155 9.77778H15.8889C16.213 9.77778 16.5239 9.90655 16.7531 10.1358C16.9823 10.365 17.1111 10.6758 17.1111 11C17.1111 11.3242 16.9823 11.635 16.7531 11.8642C16.5239 12.0935 16.213 12.2222 15.8889 12.2222H9.06155L11.8653 15.0236C12.0948 15.2531 12.2238 15.5643 12.2238 15.8889C12.2238 16.2135 12.0948 16.5247 11.8653 16.7542C11.6358 16.9837 11.3246 17.1127 11 17.1127C10.6754 17.1127 10.3642 16.9837 10.1347 16.7542L5.24822 11.8653Z"
                  fill="white"
                />
              </svg>

              {/* right button  */}
              <svg
                className="absolute right-4 sm:hidden opacity-60 hover:opacity-90"
                width="28"
                height="28"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11ZM16.7518 11.8653L16.7591 11.858C16.9831 11.6313 17.1094 11.326 17.1111 11.0073V10.9927C17.1091 10.6717 16.9809 10.3644 16.7542 10.1371L11.8653 5.24823C11.6362 5.01872 11.3252 4.88966 11.0009 4.88943C10.6765 4.8892 10.3654 5.01782 10.1359 5.247C9.90639 5.47618 9.77733 5.78713 9.7771 6.11147C9.77687 6.4358 9.90549 6.74694 10.1347 6.97644L12.9384 9.77778H6.11111C5.78696 9.77778 5.47608 9.90655 5.24687 10.1358C5.01766 10.365 4.88889 10.6758 4.88889 11C4.88889 11.3242 5.01766 11.635 5.24687 11.8642C5.47608 12.0935 5.78696 12.2222 6.11111 12.2222H12.9384L10.1347 15.0236C9.90516 15.2531 9.77623 15.5643 9.77623 15.8889C9.77623 16.2135 9.90516 16.5247 10.1347 16.7542C10.3642 16.9837 10.6754 17.1127 11 17.1127C11.3246 17.1127 11.6358 16.9837 11.8653 16.7542L16.7518 11.8653Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* list  */}
          <ul className="ml-10 sm:ml-40 list-disc grid grid-cols-2 gap-x-4">
            <li className="mt-5  text-[17px] md:text-[24px]">
              Provision of free working space
            </li>
            <li className="mt-5  text-[17px] md:text-[24px]">
              Meeting room, Event space and Play-ground
            </li>
            <li className="mt-5  text-[17px] md:text-[24px]">
              Training rooms and Studio room
            </li>
            <li className="mt-5  text-[17px] md:text-[24px]">
              Utility, Parking, and Security
            </li>
          </ul>
        </div>
        {/* arrow */}
        <div className="hidden sm:block  arrow-container">
          <div className=" h-full flex flex-col items-center justify-center">
            {/* arrow up  */}
            <div className="border-2 rounded-full mt-10 p-2 md:p-4">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.7 } }}
              >
                <Image
                  src={arrows[0].arrow}
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </motion.div>
            </div>
            {/* arrow down */}
            <div className="border-2 rounded-full mt-10 p-2 md:p-4">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: 10, transition: { duration: 0.7 } }}
              >
                <Image
                  src={arrows[1].arrow}
                  width={40}
                  height={40}
                  alt="arrow"
                  className=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
