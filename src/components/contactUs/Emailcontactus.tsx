import React from "react";
import Input from "@/ui/input";

const EmailContactus = () => {
  return (
    <div className=" mt-5 bg-white text-black">
      <div className="container flex flex-col sm:flex-row items-center">
        {/* text content  */}
        <div className=" w-[80%] flex flex-col text-center mt-8 sm:w-[50%] sm:text-left sm:p-6">
          <h1 className="text-[34px] sm:text-[4.5rem]">
            If you are interested, <br />
            let&apos;s keep in touch
          </h1>
          <p className="text-[14px] sm:text-[22px]">
            Lorem ipsum dolor sit amet consectetur. Sit tincidunt amet volutpat
            neque porttitor. Morbi risus turpis est platea aliquam ridiculus
            nibh. Imperdiet id eget tempus aliquam semper volutpat viverra dolor
            in.
          </p>
        </div>
        {/* ************************************************** */}
        {/* form content */}
        <div className=" w-[90%] mt-8 text-white md:w-[50%] p-6 ">
          <form className="flex flex-col mt-0 w-[100%] border-2 border-black p-8 ">
            <span className="text-[24px] font-normal mb-3 text-black">
              EMAIL
            </span>
            <Input text="email" placeholder="Enter your email" />
            <span className="text-[24px] font-normal mb-3 text-black">
              PHONE
            </span>
            <Input text="text" placeholder="Enter phone number" />
            <button
              type="submit"
              className="bg-black border-2 border-white text-white w-full text-center font-bold p-3 mt-4 text-[22px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContactus;
