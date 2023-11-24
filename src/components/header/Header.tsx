"use client";
import React, { useState } from "react";
import Image from "next/image";
import SideBar from "./SideBar";

const Header = () => {
  const [mode, setmode] = useState(false);
  const handleClick = () => {
    setmode(true);
    console.log(mode);
  };

  return (
    <header className="container font-body border-b-2 border-white sticky top-0 bg-black z-[99]">
      <nav className=" flex justify-between items-center">
        <button className="button-style text-[14px] font-bold sm:text-[20px]">
          Apply
        </button>
        <div className="logo">
          <Image
            src="/icons/logo.svg"
            width={0}
            height={0}
            alt="Startup Nation"
            className="w-[120px] h-[100px] sm:w-[500px] sm:h-[100px]"
          />
        </div>
        <div className="">
          <SideBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
