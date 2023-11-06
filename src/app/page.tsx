"use client"
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Rocket from "@/components/Rocket";
import Join from "@/components/joinUs";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

export default function Home() {

  return (
    <div className="container padding-body font-body">
      <Header />
      <Hero />
      <Rocket />
      <VideoContent />
      <AboutUs />
      <Join />
      <Footer />
    </div>
  );
}
