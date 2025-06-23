import { Link } from "react-router-dom";
import FadeEffect from "../common/FadeEffect";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";
// import { useEffect, useState } from "react";
const Hero = ({ content }: { content: string }) => {
  const sliders = ["images/home.jpg"];
  const { main_categories } = useSettingSliceSelector(
    (state) => state.settingReducer
  );
  const { translations } = useLanguageSelector(
    (state) => state.LanguageReducer
  );

  // const [showImage, setShowImage] = useState(0);
  // const toggleImages = () => {

  //   setShowImage((prevIndex) =>
  //   prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
  // );

  // };
  // useEffect(() => {
  //   const interval = setInterval(toggleImages, 5000);

  //   return () => {
  //     clearInterval(interval)
  //   };
  // }, []);
  return (
    <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
        {sliders.map((slider) => (
          <img
            key={slider}
            src={slider}
            alt="image"
            className={`fade-img image-slider w-full h-full object-cover`}
            // ${showImage
            // !==idx ? 'fade-img-hidden' : 'fade-img-visible'}`}
          />
        ))}

        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      </div>

      <FadeEffect transition={0.1} direction="down" duration={0.7}>
        <div className=" w-full   flex  items-center justify-center">
          <div className="flex w-11/12 mx-auto flex-col items-center lg:items-start gap-6 pt-40 pb-20 md:pt-32 md:pb-28 lg:pt-60  lg:pb-40">
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              className=" text-center lg:text-start "
            />
            {/* <p className="text-white text-xl ">All-in-one solution</p> */}
            <FadeEffect transition={0.4} direction="right" duration={0.7}>
              {main_categories[0] && (
                <Link
                  to={`/main-category/${main_categories[0].id}/${main_categories[0].name}`}
                  className="flex gap-3 px-6 py-2  justify-center items-center bg-white hover:bg-black hover:text-white transition-all ease-in-out  rounded-full mt-3"
                >
                  {translations.Explore}
                  <img src="/icons/Vector-black.svg" className="w-3 " />
                </Link>
              )}
            </FadeEffect>
          </div>
        </div>
      </FadeEffect>
    </div>
  );
};

export default Hero;
