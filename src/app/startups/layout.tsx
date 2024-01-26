import React, { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@/components/home/header/Header";
import Hero from "@/components/directory/hero";
import ShowPath from "@/components/directory/showPath";
import Container from "@/components/container";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";

const StartupsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Hero
            cover="/image/la.gif"
            title="Startup Directory"
            subtitle="Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
              semper nec rhoncus leo arcu ultricies tincidunt."
          />
       <div
      className={cn(
        "lg:py-5 md:py-4 py-3 mb-5 border-b-2 border-t-2 font-body padding-body"
      )}
    >
      <div className="inline-block">
        <div className="flex justify-between gap-4">
          <Link href="/">
            <h2 className="sm:text-2xl text-[13px] hover:underline">Home</h2>
          </Link>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={22}
            height={22}
          />
          <h2 className="text-yellow-300 sm:text-2xl text-[13px]">
            Startup Directory
          </h2>
        </div>
      </div>
    </div>
      {children}
      <Footer />
    </Container>
  );
};

export default StartupsLayout;
