import Image from "next/image"
import Link from "next/link"
import SideBar from "../header/SideBar"

const hello = "Hello"
const ShowPath = () => {
  return (
    <div className='py-5 bg-black padding-body'>
        <div className="inline-block">
            <div className="flex justify-between gap-4">
                <Link href="/"><h2 className="text-2xl hover:underline">Home</h2></Link>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className=""/>
                <h2 className="text-yellow-300 text-2xl">{hello}</h2>
            </div>
        </div>
    </div>
  )
}

export default ShowPath