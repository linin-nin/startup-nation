"use client";

import Image from "next/image";

const EarthMap = () => {

  return (
    <main data-scroll-contian>
      <div className=" relative border-b-2 border-white h-[500px] my-20 bg-cover bg-center">
        <Image
          src="/icons/earth.svg"
          alt="image"
          fill
          className="w-full h-full object-cover "
        />
        <div  className="text-6xl pt-36 inset-0 mb-7 absolute">
            <h2 data-scroll data-scroll-speed="0.1">
              “ Develop Cambodia to be a central hub of startups
              <br />
              <span className="flex justify-end">in Southeast Asian region. “</span>
            </h2>
            
        </div>
      </div>
    </main>
  );
};

export default EarthMap;