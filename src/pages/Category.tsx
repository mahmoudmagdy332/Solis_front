import { useEffect, useState } from "react";
import { SubCategoriesQuery } from "../app/services/queries";
import SubCategoryCard from "../components/Products/SubCategoryCard"
import { useParams } from "react-router-dom";
import { sub_category } from "../app/utils/types/types";
import Loader from "../components/common/Loader";

const Category = () => {
  const { id,name } = useParams<{ id: string,name:string }>();
  const [categories,setCategories]=useState<sub_category[]>([]);
  const { isLoading,data, isError, error,refetch } = SubCategoriesQuery(id);
   useEffect(()=>{
    refetch();
   },[id])
   
   useEffect(()=>{
    if(data)
      setCategories(data.data.data); 
   },[data])
   if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  return (
    <div className="">
        <div className="bg-black py-10">
            <div className="w-11/12 mx-auto mt-10 flex flex-col gap-3 text-white">
               <p>Products</p>
               <h3 className="text-3xl lg:text-5xl font-semibold">{name}</h3>            
            </div>
        </div>
    <div className="bg-gray-100">
     <div className=" w-11/12 mx-auto py-20">
        <div className="flex flex-col gap-10 ">
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((card) =>
                <SubCategoryCard  subCategory={card} />
            )}
            </div>
        </div>
    </div>
    </div>
    </div>
    
   
    
  )
}

export default Category