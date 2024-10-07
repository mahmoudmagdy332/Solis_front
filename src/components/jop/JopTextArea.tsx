import { forwardRef } from "react";

const JopTextArea = forwardRef<HTMLInputElement>(({ ...rest }) => {
  return (
    <textarea id="comment" 
    {...rest}
     rows={3}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
     ></textarea>

     );
});

export default JopTextArea;
