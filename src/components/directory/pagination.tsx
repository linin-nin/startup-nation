import CompanyCard from "../ui/CompanyCard";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import { Media } from "@/lib/utils/media";
import Grid from "../common/gridStyle";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

const Pagination = async () => {
  const data = await Data();
  return (
    <main className="">
      <Grid cols={3} className="overflow-hidden mt-8 gap-8">
        {/* card content  */}
        {data.splice(0, 9).map((item) => (
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

      {/* ---Pagination--- */}
      <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400 container ">
        <div>1 -6 from 100</div>
        <div className="flex justify-between gap-10">
          <p className="border-2 py-2 px-5 hover:bg-gray-800 cursor-pointer">
            1
          </p>
          <p className="border-2 py-2 px-5 hover:bg-gray-800 cursor-pointer">
            2
          </p>
          <p className="border-2 py-2 px-5 hover:bg-gray-800 cursor-pointer">
            3
          </p>
          <p className="border-2 py-2 px-5 hover:bg-gray-800 cursor-pointer">
            4
          </p>
        </div>
        <div>Show rows </div>
      </div>
    </main>
  );
};

export default Pagination;
