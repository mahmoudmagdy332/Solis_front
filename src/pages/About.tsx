import { useEffect, useState } from "react";
import { AboutQuery, pageQuery } from "../app/services/queries";
import { aboutType } from "../app/utils/types/types";
import Connected from "../components/about/connected";
import Environmental from "../components/about/Environmental";
import Hero from "../components/about/Hero";
import Products from "../components/about/Products";
import Vision from "../components/about/Vision";
import Loader from "../components/common/Loader";
import Seo from "../components/common/Seo";

const About = () => {
  const [about, setAbout] = useState<aboutType>();
  const { isLoading, data, isError, error } = AboutQuery();
  const { isLoading: aboutLoading, data: aboutData } = pageQuery("about");

  useEffect(() => {
    if (data) setAbout(data.data.data);
  }, [data]);

  if (isLoading || aboutLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  };

  if (isError) return (
    <div className="h-96 flex justify-center items-center">
      Error: {error?.message}
    </div>
  );

  return (
    <div>
      {aboutData && (
        <Seo
          title={aboutData?.data.data?.meta_title}
          description={aboutData?.data.data?.meta_description}
          keywords={aboutData?.data.data?.meta_keywords}
        />
      )}
      {about && about[0] && <Hero section={about[0]} />}
      {about && about[1] && <Vision section={about[1]} />}
      {about && about[2] && <Environmental section={about[2]} />}
      {about && about[3] && <Products section={about[3]} />}
      {about && about[4] && <Connected section={about[4]} />}
    </div>
  );
};

export default About;
