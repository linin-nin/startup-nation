import Image from "next/image"
import Input from "@/ui/input"

const Join = () => {
  return (
    <main className="border-2 border-white mt-8">
        <div className="banner-footer flex justify-center items-center bg-white p-4 text-black text-lg font-bold">
            <h1>Join us !!!</h1>
        </div>
        <div className="m-6">
            <h2 className="font-normal text-normal text-center mb-6">Lorem ipsum dolor sit amet consectetur. Sit tincidunt amet volutpat neque porttitor. Morbi risus turpis
                 est platea aliquam ridiculus nibh. Imperdiet id eget tempus aliquam semper volutpat viverra dolor in.
            </h2>
            <div className="flex justify-start">
                <div className="mr-5 max-lg:mr-0 flex justify-center">
                    <Image
                        src='/image/img.png'
                        width={950}
                        height={800}
                        alt="image"
                        className="border-2 max-lg:hidden"
                        />
                </div>
                <form className="flex flex-col mt-0 w-full">
                    <span className="font-normal text-medium mb-3">EMAIL</span>
                    <Input
                        text='email'
                        placeholder='Enter your email'
                    />
                    <span className="font-normal text-medium mb-3">PHONE</span>
                    <Input
                        text='text'
                        placeholder='Enter phone number'
                    />
                    <button type='submit' className="bg-white border-2 border-white text-black w-full text-center font-bold p-3 mt-4 text-medium hover:bg-black hover:text-white">Submit</button>
                </form>
            </div>
        </div>
    </main> 
  )
}

export default Join