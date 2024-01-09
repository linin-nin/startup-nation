"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationBar = ({totalPage}:{totalPage?:number}) => {
  const numPage = Array.from({length: totalPage || 0}, (_, index) => index + 1)
  const [active, setactive] = useState(false)
  return (
    <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400">
        <div>1 -6 from 100</div>
        <div className="flex justify-between gap-10">
            <ChevronLeft size={33}/>
            <div className='flex'>
              {numPage.map((num) => (
                <p onClick={() => setactive(!active)} key={num} className={`border-2 px-5 ml-2 hover:bg-gray-600 cursor-pointer`}>{num}</p>
              ))}
            </div>
            <ChevronRight size={33}/>
        </div>
        <div>Show rows </div>
    </div>
  )
}

export default PaginationBar