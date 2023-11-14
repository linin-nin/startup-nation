"use client";
import React from "react";
import Image from "next/image";
import rocket from "../../public/icons/rocket.svg";
import spinningLetter from "../../public/icons/spining-letter.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { tap } from "node:test/reporters";

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

  //text Join startup nation
  const text1 = "Join Startup";
  const text2 = "Nation Now";
  const text = "Join Startup Nation Now";

  //default animation
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: -200
    },

    visible: {
      opacity: 1,
      y: 0
    }
  };

  const ref2 = useRef(null);
  const isInView = useInView(ref2, { amount: 0.8, once: true });

  return (
    <section className="relative rocket h-[300px] flex items-center justify-center mb-52 ">
      <p className="absolute top-2 left-0 text-[75px] ml-32 glowy-text font-bold">
        <motion.span
          ref={ref2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.05 }}
        >
          {/* join startup  */}
          {text1.split(" ").map((word, index) => {
            return (
              <span className="inline-block" key={index}>
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

      <p className="absolute bottom-2 right-0 text-[75px] mr-32 glowy-text font-bold">
        <motion.span
          ref={ref2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.05 }}
        >
          {/* Nation Now  */}
          {text2.split(" ").map((word, index) => {
            return (
              <span className="inline-block" key={index}>
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
      </p>
    </section>
  );
};

export default Rocket;
