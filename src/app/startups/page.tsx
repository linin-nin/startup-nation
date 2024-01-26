import { redirect } from "next/navigation"

const page = () => {
  return redirect('startups/all')
}

export default page