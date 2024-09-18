import Institutional from "../components/Markets/Institutional";
import MenuSideBar from "../components/Markets/MenuSideBar";
import SideBar from "../components/Markets/SideBar";

function Markets() {
  return (
    <div className="lg:w-3/4 w-full px-4 lg:px-0 mx-auto my-20">
      <h1 className="pb-6 border-b-2 mb-8 text-[24px] font-semibold">
        Institutional
      </h1>
      <div className="lg:hidden flex flex-start mb-4">
        <MenuSideBar />
      </div>
      <div className="lg:flex">
        <div className="hidden lg:block lg:w-1/4">
          <SideBar />
        </div>

        <div className="lg:w-3/4 w-full">
          <Institutional />
        </div>
      </div>
    </div>
  );
}

export default Markets;
