"use client";
import Pagination from "./pagination";

import { useState } from "react";

const Search = () => {
  const [pages, setpages] = useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setpages(p);
  };

  return (
    <section className="bg-black text-white pt-5 padding-body font-body">
      <div className="md:flex justify-between gap-8 w-[100%] h-16 container">
        {/* filter  */}
        <div className=" flex md:w-[47%] w-full border-2 border-white md:py-8 mb-3 px-5 items-center">
          <div className=" w-full text-2xl">filter project</div>
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
        <div className="px-5 w-full items-center md:py-8 flex border-2 border-white">
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
            <div className="w-full bg-red-500">
              <input
                type="text"
                placeholder="search"
                className="w-[100%] outline-none text-2xl placeholder:text-2xl bg-black"
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
