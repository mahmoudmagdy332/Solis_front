import { useMarketSliceSelector } from "../../app/slices/MarketSlice";


function Institutional() {
  const { selected_market } = useMarketSliceSelector((state) => state.MarketReducer);

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <img src={selected_market?.image} loading="lazy"  alt={selected_market?.name} />
        {/* <h2 className="font-semibold">
          Healthcare and Educational facilities have their own needs.
        </h2> */}
        {selected_market?.description&&(
          <p
          dangerouslySetInnerHTML={{ __html: selected_market.description }}
          
          />
          
        )}
        {selected_market&&selected_market.description}
      </div>
       {selected_market&&selected_market?.products.length>0&&(
           <div className="flex flex-col gap-6">
           <div className="flex items-center justify-center my-4">
             <div className="border-t border-gray-300 w-full"></div>
             <span className="mx-4 text-lg font-bold text-nowrap">
               Featured Products
             </span>
             <div className="border-t border-gray-300 w-full"></div>
           </div>
           <div className="flex justify-between items-center gap-8">
             {selected_market?.products.map((product)=>(
               <img
               src={product.image}
               alt="Image 1"
               className="w-1/3 h-40 object-contain"
             />
             ))}
             
            
            
           </div>
         </div>
       )}
     

    </div>
  );
}

export default Institutional;
