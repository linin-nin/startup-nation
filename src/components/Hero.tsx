import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from "next/image"
import { Socail } from "@/lib/navbarMenu"
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-section1 flex h-[500px] items-center justify-between'>
                <div className=' flex max-w-[85%] items-center justify-center flex-col text-hero pl-36'>
                    <Marquee speed={100} direction='left' className='marquee text-[500] border border-white 
                    p-2 text-[1.5rem] font-medium'>
                        <ul className='flex [&>*:nth-child(odd)]:text-[#F8DC4C]'>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>

                        </ul>
                    </Marquee>
                    <div className=''>A Centaur of Asia</div>
                    <Marquee speed={100} direction='right' className='marquee text-[500] border border-white 
                    p-2 text-[1.5rem] font-medium'>
                        <ul className='flex [&>*:nth-child(even)]:text-[#F8DC4C]'>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                            <li>STARTUPNATION LAB</li>
                        </ul>
                    </Marquee>
                </div>
                <div className='border-2 border-white w-16 h-[55%] flex flex-col items-center justify-between p-4'>
                    {Socail.map((item) => (
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
            </div>
        </section>
    )
}

export default Hero