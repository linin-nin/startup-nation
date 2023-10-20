import Hero from "@/components/directory/directory"
import ShowPath from "@/components/directory/showPath"
import Header from "@/components/header/Header"
import Main from "@/components/directory/main"
import Grid from "@/components/directory/grid"

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ShowPath/>
      <Main/>
      <Grid/>
    </div>
  )
}

export default page