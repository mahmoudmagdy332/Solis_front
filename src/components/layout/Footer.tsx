import { Link } from "react-router-dom"

const Footer = () => {
  const pages=[ {title:'Home',link:'/'},
    {title:'About us',link:'/about'},
    {title:'Products',link:'/products'},
    {title:'Projects',link:'/projects'},
    {title:'Markets',link:'/market/1/Overview'},
    {title:'Career',link:'/careers'},
    {title:'Blogs',link:'/blog'},
    {title:'Contact us',link:'/contact'},           
]
  return (
    <div className="bg-black py-8">
        <div className="w-11/12 mx-auto flex flex-col">
           <div className="py-4 border-b border-gray-200">
                <img src="/footer_logo.svg" className="h-12 "/>
           </div>
           <div className="py-4 border-b border-gray-200 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Products</p>
                 <Link to="/product/1" className="text-white">indoor</Link>
                 <Link to="/product/1" className="text-white">residential</Link>
                 <Link to="/product/1" className="text-white">indoor</Link>
                 <Link to="/product/1" className="text-white">residential</Link>
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Applications</p>
                 <Link to="/jop/1" className="text-gray-300 text-md">Gas Stations & C-Stores</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Cities & Towns</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Commercial</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Transportation</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Schools & Universities</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Auto Dealerships</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Commercial</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Transportation</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Schools & Universities</Link>
                 <Link to="/jop/1" className="text-gray-300 text-md">Auto Dealerships</Link>

             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Commercial Support</p>
                 <Link to="/category/1" className="text-gray-300 text-md">indoor</Link>
                 <Link to="/category/1" className="text-gray-300 text-md">Request Quote</Link>
                 <Link to="/category/1" className="text-gray-300 text-md">Warranty</Link>
                 <Link to="/category/1" className="text-gray-300 text-md">Warranty</Link>
                 <Link to="/category/1" className="text-gray-300 text-md">Submit Claim</Link>
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Partners & Suppliers</p>
                 <Link to="/sub-category/1" className="text-gray-300 text-md">Contractor Information</Link>
                 <Link to="/sub-category/1" className="text-gray-300 text-md">Supplier Resources</Link>
                 <Link to="/sub-category/1" className="text-gray-300 text-md">Supplier Information Form</Link>

                 <Link to="/sub-category/1" className="text-gray-300 text-md">residential</Link>
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Contact</p>
                 {pages.map((page)=>(
                 <Link to={page.link} className="text-gray-300 text-md">{page.title}</Link>
                 ))}
             </div>
           </div>
           <div className="flex justify-center mt-6 text-sm text-gray-300">
           Copyright © 2023 Cree Lighting USA LLC. All rights reserved.   Privacy Policy | Site Map
           </div>
        </div> 
    </div>
  )
}

export default Footer