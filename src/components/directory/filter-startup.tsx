"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Filter = ({
  category,
  filter = "Filter project"
}: {
  category: any[];
  filter?: string;
}) => {
  const router = useRouter();
  const [drop, setdrop] = useState(false);
  const [selectCategory, setselectCategory] = useState("Filter Project");

  return (
    <div className=" flex md:w-[47%] w-full border-2  border-white md:py-8 py-2 mb-3 px-5 items-center">
      <p className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black">
        {selectCategory}
      </p>
      <div className="relative">
        <div onClick={() => setdrop(!drop)} className="relative">
          <div className="cursor-pointer">
            {drop ? <ChevronUp /> : <ChevronDown />}
          </div>
          <ul
            className={`absolute text-xl capitalize w-[420px] bg-black border-2 h-[293px] overflow-y-scroll no-scrollbar rounded-md z-[30] top-[50px] right-0 ${
              drop ? "block" : "hidden"
            }`}
          >
            <li className="hover:bg-gray-800 p-3">{selectCategory}</li>
            {category.map((item) => (
              // <Link key={item.id} href={`/startups`}>
              <li
                key={item.id}
                className="hover:bg-gray-800 p-3"
                onClick={() => setselectCategory(item.category_name)}
              >
                {item.category_name}
              </li>
              // </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
