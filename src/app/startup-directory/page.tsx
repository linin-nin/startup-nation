"use client";

import React from "react";
import Smooth from "@/components/smoothScroll";
import Hero from "@/components/directory/directory";
import Header from "@/components/header/Header";
import ShowPath from "@/components/directory/showPath";
import Search from "@/components/directory/Search";
import Footer from "@/components/footer/footer";

const Page = () => {
  return (
    <Smooth>
      <div>
        <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
          <Header />
        </div>
        <Hero />
        <div className="padding-body font-body border-b-2 border-t-2">
          <ShowPath />
        </div>
        <Search />
        <div className="padding-body font-body">
          <Footer />
        </div>
      </div>
    </Smooth>
  );
};

export default Page;
