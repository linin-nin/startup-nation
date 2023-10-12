"use client"
import React from 'react'
import Image from "next/image"
import Burgermenu from './Burgermenu'

const Header = () => {
    return (
        <header className='border-b-2 border-white sticky top-0 bg-black z-[999]'>
            <nav className=' flex justify-between items-center'>
                <button className='button-style text-[20px] font-bold'>Apply</button>
                <div className="logo">
                    <Image
                        src="/icons/logo.svg"
                        width={200}
                        height={80}
                        alt="Startup Nation"
                        className="py-4"
                    />


                </div>
                <div className="burger-menu"><Burgermenu/></div>
            </nav>
        </header>

        
    )
}

export default Header