import React from "react";
import Header from "@/components/header/Header";
import Search from "@/components/directory/Search";
import Footer from "@/components/footer/footer";
import Container from "@/components/common/container";

const Page = () => {
  return (
    <div>
      {/* <Container className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </Container> */}
      <Search />
      {/* <Container>
        <Footer />
      </Container> */}
    </div>
  );
};

export default Page;
