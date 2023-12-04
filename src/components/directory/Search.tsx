"use client";
import Pagination from "./pagination";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Search = () => {
  const [pages, setpages] = useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setpages(p);
  };

  return (
    <section className="bg-black text-white py-5 padding-body font-body">
      {/* Path Route */}
      <div className="container lg:py-5 md:py-4 py-3 mb-5 border-b-2 border-t-2 font-body padding-body">
        <div className="inline-block">
          <div className="flex justify-between sm:gap-2 gap-[5px]">
            <Link href="/">
              <h2 className="sm:text-2xl text-[13px] hover:underline">Home</h2>
            </Link>
            <Image
              src={"/icons/greater-then.svg"}
              alt="greater-than-icon"
              width={22}
              height={22}
            />
            <h2 className="text-yellow-300 sm:text-2xl text-[13px]">
              Startup Directory
            </h2>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px] container">
        {/* filter  */}
        <div className=" flex md:w-[47%] w-full border-2 border-white md:py-8 py-2 mb-3 px-5 items-center">
          <div className=" w-full sm:text-2xl text-13px]">filter project</div>
          <div className=" w-[7%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        {/* search */}
        <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
          <div className="flex justify-start w-full">
            <div className="flex pr-4 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            {/* <div className="ml-4 bg-blue-700">search project</div> */}
            <div className="w-full">
              <input
                type="text"
                placeholder="search"
                className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
              />
            </div>
            {/* button navigate */}
            <div className="flex">
              <button className="pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default Search;
