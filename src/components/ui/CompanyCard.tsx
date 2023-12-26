import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  className?: string;
  slug: string;
  img_url: string;
  company_name: string;
  founded_date: string;
  id: number;
}

const CompanyCard = ({
  className,
  slug,
  img_url,
  company_name,
  founded_date,
  id
}: CardProps) => {
  return (
    <Link
      href={`/startup-directory/${slug}`}
      className="relative before:absolute before:bg-gray-400 before:h-[100vh] before:w-[2px] before:top-0 before:left-[-17px]"
    >
      <div className="h-[416px] ">
        <Image
          src={img_url}
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
              {company_name}
            </h2>
          </div>
          <p>{founded_date}</p>
        </div>
        <p>0{id}/100</p>
      </div>
    </Link>
  );
};

export default CompanyCard;
