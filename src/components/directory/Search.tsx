
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"


const Search = () => {
  const [click, setclick] = useState("")

  return (
    <section className="bg-white text-black h-[300px] w-[100%] absolute left-0 right-0">
      <div className="container padding-body flex h-16 mt-6">
        {/* filter  */}
        <div className=" h-[100%] w-[30%] flex justify-between items-center border-2 border-black p-4">
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
        <div className=" h-[100%] w-[60%] flex items-center border-t-2 border-b-2 border-black p-4">
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </div>
          <div className="ml-4">search project</div>
        </div>
        {/* button navigate */}
        <div className=" h-[100%] w-[10%] flex justify-between items-center border-2 border-black">
          <button className=" w-[50%] h-[100%] center-element">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
          <button className=" w-[50%] h-[100%] border-l-2 border-black center-element">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        </div>
      </div>
    </section>
  )
}

export default Search