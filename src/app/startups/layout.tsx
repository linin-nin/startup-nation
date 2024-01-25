import { type Metadata } from "next";
import Container from "@/components/container";
import Header from "@/components/home/header/Header";
import Hero from "@/components/directory/hero";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import Link from "next/link";

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
      <Hero
        cover="/image/la.gif"
        title="Startup Directory"
        subtitle="Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
              semper nec rhoncus leo arcu ultricies tincidunt."
      />
      <div
        className={cn("lg:py-5 md:py-4 py-3 border-b-2 border-t-2 font-body")}
      >
        <div className="inline-block">
          <div className="flex justify-between gap-4">
            <Link href="/">
              <h2 className="sm:text-2xl text-[13px] hover:underline">Home</h2>
            </Link>
            <Image
              src={"/icons/greater-then.svg"}
              alt="greater-than-icon"
              width={22}
              height={22}
            />
            <h2 className="text-yellow-300 sm:text-2xl text-[13px]">
              Startup directory
            </h2>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
