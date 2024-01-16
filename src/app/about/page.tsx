"use client";

import Intro from "@/components/About/intro";
import EarthMap from "@/components/About/earthMap";
import Footer from "@/components/footer/footer";
import Header from "@/components/home/header/Header";
import OurPhilosophy from "@/components/About/ourPhilosophy";
import Smooth from "@/components/ui/smoothScroll";

const About = () => {
  return (
    <Smooth>
      <div className="container padding-body font-body">
        <Header />
        <Intro />
        <EarthMap />
        <OurPhilosophy />
        <Footer />
      </div>
    </Smooth>
  );
};

export default About;
