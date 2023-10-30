import Intro from "@/components/About/intro"
import EarthMap from "@/components/About/Earthmap"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/Header"
import OurPhilosophy from "@/components/About/ourPhilosophy"

const About = () => {
  return (
    <div>
      <div  className=" bg-black sticky top-0 z-[999]">
        <Header/>
      </div>
      <Intro/>
      <EarthMap/>
      <OurPhilosophy/>
      <Footer/>
    </div>
  )
}

export default About