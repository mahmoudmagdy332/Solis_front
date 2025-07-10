import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FadeEffect from "../common/FadeEffect";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import { Link } from "react-router-dom";
import { useLanguageSelector } from "../../app/slices/languageSlice";
const Prands = () => {
  const { brands } = useHomeSliceSelector((state) => state.homeReducer);
  const { translations } = useLanguageSelector(
    (state) => state.LanguageReducer
  );

  return (
    <div className="w-screen mx-auto my-16 flex flex-col items-center">
      <h2 className="text-center text-2xl w-11/12 md:w-3/4 lg:w-1/2">
        <FadeEffect transition={0.3} direction="down" duration={0.5}>
          {translations.Our_global_brands}
        </FadeEffect>
      </h2>
      <div className="relative w-11/12 my-16">
        <FadeEffect transition={0.3} direction="up" duration={0.5}>
          <div>
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
              {brands?.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <img src={brand.image} className="h-20" alt="brand" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeEffect>
      </div>

      <div className="flex justify-center">
        <FadeEffect transition={0.3} direction="up" duration={0.5}>
          <Link
            to="/brands"
            className="text-center px-8 py-3 rounded-full flex justify-center gap-3 items-center  border-2 border-transparent transition-all duration-500 hover:bg-black hover:text-white capitalize"
          >
            {translations.See_all_brands}
            <img src="/icons/Vector-black.svg" className="w-3 " />
          </Link>
        </FadeEffect>
      </div>
    </div>
  );
};

export default Prands;
