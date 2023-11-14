import { motion } from "framer-motion";

const Opacity = {
  initial: {
    scale: 1,
    opacity: 0.05
  },
  open: (i: number) => ({
    scale: 0.7,
    // y: -30 ,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.09 * i
    }
  }),
  closed: {
    transition: { duration: 0.4 }
  }
};
const Title = () => {
  const mytext = "StartUpNation";

  return (
    <div className="flex">
      {mytext.split("").map((word, index) => {
        return (
          <motion.p
            id="Me"
            variants={Opacity}
            initial="initial"
            animate="open"
            custom={index}
            key={index}
            className="text-[1.3em]"
          >
            {word}
          </motion.p>
        );
      })}
    </div>
  );
};

export default Title;
