import VideoContent from "@/components/VideoContent";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container padding-body font-body">
      <VideoContent/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
