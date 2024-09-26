import {NavLink } from "react-router-dom";

function SideBar() {
  const clicks=[
    {id:1,title:"Overview"},
    {id:1,title:"Commercial"},
    {id:1,title:"Data Center"},
    {id:1,title:"Healthcare"},
    {id:1,title:"Industrial"},
    {id:1,title:"Institutional"},
    {id:1,title:"OEM"},
    {id:1,title:"Oil & Gas"},
    {id:1,title:"Renewables"},
    {id:1,title:"Residential"},
    {id:1,title:"Water & Gas"},
    {id:1,title:"Wireless Communications"}
  ]
  return (
    <div className="flex flex-col bg-[#F7F7F6] p-4">
      <ul className="flex flex-col">
        {clicks.map((click)=>(
          <li className="py-2  border-b-2 flex flex-col">
             <NavLink  
           to={`${click.id}/${click.title}`} key={click.id}
           className={({ isActive }) =>
            ` ${
              isActive ? "  bg-gray-200" : " "
            }  text-[16px] p-3  font-bold  text-nowrap  hover:bg-gray-200   transition-all ease-in-out`
          }
            >
             {click.title}
         </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
