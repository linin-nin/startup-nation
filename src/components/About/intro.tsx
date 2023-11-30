"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Intro = () => {
  return (
    <main className="lg:flex justify-start border-b-2 lg:border-white lg:pt-5">
      <div className="lg:pr-10 md:text-4xl sm:text-3xl text-2xl lg:border-none border-b-2 border-white py-5 ">
        <h2>ABOUT</h2>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-500"
        >
          STARTUPNATION LAB
        </motion.h2>
      </div>
      <div className="relative before:absolute before:w-[2px] before:h-[100%] before:top-0 before:l-0 lg:before:bg-white">
        <div data-scroll-contian className="lg:pl-7 pb-7">
          <h2 data-scroll data-scroll-speed="0.04" className="md:text-4xl sm:text-2xl text-xl py-2">
            StartupNation is a flagship community program of DreamsLAB for boot
            camp, heckathon, incubation, accelerator and investing.
          </h2>
          <div className="w-full lg:h-[68vh] sm:h-[400px] bg-yellow-400">
            <ReactPlayer
              url="/image/vid4.mp4"
              playing
              muted
              loop
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
