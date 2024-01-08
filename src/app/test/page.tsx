import CompanyCard from "@/components/ui/CompanyCard";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import Search from "./search";
import { Media } from "@/lib/utils/media";
import Grid from "@/components/common/gridStyle";
import Link from "next/link";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Pagination = async ({searchParams}:SearchProps) => {
  
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

  const data = await Data();

  return (
    <main className="">
      <Search/>
      <div className="flex">
              <Link
              href={{
                pathname: '/direcctory',
                query: {
                  ...(search ? {search}: {}),
                  page: page > 1 ? page - 1 : 1
                }
              }}
              className="pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Link>
              <Link
              href={{
                pathname: '/directory',
                query: {
                  ...(search ? {search} : {}),
                  page: page + 1
                }
              }}
              className="pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
      <Grid cols={3} className="overflow-hidden mt-8 gap-8">
        {/* card content  */}
        {data.map((item) => (
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

    </main>
  );
};

export default Pagination;
