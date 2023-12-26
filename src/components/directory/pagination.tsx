import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { Cards } from "@/lib/card-directory";
import CompanyCard from "../ui/CompanyCard";
import Link from "next/link";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import { Media } from "@/lib/utils/media";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

const Pagination = async () => {
  const data = await Data();
  console.log(data);
  return (
    <main>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden ">
        {/* card content  */}
        {data.map((item) => (
          <div key={item.id}>
            <CompanyCard 
              id={item.id} 
              img_url={Media(item.logo_url)} 
              company_name={item.company_name} 
              founded_date={item.founded_date} 
              slug={item.slug}/>
          </div>
        ))}
      </div>
      {/* ---Pagination--- */}
      {/* <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400 container ">
        <div>1 -6 from 100</div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={onclickChange}
          containerClassName="flex gap-5 text-2xl"
          pageClassName="border-2 px-3 border-gray-600 hover:bg-gray-600"
          activeClassName="bg-gray-600"
        />
        <div>Show rows </div>
      </div> */}
    </main>
  );
};

export default Pagination;
