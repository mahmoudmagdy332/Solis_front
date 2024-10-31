import {NavLink } from "react-router-dom";
import { useMarketSliceSelector } from "../../app/slices/MarketSlice";

function SideBar() {
  const { allMarket } = useMarketSliceSelector((state) => state.MarketReducer);


  return (
    <div className="flex flex-col bg-[#F7F7F6] p-4">
      <ul className="flex flex-col">
        {allMarket.map((click)=>(
          <li className="py-2  border-b-2 flex flex-col">
             <NavLink  
           to={`${click.id}/${click.name}`} key={click.id}
           className={({ isActive }) =>
            ` ${
              isActive ? "  bg-gray-200" : " "
            }  text-[16px] p-3  font-bold  text-nowrap  hover:bg-gray-200   transition-all ease-in-out`
          }
            >
             {click.name}
         </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
