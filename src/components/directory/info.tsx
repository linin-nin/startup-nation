"use client";

import Image from "next/image";
import Link from "next/link";
import { Socail } from "@/lib/navbarMenu";
import { useState } from "react";

const images = [
  {
    img: "/image/office1.jpeg"
  },
  {
    img: "/image/office2.jpeg"
  },
  {
    img: "/image/office4.jpeg"
  }
];

const Info_detail = () => {

  const [urlImage, seturlImage] = useState(0)

  return (
    <main>
    {/*  Path route */}
      <div className="lg:py-5 container md:py-4 p-3 mb-5 border-b-2 font-body">
      <div className="inline-block">
        <div className="flex justify-between gap-4">
          <Link href="/">
            <h2 className="text-2xl hover:underline">Home</h2>
          </Link>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={32}
            height={32}
          />
          <Link href="/startup-directory">
            <h2 className="text-2xl hover:underline">Startup Directory</h2>
          </Link>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={32}
            height={32}
          />
          <h2 className="text-yellow-300 text-2xl">
            DreamsLab,co.LTD
          </h2>
        </div>
      </div>
      </div>

    <div className="text-white bg-black flex justify-start py-8">
      <div className="container lg:flex">
        <div className="lg:pr-5 lg:w-[70%] w-full">
          <div className="md:flex md:justify-start">
            <div className="w-[100%] relative h-[386px]">
              <Image
                id="slide"
                src={images[urlImage].img}
                fill
                loading="lazy"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            {/* md:ml-5 flex md:block md:mt-0 mt-5 justify-center gap-3 md:py-0 py-2 */}
            <div className="md:block flex justify-center items-center md:pt-0 md:pl-5 pt-4">
              {images.map((item, index) => (
                <div key={index} className={`w-[120px] h-[120px] md:mb-3 overflow-hidden ${urlImage === index ? "opacity-100":"opacity-50"} md:mr-0 mr-3 relative`}>
                  <Image onClick={() => seturlImage(index)} src={item.img} fill alt="image" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>
          <p className="w-[100%] my-5">
            What Is a Startup? The term startup refers to a company in the first
            stages of operations. Startups are founded by one or more
            entrepreneurs who want to develop a product or service for which
            they believe there is demand.
          </p>
        </div>
        {/* -------------------Right-------------------- */}
        <div className="lg:border-l-2 border-white lg:pl-5 lg:w-[48%] w-full">
          <div className="border-2 border-white p-5 lg:block flex flex-col justify-center">
            <div className="flex justify-start">
              <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                <Image
                  src="/image/business 09.jpg"
                  fill
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <h1 className="md:text-4xl sm:text-3xl text-2xl bold">
                  Dreamslab,co.LTD
                </h1>
                <p className="text-gray-500">
                  Develop the latest technology around the world
                </p>
              </div>
            </div>
            <div className="my-3">
              <button className="px-4 py-2 bg-none border-2  hover:bg-white hover:text-black  border-white mr-3">
                Robot
              </button>
              <button className="px-4 py-2 bg-none border-2 hover:bg-white hover:text-black  border-white">
                Technology
              </button>
            </div>
            <div className="leading-9">
              <p>Founded: 2021</p>
              <p>Location : Cambodia, Phnom Penh , Dangkao </p>
              <p>Team Size : 56</p>
              <p>
                Website:{" "}
                <Link href="https://dreamslab.dev/">
                  <span className="text-white underline hover:text-yellow-500 cursor-pointer">
                    http://dreamslab
                  </span>
                </Link>
              </p>
              <p>
                Phone Number :{" "}
                <span className="text-white underline hover:text-yellow-500 cursor-pointer">
                  ( 855 ) 123 123 123
                </span>
              </p>
              <div className=" flex justify-start gap-10 mt-3">
                {Socail.map((item) => (
                  <Link href={item.path} key={item.logo}>
                    <Image src={item.logo} alt="icon" width={40} height={40} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <h2 className="py-2 title">Founder</h2>
          <div>
            <div className="flex justify-start mb-3">
              <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                <Image
                  src="/image/serevuth.jpg"
                  fill
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p>San SereyVath</p>
                <p>
                  Manager of{" "}
                  <Link href="https://dreamslab.dev/">
                    <span className="text-white underline hover:text-yellow-500 cursor-pointer">
                      Dreamslab.dev
                    </span>
                  </Link>
                </p>
                <div className="flex justify-start gap-5 mt-[2px]">
                  {Socail.map((item) => (
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
            <p>
              Lorem ipsum dolor sit amet consectetur. At non id tellus ornare
              placerat quam laoreet. In ipsum amet sapien risus sem augue lorem
              vel. Euismod nunc lectus ut volutpat sodales sollicitudin.
              Imperdiet tellus id porttitor lectus aliquet sed pretium integer
              nam.
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Info_detail;
