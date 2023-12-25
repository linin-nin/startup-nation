"use client";

import Info_detail from "@/components/directory/info";
import Header from "@/components/header/Header";
import Smooth from "@/components/smoothScroll";
import Footer from "@/components/footer/footer";
import Container from "@/components/common/container";

const aboutUs = ({ props }: { props: string }) => {
  return (
    <Container>
      <div className=" bg-black padding-body right-0 left-0 sticky top-0 z-50">
        <Header />
      </div>
      <Info_detail />
      <Footer />
    </Container>
  );
};

export default aboutUs;
