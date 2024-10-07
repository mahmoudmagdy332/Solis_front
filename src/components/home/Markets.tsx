
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import FadeEffect from "../common/FadeEffect";
const Markets = () => {
    const serveses=[  {title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Frame 1618872971.png'},
                    {title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Frame 1618872971 (3).png'},
                    {title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Frame 1618872971 (2).png'},
                    {title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Frame 1618872971 (1).png'},
                    {title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Frame 1618872971.png'},
    ]
  return (
    <FadeEffect transition={0.1} direction="down" duration={ 0.1}>

      <div className=" relative markets">
            
            <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-50">
            <img src="/images/vectors.svg" className="w-full h-full"/>
          </div> 
            <div className="w-screen mx-auto  pt-12 flex  flex-col gap-6 items-center">
              <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">
              <FadeEffect transition={0.3} direction="down" duration={ 0.5}>
                Serving Essential Markets
              </FadeEffect>
              </h2> 
              <p className="text-center  w-11/12 md:w-3/4 lg:w-1/2">
              <FadeEffect transition={0.2} direction="down" duration={ 0.5}>
              We create critical infrastructure solutions that electrify and energize our communities and economy.
              </FadeEffect>
              </p> 

          <div className="relative w-11/12 xl:w-3/4 my-2">
          <FadeEffect transition={0.2} direction="left" duration={ 0.7}>
          <Swiper
            modules={[Navigation, Pagination]}
            className="pb-8"
            spaceBetween={20}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
      
              },
              1024: {
                slidesPerView: 3,
            
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          > 
            {serveses.map((servese, index) => (
              <SwiperSlide key={index}>
                  <Link to="/market/1/Overview" className=" flex flex-col  justify-center items-center overflow-hidden bg-white  h-84 border-1 shadow-md hover:shadow-xl hover:border transition-all  ease-in-out cursor-pointer rounded-xl ">
                  <img src={servese.image}  className="w-full  scale-110 hover:scale-100 transition-all ease-in-out rounded-t-xl"/>
                  <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{servese.title}</h3>
                  <p>{servese.description}</p>
                  </div>
                  </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          </FadeEffect>
        

          </div>
          <div className="flex justify-center">
          <FadeEffect transition={0.2} direction="right" duration={ 0.7}>
            <Link to="/market/1/Overview" className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white" >
              See More Products
              <img src="/icons/Vector-black.svg" className="w-3 "/>
              </Link> 
            </FadeEffect>
          </div>

      </div>
      </div>

    </FadeEffect>
  
)}

export default Markets