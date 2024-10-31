import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
const Header = () => {
    const {pathname} = useLocation();
    const [navbar, setNavbar] = useState(true);
    const { setting,header_pages,main_categories,footer_markets } = useSettingSliceSelector((state) => state.settingReducer);

    useEffect(()=>{
          window.addEventListener("scroll", changeBackground);
          const isHome = pathname === '/';
          if(isHome){
            setNavbar(false);
          }else{
            setNavbar(true);
          }
    },[pathname])
    const changeBackground = () => {
      const isHome = pathname !== '/';
        if (window.scrollY >= 10||isHome ) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

  return (
    <nav className={`${navbar?'bg-black':'bg-black lg:bg-transparent'} transition-all ease-in-out border-b-2 border-gray-300 fixed w-full z-20 top-0 start-0 `}>
  <div className="w-11/12 flex  flex-wrap lg:flex-nowrap items-center justify-between mx-auto">
  <Link to="/" className="flex justify-center items-center  lg:border-e lg:py-4 border-gray-200 pe-5 rtl:space-x-reverse">
      <img src={setting?.logo} className="h-8" alt="Logo"/>
  </Link>
  <div className="flex justify-between lg:order-2  lg:ps-5 border-gray-200 py-4 space-x-3 lg:space-x-0 rtl:space-x-reverse">
      {/* <button type="button" className="text-white border-2  border-gray-100 hover:bg-gray-100  hover:text-black transition-all ease-in-out  focus:outline-none  font-medium rounded-full text-xs text-nowrap px-6 py-2 text-center ">LOG IN</button> */}
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
    <ul className="flex flex-col lg:justify-center gap-y-4 my-2 flex-wrap p-4 lg:p-0 mt-4 font-medium  border-gray-100 rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row  border-0   ">
    
 
    {header_pages.map((page,idx)=>(
            <li key={idx}>
              {page.slug==='products'?(
              <div className="relative products">
               <div
                 className= "block py-1 products-nav text-[#BBBEBF] px-1 text-nowrap text-sm  cursor-pointer hover:text-white hover:border-b-2 border-white transition-all ease-in-out"               
                 >{page.title}</div>
                 <div className="products-show">
                 <div className="min-w-40  products-menu  shadow-sm flex flex-col  absolute top-['30px'] left-0  ">
                 <h3 className="text-[#181919] text-lg font-semibold mb-6">Take a tour of the products we serve</h3>
                
                  <div className="grid grid-cols-4 gap-y-2">
                          {main_categories.map((main_category)=>(
                            <Link to={`/main-category/${main_category.id}/${main_category.name}`} key={main_category.id} className="text-sm text-[#353535]">{main_category.name}</Link>
                          ))}
            
                         </div>
                  </div>
                 </div>
                 
              </div>
              ):page.slug==='markets'?(
                <div className="relative market">
                <div
                  className= "block py-1  market-nav text-[#BBBEBF] px-1 text-nowrap text-sm  cursor-pointer hover:text-white hover:border-b-2 border-white transition-all ease-in-out"               
                  >{page.title}
                  </div>
                   <div className="market-show">
                      <div className="  market-menu  shadow-sm flex flex-col  absolute -top-['20px'] left-0  ">
                         <h3 className="text-[#808384] text-lg font-semibold">Take a tour of the markets we serve</h3>
                         <p className="text-[#808384] text-sm my-4">Solis serves the needs of customers in a variety of market applications. From controlled environments of a data center to the demanding continuity of the power grid. </p>
                         <p className="mb-4">Markets</p>
                         <div className="grid grid-cols-4 gap-y-2">
                          {footer_markets.map((market)=>(
                            <Link to={`/market/${market.id}/${market.name}`} key={market.id} className="text-sm text-[#353535]">{market.name}</Link>
                          ))}
            
                         </div>
                      </div>
                   </div>
               </div>
              ):(
                <NavLink to={`/${page.slug}`}
                className={({ isActive }) =>
                 ` ${
                   isActive ? "border-b-2 border-white text-white" : " text-[#BBBEBF]"
                 } block py-1 px-1 text-nowrap text-sm  hover:text-white hover:border-b-2 border-white transition-all ease-in-out`
               }
               aria-current="page">{page.title}</NavLink>
              )}
           
           
          </li>
      ))}
     
    
          
      
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Header