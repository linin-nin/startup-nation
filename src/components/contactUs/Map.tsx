import React from "react";
import Image from "next/image";
import { Socail } from "@/lib/navbarMenu";

const GoogleMap = () => {
  return (
    <div className="container">
      {/* google map  */}
      <div className=" relative">
        <iframe
          className="w-full h-[80vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.914150742188!2d104.86961427481596!3d11.486117888709089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095b97a5cd5e47%3A0x11c7c39515448089!2sdreamsLAB%20blockchain%20community!5e0!3m2!1sen!2skh!4v1698899709763!5m2!1sen!2skh"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute sm:w-[400px] w-[250px] h-auto bottom-[70px] opacity-90 sm:left-[70px] left-[10px] gap-y-3 p-10  lg:text-2xl md:text-xl text-[20px] text-white bg-black">
          <h2 className="md:pl-10 pl-2 mb-5 md:text-3xl text-2xl">
            CONTACT INFORMATION
          </h2>
          <div className="">
            <div className="mb-5 relative">
              <div className="flex gap-3">
                <Image
                  src="/icons/phone.svg"
                  alt="icon"
                  width={30}
                  height={30}
                />
                ( 855 ) 77 637 779
              </div>
            </div>
            <div className="mb-5 relative">
              <div className="flex gap-3">
                <Image
                  src="/icons/mail.svg"
                  alt="icon"
                  width={30}
                  height={30}
                />
                Leang@gmail.com
              </div>
            </div>
            <div className="mb-5 relative">
              <div className="flex gap-3 items-start">
                <Image src="/icons/map.svg" alt="icon" width={30} height={30} />
                BUILDING #3, ST 39D, ANLUNGKONG VILLAGE, PREYSAR DISTRICT,
                DANGKOR COMMUNE.
              </div>
            </div>
            <div className="border-t-2 mt-5 pt-5 flex justify-between ">
              {Socail.map((item) => (
                <div key={item.logo}>
                  <Image src={item.logo} alt="icon" width={40} height={40} />
                </div>
              ))}
              <div>
                <Image
                  src="/icons/youtubelight.svg"
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
