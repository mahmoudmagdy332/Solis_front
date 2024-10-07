
const Pagination = () => {
  return (
        <nav aria-label=" ">
  <ul className="flex items-center gap-2 -space-x-px h-10 text-base my-6 flex-wrap">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 ">
        Previous
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center bg-gradient-to-r from-[#70443D] via-[#DAADA3] to-[#70443D] justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700 ">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700  ">2</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700 ">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700 ">4</a>
    </li>
   
  
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 
       hover:bg-gray-100 hover:text-gray-700 rounded ">
        <span className="sr-only">Next</span>
        Next
      </a>
    </li>
  </ul>
</nav>


  )
}

export default Pagination