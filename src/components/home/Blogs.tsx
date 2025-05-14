import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FadeEffect from "../common/FadeEffect";
import { Link } from "react-router-dom";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import { format } from "date-fns";
import { ar,enUS  } from 'date-fns/locale';
import { useLanguageSelector } from "../../app/slices/languageSlice";

const Blogs = () => {
  const { news } = useHomeSliceSelector((state) => state.homeReducer);

   const { translations,lang } = useLanguageSelector((state) => state.LanguageReducer);
 
  return (
    
    <div className=" relative markets">
          <div className="absolute top-0 flex justify-start left-0 w-full h-full opacity-80 -z-50">
           <img src="/images/Solis Brown Logo.svg"  />
        </div> 
           <div className="w-screen mx-auto  py-4 flex  flex-col gap-6 items-center">
          
            <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">
            <FadeEffect transition={0.1} direction="up" duration={ 0.5}>
              {translations.Blogs}
            </FadeEffect>
            </h2> 
            <p className="text-center  w-11/12 md:w-3/4 lg:w-1/2">
            <FadeEffect transition={0.3} direction="up" duration={ 0.5}>
            {translations.Keep_yourself}
            </FadeEffect>
            </p> 

         <div className="relative w-11/12  my-2">
         <FadeEffect transition={0.1} direction="right" duration={ 0.5}>
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
          {news?.map((servese, index) => (
            <SwiperSlide key={index}>
                <div className=" flex flex-col gap-2 justify-center  card-blog hover:shadow-xl bg-black text-white  h-84 border-1  rounded-md ">
                <div className="h-64 overflow-hidden">
                <img src={servese.image}  className="w-full   rounded-t-md"/>

                </div>
                <div className="px-4 py-6 flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <div className="bg-white px-2 py-1 text-black">{servese.blog_category?.name}</div>
                  <p className="text-sm">{format(servese.updated_at, "MMMM dd, yyyy", { locale: lang=='ar'?ar:enUS  })}</p>
                  </div>
                <h3 className="text-xl font-bold">{servese.title}:</h3>
                <p className="text-gray-300 text-sm leading-6 font-thin">{servese.card_description}</p>
                <div className="flex justify-start">
                <Link to={`/blog/${servese.id}`}  className="flex items-center text-md gap-2 border border-white rounded-sm px-4 py-2 hover:bg-white hover:text-black transition-all ease-in-out">
                     <p >{translations.Read_more}</p>
                     {lang=='ar'?<IoIosArrowBack />:<IoIosArrowForward />}
                    
                </Link>
                </div>
                </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
          </FadeEffect>
      

        </div>
        <Link to={`/blogs`} className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white" >
              {translations.See_More_Blogs}
              <img src="/icons/Vector-black.svg" className="w-3 "/>
              </Link> 

    </div>
    </div>

  )
}

export default Blogs