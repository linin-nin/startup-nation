"use client";
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Prelanding from "@/components/preloading/PreLoading";

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
    <main>
      <AnimatePresence>{isLoading && <Prelanding />}</AnimatePresence>
      <div className="container padding-body font-body">
        <Header />
        <Hero />
        <VideoContent />
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}
