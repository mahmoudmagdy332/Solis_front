import { Outlet, useParams } from "react-router-dom";
import MenuSideBar from "../components/Markets/MenuSideBar";
import SideBar from "../components/Markets/SideBar";

function Markets() {
  const {title}=useParams();
 
  return (
    <div className="lg:w-10/12 w-full px-4 lg:px-0 mx-auto my-20">
      <h1 className="py-10 border-b-2 my-8 text-[34px] font-semibold">
        {title}
      </h1>
      <div className="lg:hidden flex flex-start mb-4">
        <MenuSideBar />
      </div>
      <div className="lg:flex gap-4">
        <div className="hidden lg:block lg:w-1/4">
          <SideBar />
        </div>

        <div className="lg:w-3/4 w-full">
           <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Markets;
