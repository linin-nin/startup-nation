"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const word = ["Welcome", "To", "Startup Nation", "Cambodia"];

const Prelanding = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimentio] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimentio({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // set time to prelanding
  useEffect(() => {
    if (index === word.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 400
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-[100vh] bg-black fixed w-[100%] flex items-center justify-center z-[999]"
    >
      {dimension.width > 0 && (
        <div>
          <motion.h2
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-white bold text-8xl flex justify-center items-center z-10 absolute inset-0 glowy-text"
          >
            {word[index]}
          </motion.h2>
          <svg className="absolute w-[100%] h-[calc(100%+200px)] left-0 top-0">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default Prelanding;
