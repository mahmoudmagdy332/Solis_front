import { Link } from "react-router-dom"
import Card from "./Card"

const AllBloges = () => {
    const serveses=[  
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
        {date:'Jan 20, 2022',title:'Data Center',description:"We supply future-proof solutions that enhance connectivity, reliability, and uptime for reduced total cost of ownership.",image:'/images/temp/Image.png'},
]
  return (
    <div className="my-12 w-11/12 lg:w-3/4 mx-auto"> 
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
            <div className="flex flex-col gap-4">
                <p className="font-semibold text-sm text-center md:text-start">Recent Articles</p>
                <Link to="/" className="font-bold text-2xl text-center md:text-start">Read All News</Link>
            </div>
            <div className="text-sm md:w-1/2 text-center md:text-start">
            Gazolin Are A Industry & Manufacturing Services Provider Institutions.
            Suitable For Factory, Manufacturing, Industry, Engineering, Construction
            And Any Related Industry Care Field.
            </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-12">
            {serveses.map((servese)=>(
                <Card servese={servese}/>
            ))} 
        </div>
        


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
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700 dark:bg-gray-800 ">2</a>
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

    </div>
  )
}

export default AllBloges