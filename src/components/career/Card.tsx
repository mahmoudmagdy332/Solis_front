import {  useNavigate } from "react-router-dom"
import {  Career } from "../../app/utils/types/types"
import { useLanguageSelector } from "../../app/slices/languageSlice";


const Card = ({ career}:{career:Career}) => {
   const navigate=useNavigate();
   const { translations } = useLanguageSelector((state) => state.LanguageReducer);
   
  const HandleCareer=()=>{
    localStorage.setItem('career',JSON.stringify(career));
    navigate(`/jop/${career.id}`);
  }
  return (
    <div  className="border border-[#BBBEBF] hover:shadow-lg rounded-md p-8 flex flex-col items-start gap-6">
    <h3 className="text-xl font-semibold text-[#353535]">{career.title}</h3>
    <div className="flex gap-3 items-center">
        <div className="flex items-center bg-gradient-to-r from-[#70443D] via-[#DAADA3] to-[#70443D] justify-center px-4 h-10 leading-tight text-white bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700">
          {translations[career.type]}
        </div>
        <p className="font-semibold">{translations[career.place]}</p>
    </div>
    <p className="text-[#4A4A4A] ">
      {career.short_description}
    </p>
    <button onClick={HandleCareer}  className="bg-black rounded-lg text-sm text-white border hover:border-black  hover:bg-white  hover:text-black transition-all ease-in-out py-[14px] px-8">{translations.Read_more}</button>
</div>
  )
}

export default Card