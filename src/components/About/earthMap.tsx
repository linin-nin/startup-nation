"use client";

import Image from "next/image";

const EarthMap = () => {
  return (
    <main data-scroll-contian>
      <div className=" relative border-b-2 border-white h-[570px] my-20 bg-cover bg-center">
        <Image
          src="/icons/earth.svg"
          alt="image"
          fill
          className="w-full h-full object-cover "
        />
        <div className="text-6xl pt-36 inset-0 mb-7 absolute">
          <h2 data-scroll data-scroll-speed="0.1">
            “ Develop Cambodia to be a central hub of startups
            <br />
            <span className="flex justify-end">
              in Southeast Asian region. “
            </span>
          </h2>
          <div className="relative flex justify-end mt-32 mr-56">
            <Image src='/icons/circleYellow.svg' width={80} height={80} alt="icon"/>
            <Image className="absolute flex justify-center top-5 right-4" src='/icons/SubcircleYellow.svg' width={40} height={40} alt="icon"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EarthMap;
