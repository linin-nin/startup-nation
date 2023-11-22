import { easeIn, easeInOut, motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";
import ShareArrow from "./ShareArrow";

const animToright = {
  initial: {
    width: 0
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
      ease: easeInOut
    }
  },
  close: {
    width: "100%",
    transition: { duration: 0.5 }
  }
};

const animToleft = {
  initial: {
    width: 0
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
      ease: easeIn
    }
  },
  close: {
    width: "100%",
    transition: { duration: 0.5 }
  }
};

const VideoContent = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <div>
      <div ref={ref}>
        <motion.div
          variants={animToright}
          initial="initial"
          animate={isInview ? "animate" : "close"}
          className="border-2 border-white"
        ></motion.div>
        <h1 className="py-3 title">Side Project</h1>
        <motion.div
          variants={animToleft}
          initial="initial"
          animate={isInview ? "animate" : "close"}
          className="border-2 border-white"
        ></motion.div>
      </div>

      {/* layout 1 */}
      <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="box bg-slate-300 h-[555px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid1.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box bg-slate-300 h-[555px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid2.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box bg-slate-300 h-[555px] border-2 border-white relative sm:col-span-2 lg:col-span-1">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid3.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
      </div>

      {/* layout 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid4.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid5.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid6.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
        <div className="box bg-slate-300 h-[708px] border-2 border-white relative">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/image/vid7.mp4" type="video/mp4" />
          </video>
          <div className="content hover:opacity-100 p-5">
            <h1 className="title">Dreamslab</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nobis exercitationem commodi perferendis ea expedita nam,
              reprehenderit porro tempora illum numquam velit dolorem,
              architecto libero corrupti aspernatur deserunt sunt natus.
            </p>
            <ShareArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
