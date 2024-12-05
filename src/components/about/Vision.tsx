import { aboutSection } from "../../app/utils/types/types"

const Vision = ({section}:{section:aboutSection}) => {
  return (
    <div className=" w-full  flex  items-center ">
    <div className=" w-11/12 lg:w-3/4 mx-auto gap-16 grid sm:grid-cols-2 items-center  py-16">
         <div className="relative">
             <img src={section.image} className="w-full"/>
         </div>
         <div className=" flex flex-col gap-8 xl:pb-16">
               <h2 className="text-xl md:text-2xl xl:text-3xl  leading-10 text-[#353535]">{section.title}</h2>
               {/* <p className=" md:text-md xl:text-lg  leading-8  text-[#4A4A4A]">We use technology to solve problems in spaces, light, and more things to come.
                <br/> <br/>
               We use technology to solve problems in spaces, light, and more things to come.
               </p> */}
                <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className=" md:text-lg xl:text-xl  leading-8  text-[#4A4A4A] "
        />
 
         </div> 
    </div>
 </div>
  )
}

export default Vision