import Card from "./Card"
import Loader from "../common/Loader"

import { useEffect, useRef } from "react"
import { useCareersSliceSelector } from "../../app/slices/CareerSlice"
import useCareers from "../../app/utils/hooks/useCareers"

const AllCareers = () => {

const { Careers ,currentPage} = useCareersSliceSelector((state) => state.CareerReducer);

const { isLoading, isError, error } = useCareers(currentPage);


const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (scrollRef.current && currentPage !== 1) {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [currentPage]);


if (isLoading) {
  return (
    <div className="flex h-screen justify-center items-center">
      <Loader />
    </div>
  );
}
if (isError)
  return (
    <div className=" h-screen flex justify-center items-center">
      Error: {error?.message}
    </div>
  );
  return (
     
        <div className="my-8  grid lg:grid-cols-3 gap-6">
           {Careers?.map((career,idx)=>(
            <Card career={career} key={idx}/>
           ))}
        </div>
  
  )
}

export default AllCareers