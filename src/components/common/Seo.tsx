import { FC } from "react";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../app/config";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}
const Seo: FC<SeoProps> = ({ title, description, keywords }) => {
  const location = useLocation();
  const url = baseUrl();
  console.log('t',title);
  
  return (
    <div>
      <Helmet>
        <title>{`${title} || Solis`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords && keywords} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`${url}${location.pathname}`} />
      </Helmet>
    </div>
  );
};

export default Seo;
