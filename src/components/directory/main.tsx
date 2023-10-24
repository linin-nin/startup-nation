"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"


const Main = () => {
const [click, setclick] = useState("")

  return (
    <main className='bg-white py-10 text-black padding-body'>
       <div className="border-2 border-black p-5 flex justify-start items-center bg-yellow-300">
           <motion.div className="flex justify-between gap-8 border-r-2 bg-red-400">
                <p className="text-2xl text-center">Filter project...</p>
                <Image src="/icons/greater-then.svg" width={30} height={30} alt="icon"/>
           </motion.div>
           <div className="bg-blue-400 flex justify-start">
            <Image src="/icons/search.svg" width={32} height={32} alt="icon" className=""/>
            <input type="search" placeholder="Search projects" className="placeholder:text-2xl"/>
           </div>
           <div className="flex justify-end bg-green-400">
            <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className="w-"/>
            <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon"/>
           </div>
        </div>
        {/* <table className="w-[100%] border-collapse border-2 border-black">
          <thead>
            <tr>
              <th className="border bg-red-400 border-black flex items-center justify-between">
                <p className="text-2xl text-center">Filter project...</p>
                <Image src="/icons/greater-then.svg" width={30} height={30} alt="icon"/>
              </th>
              <th className="bg-red-400 border-2 border-black flex">
                <Image src="/icons/search.svg" width={32} height={32} alt="icon" className=""/>
                <input type="search" placeholder="Search projects" className="placeholder:text-2xl"/>
              </th>
              <th>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className="w-"/>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon"/>
              </th>
            </tr>
          </thead>
        </table> */}
    </main>
  )
}

export default Main