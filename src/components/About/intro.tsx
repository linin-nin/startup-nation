"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const title = 'STARTUPNATION LAB'
const Intro = () => {
  console.log(title.split(""))
  return (
    <main className="">
      <div className="flex justify-start border-b-2 border-white pt-5">
        <div className="title">
          ABOUT
          <br />
          {/* <p className="text-yellow-400" >
            { title.split(" ").map( (word, index) => {
              <span key={index}>{word}</span>
            })}
          </p> */}
          
        </div>
        <div className="ml-[80px] relative before:absolute before:w-[2px] before:h-[100%] before:top-0 before:l-0 before:bg-white">
          <div className="pl-7 pb-7">
            <h2 className="title">
              StartupNation is a flagship community program of DreamsLAB for
              boot camp, heckathon, incubation, accelerator and investing.
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
      </div>
    </main>
  );
};

export default Intro;