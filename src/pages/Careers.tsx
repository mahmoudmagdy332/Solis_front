import Hero from "../components/blog/Hero"
import Pagination from "../components/career/Pagination"
import AllCareers from "../components/career/AllCareers"
import { useCareersSliceSelector } from "../app/slices/CareerSlice";
import { useEffect, useRef } from "react";

const Careers = () => {
  const {currentPage} = useCareersSliceSelector((state) => state.CareerReducer);

  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current && currentPage !== 1) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);
  return (
    <div>
        <Hero title="Careers"/>
        <div ref={scrollRef} className="h-20"></div>
        <div className="w-11/12 lg:w-10/12 mx-auto">
        <AllCareers/>
        <Pagination/>
        </div>
        
    </div>
  )
}

export default Careers