"use client";

import Image from "next/image";

const EarthMap = () => {
  return (
    <main data-scroll-contian>
      <div className=" relative border-b-2 border-white md:h-[80vh] h-[60vh] mt-20 bg-cover bg-center">
        <Image
          src="/icons/earth.svg"
          alt="image"
          fill
          className="w-full h-full object-cover "
        />
        <div className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl sm:pt-20 pt-10 inset-0 mb-7 absolute">
          <div data-scroll data-scroll-speed="0.1">
            <span className="sm:flex sm:justify-start text-center">
              “ Develop Cambodia to be a central hub of startups
            </span>
            <span className="flex sm:justify-end justify-center">
              in Southeast Asian region. “
            </span>
          </div>
          <div className="relative flex justify-end sm:mt-20 mt-5 pr-20">
            <Image
              src="/icons/circleYellow.svg"
              width={80}
              height={80}
              alt="icon"
            />
            <Image
              className="absolute mr-20 flex justify-center top-5 right-4"
              src="/icons/SubcircleYellow.svg"
              width={50}
              height={50}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EarthMap;
