import Hero from "../components/blog/Hero"
import Pagination from "../components/common/Pagination"

const Careers = () => {
    const cards=[
        {title:"Industry & Manufacturing - 01",type:"Full Time",desc:`Gazolin Are A Industry & Manufacturing Services
                Provider Institutions. Suitable For Factory,
                Manufacturing, Industry, Engineering, Construction
                And Any Related Industry Care Field........`,place:"New York"},
                {title:"Industry & Manufacturing - 01",type:"Full Time",desc:`Gazolin Are A Industry & Manufacturing Services
                    Provider Institutions. Suitable For Factory,
                    Manufacturing, Industry, Engineering, Construction
                    And Any Related Industry Care Field........`,place:"New York"},
                    {title:"Industry & Manufacturing - 01",type:"Full Time",desc:`Gazolin Are A Industry & Manufacturing Services
                        Provider Institutions. Suitable For Factory,
                        Manufacturing, Industry, Engineering, Construction
                        And Any Related Industry Care Field........`,place:"New York"}
                        ,{title:"Industry & Manufacturing - 01",type:"Full Time",desc:`Gazolin Are A Industry & Manufacturing Services
                            Provider Institutions. Suitable For Factory,
                            Manufacturing, Industry, Engineering, Construction
                            And Any Related Industry Care Field........`,place:"New York"}
                            ,{title:"Industry & Manufacturing - 01",type:"Full Time",desc:`Gazolin Are A Industry & Manufacturing Services
                                Provider Institutions. Suitable For Factory,
                                Manufacturing, Industry, Engineering, Construction
                                And Any Related Industry Care Field........`,place:"New York"}
        
                    ]
  return (
    <div>
        <Hero title="Careers"/>
        <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="my-8  grid lg:grid-cols-3 gap-6">
           {cards.map((card,idx)=>(
             <div key={idx} className="border border-[#BBBEBF] hover:shadow-lg rounded-md p-8 flex flex-col items-start gap-6">
                  <h3 className="text-xl font-semibold text-[#353535]">{card.title}</h3>
                  <div className="flex gap-3 items-center">
                      <div className="flex items-center bg-gradient-to-r from-[#70443D] via-[#DAADA3] to-[#70443D] justify-center px-4 h-10 leading-tight text-white bg-white border border-gray-300 hover:bg-gray-100 rounded-md hover:text-gray-700">
                        {card.type}
                      </div>
                      <p className="font-semibold">{card.place}</p>
                  </div>
                  <p className="text-[#4A4A4A] ">
                    {card.desc}
                  </p>
                  <button className="bg-black rounded-lg text-sm text-white border hover:border-black  hover:bg-white  hover:text-black transition-all ease-in-out py-[14px] px-8">Read More</button>
             </div>
           ))}
        </div>
        <Pagination/>
        </div>
        
    </div>
  )
}

export default Careers