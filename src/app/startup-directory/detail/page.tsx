import Info_detail from "@/components/directory/info";
import Header from "@/components/header/Header";
import ShowPath from "@/components/directory/showPath";
import Hero from "@/components/directory/directory";
import Footer from "@/components/footer/footer";

const aboutUs = () => {
  return (
    <div>
      <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </div>
        <Hero />
      <div className="padding-body">
        <ShowPath />
      </div>
        <Info_detail />
      <div className="padding-body">
        <Footer />
      </div>
    </div>
  );
};

export default aboutUs;
