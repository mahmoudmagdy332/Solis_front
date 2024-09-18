import Connected from "../components/about/connected"
import Environmental from "../components/about/Environmental"
import Hero from "../components/about/Hero"
import Products from "../components/about/Products"
import Vision from "../components/about/Vision"

const About = () => {
  return (
    <div>
        <Hero/>
        <Vision/>
        <Environmental/>
        <Products/>
        <Connected/>
    </div>
  )
}

export default About