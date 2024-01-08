import React from 'react'
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";


const Data = () => {
    return directusClient.request(
      readItems("Startups", {
        fields: ["*"]
      })
    );
  };

const GetStartup = async({
    page= 1,
    limit
}:{
    page:number,
    limit:number
}) => {
    const data = await Data()
    

  };

export default GetStartup