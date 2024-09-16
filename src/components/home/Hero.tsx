
const Hero = () => {
  return (
    <div className="relative">
    <img src="/images/Section.svg" className="w-screen"/>
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
   <div className="absolute w-full h-full top-0 left-0 flex  items-center">
       <div className="flex w-11/12 mx-auto flex-col items-start gap-6">
          <h3 className="text-white text-3xl font-bold" style={{    width: '0px',
           transform:'scaleX(2)'}}>Pyrymyd</h3>
          <p className="text-white text-xl ">All-in-one solution</p>
              <button className="flex gap-3 px-6 py-2  justify-center items-center bg-white rounded-full mt-3" >
              Explore
             <img src="/icons/Vector-black.svg" className="w-3 "/>
            </button>
       </div>
   </div>
</div>
  )
}

export default Hero