"use client";
import React from "react";
import Container from "../container";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { newsblogCard } from "@/lib/newsblog/newsblog";

function Newsblog() {
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      event.target === slideRef.current ||
      (slideRef.current && slideRef.current.contains(event.target as Node))
    ) {
      event.preventDefault();

      if (slideRef.current && slideRef.current instanceof HTMLElement) {
        slideRef.current.style.scrollBehavior = "unset";
        slideRef.current.style.cursor = "grabbing";
        let startX = event.pageX - slideRef.current.offsetLeft;
        let scrollLeft = slideRef.current.scrollLeft;

        const handleMouseMove = (event: MouseEvent) => {
          event.preventDefault();

          if (slideRef.current) {
            const x = event.pageX - slideRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            slideRef.current.scrollLeft = scrollLeft - walk;
          }
        };

        const handleMouseUp = (event: MouseEvent) => {
          event.preventDefault();

          if (slideRef.current) {
            slideRef.current.style.scrollBehavior = "smooth";
            slideRef.current.style.cursor = "grab";

            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }
    }
  };

  return (
    <div className="mt-5 ">
      {/* title  */}
      <div className="border-t-2 border-b-2 py-3 mb-7 title">News & Blog</div>

      {/* blog card  */}
      <div
        ref={slideRef}
        onMouseDown={handleMouseDown}
        className="flex gap-5 overflow-x-scroll no-scroll relative "
      >
        {newsblogCard.map((data: any) => {
          return (
            <div key={data.id}>
              {/* one card  */}
              <div className="border-white border-l-2 pl-5  ">
                {/* tag  */}
                <div className="text-[#F8DC4C] text-[22px] my-2">
                  {data.tag}
                </div>
                {/* frame card  */}
                <div className=" p-1 frame relative ">
                  {/* image card  */}
                  <div className="w-[400px] h-[400px] relative z-10 ">
                    <Image
                      fill
                      objectFit="cover"
                      src={data.imgCard}
                      alt="image"
                    />
                  </div>
                </div>
                {/* sub title  */}
                <div className="text-[22px] my-3 pb-3 border-b">
                  <Link href={"#"} className="hover:underline">
                    {data.sub_title}
                  </Link>
                </div>
                {/* blog owner information  */}
                <div className="flex 500 items-center justify-between">
                  <div className="flex items-center">
                    {/* img profile */}
                    <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden relative">
                      <Image
                        fill
                        objectFit="cover"
                        src={data.owner_profile}
                        alt="profile"
                      />
                    </div>
                    {/* profile name  */}
                    <div className="ml-3 text-[23px]">{data.owner_name}</div>
                  </div>

                  {/* post date  */}
                  <div className="text-[20px] opacity-80">{data.post_date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* button for explore news blog  */}
      <div className="flex justify-center my-10">
        <Link
          className="text-[1rem] md:text-[2rem] p-3 border-2 border-effect "
          href={"#"}
        >
          EXPLORE <span className="text-[#F8DC4C]">NEWS & BLOG</span>
          <span>
            {/* arrow right icon  */}
            <svg
              className="inline-block ml-5"
              width="32"
              height="14"
              viewBox="0 0 38 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38 7L26.0813 0.118719V13.8813L38 7ZM0 8.19187H27.2731V5.80813H0L0 8.19187Z"
                fill="white"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Newsblog;
