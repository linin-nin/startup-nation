"use client";

import EmailContactus from "@/components/contactUs/Emailcontactus";
import HeroContactus from "@/components/contactUs/HeroContactus";
import GoogleMap from "@/components/contactUs/Map";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";
import Header from "@/components/home/header/Header";
import React from "react";
import Smooth from "@/components/ui/smoothScroll";
import Container from "@/components/container";

const ContactUs = () => {
  return (
    <Smooth>
      <Container>
        <Header />
        <ShowPath />
        <HeroContactus />
        <GoogleMap />
        <EmailContactus />
        <Footer />
      </Container>
    </Smooth>
  );
};

export default ContactUs;