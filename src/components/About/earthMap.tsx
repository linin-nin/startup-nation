"use client";

import Image from "next/image";
import Earth from "../cobe";

const EarthMap = () => {
  return (
    <main data-scroll-contian>
      <div className=" relative overflow-hidden border-b-2 border-white md:h-[80vh] h-[60vh] mt-20 bg-cover bg-center">
        <Earth/>
        <div className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl sm:pt-20 pt-10 inset-0 mb-7 absolute">
          <div data-scroll data-scroll-speed="0.09">
            <span className="sm:flex sm:justify-start text-center">
              “ Develop Cambodia to be a central hub of startups
            </span>
            <span className="flex sm:justify-end justify-center">
              in Southeast Asian region. “
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EarthMap;
