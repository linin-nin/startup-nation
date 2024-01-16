"use client";
import React from "react";
import Image from "next/image";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className=" font-body pb-3 border-white sticky border-b-2 top-0 bg-black z-[99]">
      <nav className=" flex justify-between items-center">
        <button className="button-style text-[10px] font-bold sm:text-[20px]">
          Apply
        </button>
        <div className="logo">
          <Image
            src="/icons/logo.svg"
            width={0}
            height={0}
            alt="Startup Nation"
            className="w-[100px] h-[100px] sm:w-[500px] sm:h-[100px] mr-5"
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
