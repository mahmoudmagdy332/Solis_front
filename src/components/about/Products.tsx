import { aboutSection } from "../../app/utils/types/types"

const Products = ({section}:{section:aboutSection}) => {
  return (
    <div>
        <div className="w-11/12 lg:w-10/12 mx-auto text-[#353535] text-xl mb-8 md:text-2xl lg:text-3xl">{section.title}</div>
        <div className="bg-[#ECEFF0] py-20" >
        <div className="grid grid-cols-3  gap-10 w-11/12 lg:w-10/12 mx-auto">
             <div className="col-span-2 flex flex-col gap-10">
                {/* <p className="">We are the North American market leader in smart lighting and building management systems that enable intelligent spaces and drive performance. We offer the most comprehensive product portfolio across all indoor and outdoor applications, including location-aware technology.</p> */}
                <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className=" text-[#4A4A4A] lg:text-xl "
        />
                {/* <Link to="/" className="text-[#353535] lg:text-xl flex gap-2 items-center">
                Browse our products
                <img  loading="lazy"  src="/icons/Vector-black.svg"/>
                </Link> */}
             </div>
             <div className="relative">
                <img src={section.image}  loading="lazy"  className="h-72 absolute -top-32 end-0"/>
             </div>
        </div>
        </div>
       
    </div>
  )
}

export default Products