const Hero = () => {
  return (
    <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
        <img
          src="/images/Section@2x.svg"
          className=" w-full h-full object-cover	 "
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      </div>
      <div className=" w-full  flex  items-center">
        <div className="flex w-11/12 mx-auto flex-col items-start gap-6 pt-32 pb-16 lg:pt-48 lg:pb-20">
          <h3
            className="text-white text-3xl md:text-5xl lg:text-7xl font-bold"
        
          >
            Products
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
