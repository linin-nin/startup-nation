import Container from "@/components/common/container";
import { Media } from "@/lib/utils/media";
import React from "react";
import { directusClient } from "@/lib/directus_client";
import { readItems } from "@directus/sdk";
import { start } from "repl";

interface Props {
  params: {
    name: string;
  };
}

// export const getMetadata = async ({ params }: Props) => {
//   const startup = await directusClient.request(
//     readItems("Startups", {
//       fields: ["*"],
//       filter: {
//         slug: {
//           _eq: params.slug
//         }
//       }
//     })
//   );
//   if (!startup)
//     return {
//       title: "Not Found",
//       description: "The page is not found"
//     };

//   return {
//     title: startup[0].company_name,
//     description: startup[0].description
//   };
// };


const Detail = async ({ params }: Props) => {
  const startup = await directusClient.request(
    readItems("Startups", {
      fields: ["*", {category:["*"]}],
      filter: {
        slug: {
          _eq: params.name
        }
      }
    }
    )
  )
  const categories = startup[0]?.category ?? [];
  console.log(categories)
  return (
    // <main>
    //   <div className="text-white bg-black flex justify-start py-8">
    //     <div className="container lg:flex">
    //       <div className="lg:pr-5 lg:w-[70%] w-full">
    //         <div className="md:flex md:justify-start">
    //           <div className="w-[100%] relative h-[386px]">
    //             {/* <Image
    //               id="slide"
    //               src={images[urlImage].img}
    //               fill
    //               loading="lazy"
    //               alt="image"
    //               className="w-full h-full object-cover"
    //             />
    //           </div> */}
    //           {/* md:ml-5 flex md:block md:mt-0 mt-5 justify-center gap-3 md:py-0 py-2 */}
    //           <div className="md:block flex justify-center items-center md:pt-0 md:pl-5 pt-4">
    //             {images.map((item, index) => (
    //               <div
    //                 key={index}
    //                 className={`w-[120px] h-[120px] md:mb-3 overflow-hidden ${
    //                   urlImage === index ? "opacity-100" : "opacity-50"
    //                 } md:mr-0 mr-3 relative`}
    //               >
    //                 <Image
    //                   onClick={() => seturlImage(index)}
    //                   src={item.img}
    //                   fill
    //                   alt="image"
    //                   className="w-full h-full object-cover"
    //                 />
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <p className="w-[100%] my-5">
    //           What Is a Startup? The term startup refers to a company in the
    //           first stages of operations. Startups are founded by one or more
    //           entrepreneurs who want to develop a product or service for which
    //           they believe there is demand.
    //         </p>
    //       </div>
    //       {/* -------------------Right-------------------- */}
    //     </div>
    //   </div>
    // </main>

    <div>
      {categories.map((category:any, index:any) => (
        <div key={index}>
          {category}
        </div>
      ))}
    </div>
  )
};

export default Detail;
