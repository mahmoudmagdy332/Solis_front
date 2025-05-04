import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import MenuArray from "./MenuArray";

function MenuSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // ✅ للحصول على الراوت الحالي
  const { header_pages, main_categories, footer_markets } = useSettingSliceSelector(
    (state) => state.settingReducer
  );

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

  // ✅ يغلق الـ Sidebar عند تغيير الراوت
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <div className="flex flex-col justify-end items-end">
        <button
          className="text-white bg-black hover:bg-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none"
          type="button"
          onClick={toggleDrawer}
          onKeyDown={(e) => e.key === "Enter" && toggleDrawer()}
          aria-controls="drawer-menu"
          aria-expanded={isOpen}
          aria-label="Toggle menu sidebar"
        >
          <LuMenu className="text-2xl" />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 bg-black left-0 w-64 h-full p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        id="drawer-menu"
      >
        <ul className="mt-20 flex flex-col gap-4">
          {header_pages.map((page, idx) => (
            <li key={idx}>
              {page.slug === "products" ? (
                <MenuArray text={page.title}>
                  <ul className="flex flex-col gap-2">
                    {main_categories.map((main_category) => (
                      <li key={main_category.id}>
                        <Link
                          to={`/main-category/${main_category.id}/${main_category.name}`}
                          className="text-sm text-white"
                        >
                          {main_category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </MenuArray>
              ) : page.slug === "markets" ? (
                <MenuArray text={page.title}>
                  <ul className="flex flex-col gap-2">
                    {footer_markets.map((market) => (
                      <li key={market.id}>
                        <Link
                          to={`/market/${market.id}/${market.name}`}
                          className="text-sm text-white"
                        >
                          {market.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </MenuArray>
              ) : (
                <NavLink
                  to={`/${page.slug}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-white text-white"
                        : " text-[#BBBEBF]"
                    } block py-1 px-1 text-nowrap text-sm hover:text-white hover:border-b-2 border-white transition-all ease-in-out`
                  }
                  aria-current="page"
                >
                  {page.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSideBar;
