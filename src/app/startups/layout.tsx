import { type Metadata } from "next";
import Container from "@/components/container";
import Header from "@/components/home/header/Header";
import Hero from "@/components/home/Hero";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Startups Directory | Startup Nation"
};

export default function UsersLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header />
      <Hero />
      <ShowPath />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
