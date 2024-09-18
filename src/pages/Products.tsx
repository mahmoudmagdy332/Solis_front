import Hero from "../components/Products/Hero";
import ProductItems from "../components/Products/ProductItems";

function Products() {
  return (
    <div className="flex flex-col gap-4  ">
      <Hero />
      <div className="lg:w-3/4 w-10/12 mx-auto my-4">
        <ProductItems />
      </div>
    </div>
  );
}

export default Products;
