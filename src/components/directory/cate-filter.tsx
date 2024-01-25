"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";

const Filter = ({ category }: { category: any[] }) => {
  const [drop, setdrop] = useState(false);
  const [query, setquery] = useQueryState("cate");

  return (
    <div
      onClick={() => setdrop(!drop)}
      className=" flex md:w-[47%] w-full border-2  border-white md:py-8 py-2 mb-3 px-5 items-center"
    >
      <input
        className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
        value={query || ""}
        placeholder="filter project"
        onChange={(e) => setquery(e.target.value.toLowerCase())}
      />

      <div className="relative">
        <div className="relative">
          <div className="cursor-pointer">
            {drop ? <ChevronUp /> : <ChevronDown />}
          </div>
          <ul
            className={`absolute text-xl capitalize w-[420px] bg-black border-2 h-[293px] overflow-y-scroll no-scrollbar rounded-md z-[30] top-[50px] right-0 ${
              drop ? "hidden" : "hidden"
            }`}
          >
            <Link href="/startups">
              <li className="py-3 pl-3 border-b-2">All</li>
            </Link>
            {/* {category
              .filter((abs) => abs.category_name.toLowerCase().includes(query))
              .map((category) => (
                <div key={category.id}>
                  <li
                    onClick={() => setquery(category.category_name)}
                    className="hover:bg-gray-800 p-3"
                  >
                    {category.category_name}
                  </li>
                </div>
              ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
