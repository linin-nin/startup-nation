import Container from "@/components/container";
import { Media } from "@/lib/utils/media";
import React from "react";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/home/header/Header";
import Slide from "@/components/directory/slideImge";
import Profile from "@/components/directory/founder-profile";
interface Props {
  params: {
    name: string;
  };
}

export const generateMetadata = async ({ params }: Props) => {
  const startup = await directusClient.request(
    readItems("Startups", {
      fields: ["*"],
      filter: {
        slug: {
          _eq: params.name
        }
      }
    })
  );
  return {
    title: `${startup[0].company_name}: ${startup[0].title}`,
    // description: `${startup[0].title}`
    openGraph: {
      images: [
        {
          url: Media(startup[0].logo),
          width: 1200,
          height: 630,
          alt: startup[0].company_name
        }
      ]
    }
  };
};

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
        {
          founder: [
            "Founder_id",
            {
              Founder_id: ["*"]
            }
          ]
        },
        { website_url: ["startup_web_link"] }
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
  const imag = imageUrls.map((item: any) => item.directus_files_id);
  const category = startup[0].category;
  const categorys = category.map((item: any) => item.Category_id);
  const founder = startup[0].founder;
  const founders = founder.map((item: any) => item.Founder_id);
  return (
    <Container>
      <Header />
      {/* image slide */}
      <div className="lg:py-5 container md:py-4 p-3 mb-5 border-b-2 font-body ">
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
            <Link href="/startups">
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
        <div className="lg:flex">
          <div className="lg:pr-5 lg:w-[70%] w-full">
            <Slide data={imag} />
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
                <div className="flex justify-start gap-10 mt-3">
                  {Socail.map((item) => {
                    // function to check is link have or not, if path has, it will return true
                    function isUrlValid(path: any) {
                      return Boolean(path);
                    }

                    const isValid = isUrlValid(item.path);

                    if (isValid) {
                      return (
                        <Link href={item.path} key={item.logo}>
                          <Image
                            src={item.logo}
                            alt="icon"
                            width={40}
                            height={40}
                          />
                        </Link>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
            <h2 className="py-2 title">Founder</h2>

            <div>
              {founders.map((item: any) => (
                <Profile
                  key={item.id}
                  company_name={startup[0].company_name}
                  content={item.contant}
                  position={item.founder_position}
                  company_web={website}
                  name={item.full_name}
                  profile_img={Media(item.profile_img)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Detail;
