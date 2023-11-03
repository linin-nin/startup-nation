import Hero from "@/components/Hero";
import Rocket from "@/components/Rocket";
import Header from "@/components/header/Header";
import React from "react";
import RocketTry from "../../components/RocketTry";
import HeroTry from "@/components/HeroTry";

const page = () => {
  return (
    <div className="container padding-body font-body">
      <Header />
      <HeroTry />
      <RocketTry />
    </div>
  );
};

export default page;
