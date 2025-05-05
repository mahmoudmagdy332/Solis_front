import {  useState } from "react"
import { forwardRef } from "react";

interface InputProps {
  lable: string;
  value?: string;
  error?: string;
}
const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      lable,
      value,
      error,
      ...rest
    }
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
      setIsFocused(false);
    };
  
  
    return (
      <div className="w-full">
       
        <div className="text-input ">
        <label htmlFor="first" className={`start-0 ${isFocused || value ? 'focused' : ''}`}>{lable}</label>
        <input type="text" id="first" 
        //  value={value}
         value={value}
         {...rest}
         onFocus={handleFocus}
         onBlur={handleBlur}
         className={`focus:ring-white  border-b  ${error?'border-red-600':'border-[#4A4A4A]'} border-0`}/>
   
         {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
      </div>
    );
  }
);


export default TextInput