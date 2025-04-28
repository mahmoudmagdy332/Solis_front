
const Hero = ({title}:{title:string}) => {
  return (
    <div className="relative ">
    <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
    <img src="/images/product.jpg" className=" w-full h-full object-cover	 "/>
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-80"></div>

    </div>
<div className=" w-full  flex  items-center">
   <div className="flex w-11/12 mx-auto flex-col items-start gap-6 pt-40 pb-16">
      <h3 className="text-white text-5xl font-bold" >{title}</h3>
      
   </div>
</div>
</div>
  )
}

export default Hero