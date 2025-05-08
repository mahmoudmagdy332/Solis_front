import { useDispatch } from "react-redux";
import { changeLanguage, useLanguageSelector } from "../../app/slices/languageSlice";

const ChangeLanguage = () => {
    const dispatch = useDispatch();
    const { lang } = useLanguageSelector((state) => state.LanguageReducer);

    const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    dispatch(changeLanguage(newLang));
      window.location.reload();
    };
  return (
    <div   
    className={`    items-center gap-2  pe-2 space-x-2 hover:text-white text-gray-300 cursor-pointer`}
    onClick={toggleLanguage}
  >

    <span>{lang === 'en' ? 'العربية' : 'English'}</span>
  </div>  
  )
}

export default ChangeLanguage