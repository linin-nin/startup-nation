import React from "react";
import Search from "../searchbar";
import Filter from "../../../components/directory/cate-filter";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import CompanyCard from "@/components/ui/CompanyCard";
import { Media } from "@/lib/utils/media";
import Grid from "@/components/gridStyle";
import { GetData } from "@/components/directory/getStartup";
import Pagination from "@/app/test/pagination";

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const fetchdata = () => {
  return directusClient.request(
    readItems("Category", {
      fields: ["*"]
    })
  );
};
const Fetchstartup = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

const Page = async ({ searchParams }: SearchProps) => {
  const cate = await fetchdata();
  const startup = await Fetchstartup();

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 9;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const query =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const data = await GetData({ page, limit, search: search, query: query });

  return (
    <main className="py-7">
      <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">
        <Filter category={cate} />
        <Search />
      </div>
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
      <div>
        <Pagination items={data} itemsPerPage={9} />
      </div>
    </main>
  );
};

export default Page;
