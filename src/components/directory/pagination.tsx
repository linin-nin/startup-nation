import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { Cards } from "@/lib/card-directory";
import Link from "next/link";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";

const Data = () => {
  return directusClient.request(
    readItems("Startups", {
      fields: ["*"]
    })
  );
};

const Pagination = async () => {
  const data = await Data();
  console.log(data[1].logo_url);
  return (
    <main>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden ">
        {/* card content  */}
        {data.map((item) => (
          <Link
            href={`/startup-directory/${item.slug}`}
            key={item.id}
            className="relative before:absolute before:bg-gray-400 before:h-[100vh] before:w-[2px] before:top-0 before:left-[-17px]"
          >
            <div className="h-[416px] ">
              <Image
                src={`https://startupnation.panel.dreamslab.dev/assets/${item.logo_url}`}
                alt="image"
                width={416}
                height={416}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className="">
                <div>
                  <h2 className="text-2xl hover:underline hover:text-blue-400">
                    {item.company_name}
                  </h2>
                </div>
                <p>{item.founded_date}</p>
              </div>
              <p>0{item.id}/100</p>
            </div>
          </Link>
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
