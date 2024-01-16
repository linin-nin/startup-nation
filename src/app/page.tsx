import React from "react";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import Home from "@/components/home/fetchVideo";

const Test = async () => {
  const startup = await directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );

  return (
    <div>
      <Home data={startup} />
    </div>
  );
};

export default Test;
