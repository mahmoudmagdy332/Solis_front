import { forwardRef } from "react";

const JopInput = forwardRef<
  HTMLInputElement,
  {
    error?: string;
  }
>(({ error, ...rest }) => {
  return (
    <div className="col-span-2 flex flex-col">
      <input type="text" 
       
       {...rest}
      
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
       />

     
      <p className="text-red-500">{error}</p>
    </div>
  );
});

export default JopInput;
