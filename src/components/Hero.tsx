"use client";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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

  const ref2 = useRef(null);
  const isInView = useInView(ref2, { amount: 0.8, once: true });

  return (
    <section className="hero mb-7">
      <div className="w-full h-[610px] relative bg-cover bg-center">
        <Image
          src="/image/directory.gif"
          fill
          alt="bg-cover"
          className="w-full h-full object-cover"
        />

        <div
          className="hero-section1 absolute w-full h-fullinset-0
                        before:absolute before:w-full before:inset-0 before:h-[610px] before:top-0 before:left-0 before:bg-black before:opacity-70"
        >
          <div className="flex justify-between text-hero">
            <div className=" flex max-w-full lg:max-w-[85%] flex-col items-center pt-32 text-hero lg:pl-36 h-[100vh]">
              <div className="w-[80%] pl-24">
                <Marquee
                  speed={60}
                  direction="left"
                  className="marquee text-[500] border border-white p-2 text-[1rem] md:text-[1.5rem] font-medium"
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
              </div>
              <div className="mt-16 z-50">
                <div className="tracking-[10px]">
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    className=" ml-36"
                    transition={{ staggerChildren: 0.09, delayChildren: 2 }}
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
                <div className="flex justify-end pr-5">
                  <p className="mr-5">
                    Develop to be a centron hub of startup in Southeast
                    Asiangion
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block h-[50%] mt-32  border-2 border-white z-50">
              <div className=" w-16 h-[100%] flex flex-col items-center justify-around gap-y-20">
                {Socail.map((item) => (
                  <Link href={item.path} key={item.logo}>
                    <Image src={item.logo} alt="icon" width={40} height={40} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
