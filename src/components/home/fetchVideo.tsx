"use client";
import Header from "@/components/home/header/Header";
import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/aboutUs";
import Footer from "@/components/footer/footer";
import Smooth from "@/components/ui/smoothScroll";
import Prelanding from "@/components/preloading/PreLoading";
import { AnimatePresence } from "framer-motion";
import MarqueeComponent from "@/components/ui/MarqueeComponent";
import VideoContent from "./VideoContent";
import Newsblog from "../newsblog/newsblog";
import PodcastComponent from "@/components/Podcast";

export default function Home({ data }: { data: any[] }) {
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
      <AnimatePresence>{isLoading && <Prelanding />}</AnimatePresence>
      <div>
        <div>
          <Header />
          <MarqueeComponent />
          <Hero />
          <VideoContent data={data} />
          {/* <AboutUs /> */}
          <Newsblog />
          <PodcastComponent />
          <Footer />
        </div>
      </div>
    </main>
  );
}
