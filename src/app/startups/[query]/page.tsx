import React from "react";
import Search from "../searchbar";
import GetStartup from "@/components/directory/getStartup";
import Filter from "../../../components/directory/cate-filter";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import CompanyCard from "@/components/ui/CompanyCard";
import { Media } from "@/lib/utils/media";
import Grid from "@/components/gridStyle";

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
  return (
    <main className="py-7">
      <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">
        <Filter category={cate} />
        <Search />
      </div>
      <Grid cols={3} className="overflow-hidden mt-8 gap-8">
        {/* card content  */}
        {startup.slice(0, 9).map((item) => (
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
    </main>
  );
};

export default Page;
