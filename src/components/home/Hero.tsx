const Hero = () => {
  return (
    <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
        <img
          src="/images/Section.svg"
          className=" w-full h-full object-cover	 "
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      </div>
      <div className=" w-full  flex  items-center">
        <div className="flex w-11/12 mx-auto flex-col items-start gap-6 pt-44 pb-20">
          <h3
            className="text-white text-3xl font-bold"
            style={{ width: "0px", transform: "scaleX(2)" }}
          >
            Pyrymyd
          </h3>
          <p className="text-white text-xl ">All-in-one solution</p>
          <button className="flex gap-3 px-6 py-2  justify-center items-center bg-white rounded-full mt-3">
            Explore
            <img src="/icons/Vector-black.svg" className="w-3 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
