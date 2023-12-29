"use client";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer/footer";
import Smooth from "@/components/smoothScroll";
import Container from "@/components/common/container";
import Prelanding from "@/components/preloading/PreLoading";
import { AnimatePresence } from "framer-motion";
import MarqueeComponent from "@/components/animationMarquee/MarqueeComponent";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 1500);
    })();
  });

  return (
    <Container>
      {/* <AnimatePresence>
        {isLoading && <Prelanding />}
      </AnimatePresence> */}
      <div>
        <Header />
        <MarqueeComponent />
        {/* <Hero cover="/image/directory.gif" title="A Centaur of Asia" content="Develop to be a centron hub of startup in Southeast Asiangion"> */}

        <Hero />
        <VideoContent />
        <AboutUs />
        <Footer />
      </div>
    </Container>
  );
}
