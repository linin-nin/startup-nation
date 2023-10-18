import Image from "next/image"

const Hero = () => {
  return (
    <main>
        <Image
        src="/image/directory-hero-cover.jpeg"
        alt="image"
        width={1440}
        height={577}/>
        <div>
            <h1>Startup Directory</h1>
        </div>
    </main>
  )
}

export default Hero