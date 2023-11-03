import Emptybox from "@/components/Emptybox";
import EmailContactus from "@/components/contactUs/Emailcontactus";
import HeroContactus from "@/components/contactUs/HeroContactus";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </div>
      <div className="padding-body">
        <ShowPath />
        <HeroContactus />
        <EmailContactus />
        <Emptybox />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
