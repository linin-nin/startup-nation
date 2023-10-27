import Image from "next/image"
import Link from "next/link"

const hello = "Hello"
const Showpath = () => {
  return (
    <div className='w-56 py-4'>
      <div>
        <div className="flex justify-between">
          <Link href="/"><h2 className="text-2xl hover:underline">Home</h2></Link>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>


          <h2 className="text-yellow-300 text-2xl">{hello}</h2>
        </div>
      </div>
    </div>
  )
}

export default Showpath