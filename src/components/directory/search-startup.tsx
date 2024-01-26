"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const SearchStartup = ({ search }: { search?: string }) => {
  const router = useRouter();

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 200);

  useEffect(() => {
    if (!query) {
      router.push("/startups/all");
    } else {
      router.push(`/startups/all?search=${query}`);
    }
  }, [query, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleInputChange}
          placeholder="search"
          className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
        />
      </form>
    </div>
  );
};

export default SearchStartup;
