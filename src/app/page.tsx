import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container padding-body font-body">
      <Header/>
      <Hero/>
      <VideoContent/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
