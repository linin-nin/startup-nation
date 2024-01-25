import React, { useRef } from "react";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero mb-7">
      <div className="w-full md:h-[553px] h-[400px] relative bg-cover bg-center">
        <Image
          src="/image/c1.gif"
          fill
          alt="bg-cover"
          className="w-full h-full object-cover"
        />

        {/* black screen on top  */}
        <div
          className="hero-section1 absolute w-full h-full inset-0
                      before:absolute before:w-full before:inset-0 before:md:h-[553px] before:h-[400px] before:top-0 before:left-0 before:bg-black before:opacity-70"
        ></div>

        {/* container content */}
        <div className="relative z-999">
          {/* social media logo  */}
          <div className="hidden md:block w-full ">
            <div
              className=" h-[190px] flex flex-col items-end flex-shrink-0
            "
            >
              {Socail.map((item) => (
                <Link href={item.path} key={item.logo}>
                  <Image
                    src={item.logo}
                    alt="icon"
                    width={40}
                    height={40}
                    className="mt-5"
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* actual content  */}
          <div className=" lg:pt-16 h-full md:flex flex-grow justify-between  md:mt-0 mt-32">
            <h1 className=" text-[48px] md:block flex justify-center items-center font-bold glowy-text lg:text-[5rem] md:text-[3.5rem] md:tracking-[.425rem]">
              A Centaur of <br />
              <span className="text-[#F8DC4C]">Asia</span>
            </h1>
            <div className=" md:block pt-8 flex flex-col justify-center items-center">
              <p className=" lg:w-[500px] md:w-[400px] md:text-right text-center md:pt-30 pt-50">
                Lorem ipsum dolor sit amet consectetur. Risus vivamus ultrices
                pharetra consectetur vitae diam. Faucibus at suscipit justo non
                mauris in orci ut.
              </p>
              <Link
                href="/directory"
                className="w-full flex md:justify-end mt-5 justify-center"
              >
                <div className="border-2 px-5 py-2 border-[#FAFF00] flex justify-end items-center">
                  <p>
                    Explore <span className="text-[#FAFF00]">Startup</span>
                  </p>
                  <ArrowRight size={20} color="yellow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
