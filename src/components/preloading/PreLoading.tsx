"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import Title from "./Title";

const Prelanding = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimentio] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimentio({ width: window.innerWidth, height: window.innerHeight });
  }, []);

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
      className="h-[100vh] w-[100vw] fixed left-0 flex justify-center items-center z-[999] bg-black"
    >
      {dimension.width > 0 && (
        <div>
          <h2 className="text-white sm:text-8xl text-5xl flex justify-center items-center z-10 absolute inset-0">
            <Title />
          </h2>
          <svg className="absolute w-[100%] h-[calc(100%+300px)] left-0 top-0">
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
