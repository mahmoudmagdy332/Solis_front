import DownLite from "./DownLite";
import ProductCard from "./ProductCard";

function ProductItems() {
  return (
    <div className="flex flex-col gap-10 ">
    <div className="flex items-center gap-2">
      <p className="text-gray-400">Show All Products On</p>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer outline-0 bg-blue-600 focus:ring-white border-0 "
          defaultChecked={true}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full   peer-checked:after:translate-x-full peer-checked:after:bg-black peer-checked:ring-black after:bg-gray-300 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]   after:rounded-full after:h-5 after:w-5 after:transition-all   ring-1 ring-gray-300 "></div>

      </label>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 6 }).map((_, index) =>
        index == 0 ? <DownLite /> : <ProductCard key={index} />
      )}
    </div>
  </div>
    
  );
}

export default ProductItems;
