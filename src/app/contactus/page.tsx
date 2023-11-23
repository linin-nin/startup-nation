"use client"

import Emptybox from "@/components/Emptybox";
import EmailContactus from "@/components/contactUs/Emailcontactus";
import HeroContactus from "@/components/contactUs/HeroContactus";
import Map from "@/components/contactUs/Map";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import React from "react";
import Smooth from "@/components/smoothScroll";

const ContactUs = () => {
  return (
    <Smooth>
      <div>
        <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
          <Header />
        </div>
        <div className="padding-body font-body">
          <ShowPath />
          <HeroContactus />
          <Map />
          <EmailContactus />
          <Emptybox />
          <Footer />
        </div>
      </div>
    </Smooth>
  );
};

export default ContactUs;