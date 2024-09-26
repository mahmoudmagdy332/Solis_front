import Hero from "../components/Products/Hero";
import ProductItems from "../components/Products/ProductItems";

function Products() {
  return (
    <div className="flex flex-col  ">
      <Hero />
      <div className="bg-gray-100">
      <div className=" w-11/12 mx-auto py-20">
        <ProductItems />
      </div>
      </div>
    </div>
  );
}

export default Products;
