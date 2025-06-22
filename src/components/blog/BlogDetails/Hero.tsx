import MainLinks from "./Linkes";

const Hero = ({ title }: { title: string }) => {
  return (
    <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10 bg-black">
        {/* <img
          src="/images/Section.svg"
          className=" w-full h-full object-cover	 "
        /> */}
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      </div>
      <div className=" w-full  flex  items-center">
        <div className="flex w-11/12 mx-auto flex-col items-start gap-6 pt-44 pb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>

          <MainLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;
