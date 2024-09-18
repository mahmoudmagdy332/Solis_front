import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
    const serveses=[  
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
]
  return (
    <div className=" relative markets">
          <div className="absolute top-0 flex justify-start left-0 w-full h-full opacity-80 -z-50">
           <img src="/images/Solis Brown Logo.svg" />
        </div> 
           <div className="w-screen mx-auto  py-4 flex  flex-col gap-6 items-center">
            <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">Blogs</h2> 
            <p className="text-center  w-11/12 md:w-3/4 lg:w-1/2">Keep yourself updated with the latest marketing news and updates.</p> 

         <div className="relative w-11/12  my-2">
        <Swiper
          modules={[Navigation, Pagination]}
          className="pb-10"
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
                <div className=" flex flex-col gap-2 justify-center items-center bg-black text-white  h-84 border-1 shadow-md rounded-md ">
                <img src={servese.image}  className="w-full  rounded-t-md"/>
                <div className="px-4 py-6 flex flex-col gap-4">
                <p className="text-sm">{servese.date}</p>
                <h3 className="text-xl font-bold">{servese.title}:</h3>
                <p className="text-gray-300 text-sm leading-6 font-thin">{servese.description}</p>
                <div className="flex justify-start">
                <button className="flex items-center text-md gap-2 border border-white rounded-sm px-4 py-2 hover:bg-white hover:text-black transition-all ease-in-out">
                     <p >Read more</p>
                    <IoIosArrowForward />
                </button>
                </div>
                </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>


    </div>
    </div>
  )
}

export default Blogs