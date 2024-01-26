import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "@/components/gridStyle";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import SearchStartup from "@/components/directory/search-startup";
import { GetStartup } from "@/components/directory/get-startup";
import CompanyCard from "@/components/ui/CompanyCard";
import { Media } from "@/lib/utils/media";
import FilterStartup from "@/components/directory/filter-startup";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};
const cate = () => {
  return directusClient.request(
    readItems("Category", {
      fields: ["*"]
    })
  );
};

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ searchParams }: SearchProps) => {
  const categoryDta = await cate();
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const data = await GetStartup({ page, limit, query: search });
  const Alldata = (await Data()).length;
  const AllCount = Math.ceil(Alldata / limit);
  const numPage = Array.from(
    { length: AllCount || 0 },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">
        {/* filter */}
        <FilterStartup category={categoryDta} />
        {/* search */}
        <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
          <div className="flex justify-start w-full">
            <div className="flex pr-4 justify-center items-center">
              <Search />
            </div>
            {/* input box */}
            <SearchStartup />
            {/* arrow pagination button */}
            <div className="flex">
              <Link
                href={{
                  pathname: "/startups/all",
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
                  pathname: "/startups/all",
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
      {/* all Card startup */}
      <Grid cols={3} className="overflow-hidden mt-8 gap-8">
        {/* card content  */}
        {data.map((item) => (
          <div key={item.id}>
            <CompanyCard
              id={item.id}
              img_url={Media(item.logo_url)}
              company_name={item.company_name}
              subtitle={item.title}
              founded_date={item.founded_date}
              slug={item.slug}
            />
          </div>
        ))}
      </Grid>
      <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400">
        <div>{`1 -6 from 100`}</div>
        <div className="flex justify-between gap-10">
          <Link
            href={{
              pathname: "/startups/all",
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
              pathname: "/startups/all",
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
    </>
  );
};

export default Page;
