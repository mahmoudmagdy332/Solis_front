import Blogs from "../components/home/Blogs"
import Hero from "../components/home/Hero"
import Markets from "../components/home/Markets"
import Prands from "../components/home/Prands"
import { Products } from "../components/home/Products"
import Subscribe from "../components/home/Subscribe"

const Home = () => {
  return (
  <>
     <Hero/>
     <Prands/>
     <Products/>
     <Markets/>
     <Subscribe/>
     <Blogs/>
  </>
  )
}

export default Home