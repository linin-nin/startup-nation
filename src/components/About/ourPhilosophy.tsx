import Image from "next/image"

const OurPhilosophy = () => {
  return (
    <main>
        <h2 className="title px-20">OUR <br/>PHILOSOPHY OF SUCCESS</h2>
        <p className="mt-5 px-20 text-xl">Lorem ipsum dolor sit amet consectetur. At non id tellus ornare placerat quam laoreet. In ipsum amet sapien risus sem augue lorem vel. Euismod nunc lectus ut volutpat sodales sollicitudin. Imperdiet tellus id porttitor lectus aliquet sed pretium integer nam. Lorem ipsum dolor sit amet consectetur. At non id tellus ornare placerat quam laoreet. In ipsum amet sapien risus sem augue lorem vel. Euismod nunc lectus ut volutpat
             sodales sollicitudin. Imperdiet tellus id porttitor lectus aliquet sed pretium integer nam.
        </p>
        <div className="relative h-[570px] w-full my-3">
            <Image src="/image/business 05.jpg" alt="image" fill className="object-cover w-full h-full"/>
        </div>
    </main>
  )
}

export default OurPhilosophy