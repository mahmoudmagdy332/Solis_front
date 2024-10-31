import { useProductSliceSelector } from "../../app/slices/ProductSlice";

function Galary() {
  const { product_application_images } = useProductSliceSelector((state) => state.ProductReducer);


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {product_application_images.map((product_application_image)=>(
           <div>
           <img
             className="h-auto max-w-full rounded-lg"
             src={product_application_image.image}
             alt=""
           />
         </div>
        ))}
  
    
  
   
    </div>
  );
}

export default Galary;
