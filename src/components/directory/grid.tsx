"use client"
import Image from "next/image"
import { Cards } from "@/lib/card-directory"
import Link from "next/link"

const Grid = () => {
  return (
    <section className="grid grid-cols-3 bg-white text-black">
        {Cards.map((item)=>(
          <div key={item.id}  className="h-[500px] w-[416px] border-r-2 border-black pr-5">
            <Image src={item.img} width={416} height={416} bg-white alt="image" className="h-[87%]"/>
            <div className="flex justify-between">
              <div className="">
                <Link href="/startup-directory/detial-info"><h2 className="text-2xl ">{item.name}</h2></Link>
                <p>{item.date}</p>
              </div>
              <p>0{item.id}/100</p>
            </div>
          </div>
       ))}
    </section>
  )
}

export default Grid