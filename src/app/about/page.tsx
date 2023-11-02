import Intro from "@/components/About/intro";
import EarthMap from "@/components/About/earthMap";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import OurPhilosophy from "@/components/About/ourPhilosophy";

const About = () => {
  return (
    <div className="container padding-body">
      <Header />
      <Intro />
      <EarthMap />
      <OurPhilosophy />
      <Footer />
    </div>
  );
};

export default About;
