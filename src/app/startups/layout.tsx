import React, { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@/components/home/header/Header";
import Hero from "@/components/home/Hero";
import ShowPath from "@/components/directory/showPath";
import Container from "@/components/container";
import Footer from "@/components/footer/footer";

const StartupsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <ShowPath />
      {children}
      <Footer />
    </Container>
  );
};

export default StartupsLayout;
