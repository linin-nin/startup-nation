"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Media } from "@/lib/utils/media";

interface Props {
  data: any[];
}

const Slide = ({ data }: Props) => {
  const [urlImage, seturlImage] = useState(0);
  return (
    <div className="md:flex md:justify-start">
      <div className="w-[100%] relative h-[386px]">
        <Image
          id="slide"
          src={Media(data[urlImage])}
          fill
          loading="lazy"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:block flex overflow-y-scroll h-[387px] no-scroll w-[200px] justify-center items-center md:pt-0 md:pl-5 pt-4">
        {data.map((item: any, index: number) => (
          <div
            key={item}
            className={`w-[140px] h-[140px] md:mb-3 overflow-hidden ${
              urlImage === index
                ? "opacity-100 border-2"
                : "opacity-70 hover:opacity-100"
            } md:mr-0 mr-3 relative`}
          >
            <Image
              onClick={() => seturlImage(index)}
              src={Media(item)}
              fill
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
