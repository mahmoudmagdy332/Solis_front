import FadeEffect from "../common/FadeEffect"

const Subscribe = () => {
  return (
    <FadeEffect transition={0.1} direction="up" duration={ 0.4}>
      <div className="flex flex-col gap-8 items-center bg-[#BBBEBF] py-12 my-16">
          <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">Enjoy our newsletters now</h2> 
          <form className="flex flex-col items-center lg:flex-row gap-6">
              <input type="text" placeholder="Enter your email" className="p-4 text-xs border w-96 focus:ring-gray-50 focus:border-gray-50 border-gray-300 rounded-lg outline-none"/>
              <button className="bg-black rounded-lg text-sm text-white border hover:border-black  hover:bg-white  hover:text-black transition-all ease-in-out py-[14px] px-8">Subscribe</button>
          </form>
          </div>
    </FadeEffect>
  )
}

export default Subscribe