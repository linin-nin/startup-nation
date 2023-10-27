import Image from "next/image"
import Link from "next/link"

const hello = "Hello"
const Showpath = () => {
  return (
<<<<<<< HEAD
    <div className='w-56 py-4'>
      <div>
        <div className="flex justify-between">
          <Link href="/"><h2 className="text-2xl hover:underline">Home</h2></Link>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>


          <h2 className="text-yellow-300 text-2xl">{hello}</h2>
=======
    <div className='bg-black mt-6 px-24'>
        <div className="inline-block">
            <div className="flex justify-between gap-4">
                <Link href="/"><h2 className="text-2xl hover:underline">Home</h2></Link>
                <Image src="/icons/greater-then.svg" width={24} height={24} alt="icon" className=""/>
                <h2 className="text-yellow-300 text-2xl">{hello}</h2>
            </div>
>>>>>>> 8241c85baaf3cb78b1d4cafaead00c2f22f25740
        </div>
      </div>
    </div>
  )
}

export default Showpath