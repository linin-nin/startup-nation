import React from "react";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import Pagination from "./pagination";

const desplay = ({ current }: any) => {
  return (
    <>
      {current &&
        current.map((item: any) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
};

const Page = async ({ s = "t", q = "" }: { s?: string; q: string }) => {
  const response = await directusClient.request(
    readItems("Startups", {
      fields: [
        "*",
        {
          category: [
            "Category_id",
            {
              Category_id: ["*"]
            }
          ]
        }
      ]
      //   filter: {
      //     company_name: { _contains: `%${s}%` },
      //     _or: [
      //         {
      //             category: {
      //                 Category_id: {
      //                   category_name: {_contains: `%${q}%`}
      //                 }
      //             }
      //         }
      //     ]
      // }
    })
  );
  console.log(response);
  return (
    <div>
      {response.map((item) => (
        <div key={item.id}>
          <p>{item.company_name}</p>
        </div>
      ))}
      <Pagination items={response} itemsPerPage={1} />
    </div>
  );
};

export default Page;
