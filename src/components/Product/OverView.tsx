import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination,Autoplay, A11y } from "swiper/modules";
import { useProductSliceSelector } from "../../app/slices/ProductSlice";

// const shaders = [
//   {
//     title: "Shader 1",
//     image: "https://via.placeholder.com/300x200.png?text=Shader+1",
//   },
//   {
//     title: "Shader 2",
//     image: "https://via.placeholder.com/300x200.png?text=Shader+2",
//   },
//   {
//     title: "Shader 3",
//     image: "https://via.placeholder.com/300x200.png?text=Shader+3",
//   },
//   {
//     title: "Shader 4",
//     image: "https://via.placeholder.com/300x200.png?text=Shader+4",
//   },
// ];

const ShadersSlider: React.FC = () => {
  const { product_images,image } = useProductSliceSelector((state) => state.ProductReducer);

  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={1}
  
   
    speed={1500}
    autoplay={{delay: 5500}}
    pagination={{
    clickable: true,
    }}
    loop={true}
    modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
    className="MainSwiper h-[400px] w-full"
    >
      <SwiperSlide  className=" rounded-lg">
          <img
            src={image?image:""}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      {product_images?.map((shader, index) => (
        <SwiperSlide key={index} className=" rounded-lg">
          <img
            src={shader.image}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShadersSlider;
