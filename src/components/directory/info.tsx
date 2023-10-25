import Image from "next/image"
import Link from "next/link"
import { Socail } from "@/lib/navbarMenu"

const Info_detail = () => {
  return (
    <main className='bg-white text-black flex justify-start py-8 px-24'>
        <div className="pr-5 w-[864px] max-w-[864px]">
            <div className="flex">
                <div className=" h-[416px] w-[644px] relative bg-cover bg-center">
                  <Image src="/image/business 10.jpg" fill alt="image" className="w-full h-full object-cover"/>
                </div>
                <div className="ml-5">
                    <div className=" h-[196px] w-[196px] relative bg-cover bg-center mb-5">
                      <Image src="/image/business 10.jpg" fill alt="image" className="w-full h-full object-cover"/>
                    </div>
                    <div className=" h-[196px] w-[196px] relative bg-cover bg-center">
                      <Image src="/image/business 10.jpg" fill alt="image" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <p className="w-[100%] mt-5">What Is a Startup? The term startup refers to a company in the first stages of operations. 
                Startups are founded by one or more entrepreneurs who want to develop a product or service for which 
                they believe there is demand.
            </p>
        </div>

        {/* -------------------Right-------------------- */}
        <div className="border-l-2 border-gray-400 pl-5">
            <div className="border-2 border-gray-400 p-5">
                <div className="flex justify-start">
                    <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                      <Image src="/image/serevuth.jpg" fill alt="image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-5xl bold">Dreamslab,co.LTD</h1>
                        <p className="text-gray-500">Develop the latest technology around the world</p>
                    </div>
                </div>
                <div className="my-3">
                    <button className="px-4 py-2 bg-none border-2 border-black mr-3">Robot</button>
                    <button className="px-4 py-2 bg-none border-2 border-black">Technology</button>
                </div>
                <div className="leading-9">
                    <p>Founded: 2021</p>
                    <p>Location : Cambodia, Phnom Penh , Dangkao </p>
                    <p>Team Size : 56</p>
                    <p>
                        Website: <Link href="https://dreamslab.dev/"><span className="text-blue-500 hover:underline cursor-pointer">http://dreamslab</span></Link>
                    </p>
                    <p>Phone Number : <span className="text-blue-500 hover:underline cursor-pointer">( 855 ) 123 123 123</span></p>
                    <div className="bg-black flex justify-between">
                        {Socail.map((item)=>(
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
            </div>
            <h2 className="py-2 title">Founder</h2>
            <div>
                <div className="flex justify-start mb-3">
                    <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                      <Image src="/image/serevuth.jpg" fill alt="image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="ml-3">
                        <p>San SereyVath</p>
                        <p>Manager of <Link href="https://dreamslab.dev/"><span className="text-blue-500 hover:underline cursor-pointer">Dreamslab.dev</span></Link></p>
                        <div className="bg-black flex justify-between">
                            {Socail.map((item)=>(
                                <Link href={item.path} key={item.logo}>
                                    <Image
                                    src={item.logo}
                                    alt="icon"
                                    width={20}
                                    height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At non id tellus ornare placerat quam laoreet. In ipsum amet sapien risus sem augue lorem vel. 
                    Euismod nunc lectus ut volutpat sodales sollicitudin. Imperdiet tellus id porttitor lectus aliquet sed pretium integer nam.
                </p>
            </div>
        </div>
    </main>
  )
}

export default Info_detail