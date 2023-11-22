/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ShowPath from "@/components/directory/showPath";
import Search from "@/components/directory/Search";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import Hero from "@/components/directory/directory";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <div className="padding-body font-body">
        <ShowPath />
      </div>
      <Search />
      <div className="padding-body font-body">
        <Footer />
      </div>
    </div>
  );
};

export default page;
