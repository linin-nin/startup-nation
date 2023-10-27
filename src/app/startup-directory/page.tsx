'use client'
import Header from "@/components/header/Header"
import Directory from "@/components/directory/Directory"
import Showpath from "@/components/directory/Showpath"
import Search from "@/components/directory/Search"


const page = () => {
  return (
    <div>
      <Header/>
      <Directory/>
      <Showpath/>
      <Search/>
    </div>
  )
}

export default page