import { Outlet, useParams } from "react-router-dom";
import MenuSideBar from "../components/Markets/MenuSideBar";
import SideBar from "../components/Markets/SideBar";
import useMarkets from "../app/utils/hooks/useMarkets";
import { useEffect } from "react";
import Loader from "../components/common/Loader";
import { setSelected, useMarketSliceSelector } from "../app/slices/MarketSlice";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";

function Markets() {
  const {title,id}=useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, error } =useMarkets();
  const { allMarket } = useMarketSliceSelector((state) => state.MarketReducer);

   useEffect(()=>{
     if(allMarket&&id){
      const select=allMarket.filter((Market)=>Market.id===Number( id ))
      if(select.length>0){
        dispatch(setSelected(select[0]));
      }
     }
   }, [id, allMarket, dispatch]);

   if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  return (
    <div className="lg:w-10/12 w-full px-4 lg:px-0 mx-auto my-20">
      <h1 className="py-10 border-b-2 my-8 text-[34px] font-semibold">
        {title}
      </h1>
      <div className="lg:hidden  mb-4">
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
