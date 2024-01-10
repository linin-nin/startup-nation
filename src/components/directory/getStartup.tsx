import { readItems } from "@directus/sdk";
import { directusClient } from "@/lib/directus_client";

interface GetDataProps {
  page: number;
  limit: number;
  query?: string;
}

export const GetData = async ({ page, limit, query }: GetDataProps) => {
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
        fields: ["*"],
        offset: (page - 1) * limit,
        limit,
        filter: {
          company_name: { _contains: `%${query}%` }
        }
      })
    );

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
