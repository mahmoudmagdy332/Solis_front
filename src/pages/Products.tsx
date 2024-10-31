import { useParams } from "react-router-dom";
import Hero from "../components/Products/Hero";
import ProductItems from "../components/Products/ProductItems";
import useCategories from "../app/utils/hooks/useCategories";
import { useEffect } from "react";
import Loader from "../components/common/Loader";

function Products() {
    const { id,name } = useParams<{ id: string,name:string }>();
    const { isLoading, isError, error,refetch } = useCategories(id);
  
  useEffect(()=>{
    refetch()
  },[id])

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
    <div className="flex flex-col  ">

      {/* {homeData&&(
      <Seo title={homeData?.data.data.meta_title}
      description={homeData?.data.data.meta_description}
      keywords={homeData?.data.data.meta_keywords}
      />
        )} */}
      <Hero name={name}/>
      <div className="bg-gray-100">
      <div className=" w-11/12 mx-auto py-20">
        <ProductItems />
      </div>
      </div>
    </div>
  );
}

export default Products;
