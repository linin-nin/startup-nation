import Image from "next/image"

const EarthMap = () => {
  return (
    <main className="">
      <div className=" relative border-b-2 border-white h-[500px] my-20 bg-cover bg-center">
        <Image src="/image/earthMap.jpeg" alt="image" fill className="w-full h-full object-cover "/>
        <div className='inset-0 absolute bg-gradient-to-t from-black'></div>
        <h2 className='text-6xl pt-36 inset-0 absolute'>“  Develop Cambodia to be a central hub of startups<br/> <span className='flex justify-end'>in Southeast Asian region.  “</span></h2>
      </div>
    </main>
  );
};

export default EarthMap;
