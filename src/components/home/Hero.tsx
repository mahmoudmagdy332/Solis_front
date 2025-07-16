import { Link } from "react-router-dom";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Intro = {
  id: number;
  image: string;
  title: string;
  created_at: string;
  updated_at: string;
  translations: IntroTranslation[];
};

type IntroTranslation = {
  id: number;
  intro_id: number;
  locale: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function Hero({ intro }: { intro: Intro[] }) {
  const { lang, translations } = useLanguageSelector((state) => state.LanguageReducer);
  const { main_categories } = useSettingSliceSelector((state) => state.settingReducer);

  return (
    <div className="">
      <Swiper loop autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }} modules={[Autoplay]}>
        {intro.map((item) => {
          const t = item.translations.find((t) => t.locale === lang);
          return (
            <SwiperSlide key={item.id} className="max-h-[80vh] relative">
              <img src={item.image} alt={t?.title} className="w-full h-full object-cover" />
              <div className="z-10 absolute top-0 left-0 size-full bg-black/50" />
              <div className="mx-12 w-1/2 absolute top-1/2 left-0 -translate-y-1/2 z-50">
                <p dangerouslySetInnerHTML={{ __html: t?.title || "" }} className="text-white text-3xl text-wrap break-words" />
                {main_categories[0] && (
                  <Link
                    to={`/main-category/${main_categories[0].id}/${main_categories[0].name}`}
                    className="flex gap-3 px-6 py-2 w-fit justify-center items-center bg-white hover:bg-black hover:text-white transition-all ease-in-out  rounded-full mt-3"
                  >
                    {translations.Explore}
                    <img src="/icons/Vector-black.svg" className="w-3 " />
                  </Link>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
};
