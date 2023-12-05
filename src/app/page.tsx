"use client";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer/footer";
import Smooth from "@/components/smoothScroll";
import Prelanding from "@/components/preloading/PreLoading";
import { AnimatePresence } from "framer-motion";
import MarqueeComponent from "@/components/animationMarquee/MarqueeComponent";
import App from "@/components/cobe";

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
    <main className="container padding-body font-body">
      {/* <AnimatePresence>{isLoading && <Prelanding />}</AnimatePresence> */}
      <Smooth>
        <div>
          {/* <Header />
          <MarqueeComponent />
          <Hero />
          <VideoContent />
          <AboutUs /> */}
          <App/>
          <Footer />
        </div>
      </Smooth>
    </main>
  );
}
