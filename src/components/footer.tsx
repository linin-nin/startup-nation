"use client"

import Image from "next/image"
import Input from "@/ui/input"
import { NavsList } from "@/lib/navbarMenu"
import Link from "next/link"
import { Socail } from "@/lib/navbarMenu"

const Footer = () => {
  return (
    <footer>
        <main className="border-2 border-white mt-8">
        <div className="banner-footer flex justify-center items-center bg-white p-4 text-black text-lg font-bold">
            <h1>Join us !!!</h1>
        </div>
        <div className="m-6">
            <h2 className="font-normal text-normal text-center mb-6">Lorem ipsum dolor sit amet consectetur. Sit tincidunt amet volutpat neque porttitor. Morbi risus turpis
                 est platea aliquam ridiculus nibh. Imperdiet id eget tempus aliquam semper volutpat viverra dolor in.
            </h2>
<<<<<<< HEAD
            <div className="flex items-center">
                <div className="flex justify-center mr-3">
=======
            <div className="flex justify-start">
                <div className="mr-5 max-lg:mr-0 flex justify-center">
>>>>>>> 4fb58d94aef3889a42d9510eb3625feff6330096
                    <Image
                        src='/image/img.png'
                        width={950}
                        height={800}
                        alt="image"
                        className="border-2 max-lg:hidden"
                        />
                </div>
                <form className="flex flex-col mt-0 w-full">
                    <span className="font-normal text-medium mb-3">EMAIL</span>
                    <Input
                        text='email'
                        placeholder='Enter your email'
                    />
                    <span className="font-normal text-medium mb-3">PHONE</span>
                    <Input
                        text='text'
                        placeholder='Enter phone number'
                    />
                    <button type='submit' className="bg-white border-2 border-white text-black w-full text-center font-bold p-3 mt-4 text-medium hover:bg-black hover:text-white">Submit</button>
                </form>
            </div>
        </div>
    </main>
    <div className="flex justify-center items-center mt-6 border-t-2 border-b-2 py-2">
        <Image
            src="/icons/logo.svg"
            width={200}
            height={80}
            alt="Startup Nation"
            className="py-4 border-dotted rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full border-yellow-600"
        />
    </div>
    <nav className=" border-b-2 py-4 text-center">
        {NavsList.map((item)=>(
            <Link key={item.menu} href={item.path} className="title px-3">
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