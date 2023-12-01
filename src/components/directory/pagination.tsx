import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { Cards } from "@/lib/card-directory";
import Link from "next/link";

const Pagination = () => {
  const [pageCount, setPageCount] = useState(1);
  let limit = 9;
  const records = Cards.slice(0, 9);
  useEffect(() => {
    setPageCount(Math.ceil(Cards.length / limit));
  }, [limit]);

  const onclickChange = () => {
    console.log("");
  };
  return (
    <main>
      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden ">
        {/* card content  */}
        {records.map((item) => (
          <div
            key={item.id}
            className="relative before:absolute before:bg-gray-400 before:h-[100vh] before:w-[2px] before:top-0 before:left-[-17px]"
          >
            <div className="h-[416px] ">
              <Image
                src={item.img}
                alt="image"
                width={416}
                height={416}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-between">
              <div className="">
                <Link href="/startup-directory/detail">
                  <h2 className="text-2xl hover:underline hover:text-blue-400">
                    {item.name}
                  </h2>
                </Link>
                <p>{item.date}</p>
              </div>
              <p>0{item.id}/100</p>
            </div>
          </div>
        ))}
      </div>
      {/* ---Pagination--- */}
      <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400 container ">
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
      </div>
    </main>
  );
};

export default Pagination;
