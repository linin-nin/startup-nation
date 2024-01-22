"use client"
import { directusClient } from "@/lib/directus_client";
import { createItem } from "@directus/sdk";
import EmailContactus from "@/components/contactUs/Emailcontactus";
import HeroContactus from "@/components/contactUs/HeroContactus";
import GoogleMap from "@/components/contactUs/Map";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";
import Header from "@/components/home/header/Header";
import React from "react";
import Container from "@/components/container";




const ContactUs = () => {
  // const result = await directusClient.request(
  //   createItem('Subscriber', {
  //     email: 'sreyninpon@gmail.com',
  //     phone_number: '070419305',
  //   })
  // );
  return (
    <Container>
      <Header />
      <ShowPath />
      <HeroContactus />
      <GoogleMap />
      <EmailContactus />
      <Footer />
    </Container>
  );
};

export default ContactUs;
