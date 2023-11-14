"use client";
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Rocket from "@/components/Rocket";
import Join from "@/components/joinUs";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Prelanding from "@/components/preloading/PreLoading";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  });
  return (
    <main>
      <AnimatePresence>{isLoading && <Prelanding />}</AnimatePresence>
      <div className="container padding-body font-body">
        <Header />
        <Hero />
        <Rocket />
        <VideoContent />
        <AboutUs />
        <Join />
        <Footer />
      </div>
    </main>
  );
}
