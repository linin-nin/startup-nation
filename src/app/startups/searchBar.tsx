"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";

const Search = ({ search }: { search?: string }) => {
  const [searchParams, setsearchParams] = useQueryState("search");

  return (
    <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
      <div className="flex justify-start w-full">
        <div className="flex pr-4 justify-center items-center"></div>
        {/* input box */}
        <div className="w-full">
          <input
            value={searchParams || ""}
            onChange={(e) => setsearchParams(e.target.value)}
            placeholder="search"
            className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
          />
        </div>
        {/* arrow button */}
        <div className="flex">
          <ChevronLeft className="w-6 h-6" />
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Search;
