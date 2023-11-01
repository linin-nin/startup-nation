import Image from "next/image"
import Link from "next/link"
import SideBar from "../header/SideBar"

const hello = "Hello"
const ShowPath = () => {
  return (
    <div className='container padding-body py-6 border-b-2'>
      <div className="inline-block">
        <div className="flex justify-between gap-4">
          <Link href="/"><h2 className="text-2xl hover:underline">Home</h2></Link>
          <Image
          src={'/icons/greater-then.svg'}
          alt="greater-than-icon"
          width={32}
          height={32}/>
          
          <h2 className="text-yellow-300 text-2xl">{hello}</h2>
        </div>
      </div>
    </div>
  )
}

export default ShowPath