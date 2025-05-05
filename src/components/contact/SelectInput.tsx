import { forwardRef } from "react";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";
interface InputProps {
    lable: string;
    value?: string;
    error?: string;
  }
const SelectInput = forwardRef<HTMLInputElement, InputProps>(
    (
      {
        lable,
        value,
        error,
        ...rest
      }
    ) => {
const {main_categories } = useSettingSliceSelector((state) => state.settingReducer);
    const { translations } = useLanguageSelector((state) => state.LanguageReducer);

  return (
    <form className=" mx-auto mb-6">
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</label>
    <select id="countries"   value={value}  {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-black focus:border-black block w-full p-2.5    ">
      <option selected>{translations.Choose_product_type}</option>
      {main_categories.map((main_category)=>(
      <option value={main_category.name}>{main_category.name}</option>
      ))}
  
    </select>
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </form>
  )
});

export default SelectInput