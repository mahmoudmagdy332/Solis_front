import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

type ServeseType={
    servese:{
        date:string,
        image:string,
        title:string,
        description:string
    }
}
const Card = ({servese}:ServeseType) => {
  return (
    <div className=" flex flex-col gap-2 justify-center card-blog items-center hover:shadow-xl  text-black  h-84 border border-black shadow-md rounded-md ">
     <div className="h-64 overflow-hidden">
     <img src={servese.image}  className="w-full  rounded-t-md"/>
     </div>
    <div className="px-4 py-6 flex flex-col gap-4">
    <p className="text-sm">{servese.date}</p>
    <h3 className="text-xl font-bold">{servese.title}:</h3>
    <p className="text-gray-800 text-sm leading-6 font-thin">{servese.description}</p>
    <div className="flex justify-start">
    <Link to="/blog/1" className="flex items-center text-md gap-2 border border-black rounded-sm px-4 py-2 hover:bg-black hover:text-white transition-all ease-in-out">
         <p >Read more</p>
        <IoIosArrowForward />
    </Link>
    </div>
    </div>
    </div>
  )
}

export default Card