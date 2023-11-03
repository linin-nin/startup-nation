"use client";
import React from "react";
import Image from "next/image";
import rocket from "../../public/icons/rocket.svg";
import spinningLetter from "../../public/icons/spining-letter.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const revealShow = {
  hidden: {
    opacity: 0,
    y: 200,
    scale: 1.8
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.5,
      stiffness: 100
    }
  }
};

const RocketTry = () => {
  const [isFly, setisFly] = useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const maincontrol = useAnimation();
  useEffect(() => {
    if (isInview) {
      maincontrol.start("show");
    }
  }, [isInview, maincontrol]);

  return (
    <section className="relative rocket h-[300px] flex items-center justify-center mb-52 ">
      <p className="absolute top-2 left-0 text-[80px] ml-36 glowy-text font-bold">
        Join Startup
      </p>

      {/* rocket  */}
      <motion.div
        initial={{
          rotate: 0
        }}
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 9,
          repeat: Infinity
        }}
      >
        <Image src={spinningLetter} alt="spinningLetter" />
      </motion.div>
      <motion.div
        className="absolute"
        variants={revealShow}
        initial="hidden"
        animate={"show"}
      >
        <Link href="/">
          <Image src={rocket} alt="rocket" />
        </Link>
      </motion.div>

      <p className="absolute bottom-2 right-0 text-[80px] mr-36 glowy-text font-bold">
        Nation now
      </p>
    </section>
  );
};

export default RocketTry;
