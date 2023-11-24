"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main>
      <div className="w-full h-[630px] relative bg-cover bg-center">
        <Image
          src="/image/la.gif"
          fill
          alt="bg-cover"
          className="w-full h-full object-cover"
        />
        <div className="flex opacity-100 inset-0 before:bg-black before:opacity-50 before:absolute before:w-full before:inset-0 before:h-full before:top-0 before:left-0 items-center justify-center absolute ">
          <div className="z-10 text-center">
            <h1 className="text-[130px] font-bold">Startup Directory</h1>
            <div className="tracking-[2px]">
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
                semper nec rhoncus leo arcu ultricies tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
