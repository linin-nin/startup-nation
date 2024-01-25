import { readItems } from "@directus/sdk";
import { directusClient } from "@/lib/directus_client";

interface GetDataProps {
  page: number;
  limit: number;
  search?: string;
  query?: string;
}

export const GetData = async ({
  page,
  limit,
  search = "a",
  query
}: GetDataProps) => {
  try {
    if (!query) {
      const allData = await directusClient.request(
        readItems("Startups", {
          fields: ["*"]
        })
      );
      return allData;
    }
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
        ],
        // offset: (page - 1) * limit,
        // limit,
        // filter: {
        //   _or: [
        //     {
        //       _and: [
        //         {
        //           company_name: {
        //             _contains: `%${search}%`
        //           }
        //         }
        //       ]
        //     },
        //     {
        //       _and: [
        //         {
        //           category: {
        //             Category_id: {
        //               category_name: { _contains: `%${query}%` }
        //             }
        //           }
        //         }
        //       ]
        //     }
        //   ]
        // }
      })
    );

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
