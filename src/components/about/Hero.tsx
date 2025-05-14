import { useLanguageSelector } from "../../app/slices/languageSlice";
import { aboutSection } from "../../app/utils/types/types"

const Hero = ({section}:{section:aboutSection}) => {
      const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  
  return (   
<div className=" w-full  flex  items-center bg-[#ECEFF0] ">
   <div className=" w-11/12 lg:w-3/4 mx-auto gap-x-40  gap-y-9 grid grid-cols-3 items-start  g pt-32 pb-16">
        <div className="col-span-2 md:col-span-2 lg:col-span-1  relative">
            <img src={section.image} className=" w-full"/>
            <p className="text-white top-5 end-2 absolute font-semibold text-2xl mdtext-4xl xl:text-6xl ">{translations.About}</p>
            <p className="text-black top-5 start-full ps-2 absolute font-semibold text-2xl mdtext-4xl xl:text-6xl ">{translations.Us}</p>

        </div>
        <div className="col-span-3  lg:col-span-2 flex flex-col gap-8 xl:pb-16">
              <h2 className="text-xl md:text-2xl xl:text-3xl  leading-10 text-[#353535]">{section.title}</h2>
           
              <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className=" md:text-lg xl:text-xl  leading-8  text-[#4A4A4A] "
        />
        
                {/* Leverage some of the world’s most respected brands in lighting and intelligent spaces, with our Acuity Brands Lighting and Intelligent Spaces Group portfolios. */}
              

        </div> 
   </div>
</div>

  )
}

export default Hero