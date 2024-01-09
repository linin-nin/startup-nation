import React from 'react'
import Filter from '@/app/test/filterStartup';
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*", {
        category: ['*', {
          category: [
            "Category_id",
            {
              Category_id: ["*"]
            }
          ]
        }]  
      }]
    })
  );
};

const page = async() => {
  const data = await Data()
  const category = data[0].category;
  // const categorys = category.map((item: any) => item.Category_id);
  console.log(data)
  return (
    <Filter data={data} />
  )
}

export default page