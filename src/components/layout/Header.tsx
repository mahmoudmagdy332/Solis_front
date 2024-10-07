import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const Header = () => {
    const {pathname} = useLocation();
    const [navbar, setNavbar] = useState(true);
    const pages=[ {title:'HOME',link:'/'},
                  {title:'ABOUT US',link:'/about'},
                  {title:'PRODUCTS',link:'/products'},
                  {title:'PROJECTS',link:'/projects'},
                  {title:'MARKETS',link:'/market/1/Overview'},
                  {title:'CAREERS',link:'/careers'},
                  {title:'BLOGS',link:'/blog'},
                  {title:'CONTACT US',link:'/contact'},           
    ]
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
    <nav className={`${navbar?'bg-black':'bg-transparent'} transition-all ease-in-out border-b-2 border-gray-300 fixed w-full z-20 top-0 start-0 `}>
  <div className="w-11/12 flex  flex-wrap lg:flex-nowrap items-center justify-between mx-auto">
  <Link to="/" className="flex justify-center items-center  lg:border-e lg:py-4 border-gray-200 pe-5 rtl:space-x-reverse">
      <img src="/logo.svg" className="h-8" alt="Flowbite Logo"/>
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
      
      {pages.map((page,idx)=>(
            <li key={idx}>
            <NavLink to={page.link}
             className={({ isActive }) =>
              ` ${
                isActive ? "border-b-2 border-white text-white" : " text-[#BBBEBF]"
              } block py-1 px-1 text-nowrap text-sm  hover:text-white hover:border-b-2 border-white transition-all ease-in-out`
            }
            aria-current="page">{page.title}</NavLink>
          </li>
      ))}
     
    
          
      
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header