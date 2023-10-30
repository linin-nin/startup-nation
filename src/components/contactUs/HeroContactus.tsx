import React from 'react'
import { contactusQuest } from '@/lib/contactusQuest'

const HeroContactus = () => {



    return (
        <div className='container'>
            <h1 className='text-[4rem] py-6'>
                Get in Touch and Watch Your Digital Dreams <br />
                Come to Life
            </h1>

            <h3 className='border-y-2 border-[#9F9F9F] text-[1.5rem] py-3 text-[#9F9F9F]'>Transforming Your Vision into Stunning, User-Centric Websites that Boost Your Online Success</h3>

            {/* question section  */}
            <div className='grid grid-cols-2 py-[50px] border-b-2'>
                {
                    contactusQuest.map((item, index)=>{
                        return (<li className='border-y-2 list-none text-[2rem] py-5 m-3' key={index+1}>{index+1}. {item.question}</li>)
                    })
                }
            </div>
        </div>
    )
}

export default HeroContactus