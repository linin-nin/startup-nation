import About from "@/components/directory/info"
import Header from "@/components/header/Header"
import ShowPath from "@/components/directory/showPath"
import Hero from "@/components/directory/directory"

const aboutUs = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ShowPath/>
      <About/>
    </div>
  )
}

export default aboutUs