"use client"
import Image from "next/image"
import { Cards } from "@/lib/card-directory"
import Link from "next/link"
import Pagination from '@mui/material/Pagination';
import { useState } from "react"


const Search = () => {
  const [pages, setpages] = useState(1)
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setpages(p)
  }

  return (
    <section className="bg-white text-black mt-[-2px] pt-10 padding-body">
      <div className=" flex h-16 container">
        {/* filter  */}
        <div className=" h-[100%] w-[30%] flex justify-between items-center border-2 border-gray-400 p-4">
          <div>
            filter project
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
        </div>
        {/* search */}
        <div className=" h-[100%] w-[60%] flex items-center border-t-2 border-b-2 border-gray-400 p-4">
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </div>
          <div className="ml-4">search project</div>
        </div>
        {/* button navigate */}
        <div className=" h-[100%] w-[10%] flex justify-between items-center border-2 border-gray-400">
          <button className=" w-[50%] h-[100%] center-element">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
          <button className=" w-[50%] h-[100%] border-l-2 border-gray-400 center-element">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        </div>
      </div>
      {/* ----grid--- */}

      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden">
        {Cards.map((item) => (
          <div key={item.id} className="relative before:absolute before:bg-gray-400 before:h-[100vh] before:w-[2px] before:top-0 before:left-[-17px]">
            <div className="h-[416px] ">
              <Image src={item.img} alt="image" width={416}
                height={416} className="h-full w-full object-cover"
              />
            </div>
            {/* card content  */}
            <div className="flex justify-between">
              <div className="">
                <Link href="/startup-directory/detail"><h2 className="text-2xl hover:underline hover:text-blue-400">{item.name}</h2></Link>
                <p>{item.date}</p>
              </div>
              <p>0{item.id}/100</p>
            </div>
          </div>
        ))}

      </div>
      {/* ---Pagination--- */}
      <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400 container ">
        <div>1 -6 from 100</div>
        <Pagination
          count={16}
          color="standard"
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={handleChange} />
        <div>Show rows </div>
      </div>
    </section>
  )
}

export default Search