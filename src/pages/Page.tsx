import { useNavigate, useParams } from "react-router-dom";
import { pageQuery } from "../app/services/queries";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
import Seo from "../components/common/Seo";
import Hero from "../components/blog/Hero";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, isError, error, refetch, isSuccess } = pageQuery(id);

  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, [id]);
  if (isError) {
    navigate("/not-found");
  }
  if (isLoading)
    return (
      <div className="flex h-96 justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  if (isSuccess) {
    return (
      <>
        <Seo
          title={data?.data.data.meta_title}
          description={data?.data.data.meta_description}
          keywords={data?.data.data.meta_keywords}
        />
        <Hero title={data?.data.data.title} image={data?.data.data.image} />
        <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
          <div className="flex flex-col gap-5 ">
            {data && (
              <div
                dangerouslySetInnerHTML={{ __html: data.data.data.content }}
                className="  "
              />
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Page;
