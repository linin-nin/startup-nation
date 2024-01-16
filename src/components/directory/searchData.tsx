"use client"

import { useState } from "react";
import CompanyCard from "@/components/ui/CompanyCard";
import Grid from "@/components/gridStyle";
import { Media } from "@/lib/utils/media";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import Header from "@/components/home/header/Header";
import Hero from "@/components/directory/hero";
import Container from "../container";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import ShowPath from "./showPath";

const SearchData = ({ data, cate }: { data: any[], cate: any[] }) => {
  const [drop, setdrop] = useState(false)
  const [text, setText] = useState("");
  const [filter, setfilter] = useState("");
  const [query] = useDebounce(text, 550);
  const router = useRouter();

  //   useEffect(() => {
  //     if (!query) {
  //       router.push("/directory");
  //     } else {
  //       router.push(/directory?search=${query});
  //     }
  //   }, [query, router]);

  return (
    <Container>
      <Header />
      <Hero
        cover="/image/la.gif"
        title="Startup Directory"
        subtitle="Lorem ipsum dolor sit amet consectetur. Venenatis nec sodales
        semper nec rhoncus leo arcu ultricies tincidunt."
      />
      <div className="bg-black text-white py-5 font-body">
        <ShowPath className="mb-5" />
        <div className="md:flex justify-between gap-8 w-[100%] md:h-16 h-[100px]">

          {/* filter  */}
          <div className=" flex md:w-[47%] w-full border-2 border-white md:py-8 py-2 mb-3 px-5 items-center">
            <input 
              value={filter}
              onChange={e => setfilter(e.target.value)}
              className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black" 
              placeholder="Filter project"/>
            <div className="relative">
            <div onClick={() => setdrop(!drop)} className="cursor-pointer">
              {drop ? <ChevronUp /> : <ChevronDown />}
            </div>
            <ul
              className={`absolute text-xl capitalize w-[420px] bg-black border-2 h-[293px] overflow-y-scroll no-scrollbar rounded-md z-[30] top-[50px] right-0 ${
                drop ? "block" : "hidden"
              }`}
            >
              {cate.filter((cat) => cat.category_name.toLocaleLowerCase().includes(filter)).map((category) => (
                <li key={category} className="hover:bg-gray-800 p-3">{category.category_name}</li>
              ))}
            </ul>
            </div>
          </div>

          {/* search */}
          <div className="px-5 w-full items-center md:py-8 py-2 flex border-2 border-white">
            <input
              className="w-[100%] outline-none sm:text-2xl text-[13px] placeholder:sm:text-2xl placeholder:text-[13px] bg-black"
              value={text}
              onChange={(e) => setText(e.target.value.toLocaleLowerCase())}
              placeholder="search"
            />
            <div className="flex">
              <Link href="/directory" className="pl-3">
                <ChevronLeft className="w-6 h-6" />
              </Link>
              <Link href="/directory" className="pl-3">
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <Grid cols={3} className="overflow-hidden mt-8 gap-8">
        {/* card content  */}
        {data
        // .filter((startup) => startup.category
        // .filter((cate:any) => cate.Category_id
        // .filter((cateid:any) => cateid.id
        // .includes(1)
        // .map((item:any) => (
        //   <div key={item.id}>
        //      <CompanyCard
        //        id={item.id}
        //        img_url={Media(item.logo_url)}
        //        company_name={item.company_name}
        //        subtitle={item.title}
        //        founded_date={item.founded_date}
        //        slug={item.slug}
        //      />
        //    </div>
        // )))))
          .filter((query) => query.company_name.toLowerCase().includes(text))
          .splice(0, 9)
          .map((item) => (
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
          ))
          }
      </Grid>
      </div>
    </Container>
  );
};

export default SearchData;