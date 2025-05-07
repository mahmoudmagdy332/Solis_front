import { useLanguageSelector } from "../../app/slices/languageSlice";
import { category } from "../../app/utils/types/types";



function DownLite({category}:{category:category}) {
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  
  return (
    <div className="p-4 bg-black flex flex-col justify-between">
      <p className="text-white">{category.name}</p>
      <p className="text-white">{category?.sub_categories?.length} {translations.ProductLines}</p>
    </div>
  );
}

export default DownLite;
