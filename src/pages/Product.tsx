import React, { useEffect, useRef, useState } from "react";
import Galary from "../components/Product/Galary";
import LightEffect from "../components/Product/LightEffect";
import ShadersSlider from "../components/Product/OverView";
import useProduct from "../app/utils/hooks/useProduct";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import { useProductSliceSelector } from "../app/slices/ProductSlice";
import Docoments from "../components/Product/Docoments";

const ProductDetails = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const lightingRef = useRef<HTMLDivElement>(null);
  const imageryRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("Overview");
  const { id } = useParams<{ id: string}>();
  const { sub_category,product_files,effects,
    product_application_images ,name,description} 
  = useProductSliceSelector((state) => state.ProductReducer);

  const { isLoading, isError, error,refetch } = useProduct(id);
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "Overview", ref: overviewRef },
        { id: "Lighting Effects", ref: lightingRef },
        { id: "Application Imagery", ref: imageryRef },
        { id: "Product Details", ref: detailsRef },
        { id: "Accessories Details", ref: accessoriesRef },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    <div>
      <div className="relative ">
      <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
      <img src="/images/page-electronicdesign.webp" className=" w-full h-full object-cover	 "/>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-80"></div>

      </div>
      <div className=" w-full h-64 flex  items-center">
        <div className="w-11/12 mx-auto mt-10 flex flex-col gap-3 text-white">
           <div className="flex gap-2 items-center">
            <Link to={`/main-category/${sub_category?.category?.main_category?.id}/${sub_category?.category?.main_category?.name}`} className="hover:text-gray-300 transition-all ease-in-out">{sub_category?.category?.main_category?.name}</Link>
             <div className="text-sm">/</div>
            <Link to={`/category/${sub_category?.category?.id}/${sub_category?.category?.name}`} className="hover:text-gray-300 transition-all ease-in-out">{sub_category?.category?.name}</Link>
            <div className="text-sm">/</div>
            <Link to={`/category/${sub_category?.id}/${sub_category?.name}`} className="hover:text-gray-300 transition-all ease-in-out">{sub_category?.name}</Link>

            </div>
            
           <h3 className="text-3xl lg:text-5xl font-semibold">{name}</h3>            
        </div>
</div>
</div>
      
      <div className="bg-gray-50 grid grid-cols-4 gap-2 p-10">
        <div className="text-left hidden md:block md:col-span-1  relative">
          <div className="sticky top-20 left-20">
            <Link to={`/sub-category/${sub_category?.id}/${sub_category?.name}`} className="text-red-500 flex items-center space-x-2 mb-6">
              <span className="text-lg font-bold mb-4">← All {sub_category?.name}</span>
            </Link>
            <ul className="space-y-5">
              <li
                className={` ${
                  activeSection === "Overview"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(overviewRef)}
              >
                Overview
              </li>
              {effects.length>0&&(
                <li
                className={`${
                  activeSection === "Lighting Effects"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(lightingRef)}
                >
                Lighting Effects
                </li>
              )}
             
              {product_application_images.length>0&&(
                <li
                className={`${
                  activeSection === "Application Imagery"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(imageryRef)}
                >
                Application Imagery
                </li>
              )}         
              <li
                className={`${
                  activeSection === "Product Details"
                    ? "text-red-500 font-bold"
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(detailsRef)}
              >
                Product Details
              </li>
              {product_files.length>0&&(
                <li
                className={`${
                  activeSection === "Accessories Details"
                    ? "text-red-500 font-bold "
                    : "text-gray-600"
                } hover:text-red-500 transition duration-200`}
                onClick={() => handleScrollToSection(accessoriesRef)}
              >
                Downloads
              </li>
              )}
              
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 col-span-4">
          <div className="flex flex-col gap-4">
            <div ref={overviewRef} className="py-10 border-b-4">
              <ShadersSlider />
            </div>

          

            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="h-[450px] col-span-1">
                <img
                  src={sub_category?.image}
                  className="h-full"
                  alt=""
                />
              </div>
              <div className="col-span-1 space-y-8 p-8 bg-white">
                <p className="text-6xl font-bold text-red-600">{sub_category?.name}</p>
                <p className="text-gray-700 text-xl">All In One</p>
                {sub_category?.description&&(
                    <p
                    dangerouslySetInnerHTML={{ __html: sub_category.description }}
                    className="text-gray-600  "
                    />
                  )}
                <button></button>
                <Link to={`/sub-category/${sub_category?.id}/${sub_category?.name}`}>Discover</Link>
              </div>
            </div>
            {effects.length>0&&(
              <div
              ref={lightingRef}
              className="w-full flex flex-col gap-4 py-10 border-b-4"
            >
              <p className="text-2xl text-gray-500">Lighting Effects</p>
              <LightEffect />
            </div>
            )}
          
            {product_application_images.length>0&&(
              <div
              ref={imageryRef}
              className="w-full flex flex-col gap-4 py-20 border-b-4"
            >
              <p className="text-2xl text-gray-500">
                Application imagery for Blade R ø170mm
              </p>
              <Galary />
            </div>
            )}
          

           
          </div>
          <div
            ref={detailsRef}
            className="w-full flex flex-col gap-4 py-10"
          >
            <p className="text-2xl text-gray-500">Product Details</p>
            {description&&(
                    <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="text-gray-600  "
                    />
                  )}
            <div>
          
            
            </div>
          
          </div>
          {product_files.length>0&&(
            <div ref={accessoriesRef} className="w-full flex flex-col gap-4">
             
              <Docoments/>
              
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
