import { Link } from "react-router-dom"
import Card from "./Card"
import Pagination from "../common/Pagination"
import FadeEffect from "../common/FadeEffect"
import Loader from "../common/Loader"
import useBlogs from "../../app/utils/hooks/useBlogs"
import { useBlogsSliceSelector } from "../../app/slices/BlogSlice"

const AllBloges = () => {
//     const serveses=[  
//         {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
//         {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
//         {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
//         {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
//         {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
// ]
const { Blogs ,currentPage} = useBlogsSliceSelector((state) => state.BlogReducer);

const { isLoading, isError, error } = useBlogs(currentPage);
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
    <div className="my-12 w-11/12 lg:w-3/4 mx-auto"> 
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <FadeEffect transition={0.4} direction="right" duration={0.5}>

            <div className="flex flex-col gap-4">
                <p className="font-semibold text-sm text-center md:text-start">Recent Articles</p>
                <Link to="/" className="font-bold text-2xl text-center md:text-start">Read All News</Link>
            </div>
            </FadeEffect>
            
            <div className="text-sm md:w-1/2 text-center  md:text-start">
            <FadeEffect transition={0.4} direction="left" duration={0.5}>
                Gazolin Are A Industry & Manufacturing Services Provider Institutions.
                Suitable For Factory, Manufacturing, Industry, Engineering, Construction
                And Any Related Industry Care Field.
            </FadeEffect>
            </div>
            
           
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