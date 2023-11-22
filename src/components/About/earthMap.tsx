"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollTrigger";

const EarthMap = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollTrigger.normalizeScroll(true)
    // Create the smooth scroller
    // let smoother = ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    //   normalizeScroll: true
    // });
    return () => {};
  }, []);

  return (
    <main className="">
      <div className=" relative border-b-2 border-white h-[500px] my-20 bg-cover bg-center">
        <Image
          src="/icons/earth.svg"
          alt="image"
          fill
          className="w-full h-full object-cover "
        />
        <h2 className="text-6xl pt-36 inset-0 absolute">
          “ Develop Cambodia to be a central hub of startups
          <br />
          <span className="flex justify-end">in Southeast Asian region. “</span>
        </h2>
      </div>
    </main>
  );
};

export default EarthMap;
