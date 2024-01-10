"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const SearchData = ({ search }: { search?: string }) => {
  const router = useRouter();

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 550);

  useEffect(() => {
    if (!query) {
      router.push("/directory");
    } else {
      router.push(`/directory?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="search"
        className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
      />
    </div>
  );
};

export default SearchData;
