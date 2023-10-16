import React from 'react'
import Image from 'next/image'
import rocket from '../../public/icons/rocket.svg'
import spinningLetter from '../../public/icons/spining-letter.svg'

const Rocket = () => {
  return (
    <section className='rocket h-[100px] flex items-center justify-center mb-52'>
        <Image
            src={spinningLetter}
            alt='spinningLetter'
            
        />
        <Image
            src={rocket}
            alt='rocket'
            className='absolute'
        />
        
    </section>
  )
}

export default Rocket