import Container from "@/components/common/container";
import { Media } from "@/lib/utils/media";
import React from "react";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";

interface Props {
  params: {
    name: string;
  };
}

const Detail = async ({ params }: Props) => {
  const startup = await directusClient.request(
    readItems("Startups", {
      fields: [
        "*",
        { image_url: ["*"] },
        {
          category: [
            "Category_id",
            {
              Category_id: ["*"]
            }
          ]
        },
        { founder: ["*"] },
        { website_url: ["*"] }
      ],
      filter: {
        slug: {
          _eq: params.name
        }
      }
    })
  );

  const imageUrls = startup[0]?.image_url ?? [];
  const website = startup[0]?.website_url.startup_web_link;
  const founder = startup[0]?.founder;
  const imag = imageUrls.map((item: any) => item.directus_files_id);
  const category = startup[0].category;
  const categorys = category.map((item: any) => item.Category_id);
  return (
    <Container>
      {/* image slide */}
      <div className="lg:py-5 container md:py-4 p-3 mb-5 border-b-2 font-body">
        <div className="inline-block">
          <div className="flex justify-between sm:gap-2 gap-[5px]">
            <Link href="/">
              <h2 className="sm:text-2xl text-[13px] hover:underline">Home</h2>
            </Link>
            <Image
              src={"/icons/greater-then.svg"}
              alt="greater-than-icon"
              width={22}
              height={22}
            />
            <Link href="/startup-directory">
              <h2 className="sm:text-2xl text-[13px] hover:underline whitespace-nowrap">
                Startup Directory
              </h2>
            </Link>
            <Image
              src={"/icons/greater-then.svg"}
              alt="greater-than-icon"
              width={22}
              height={22}
            />
            <h2 className="text-yellow-300 text-[13px] sm:text-2xl">
              {startup[0].company_name}
            </h2>
          </div>
        </div>
      </div>

      <div className="text-white bg-black flex justify-start py-8">
        <div className="container lg:flex">
          <div className="lg:pr-5 lg:w-[70%] w-full">
            <div className="md:flex md:justify-start">
              <div className="w-[100%] relative h-[386px]">
                <Image
                  id="slide"
                  src={Media(imag[0])}
                  fill
                  loading="lazy"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* md:ml-5 flex md:block md:mt-0 mt-5 justify-center gap-3 md:py-0 py-2 */}
              <div className="md:block flex justify-center items-center md:pt-0 md:pl-5 pt-4">
                {imag.map((item: any) => (
                  <div
                    key={item}
                    className={`w-[120px] h-[120px] md:mb-3 overflow-hidden  md:mr-0 mr-3 relative`}
                  >
                    <Image
                      src={Media(item)}
                      fill
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="w-[100%] my-5">{startup[0].dirscription}</p>
          </div>
          {/* -------------------Right-------------------- */}
          <div className="lg:border-l-2 border-white lg:pl-5 lg:w-[48%] w-full">
            <div className="border-2 border-white p-5 lg:block flex flex-col justify-center">
              <div className="flex justify-start">
                <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                  <Image
                    src={Media(startup[0].logo_url)}
                    fill
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="md:text-4xl sm:text-3xl text-2xl bold">
                    {startup[0].company_name}
                  </h1>
                  <p className="text-gray-500">{startup[0].title}</p>
                </div>
              </div>
              <div className="my-3 flex justify-start">
                {categorys.map((item: any) => (
                  <p
                    key={item.id}
                    className="px-4 py-2 bg-none border-2  hover:bg-white hover:text-black  border-white mr-3"
                  >
                    {item.category_name}
                  </p>
                ))}
              </div>
              <div className="leading-9">
                <p>{`Founded: ${startup[0].founded_date}`}</p>
                <p>{`Location : ${startup[0].location}`}</p>
                <p>{`Team Size : ${startup[0].team_size}`}</p>
                <p>
                  Website:{" "}
                  <Link href={website}>
                    <span className="text-white underline hover:text-yellow-500 cursor-pointer">
                      {website}
                    </span>
                  </Link>
                </p>
                <p>
                  Phone Number :{" "}
                  <span className="text-white underline hover:text-yellow-500 cursor-pointer">
                    ( 855 ) 123 123 123
                  </span>
                </p>
                <div className=" flex justify-start gap-10 mt-3">
                  {Socail.map((item) => (
                    <Link href={item.path} key={item.logo}>
                      <Image
                        src={item.logo}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="py-2 title">Founder</h2>
            <div>
              <div className="flex justify-start mb-3">
                <div className=" h-[80px] w-[80px] relative bg-cover bg-center">
                  <Image
                    src={Media(founder.profile_img)}
                    fill
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p>{founder.full_name}</p>
                  <p>
                    {founder.founder_position} of{" "}
                    <Link href={website}>
                      <span className="text-white hover:text-yellow-500 cursor-pointer">
                        {startup[0].company_name}
                      </span>
                    </Link>
                  </p>
                  <div className="flex justify-start gap-5 mt-[2px]">
                    {Socail.map((item) => (
                      <Link href={item.path} key={item.logo}>
                        <Image
                          src={item.logo}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <p>{founder.contant}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
