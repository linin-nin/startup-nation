import React from "react";
import { readItems, rest, createDirectus } from "@directus/sdk";
import CompanyCard from "@/components/ui/CompanyCard";
import Grid from "@/components/gridStyle";
import { Media } from "@/lib/utils/media";
import Search from "../../components/directory/searchBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Directory"
};

const page = async () => {
  const directusClient = createDirectus(
    "https://startupnation.panel.dreamslab.dev/"
  ).with(rest());
  const startup = await directusClient.request(
    readItems("Startups", {
      fields: [
        "*",
        {
          category: [
            "Category_id",
            {
              Category_id: ["category_name"]
            }
          ]
        }
      ]
    })
  );

  return (
    <main>
      {/* <Search/> */}
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

export default page;
