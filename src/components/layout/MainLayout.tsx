import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react";
import useSetting from "../../app/utils/hooks/useSetting";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import Loader from "../common/Loader";
import MouseFollower from "../common/MouseFollower";

const MainLayout = () => {
  const { error } = useSetting();
  const { loading } = useSettingSliceSelector((state) => state.settingReducer);

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
         <Footer/>
    </div>
  )
}

export default MainLayout