
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Career } from "../app/utils/types/types";



const SingleJop = () => {
  const { id } = useParams<{ id: string }>();
  const [career,setCareer]=useState<Career>();
   useEffect(()=>{
     const careerStorage=localStorage.getItem('career');
     if(careerStorage){
      setCareer(JSON.parse(careerStorage));
     }
   },[])
 
  return (
    <div>
     
      <div className="relative ">
    <div className="  absolute w-screen  h-full top-0 left-0 -z-10">
    <img src="/images/page-electronicdesign.webp" className=" w-full h-full object-cover	 "/>
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>

    </div>
    <div className=" w-full  flex  items-center">
       <div className="w-10/12 lg:w-3/5 mt-16  mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <p className=" text-xl lg:text-3xl font-semibold line-clamp-6 text-white">
           {career?.title}
          </p>
          {/* <p
          className="text-gray-200"
          >
          {career?.type}
          </p> */}

          <div className="text-white">{career?.type} / {career?.place} / open</div>
        </div>
        <Link to={`/jop-application/${id}`}>
          <button
           className="bg-white hover:bg-black transition-all ease-in-out border border-black text-black hover:text-white px-4 py-2 rounded"
            
          >
            Apply for this job
          </button>
        </Link>
      </div>
    </div>
    </div>
      <div className="" >
        <div className="w-10/12 lg:w-3/5 mx-auto gap-10 items-start grid grid-cols-1 md:grid-cols-4 py-10">
          <div className="col-span-3">

          {career?.description&&
            <p dangerouslySetInnerHTML={{ __html: career?.description }} />}
            <div className="flex justify-center my-10">
              <Link to={`/jop-application/${id}`}>
                <button
                className="bg-black hover:bg-white border border-black text-white hover:text-black px-4 py-2 rounded"

                >
                  Apply for this job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJop;
