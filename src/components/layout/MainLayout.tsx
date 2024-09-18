import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
         <Header/>
         <div className="min-h-screen ">
         <Outlet />
         </div> 
         <Footer/>
    </div>
  )
}

export default MainLayout