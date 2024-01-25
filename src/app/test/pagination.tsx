"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import React, { useState } from "react";
import ReactPaginate, { type ReactPaginateProps } from "react-paginate";

const Pagination = ({
  itemsPerPage,
  items
}: {
  itemsPerPage: number;
  items: any[];
}) => {
  const [pagequery] = useQueryState("page", parseAsInteger);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="flex justify-between items-center mt-10 py-5 w-full border-t-2 border-gray-400">
      <div>{`1 - ${itemsPerPage} from ${items.length}`}</div>
      <ReactPaginate
        breakLabel="..."
        previousLabel={<ChevronLeft className="w-6 h-6" />}
        nextLabel={<ChevronRight className="w-6 h-6" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        activeClassName="border-2 px-5 py-2"
        forcePage={(pagequery ?? 1) - 1}
        className="flex justify-between items-center gap-10"
      />
      <div>Show rows </div>
    </div>
  );
};

export default Pagination;
