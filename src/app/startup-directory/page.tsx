import Hero from "@/components/directory/directory"
import ShowPath from "@/components/directory/showPath"
import Header from "@/components/header/Header"
import Main from "@/components/directory/main"
import Grid from "@/components/directory/grid"
import Paginations from "@/components/directory/pagination"

const page = () => {
  return (
    <div className="bg-white ">
      <Header/>
      <Hero/>
      <ShowPath/>
      <Main/>
      <Grid/>
      <Paginations/>
    </div>
  )
}

export default page