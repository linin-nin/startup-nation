'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const Search = () => {
  const router = useRouter()
  const initialRender = useRef(true)

  const [text, setText] = useState('')
  const [query] = useDebounce(text, 750)

  useEffect(() => {
    if(!query){
      router.push('/test')
    }
    else{
      router.push(`/test?search=${query}`)
    }
  }, [query, router])

  return (
    <div className='relative rounded-md shadow-sm'>
      <input
        value={text}
        placeholder='Search movies...'
        onChange={e => setText(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
      />
    </div>
  )
}

export default Search
