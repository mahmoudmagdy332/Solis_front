import { useLanguageSelector } from "../../app/slices/languageSlice";
import { useMarketSliceSelector } from "../../app/slices/MarketSlice";
import root from 'react-shadow';


function Institutional() {
  const { selected_market,allMarket } = useMarketSliceSelector((state) => state.MarketReducer);
    const { translations } = useLanguageSelector((state) => state.LanguageReducer);

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <img src={selected_market?.image} loading="lazy"  alt={selected_market?.name} />
        {/* <h2 className="font-semibold">
          Healthcare and Educational facilities have their own needs.
        </h2> */}
       
         {selected_market?.description&&(
           <root.div className="quote">
          <p
          dangerouslySetInnerHTML={{ __html: selected_market.description }}
          
          />
          </root.div>
        )}
      
 
       
       
      </div>
       {selected_market&&selected_market?.products.length>0&&(
           <div className="flex flex-col gap-6">
           <div className="flex items-center justify-center my-4">
             <div className="border-t border-gray-300 w-full"></div>
             <span className="mx-4 text-lg font-bold text-nowrap">
               {translations.FeaturedProducts}
             </span>
             <div className="border-t border-gray-300 w-full"></div>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8">
             {selected_market?.products.map((product)=>(
               <img
               src={product.image}
               alt="Image 1"
               className=" h-40 object-contain"
             />
             ))}
             
            
            
           </div>
         </div>
       )}

       {allMarket&&allMarket.length>0&&(
           <div className="flex flex-col gap-6">
           <div className="flex items-center justify-center my-4">
             <div className="border-t border-gray-300 w-full"></div>
             <span className="mx-4 text-lg font-bold text-nowrap">
               {translations.MoreMarkets}
             </span>
             <div className="border-t border-gray-300 w-full"></div>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8">
             {allMarket.slice(0,3).map((product)=>(
               <img
               src={product.image}
               alt="Image 1"
               className=" h-40 w-full object-cover"
             />
             ))}
             
            
            
           </div>
         </div>
       )}
     
    </div>
  );
}

export default Institutional;
