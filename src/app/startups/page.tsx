import Container from "@/components/container";
import Header from "@/components/home/header/Header";
import Hero from "@/components/directory/hero";
import Footer from "@/components/footer/footer";
import ShowPath from "@/components/directory/showPath";
import DropdownIcon from "@/components/directory/dropdownIcon";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import SearchData from "@/components/directory/SearchBar";
import { GetData } from "../../components/directory/getStartup";
import CardDirectory from "@/components/directory/card-directory";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ searchParams }: SearchProps) => {
  // const data = Data()
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const data = await GetData({ page, limit, query: search });
  const Alldata = (await Data()).length;
  const AllCount = Math.ceil(Alldata / limit);
  const numPage = Array.from(
    { length: AllCount || 0 },
    (_, index) => index + 1
  );

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
        <ShowPath className="mb-5" />
        <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">
          {/* filter  */}
          <div className=" flex md:w-[47%] w-full border-2 border-white md:py-8 py-2 mb-3 px-5 items-center">
            <div className=" w-full sm:text-2xl text-13px]">filter project</div>
            <DropdownIcon />
          </div>

          {/* search */}
          <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
            <div className="flex justify-start w-full">
              <div className="flex pr-4 justify-center items-center">
                <Search />
              </div>
              {/* input box */}
              <SearchData />
              {/* arrow button */}
              <div className="flex">
                <Link
                  href={{
                    pathname: "/directory",
                    query: {
                      ...(search ? { search } : {}),
                      page: page > 1 ? page - 1 : 1
                    }
                  }}
                  className="pl-3"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Link>
                <Link
                  href={{
                    pathname: "/directory",
                    query: {
                      ...(search ? { search } : {}),
                      page: page + 1
                    }
                  }}
                  className="pl-3"
                >
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CardDirectory data={data} />
        <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400">
          <div>1 -6 from 100</div>
          <div className="flex justify-between gap-10">
            <Link
              href={{
                pathname: "/directory",
                query: {
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1
                }
              }}
              className="pl-3"
            >
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <div className="flex">
              {numPage.map((num) => (
                <p
                  key={num}
                  className={`border-2 px-5 ml-2 hover:bg-gray-600 cursor-pointer`}
                >
                  {num}
                </p>
              ))}
            </div>
            <Link
              href={{
                pathname: "/directory",
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1
                }
              }}
              className="pl-3"
            >
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
          <div>Show rows </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Page;