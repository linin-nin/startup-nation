import Image from "next/image"

const Hero = () => {
  return (
    <main>
        <div className="w-full h-[520px] relative bg-cover bg-center">
          <Image src="/test-bg.jpeg" fill  alt="bg-cover" className="w-full h-full object-cover"/>
          <div className="flex opacity-100 inset-0 before:opacity-60 before:absolute before:bg-black before:w-full before:inset-0 before:h-full before:top-0 before:left-0 items-center justify-center absolute ">
            <div className="z-10">
              <h1 className="">Startup Directory</h1>
              <div>
                <button className="bg-black border-2 border-white">Apply</button>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Hero