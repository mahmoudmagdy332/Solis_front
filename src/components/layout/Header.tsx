import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const Header = () => {
    const {pathname} = useLocation();
    const [navbar, setNavbar] = useState(true);
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
  <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center space-x-3 md:border-e md:py-4 border-gray-200 pe-5 rtl:space-x-reverse">
      <img src="/logo.svg" className="h-8" alt="Flowbite Logo"/>
  </Link>
  <div className="flex md:order-2 md:border-s md:ps-5 border-gray-200 py-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white border-2  border-gray-100 hover:bg-gray-100  hover:text-black transition-all ease-in-out  focus:outline-none  font-medium rounded-full text-xs px-6 py-2 text-center ">LOG IN</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
      <li>
        <NavLink to="/" 
         className={({ isActive }) =>
          ` ${
            isActive ? "border-b-2 border-white text-white" : " text-[#BBBEBF]"
          } block py-1 px-1  text-sm   `
        }
        aria-current="page">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about"  className={({ isActive }) =>
          ` ${
            isActive ? "border-b-2 border-white text-white" : " text-[#BBBEBF]"
          } block py-1 px-1  text-sm   `
        }>About</NavLink>

      </li>
      <li>
        <NavLink to="/blog"  className={({ isActive }) =>
          ` ${
            isActive ? "border-b-2 border-white text-white" : " text-[#BBBEBF]"
          } block py-1 px-1  text-sm   `
        }>Blog</NavLink>

      </li>
      
      <li>
        
        <a href="#" className="block py-1 px-1 text-sm text-gray-100  hover:text-white     ">Services</a>

      </li>
      <li>
        <a href="#" className="block py-1 px-1 text-sm text-gray-100  hover:text-white     ">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header