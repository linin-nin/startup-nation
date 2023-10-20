import Image from "next/image"
import Input from "@/ui/input"

const Main = () => {
  return (
    <main className='bg-white py-10 text-black'>
        <div className="border-2 flex justify-between items-center">
           <div className="flex justify-between gap-8 border-r-2">
                <p>Filter project</p>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon"/>
           </div>
           <div>
            <input type="search" placeholder="Search projects" />
           </div>
           <div className="flex">
           <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className="w-"/>
           <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon"/>
           </div>
        </div>
    </main>
  )
}

export default Main