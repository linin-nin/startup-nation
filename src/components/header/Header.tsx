"use client";
import React, { useState } from "react";
import Image from "next/image";
import SideBar from "./SideBar";
import { Button, buttonVariants } from "../ui/button";

const Header = () => {
  const [mode, setmode] = useState(false);
  const handleClick = () => {
    setmode(true);
    console.log(mode);
  };
  // button-style text-[10px] font-bold sm:text-[20px] rounded-none
  return (
    <header className="font-body pb-3 border-white sticky border-b-2 top-0 bg-black z-[99]">
      <nav className=" flex justify-between items-center">
        <Button
          className={buttonVariants({
            className:
              "button-style py-3 text-[10px] font-bold sm:text-[20px] rounded-none"
          })}
        >
          Apply
        </Button>
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
