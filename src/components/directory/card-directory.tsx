import React from "react";
import Grid from "../gridStyle";
import CompanyCard from "../ui/CompanyCard";
import { Media } from "@/lib/utils/media";

const CardDirectory = ({ data }: { data: any[] }) => {
  return (
    <Grid cols={3} className="overflow-hidden mt-8 gap-8">
      {/* card content  */}
      {data.slice(3, 12).map((item) => (
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
  );
};

export default CardDirectory;
