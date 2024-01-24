"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
const Filter = ({ category }: { category: any[] }) => {
  const [drop, setdrop] = useState(false);
  const [query, setquery] = useState("");
  const [first, setfirst] = useState("");
  const [selectitem, setselectitem] = useState(false);

  return (
    <div
      onClick={() => setdrop(!drop)}
      className=" flex md:w-[47%] w-full border-2  border-white md:py-8 py-2 mb-3 px-5 items-center"
    >
      <input
        onClick={() => setselectitem(!selectitem)}
        className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
        value={selectitem ? first : query}
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
              drop ? "block" : "hidden"
            }`}
          >
            <Link href="/startups">
              <li className="hover:bg-gray-800 p-3">All</li>
            </Link>
            {category
              .filter((abs) => abs.category_name.toLowerCase().includes(query))
              .map((category) => (
                <Link
                  onClick={() => setfirst(category.category_name)}
                  key={category.id}
                  href={`/startups/${category.slug}`}
                >
                  <li className="hover:bg-gray-800 p-3">
                    {category.category_name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
