"use client";
import Image from "next/image";

const Hero = ({
  cover,
  title,
  subtitle
}: {
  cover: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <main>
      <div className="w-full h-[620px] relative bg-cover bg-center">
        <Image
          src={cover}
          fill
          alt="bg-cover"
          className="w-full h-full object-cover"
        />
        <div className="flex opacity-100 inset-0 before:bg-black before:opacity-50 before:absolute before:w-full before:inset-0 before:h-full before:top-0 before:left-0 items-center justify-center absolute ">
          <div className="z-10 text-center">
            <h1 className="lg:text-[130px] md:text-[110px] sm:text-[90px] text-[60px] font-bold">
              {title}
            </h1>
            <div className="tracking-[2px] flex justify-center ">
              <p className="text-2xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
