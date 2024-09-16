import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Prands = () => {
    const images=['/images/temp/Philips_logo.svg 1.png',
        '/images/temp/wofi-wiz-logo 1.png',
        '/images/temp/flos-logo-mar-159x159 1.png',
        '/images/temp/Philips_logo.svg 1.png',
        '/images/temp/wofi-wiz-logo 1.png',
        '/images/temp/flos-logo-mar-159x159 1.png',
    ]
  return (
    <div className="w-screen mx-auto my-16 flex flex-col items-center">
            <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">Our global brands</h2> 
        <div className="relative w-11/12 my-16">
        <Swiper
          modules={[Navigation, Pagination]}
         
          spaceBetween={4}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
     
            },
            1024: {
              slidesPerView: 4,
          
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((course, index) => (
            <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                <img src={course}  />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>
        <div className="flex justify-center">
        <Link to="/" className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white" >
          See all brands
          <img src="/icons/Vector-black.svg" className="w-3 "/>
        </Link> 
        </div>

    </div>
  )
}

export default Prands