"use client"

import Image from "next/image"
import { NavsList } from "@/lib/navbarMenu"
import Link from "next/link"
import { Socail } from "@/lib/navbarMenu"

const Footer = () => {
  return (
    <footer className="container font-body">

        <div className="flex justify-center items-center mt-6 border-t-2 border-b-2 py-2">
            <Image
                src="/icons/logo.svg"
                width={200}
                height={80}
                alt="Startup Nation"
                className="py-4"
            />
        </div>
        <nav className=" border-b-2 py-4 text-center">
            {NavsList.map((item)=>(
                <Link key={item.menu} href={item.path} className="title px-3 effect-yellow">
                    {item.menu}
                </Link>
            ))}
        </nav>
        <div className="py-4 flex justify-between items-center">
            <div className="flex justify-start gap-6 max-lg:gap-2">
                {Socail.map((item)=>(
                    <Link href={item.path} key={item.logo}>
                        <Image
                        src={item.logo}
                        alt="icon"
                        width={40}
                        height={40}
                        />
                    </Link>
                ))}
            </div>
            <div className="font-normal text-2xl text-center max-lg:text-xl">
                COPY RIGHT @2023 Powered by Dreamslab.
            </div>
            <div className="font-normal text-2xl text-center max-lg:text-xl">
                All Rights  Reserved.
            </div>
        </div>
    </footer>
  ) 
}

export default Footer