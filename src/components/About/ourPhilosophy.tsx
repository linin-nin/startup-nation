import Image from "next/image";

const OurPhilosophy = () => {
  return (
    <main className="relative mt-10">
      <h2 className="md:text-4xl sm:text-3xl text-2xl">
        OUR <br />
        PHILOSOPHY OF SUCCESS
      </h2>
      <p className="lg:mt-5 mt-3 sm:text-xl text-sm">
        Lorem ipsum dolor sit amet consectetur. At non id tellus ornare placerat
        quam laoreet. In ipsum amet sapien risus sem augue lorem vel. Euismod
        nunc lectus ut volutpat sodales sollicitudin. Imperdiet tellus id
        porttitor lectus aliquet sed pretium integer nam. Lorem ipsum dolor sit
        amet consectetur. At non id tellus ornare placerat quam laoreet. In
        ipsum amet sapien risus sem augue lorem vel. Euismod nunc lectus ut
        volutpat sodales sollicitudin. Imperdiet tellus id porttitor lectus
        aliquet sed pretium integer nam.
      </p>
      <div className="relative lg:h-[570px] md:h-[450px] sm:h-[400px] h-[300px] w-full my-3">
        <Image
          src="/image/business 07.jpg"
          alt="image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
};

export default OurPhilosophy;
