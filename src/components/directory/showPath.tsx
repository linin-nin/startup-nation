import Image from "next/image"
import Link from "next/link"
import SideBar from "../header/SideBar"

const hello = "Hello"
const ShowPath = () => {
  return (
    <div className='px-16 mt-6'>
        <div className="inline-block">
            <div className="flex justify-between gap-4">
                <Link href="/"><h2 className="title hover:underline">Home</h2></Link>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className="text-white bg-white"/>
                <h2 className="text-yellow-300 title">{hello}</h2>
            </div>
        </div>
    </div>
  )
}

export default ShowPath