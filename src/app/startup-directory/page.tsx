import Container from "@/components/common/container";
import Header from "@/components/header/Header";
import Hero from "@/components/common/hero";
import Footer from "@/components/footer/footer";
import Search from "@/components/directory/Search";

const Page = () => {
  return (
    <Container>
      <Header />
      <Hero
        cover="/image/la.gif"
        title="Startup Directory"
        subtitle="Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
        semper nec rhoncus leo arcu ultricies tincidunt."
      />
      <Search />
      <Footer />
    </Container>
  );
};

export default Page;
