import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react";
import useSetting from "../../app/utils/hooks/useSetting";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import Loader from "../common/Loader";
import MouseFollower from "../common/MouseFollower";
import { IoLogoWhatsapp } from "react-icons/io";

const MainLayout = () => {
  const { error } = useSetting();
  const { loading,setting } = useSettingSliceSelector((state) => state.settingReducer);
  const [showTooltip, setShowTooltip] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  return (
    <div>
         <Header/>
         <MouseFollower/>
         
         <div className="min-h-screen ">
         <Outlet />
         </div> 
         <div 
        className={`fixed bottom-4 right-8 z-50 ${showTooltip ? 'tooltip tooltip-open tooltip-left' : ''}`}
        data-tip="whatsapp us"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://api.whatsapp.com/send/?phone=${setting?.mobile}&text&type=phone_number&app_absent=0`}
          className="block text-white rounded-full  hover:text-green-700 transition duration-300"
        >
          <div className="bg-green-500  rounded-lg p-1 hover:shadow-md shadow-black">

          <IoLogoWhatsapp size={40} className="" />
          </div>
        </a>
      </div>
         <Footer/>
    </div>
  )
}

export default MainLayout