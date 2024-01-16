"use client";

import Image from "next/image";
import { NavsList } from "@/lib/navbarMenu";
import Link from "next/link";
import { Socail } from "@/lib/navbarMenu";
import Container from "../container";

const Footer = () => {
  return (
    <footer className="font-body">
      <div className="flex justify-center items-center border-t-2 border-b-2 py-2">
        <Image
          src="/icons/logo.svg"
          width={200}
          height={80}
          alt="Startup Nation"
          className="py-4"
        />
      </div>
      <nav className=" border-b-2 py-4 text-center text-[19px] md:text-[32px] ">
        {NavsList.map((item) => (
          <Link key={item.menu} href={item.path} className="px-3 effect-yellow">
            {item.menu}
          </Link>
        ))}
      </nav>
      <div className="py-4 flex justify-between items-center">
        <div className="flex justify-start gap-1 lg:gap-6">
          {Socail.map((item) => (
            <Link href={item.path} key={item.logo}>
              <Image src={item.logo} alt="icon" width={25} height={25} />
            </Link>
          ))}
        </div>
        <div className="font-normal text-center text-[12px] md:text-lg">
          COPY RIGHT @2023 Powered by Dreamslab.
        </div>
        <div className="font-normal text-center text-[12px] md:text-lg">
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
