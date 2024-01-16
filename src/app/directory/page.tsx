import { readItems, createDirectus, rest } from "@directus/sdk";
import SearchData from "@/components/directory/searchData";
import React, { useEffect, useState } from "react";

const client = createDirectus(
  "https://startupnation.panel.dreamslab.dev/"
).with(rest());
const FetchData = () => {
  return client.request(
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
      ],
      filter: {
        category: {
          Category_id: {
            id: {
              _eq: 8
            }
          }
        }
      }
    })
  );
};

const FetchDataCate = () => {
  return client.request(
    readItems("Category", {
      fields: ["*"]
    })
  );
};

export default async function Home({ num }: { num: number }) {
  // const data =  client.request(
  //   readItems("Startups", {
  //     fields: ["*", {
  //       category: ['Category_id', {
  //         Category_id: ['category_name']
  //       }]
  //     }],
  //     filter: {
  //       category: {
  //         Category_id: {
  //           id: {
  //             _eq: num
  //           }
  //         }
  //       }
  //     }
  //   })
  // );

  const data = await FetchData();
  const cat = await FetchDataCate();

  return (
    <div>
      <SearchData cate={cat} data={data} />
    </div>
  );
}
