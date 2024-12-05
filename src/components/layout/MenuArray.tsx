import { useState, useEffect, useRef, FC } from "react";


export type MenuArrayProps={
  text:string;
  children: React.ReactNode;
}

const MenuArray: FC<MenuArrayProps>= ({ children,text })=> {
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
      <div className=" flex flex-col justify-end ">
     
        <div
         onClick={toggleDrawer}
         onKeyDown={(e) => e.key === "Enter" && toggleDrawer()}
         aria-controls="drawer-menu"
         aria-expanded={isOpen}
         aria-label="Toggle menu sidebar"
                  className= " py-1 flex justify-between  market-nav text-[#BBBEBF] px-1 text-nowrap text-sm  cursor-pointer hover:text-white hover:border-b-2 border-white transition-all ease-in-out"               
                  >{text}
                  <p>{'>>'}</p>
              </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0  bg-black left-0 w-64 h-full  p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        id="drawer-menu"
      >
      <div className="text-white mb-8" onClick={toggleDrawer}> {'<<'} </div>
    
    

           {children}
    
          
      
 
  
      </div>
    </div>
  );
}

export default MenuArray;
