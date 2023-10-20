import Hero from "@/components/directory/directory"
import ShowPath from "@/components/directory/showPath"
import Header from "@/components/header/Header"

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ShowPath/>
    </div>
  )
}

export default page