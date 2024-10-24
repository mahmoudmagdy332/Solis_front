import { Link } from "react-router-dom"
import { useSettingSliceSelector } from "../../app/slices/settingSlice";

const Footer = () => {
  const { setting,footer_pages,
    main_categories,footer_markets,
    footer_careers,footer_projects } = useSettingSliceSelector((state) => state.settingReducer);
   console.log('footer_projects',footer_projects);
   
  return (
    <div className="bg-black py-8">
        <div className="w-11/12 mx-auto flex flex-col">
           <div className="py-4 border-b border-gray-200">
                <img src={setting?.footer_logo} alt="logo" className="h-12 "/>
           </div>
           <div className="py-4 border-b border-gray-200 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Products</p>
                 {main_categories.map((main_category)=>(
                 <Link key={main_category.id} to={`/main-category/${main_category.id}`} className="text-white">{main_category.name}</Link>
                 ))}
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Markets</p>
                 {footer_markets.map((footer_market)=>(
                 <Link to={`/market/${footer_market.id}`} key={footer_market.id} className="text-gray-300 text-md">{footer_market.name}</Link>
                 ))}

             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Careers</p>
                 {footer_careers.map((footer_career)=>(
                 <Link to={`/career/${footer_career.id}`}className="text-gray-300 text-md">{footer_career.title}</Link>
                 ))}
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Projects</p>
                 {footer_projects.map((footer_project)=>(
                 <Link to={`/projects/${footer_project.id}`} key={footer_project.id} className="text-gray-300 text-md">{footer_project.title}</Link>
                 ))}
             </div>
             <div className="flex flex-col gap-2    ">
                 <p  className="font-bold text-white">Contact</p>
                 {footer_pages.map((page)=>(
                 <Link to={page.slug} className="text-gray-300 text-md">{page.title}</Link>
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