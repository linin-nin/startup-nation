import Hero from "@/components/directory/directory";
import ShowPath from "@/components/directory/showPath";
import Search from "@/components/directory/Search";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";

const page = () => {
  return (
    <div>
      <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <ShowPath />
      <Search />
      <Footer />
    </div>
  );
};

export default page;
