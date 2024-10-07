import SubCategoryCard from "../components/Products/SubCategoryCard"

const Category = () => {
    const cards=[
        {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]},
        {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]},
        {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]},{name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]},
        {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]},
        {name:'Crystal',image:'images/temp/Crystal-bianco.jpg',list:[
          '300k/3020h/',
          'General Lighting','UGR<19','Oval','Wall Washer'
        ]}
      ]
  return (
    <div className="">
        <div className="bg-black py-10">
            <div className="w-11/12 mx-auto mt-10 flex flex-col gap-3 text-white">
               <p>Products</p>
               <h3 className="text-3xl lg:text-5xl font-semibold">Downlights</h3>            
            </div>
        </div>
    <div className="bg-gray-100">
     <div className=" w-11/12 mx-auto py-20">
        <div className="flex flex-col gap-10 ">
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {cards.map((card) =>
                <SubCategoryCard  subCategory={card} />
            )}
            </div>
        </div>
    </div>
    </div>
    </div>
    
   
    
  )
}

export default Category