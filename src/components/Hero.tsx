import React, { useRef } from "react";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero mb-7">
      <div className="w-full h-[610px] relative bg-cover bg-center">
        <Image
          src="/image/directory.gif"
          fill
          alt="bg-cover"
          className="w-full h-full object-cover"
        />

        {/* black screen on top  */}
        <div
          className="hero-section1 absolute w-full h-full inset-0
                        before:absolute before:w-full before:inset-0 before:h-[610px] before:top-0 before:left-0 before:bg-black before:opacity-70"
        ></div>

        {/* container content */}
        <div className="relative z-999 h-full  flex justify-between items-center ">
          {/* actual content  */}
          <div
            className=" h-full
          flex flex-grow justify-center items-center
          "
          >
            <div className="md:ml-24 ">
              <h1
                className="text-[48px] text-center font-bold glowy-text
              md:text-[4.2rem] md:tracking-[.425rem]
              
              "
              >
                A Centaur of Asia
              </h1>
              <p className="text-[.725rem] flex justify-end md:text-[1.25rem]">
                Develop to be a centron hub of startup in Southeast Asiangion
              </p>
            </div>
          </div>
          {/* social media logo  */}

          <div className="hidden md:block">
            <div
              className=" h-[300px] flex  flex-col items-center justify-evenly p-3 flex-shrink-0 border
            "
            >
              {Socail.map((item) => (
                <Link href={item.path} key={item.logo}>
                  <Image src={item.logo} alt="icon" width={40} height={40} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
