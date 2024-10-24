import { Link } from "react-router-dom"
import { productCardType } from "../../app/utils/types/types"

const ProductCard = ({product}:{product:productCardType}) => {
  return (
    <Link to={`/products/${product.id}`} className="flex flex-col product-card h-[450px] bg-slate-300 ">
        <div className="h-[250px]">
         <img src={product.image} alt={`product ${product.name}`}  className="h-full object-cover w-full "/>
        </div>
        <div className="h-[200px] w-10/12 mx-auto py-4 flex flex-col gap-3">
            <h2 >{product.name}</h2>
            {/* <p className="title">ø170mm</p> */}
            <p className="desc">{product.small_description}32lm - 0.22W / 3654lm - 39.1W</p>
            <div className="flex gap-3 flex-wrap">
              {product.effects.map((effect,idx)=>(
                <img src={effect.image_effect} className="h-10" key={idx}alt="effect"/>
              ))}
              </div>
        </div>
        
  </Link>
  )
}

export default ProductCard