import Container from "@/components/common/container";
import Header from "@/components/header/Header";
import Hero from "@/components/common/hero";
import Footer from "@/components/footer/footer";
import ShowPath from "@/components/directory/showPath";
import Dropdownbox from "@/components/ui/dropdownbox";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import SearchData from "../test/search";
import { GetData } from "../test/getData";
import CardDirectory from "@/components/directory/card-directory";

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async({searchParams} : SearchProps) => {
  const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit = typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined;

  const data = await GetData({ page, limit, query: search });

  return (
    <Container>
      <Header />
      <Hero
        cover="/image/la.gif"
        title="Startup Directory"
        subtitle="Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
        semper nec rhoncus leo arcu ultricies tincidunt."
      />
      <div className="bg-black text-white py-5 font-body">
        <ShowPath/>
        <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">
          {/* filter  */}
          <div className=" flex md:w-[47%] w-full border-2 border-white md:py-8 py-2 mb-3 px-5 items-center">
            <div className=" w-full sm:text-2xl text-13px]">filter project</div>
            <Dropdownbox />
          </div>

          {/* search */}
          <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
            <div className="flex justify-start w-full">
              <div className="flex pr-4 justify-center items-center">
                <Search />
              </div>
              {/* input box */}
              <SearchData/>
              {/* arrow button */}
              <div className="flex">
                <Link 
                  href={{
                    pathname: "/test",
                    query: {
                      ...(search ? { search } : {}),
                      page: page > 1 ? page - 1 : 1
                    }
                  }}
                 className="pl-3">
                  <ChevronLeft className="w-6 h-6"/>
                </Link>
                <Link 
                  href={{
                    pathname: "/test",
                    query: {
                      ...(search ? { search } : {}),
                      page: page + 1
                    }
                  }}
                  className="pl-3">
                  <ChevronRight className="w-6 h-6"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CardDirectory data={data}/>
      </div>
      <Footer />
    </Container>
  );
};

export default Page;
