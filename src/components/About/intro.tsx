"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Intro = () => {
  return (
    <main className="flex justify-start border-b-2 border-white pt-5">
      <div className="pr-10">
        <h2 className="title">ABOUT</h2>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-500 title"
        >
          STARTUPNATION LAB
        </motion.h2>
      </div>
      <div className="relative before:absolute before:w-[2px] before:h-[100%] before:top-0 before:l-0 before:bg-white">
        <div data-scroll-contian className="pl-7 pb-7">
          <h2 data-scroll data-scroll-speed="0.04" className="title">
            StartupNation is a flagship community program of DreamsLAB for boot
            camp, heckathon, incubation, accelerator and investing.
          </h2>
          <div className="w-full h-[500px] bg-yellow-400">
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
