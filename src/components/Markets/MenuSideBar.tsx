import { useState, useEffect, useRef } from "react";

function MenuSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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
      <div className="text-center">
        <button
          className="text-white bg-black hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
          type="button"
          onClick={toggleDrawer}
          onKeyDown={(e) => e.key === "Enter" && toggleDrawer()}
          aria-controls="drawer-menu"
          aria-expanded={isOpen}
          aria-label="Toggle menu sidebar"
        >
          Category
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-[#F7F7F6] p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        id="drawer-menu"
      >
        <ul>
          {[
            "Overview",
            "Commercial",
            "Data Center",
            "Healthcare",
            "Industrial",
            "Institutional",
            "OEM",
            "Oil & Gas",
            "Power & Utility",
            "Renewables",
            "Residential",
            "Water & Gas",
            "Wireless Communications",
          ].map((item) => (
            <li key={item} className="text-[16px] p-4 border-b-2 font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSideBar;
