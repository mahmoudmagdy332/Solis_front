import { pageQuery } from "../app/services/queries";
import useHome from "../app/utils/hooks/useHome";
import Loader from "../components/common/Loader";
import Seo from "../components/common/Seo";
import Blogs from "../components/home/Blogs";
import Hero from "../components/home/Hero";
import Markets from "../components/home/Markets";
import Prands from "../components/home/Prands";
import { Products } from "../components/home/Products";
import Subscribe from "../components/home/Subscribe";

const Home = () => {
  const { isLoading, isError, error, data } = useHome();
  const { isLoading: homeLoading, data: homeData } = pageQuery("home");

  if (isLoading || homeLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) return (
    <div className="h-96 flex justify-center items-center">
      Error {error?.name}: {error?.message}
    </div>
  );

  return (
    <>
      {homeData && (
        <Seo
          title={homeData?.data.data?.meta_title}
          description={homeData?.data.data?.meta_description}
          keywords={homeData?.data.data?.meta_keywords}
        />
      )}

      <Hero intro={data.intro} />
      <Prands />
      <Products mostSelling={data?.most_Selling_products} />
      <Markets />
      <Subscribe />
      <Blogs />
    </>
  );
};

export default Home;
