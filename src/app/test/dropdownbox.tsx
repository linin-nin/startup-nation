"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";


const Dropdownbox = ({categoryData}:{categoryData: any[]}) => {
  const [drop, setdrop] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setdrop(!drop)} className="cursor-pointer">
        {drop ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul
        className={`absolute text-xl capitalize w-[420px] bg-black border-2 h-[293px] overflow-y-scroll no-scrollbar rounded-md z-[30] top-[50px] right-0 ${
          drop ? "block" : "hidden"
        }`}
      >
      {
        categoryData.map((category) => (
          <Link key={category} href="/directory">
          <li className="hover:bg-gray-800 p-3">{category.category_name}</li>
        </Link>
        ))
      }  
      </ul>
    </div>
  );
};

export default Dropdownbox;
