import React from "react";
import { contactusQuest } from "@/lib/contactusQuest";
import Image from "next/image";
import { useState } from "react";

const HeroContactus = () => {
  const [open, setOpen] = useState<number | null>(null); // Adjusted type annotation for `open`

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <div className="container">
      <h1 className="text-[44px] py-6 md:text-[4rem] ">
        Get in Touch and Watch Your Digital Dreams <br />
        Come to Life
      </h1>

      <h3 className="border-y-2 border-[#9F9F9F] text-[1.5rem] py-3 text-[#9F9F9F]">
        Transforming Your Vision into Stunning, User-Centric Websites that Boost
        Your Online Success
      </h3>

      {/* question section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-[50px] border-b-2">
        {contactusQuest.map((item, index) => {
          return (
            <li
              className="border-y-2 list-none text-[2rem] py-5 m-3"
              key={index + 1}
            >
              {/* title  */}
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                {index + 1}. {item.question}
                <Image
                  className=""
                  src={open === index ? "/icons/minus.svg" : "/icons/plus.svg"}
                  alt="plusLogo"
                  width={50}
                  height={50}
                />
              </div>

              {/* answer  */}

              <div
                className={`text-[22px] text-justify   
              `}
              >
                <div
                  className={`answer ${
                    open === index ? "pb-4" : "h-0 overflow-hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default HeroContactus;
