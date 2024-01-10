import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Socail } from "@/lib/navbarMenu";

interface ProfileProps {
  className?: string;
  profile_img: string;
  name: string;
  position: string;
  company_web: string;
  company_name: string;
  content: string;
  key: number;
}
const Profile = ({
  className,
  key,
  profile_img,
  name,
  position,
  company_web,
  company_name,
  content
}: ProfileProps) => {
  return (
    <div key={key}>
      <div className="flex justify-start mb-3">
        <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
          <Image
            src={profile_img}
            fill
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-3">
          <p>{name}</p>
          <p>
            {position} of{" "}
            <Link href={company_web}>
              <span className="text-white hover:text-yellow-500 cursor-pointer">
                {company_name}
              </span>
            </Link>
          </p>
          <div className="flex justify-start gap-5 mt-[2px]">
            {Socail.map((item) => (
              <Link href={item.path} key={item.logo}>
                <Image src={item.logo} alt="icon" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Profile;
