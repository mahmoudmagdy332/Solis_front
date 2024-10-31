import { Link, useParams } from "react-router-dom"
import ProductCard from "../components/Products/ProductCard"
import Loader from "../components/common/Loader";
import { useEffect, useState } from "react";
import { sub_category } from "../app/utils/types/types";
import { ProductsQuery } from "../app/services/queries";

const SubCategory = () => {
  const { id } = useParams<{ id: string,name:string }>();
  const [category,setCategory]=useState<sub_category>();
  const { isLoading,data, isError, error,refetch } = ProductsQuery(id);
   useEffect(()=>{
    refetch();
   },[id])
   
   useEffect(()=>{
    if(data)
      setCategory(data.data.data); 
            
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
           <div className="flex gap-2 items-center">
            <Link to={`/main-category/${category?.category?.main_category?.id}/${category?.category?.main_category?.name}`} className="hover:text-gray-300 transition-all ease-in-out">{category?.category?.main_category?.name}</Link>
             <div className="text-sm">/</div>
            <Link to={`/category/${category?.category?.id}/${category?.category?.name}`} className="hover:text-gray-300 transition-all ease-in-out">{category?.category?.name}</Link>
            </div>
           <h3 className="text-3xl lg:text-5xl font-semibold">{category?.name}</h3>            
        </div>
    </div>
<div className="bg-gray-100">
 <div className=" w-11/12 mx-auto py-20">
    <div className="flex flex-col gap-10 ">
        
        
        <div className="grid lg:grid-cols-2 items-center gap-6 bg-white">
             <img src={category?.image}  loading="lazy"  alt={`subCategoryImage ${category?.name}`}/>
             <div className="bg-white py-8 flex flex-col gap-6 px-3">
                  <h3 className="text-4xl lg:text-6xl text-black font-semibold">{category?.name}</h3>
                  <p className=" text-xl lg:text-3xl text-gray-400">All In One</p>
                 
                  {category?.description&&(
                    <p
                    dangerouslySetInnerHTML={{ __html: category.description }}
                    className="text-gray-600  "
                    />
                  )}
                 
             </div>
        </div>
        <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-medium">Products</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {category?.products?.map((product, index) =>
                  <ProductCard product={product} key={index} />
                )}
        </div>
        </div>
    </div>
</div>
</div> 
</div>
  )
}

export default SubCategory