"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";





const Hero = () => {

  const text = "A Centaur of Asia";

  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 200
    },

    visible: {
      opacity: 1,
      y: 0
    }

  };

  // const ref2 = useRef(null);
  // const isInView = useInView(ref2, { amount: 0.8, once: true, });





  return (
    <section className="hero mb-7 padding-body  h-[80vh] mt-20 ">
      <div className="hero-section1 flex items-center justify-between h-[80%]">
        <div className=" flex max-w-full lg:max-w-[85%]  items-center justify-center flex-col text-hero lg:pl-36 h-[100vh] ">
          <Marquee
            speed={100}
            direction="left"
            className="marquee text-[500] border border-white 
                    p-2 text-[1rem] md:text-[1.5rem] font-medium"
          >
            <ul className="flex [&>*:nth-child(odd)]:text-[#F8DC4C]">
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
            </ul>
          </Marquee>
          <div className="centaur tracking-[10px] text-[35px] sm:text-[54px] md:text-[6rem] mt-20 mb-20 ml-16">
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.09, delayChildren: 2.5}}
            >
              {/* join startup  */}
              {text.split(" ").map((word, index) => {
                return (
                  <span className="inline-block glowy-text" key={index}>
                    {word.split("").map((char, index) => {
                      return (
                        <motion.span
                          className="inline-block"
                          key={index}
                          variants={defaultAnimation}
                          whileHover={{ scale: 1.5 }}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                    <span className="inline-block">&nbsp;</span>
                  </span>
                );
              })}
            </motion.span>

          </div>
          <Marquee
            speed={100}
            direction="right"
            className="marquee text-[500] border border-white 
                    p-2 text-[1rem] md:text-[1.5rem] font-medium"
          >
            <ul className="flex [&>*:nth-child(even)]:text-[#F8DC4C]">
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
              <li>STARTUPNATION LAB</li>
            </ul>
          </Marquee>
        </div>
        <div className="hidden lg:block h-[50%]  border-2 border-white">
          <div className=" w-16 h-[100%] flex flex-col items-center justify-around">
            {Socail.map((item) => (
              <Link href={item.path} key={item.logo}>
                <Image src={item.logo} alt="icon" width={40} height={40} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
