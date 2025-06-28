
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import FadeEffect from "../common/FadeEffect";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";

import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";
// import ProductCard from "../Products/ProductCard";
export const Products = () => {
  const { products } = useHomeSliceSelector((state) => state.homeReducer);
  const { main_categories } = useSettingSliceSelector((state) => state.settingReducer);
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);


  return (
    <div className="mt  -4 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
           <img src="/images/temp/Frame 1618873010.png" className="w-full h-full"/>
        </div>
           <div className="w-screen mx-auto mt-16 py-16 flex flex-col items-center">
            
            <h2 className="text-center text-2xl w-11/12 font-bold md:w-3/4 lg:w-1/2">
            <FadeEffect transition={0.3} direction="down" duration={ 0.5}>
             {translations.Most_Selling_Products}
            </FadeEffect>
           
            
            </h2> 
       
        <div className="relative w-11/12 xl:w-3/4 my-12">
        <FadeEffect transition={0.1} direction="left" duration={0.9}>

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
          {products?.map((product, index) => (
            <SwiperSlide key={index}>
                <Link to={`/products/${product.id}`} className="relative flex justify-center items-center overflow-hidden h-72 bg-white rounded-2xl ">
                 <h2 className="absolute left-2 top-2 z-20">{product.name}</h2>
                <img src={product.image}  className="cursor-pointer w-full h-full  object-cover hover:scale-110 transition-all ease-in-out"/>
                </Link>
                {/* <ProductCard/> */}
                {/* <ProductCard product={product}/> */}
            </SwiperSlide>
          ))}
        </Swiper>
        </FadeEffect>
        

        </div>
        <div className="flex justify-center">
        <FadeEffect transition={0.1} direction="right" duration={0.9}>
          {main_categories[0]&&(
            <Link to={`/main-category/${main_categories[0].id}/${main_categories[0].name}`} className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white" >
          
          {translations.SeeMoreProducts}
          <img src="/icons/Vector-black.svg" className="w-3 "/>
        </Link> 
          )}
        
        </FadeEffect>
       
        </div>

    </div>
    </div>
  )
}
