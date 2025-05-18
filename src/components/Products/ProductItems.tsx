import {useState } from "react";
import DownLite from "./DownLite";
import SubCategoryCard from "./SubCategoryCard";
import CategoryCard from "./CategoryCard";
import { useCategorySliceSelector } from "../../app/slices/CategorySlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

function ProductItems() {
  const [show,setShow]=useState(true);
    const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  
  // const categories=[
  //   {name:'DownLights',num:6,image:'images/temp/Crystal-bianco.jpg',sub:[
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},{name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]}
  //   ]},
  //   {name:'DownLights',num:6,image:'images/temp/Crystal-bianco.jpg',sub:[
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},{name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]},
  //     {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
  //       '300k/3020h/',
  //       'General Lighting','UGR<19','Oval','Wall Washer'
  //     ]}
  //   ]}
  // ]
  const changeShow=()=>{
     setShow((old)=>!old);
     
  }
  const { categories } = useCategorySliceSelector((state) => state.categoriesReducer);
  
  return (
    <div className="flex flex-col gap-10 ">
    <div className="flex items-center gap-2">
      <p className="text-gray-400">{translations['Show All Products On']}</p>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer outline-0 bg-blue-600 focus:ring-white border-0 "
          defaultChecked={false}
          checked={show}
          onClick={changeShow}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full   peer-checked:after:translate-x-full peer-checked:after:bg-black peer-checked:ring-black after:bg-gray-300 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]   after:rounded-full after:h-5 after:w-5 after:transition-all   ring-1 ring-gray-300 "></div>

      </label>
    </div>
    <div >
      {show?(
        categories?.map((category)=>(
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-16">
           <DownLite category={category}/>
          {category?.sub_categories?.map((subCategory) =>
           <SubCategoryCard subCategory={subCategory}/>
          )}
          </div>
         
        ))
      ):(
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          { categories?.map((category)=>(
         <CategoryCard category={category}/>
        ))}
        </div>
        
      )}
     
    </div>
  </div>
    
  );
}

export default ProductItems;
