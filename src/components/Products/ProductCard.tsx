import { Link } from "react-router-dom"

const ProductCard = () => {
  return (
    <Link to='/products/1' className="flex flex-col product-card h-[450px] bg-slate-300 ">
        <div className="h-[250px]">
         <img src="images/Product.svg" alt="" className="h-full object-cover w-full "/>
        </div>
        <div className="h-[200px] w-10/12 mx-auto py-4 flex flex-col gap-3">
            <h2 >Blade R</h2>
            <p className="title">ø170mm</p>
            <p className="desc">32lm - 0.22W / 3654lm - 39.1W</p>
            <div className="flex gap-3 flex-wrap">
                 <img src="images/temp/medium.png"/>
                 <img src="images/temp/medium.png"/>
            </div>
        </div>
        
  </Link>
  )
}

export default ProductCard