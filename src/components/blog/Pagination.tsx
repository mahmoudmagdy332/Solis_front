import { useDispatch } from "react-redux";
import { setCurrentPage, useBlogsSliceSelector } from "../../app/slices/BlogSlice";
import { AppDispatch } from "../../app/store";

const Pagination = () => {
  const { last_page, currentPage } = useBlogsSliceSelector(
    (state) => state.BlogReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const handlePageChange = (
    value: number
  ) => {
    dispatch(setCurrentPage(value));
  };
  return (
        <nav aria-label=" ">
           {last_page > 1 && (
          <ul className="flex items-center gap-2 -space-x-px h-10 text-base my-6 flex-wrap">
           {currentPage>1&&(
            <li>
              <button onClick={()=>{
                handlePageChange(currentPage-1)
                }} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 ">
                Previous
              </button>
            </li>
           )}
           
            {Array.from({ length: last_page }).map((_, index) => (
              <li>
                <button onClick={()=>handlePageChange(index+1)} key={index} className={`flex items-center 
                 ${currentPage===index+1&&'bg-gradient-to-r from-[#70443D] via-[#DAADA3] to-[#70443D]'} justify-center px-4 h-10 leading-tight text-black
                   bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700 `}> 
                   {index + 1}
                </button>
            </li>
            ))} 
            {currentPage<last_page&&(
              <li>
              <button onClick={()=>{
                handlePageChange(currentPage+1)
                }} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 
              hover:bg-gray-100 hover:text-gray-700 rounded ">
                <span className="sr-only">Next</span>
                Next
              </button>
              </li>
            )}
           
          </ul>
           )}
</nav>


  )
}

export default Pagination