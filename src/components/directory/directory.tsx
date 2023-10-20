import Image from "next/image"

const Hero = () => {
  return (
    <main>
        <Image
        src="/image/business 08.jpg"
        alt="image"
        width={1440}
        height={577}
        className="h-[577px]"/>
        <div className="inset-0 h-[690px] absolute opacity-50 bg-black flex justify-center items-center">
          <h1 className="opacity-100">Startup Directory</h1>
        </div>
    </main>
  )
}

export default Hero