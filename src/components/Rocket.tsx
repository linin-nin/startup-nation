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
    scale: 1.9
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      delay: 1,
      stiffness: 100
    }
  }
};

const Rocket = () => {
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
    <section className="rocket h-[100px] flex items-center justify-center mb-52">
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
        <motion.div 
          whileHover={{y: -20}}
          transition={{duration: 0.5, damping: 10, type: "spring", stiffness: 300}}
        >
          <Link href="/">
            <Image src={rocket} alt="rocket" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Rocket;
