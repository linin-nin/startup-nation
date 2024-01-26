import { readItems } from "@directus/sdk";
import { directusClient } from "@/lib/directus_client";

interface GetDataProps {
  page: number;
  limit: number;
  query?: string | { [key: string]: any };
  search?: string;
}

export const GetStartup = async ({
  page,
  limit,
  search,
  query
}: GetDataProps) => {
  try {
    if (!search && !query) {
      const allData = await directusClient.request(
        readItems("Startups", {
          fields: ["*"],
          offset: (page - 1) * limit,
          limit
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
          company_name: { _contains: `%${search}%` }
        }
      })
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
