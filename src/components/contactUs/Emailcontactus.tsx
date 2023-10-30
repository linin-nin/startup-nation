import React from 'react'
import Input from "@/ui/input"

const EmailContactus = () => {
    return (
        <div className=' mt-5 flex bg-white text-black absolute left-0 right-0'>
            <div className='container flex'>
                {/* text content  */}
                <div className=' w-[50%] flex flex-col p-16'>
                    <h1 className='text-[4rem]'>
                        If you are interested, <br />
                        let&apos;s keep in touch
                    </h1>
                    <p className='text-[24px]'>Lorem ipsum dolor sit amet consectetur. Sit tincidunt amet volutpat neque porttitor. Morbi risus turpis est platea aliquam ridiculus nibh. Imperdiet id eget tempus aliquam semper volutpat viverra dolor in.</p>
                </div>
                {/* ************************************************** */}
                {/* form content */}
                <div className=' w-[50%] p-8 text-white'>
                    <form className="flex flex-col mt-0 w-[100%] border-2 border-black p-8 ">
                        <span className="font-normal text-medium mb-3 text-black">EMAIL</span>
                        <Input
                            text='email'
                            placeholder='Enter your email'
                        />
                        <span className="font-normal text-medium mb-3 text-black">PHONE</span>
                        <Input
                            text='text'
                            placeholder='Enter phone number'
                        />
                        <button type='submit' className="bg-black border-2 border-white text-white   w-full text-center font-bold p-3 mt-4 text-medium">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailContactus