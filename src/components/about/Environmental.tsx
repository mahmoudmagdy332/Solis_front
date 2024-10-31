
const Environmental = () => {
  return (
    <div className=" relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
         <img  loading="lazy"  src="/images/slide.webp" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute -z-10 w-full h-full top-0 left-0 bg-black opacity-70"></div>

        <div className="w-screen mx-auto my-10 py-20 md:py-32 lg:py-48 flex flex-col items-center gap-6 text-white">
            <h2 className="text-center text-2xl lg:text-4xl w-11/12 md:w-3/4 lg:w-1/2">Our social and environmental impact</h2> 
            <p className="text-center text-md lg:text-xl w-11/12 md:w-3/4 ">We care about the environment and our neighbors, and have created a culture where our associates are actively engaged in making our company and our communities better. From proactively volunteering, to supporting organizations that align with our values, to developing products with our collective future in mind - community is a core value.
             <br/><br/>
             Join us as our technology continues to drive the industry’s sustainability journey.
            </p> 

        </div>
    </div>
    )
}

export default Environmental