"use client"
import Pagination from '@mui/material/Pagination'; 
import {useState} from "react"
import '@fontsource/teko/500.css';

const Paginations = () => {
  const [pages, setpages] = useState(1)
  const handleChange = (e:React.ChangeEvent<unknown>, p:number) =>{
    setpages(p)
  }
  return (
    <main className='bg-white text-black border-t-2 border-black flex justify-between items-center mt-3 py-5'>
        <div>1 -6 from 100</div>
        <Pagination 
          count={16} 
          color="standard"
          variant="outlined" 
          shape="rounded" 
          size="large"
          onChange={handleChange}/>
          <div>Show rows </div>
    </main>
  )
}

export default Paginations