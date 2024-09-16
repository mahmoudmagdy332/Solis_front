
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
export const Products = () => {
    const images=['/images/temp/Rynk.png',
        '/images/temp/Frame 1618872995.png ',
        '/images/temp/Frame 1618872999.png',
        '/images/temp/Frame 1618872991.png',
        '/images/temp/Frame 1618872995.png ',
        '/images/temp/Frame 1618872999.png',
        '/images/temp/Frame 1618872991.png',
    ]
  return (
    <div className="mt  -4 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
           <img src="/images/temp/Frame 1618873010.png" className="w-full h-full"/>
        </div>
           <div className="w-screen mx-auto mt-16 py-16 flex flex-col items-center">
            <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">Our global brands</h2> 
        <div className="relative w-11/12 xl:w-3/4 my-12">
        <Swiper
          modules={[Navigation, Pagination]}
          className="pb-20"
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
          {images.map((course, index) => (
            <SwiperSlide key={index}>
                <div className=" flex justify-center items-center  h-72 bg-white rounded-2xl p-8">
                <img src={course}  />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>
        <div className="flex justify-center">
        <Link to="/" className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white" >
          See More Products
          <img src="/icons/Vector-black.svg" className="w-3 "/>
        </Link> 
        </div>

    </div>
    </div>
  )
}
