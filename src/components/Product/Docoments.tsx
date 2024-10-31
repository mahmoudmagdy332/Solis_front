import {  useState } from "react"
import { IoIosArrowDown, IoIosArrowUp, IoMdEye } from "react-icons/io"
import { CiFileOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { useProductSliceSelector } from "../../app/slices/ProductSlice";
import axios from "axios";

const Docoments = () => {
    const [show,setShow]=useState(true);
    const {product_files} = useProductSliceSelector((state) => state.ProductReducer);
    const [selectedFiles,setSelectedFiles]=useState<number[]>([])  
    const handleDownload = async ( fileName:string,fileUrl:string) => {
        try {
            const response = await axios.get(fileUrl, {
                responseType: 'blob' // هذا يُجبر axios على التعامل مع الملف كـ Blob
            });
    

            const blob = new Blob([response.data], { type: response.data.type });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    }
    const handleSelectFile = (file_id:number) => {
        setSelectedFiles((prevSelectedFiles) => {
            if (prevSelectedFiles.includes(file_id)) {
                // إزالة الملف من قائمة المحددين إذا كان موجودًا
                return prevSelectedFiles.filter((selectedFile) => selectedFile !== file_id);
            } else {
                // إضافة الملف إلى قائمة المحددين إذا لم يكن موجودًا
                return [...prevSelectedFiles, file_id];
            }
        });
    };
    const downloadSelected=()=>{
        if(selectedFiles.length>0){
            product_files.map((product_file)=>{
              if(selectedFiles.filter((id)=>product_file.id===id).length>0){
                handleDownload(product_file.name,product_file.file); 
              }
            })  
        }
    }
    const downloadAll=()=>{
            product_files.map((product_file)=>{
                handleDownload(product_file.name,product_file.file);     
            })  
    }
    return (
    <div className="bg-white rounded-md p-4">
          <p className="text-2xl text-gray-500 pb-2 border-b mb-4">Downloads</p>
          <div className="flex justify-between items-center p-2" onClick={()=>setShow(!show)}>
             <p>Docomentation</p>
             {show?(<IoIosArrowUp />):(  <IoIosArrowDown />)}

          </div>
          <div className={`${show?'flex':'hidden'} flex-col gap-1 p-4`}>
            {product_files.map((product_file,index)=>(
                <div key={index}className="bg-gray-200 rounded-md p-3 flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-white rounded-md">
                    <CiFileOn />
                    </div>
                    <p>{product_file.name}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div onClick={()=>handleDownload(product_file.name,product_file.file)} className="p-1 bg-white cursor-pointer rounded-md">
                    <GoDownload className="text-md" />
                    </div>
                    <a href={product_file.file} target="_blank" className="p-1 bg-white rounded-md">
                    <IoMdEye className="text-md" />
                    </a>
                    <input  id="checked-checkbox"  
                     checked={selectedFiles.includes(product_file.id)}
                     onChange={() => handleSelectFile(product_file.id)}
                    type="checkbox"  
                     className="w-4 h-4 text-black bg-white border-black rounded   focus:ring-0 "/>

                    
                </div>            
                </div>
            ))}
             <div className="flex gap-5 mt-10">
                   <button onClick={downloadSelected} className="w-1/2 flex justify-center py-2 border border-black rounded-md">Download Selected</button>
                   <button onClick={downloadAll} className="w-1/2 bg-black rounded-md py-2 text-white">Download All</button>
             </div>
          </div>
          
    </div>
  )
}

export default Docoments