const Hero = ({name}:{name:string|undefined}) => {
  return (
    <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
        <img
          src="/images/page-electronicdesign.webp"
          className=" w-full h-full object-cover	 "
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      </div>
      <div className=" w-full  flex  items-center">
        <div className="flex w-11/12 mx-auto flex-col items-start gap-6 pt-24 pb-12 lg:pt-24 lg:pb-10">
          <p className="text-white text-xl md:text-2xl lg:text-3xl">Products</p>
          <h3
            className="text-white text-3xl md:text-5xl lg:text-7xl font-bold"
          >
            
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
