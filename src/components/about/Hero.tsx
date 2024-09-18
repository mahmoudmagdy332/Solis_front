
const Hero = () => {
  return (   
<div className=" w-full  flex  items-center bg-[#ECEFF0] ">
   <div className=" w-11/12 lg:w-3/4 mx-auto gap-16 grid sm:grid-cols-3 items-end   pt-32 pb-16">
        <div className="relative">
            <img src="/images/about_hero.png" className=""/>
            <p className="text-white top-5 end-2 absolute font-semibold text-2xl mdtext-4xl xl:text-6xl ">About</p>
            <p className="text-black top-5 start-full ps-2 absolute font-semibold text-2xl mdtext-4xl xl:text-6xl ">Us</p>

        </div>
        <div className="col-span-2 flex flex-col gap-8 xl:pb-16">
              <h2 className="text-xl md:text-2xl xl:text-3xl  leading-10 text-[#353535]">Access Transformational Technology Through Our Businesses</h2>
              <p className=" md:text-lg xl:text-xl  leading-8  text-[#4A4A4A]">Leverage some of the world’s most respected brands in lighting and intelligent spaces, with our Acuity Brands Lighting and Intelligent Spaces Group portfolios.</p>

        </div> 
   </div>
</div>

  )
}

export default Hero