import Image from "next/image"
// import { motion } from "framer-motion"

const Directory = () => {
  return (
    <section>
        <div className="w-full h-[520px] relative bg-cover bg-center">
          <Image src="/image/directory-img.jpg" fill  alt="bg-cover" className="w-full h-full object-cover"/>
          <div className="flex opacity-100 inset-0 before:opacity-70 before:absolute before:bg-black before:w-full before:inset-0 before:h-full before:top-0 before:left-0 items-center justify-center absolute ">
            <div className="z-10 text-center">
              <h1 className="text-[128px] font-bold">Startup Directory</h1>
              <div className="flex justify-center">
                <div className="border-2 border-dashed p-2 cursor-pointer">
                  <button className="bg-black border-2 border-white text-[32px] py-3 px-10 hover:bg-white hover:text-black">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Directory