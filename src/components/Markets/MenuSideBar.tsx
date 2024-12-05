import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { useMarketSliceSelector } from "../../app/slices/MarketSlice";
import { NavLink } from "react-router-dom";

function MenuSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { allMarket } = useMarketSliceSelector((state) => state.MarketReducer);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside: EventListener = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className=" flex flex-col justify-end items-end">
        <button
          className="text-white bg-black hover:bg-gray-600   font-medium rounded-lg text-sm px-3 py-2.5 mb-2 focus:outline-none"
          type="button"
          onClick={toggleDrawer}
          onKeyDown={(e) => e.key === "Enter" && toggleDrawer()}
          aria-controls="drawer-menu"
          aria-expanded={isOpen}
          aria-label="Toggle menu sidebar"
        >
          <LuMenu/>
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-[#F7F7F6] p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        id="drawer-menu"
      >
        <ul className="mt-20 flex flex-col">
          {allMarket.map((click) => (
            <li key={click.id} onClick={toggleDrawer} className="text-[16px] py-2  border-b-2 flex flex-col   font-bold">
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
    </div>
  );
}

export default MenuSideBar;
