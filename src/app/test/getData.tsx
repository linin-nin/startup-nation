import { readItems } from "@directus/sdk";
import { directusClient } from "@/lib/directus_client";

export const GetData = async ({
  page = 1,
  limit = 9,
  query
}: {
  page: number;
  limit: number;
  query?: string;
}) => {
  try {
    if (!query) {
      return await directusClient.request(
        readItems("Startups", {
          fields: ["*"]
        })
      );
    }
    return await directusClient.request(
      readItems("Startups", {
        fields: ["*"],
        offset: (page - 1) * limit,
        limit,
        filter: {
          company_name: { _contains: `%${query}%` }
        }
      })
    );

    // return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
