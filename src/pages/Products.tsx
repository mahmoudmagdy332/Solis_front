import { Link, useParams } from "react-router-dom";
import Hero from "../components/Products/Hero";
import ProductItems from "../components/Products/ProductItems";
import useCategories from "../app/utils/hooks/useCategories";
import { useEffect } from "react";
import Loader from "../components/common/Loader";
import { mostSellingQuery } from "../app/services/queries";
import { productType } from "../app/utils/types/types";

function Products() {
  const { id, name } = useParams<{ id: string; name: string }>();
  const { isLoading, isError, error, refetch } = useCategories(id);
  const { data: mostSelling, isLoading: mostSellingLoading } =
    mostSellingQuery();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );

  return (
    <div className="flex flex-col">
      {/* {homeData&&(
      <Seo title={homeData?.data.data.meta_title}
      description={homeData?.data.data.meta_description}
      keywords={homeData?.data.data.meta_keywords}
      />
        )} */}
      <Hero name={name} />
      {id == "11" || name == "Most Selling Products" ? (
        <div className="container my-20">
          {mostSellingLoading ? (
            <div className="flex min-h-screen justify-center items-center">
              <Loader />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-10">
              {mostSelling &&
                mostSelling.map((product: productType, i: number) => (
                  <Link
                    key={i}
                    to={`/products/${product.id}`}
                    className="relative flex max-w-full sm:max-w-[50%] md:max-w-[33.33%] lg:max-w-[25%] justify-center items-center overflow-hidden h-72 bg-white rounded-2xl "
                  >
                    <h2 className="absolute left-2 top-2 z-20">
                      {product.name}
                    </h2>
                    <img
                      src={product.image as string}
                      className="cursor-pointer w-full h-full  object-cover hover:scale-110 transition-all ease-in-out"
                    />
                  </Link>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className=" w-11/12 mx-auto py-20">
            <ProductItems />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
