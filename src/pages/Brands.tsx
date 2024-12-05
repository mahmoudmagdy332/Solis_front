import { useEffect, useState } from "react";
import { BrandsQuery } from "../app/services/queries";
import Hero from "../components/blog/Hero"
import Loader from "../components/common/Loader";
import { Brand } from "../app/utils/types/types";
import FadeEffect from "../components/common/FadeEffect";
const Brands = () => {
    const [brands,setBrands]=useState<Brand[]>([]);
    const { isLoading, isError, error,data } =BrandsQuery();
    useEffect(()=>{
        if(data){
            console.log('dataasdsadsadas',data.data.data);
            
            setBrands(data.data.data)
        }
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
    <div>
        <Hero title="Brands"/>
        <div className="w-11/12 lg:w-10/12 mx-auto my-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {brands.map((brand)=>(
                    <FadeEffect transition={0.3} direction="up" duration={0.5}>
                         <div className="flex justify-center items-center">
                              <img src={brand.image} className="h-20"  alt="brand"/>
                          </div>
                    </FadeEffect>
                  ))}
              </div>
        </div>
    </div>
  )
}

export default Brands