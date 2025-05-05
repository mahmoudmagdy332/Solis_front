import { useLanguageSelector } from "../../app/slices/languageSlice";

const Map = () => {
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-16">
           <p className="text-[#353535] text-[18px] md:text-[24px] lg:text-[32px]">         
           {translations.Experience}
  </p>
  <div className="w-full h-96 md:h-[500px] my-8">
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://maps.google.com/maps?q=Solis+Light+%26+Design%2C+78+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D9%8A%D8%AF%D8%8C+%D8%A7%D9%84%D9%85%D8%A7%D8%B8%D8%A9%D8%8C+%D9%82%D8%B3%D9%85+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+4461114&output=embed"
        allowFullScreen
        loading="lazy"
      />
    </div>
    </div>
  )
}

export default Map