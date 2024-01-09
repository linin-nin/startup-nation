"use client";
import Grid from "../../components/common/gridStyle";
import { Media } from "@/lib/utils/media";
import CompanyCard from "../../components/ui/CompanyCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const Filter = ({ data }: { data: any[] }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const [drop, setdrop] = useState(false);

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = data.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  return (
    <>
      <div className="relative">
        <div onClick={() => setdrop(!drop)} className="cursor-pointer">
          {drop ? <ChevronUp /> : <ChevronDown />}
        </div>
        <ul
          className={`absolute text-xl capitalize w-[420px] bg-black border-2 h-[293px] overflow-y-scroll no-scrollbar rounded-md z-[30] top-[50px] right-0 ${
            drop ? "block" : "hidden"
          }`}
        >
          {/* {
        categoryData.map((category) => (
          <Link key={category} href="/directory">
          <li className="hover:bg-gray-800 p-3">{category.category_name}</li>
        </Link>
        ))
      }   */}
        </ul>
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
    </>
  );
};

export default Filter;
