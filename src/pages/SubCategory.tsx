import { Link } from "react-router-dom"
import ProductCard from "../components/Products/ProductCard"

const SubCategory = () => {
  return (
    <div className="">
    <div className="bg-black py-10">
        <div className="w-11/12 mx-auto mt-10 flex flex-col gap-3 text-white">
           <div className="flex gap-2 items-center">
            <Link to="/" className="hover:text-gray-300 transition-all ease-in-out">Products</Link>
             <div className="text-sm">/</div>
            <Link to="/" className="hover:text-gray-300 transition-all ease-in-out">Downlights</Link>
            </div>
           <h3 className="text-3xl lg:text-5xl font-semibold">Blade R</h3>            
        </div>
    </div>
<div className="bg-gray-100">
 <div className=" w-11/12 mx-auto py-20">
    <div className="flex flex-col gap-10 ">
        
        
        <div className="grid lg:grid-cols-2 items-center gap-6 bg-white">
             <img src="/images/temp/blade-r-logo-line.jpg"/>
             <div className="bg-white py-8 flex flex-col gap-6 px-3">
                  <h3 className="text-4xl lg:text-6xl text-black font-semibold">Blade R</h3>
                  <p className=" text-xl lg:text-3xl text-gray-400">All In One</p>
                  <p className=" text-gray-600">From chaos to order.
                    Blade R develops the concept of integration in architecture to improve people’s well-being through the smart activation of safety, entertainment, comfort and sustainability services.</p>
             </div>
        </div>
        <div className="flex flex-col gap-5">
            <h4 className="text-2xl font-medium">Lighting Fixtures</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {Array.from({ length: 6 }).map((_, index) =>
                    <ProductCard key={index} />
                )}
        </div>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default SubCategory