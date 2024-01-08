"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Dropdownbox = () => {
  const [drop, setdrop] = useState(false);
  return (
    <div className="relative">
      {/* <ChevronDown />
        <ChevronUp /> */}
      <div onClick={() => setdrop(!drop)}>
        {drop ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul
        className={`absolute text-xl capitalize w-[420px] bg-black border-2 rounded-md z-[30] top-[50px] right-0 ${
          drop ? "block" : "hidden"
        }`}
      >
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">technology</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Food</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Education Technology</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Social Media</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Entertainment</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">technology</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Food</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Education Technology</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Social Media</li>
        </Link>
        <Link href="/directory">
          <li className="hover:bg-gray-800 p-3">Entertainment</li>
        </Link>
      </ul>
    </div>
  );
};

export default Dropdownbox;
