import { Link } from "react-router-dom"
import Card from "./Card"
import FadeEffect from "../common/FadeEffect"
import Loader from "../common/Loader"
import useBlogs from "../../app/utils/hooks/useBlogs"
import { useBlogsSliceSelector } from "../../app/slices/BlogSlice"
import Pagination from "./Pagination"
import { useEffect, useRef } from "react"
import { useLanguageSelector } from "../../app/slices/languageSlice"

const AllBloges = () => {

const { Blogs ,currentPage} = useBlogsSliceSelector((state) => state.BlogReducer);

const { isLoading, isError, error } = useBlogs(currentPage);
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);


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
    <div className="my-12 w-11/12 lg:w-3/4 mx-auto "> 
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <FadeEffect transition={0.4} direction="right" duration={0.5}>

            <div className="flex flex-col gap-4 relative">
              <div className="absolute top-2 -start-20">
                <img src="/public/icons/Horizontal Divider.svg"/>
              </div>
                <p className="font-semibold text-sm text-center md:text-start">{translations.RecentArticles}</p>
                <Link to="/" className="font-bold text-2xl text-center md:text-start">{translations.ReadAllNews}</Link>
            </div>
            </FadeEffect>
            
            <div className="text-sm md:w-1/2 text-center  md:text-start">
            <FadeEffect transition={0.4} direction="left" duration={0.5}>
              {translations.Industry}
            </FadeEffect>
            </div>
            <div ref={scrollRef} className="h-20"></div>
           
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-12">
            {Blogs?.map((blog,index)=>(
        <FadeEffect transition={0.2*((index%3)+1)} direction="up" duration={0.3*((index%3)+1)}>

                <Card blog={blog}/>
                </FadeEffect>
            ))} 
        </div>
        
       <Pagination/>


    </div>
  )
}

export default AllBloges