import { Link } from "react-router-dom";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const Footer = () => {
  const { translations } = useLanguageSelector(
    (state) => state.LanguageReducer
  );

  const {
    setting,
    footer_pages,
    main_categories,
    footer_markets,
    footer_careers,
    // footer_projects,
    // footer_blogs,
  } = useSettingSliceSelector((state) => state.settingReducer);

  const sosials = [
    { image: "/icons/facebook.svg", link: setting?.facebook },
    { image: "/icons/instgram.svg", link: setting?.instagram },
    { image: "/icons/linkdin.svg", link: setting?.twitter },
    { image: "/icons/twiter.svg", link: setting?.linkedin },
  ];
  return (
    <div className="bg-black py-8">
      <div className="w-11/12 mx-auto flex flex-col">
        <div className="py-4 border-b border-gray-200">
          <img src={setting?.footer_logo} alt="logo" className="h-12 " />
        </div>
        <div className="py-4 border-b border-gray-200 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
          <div className="flex flex-col gap-2    ">
            <p className="font-bold text-white">{translations.Products}</p>
            {main_categories.map((main_category) => (
              <Link
                key={main_category.id}
                to={`/main-category/${main_category.id}/${main_category.name}`}
                className="text-white"
              >
                {main_category.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2    ">
            <p className="font-bold text-white">{translations.Markets}</p>
            {footer_markets.map((footer_market) => (
              <Link
                to={`/market/${footer_market.id}/${footer_market.name}`}
                key={footer_market.id}
                className="text-gray-300 text-md"
              >
                {footer_market.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2    ">
            <p className="font-bold text-white">{translations.Careers}</p>
            {footer_careers.map((footer_career) => (
              <Link
                to={`/jop/${footer_career.id}`}
                key={footer_career.id}
                className="text-gray-300 text-md"
              >
                {footer_career.title}
              </Link>
            ))}
          </div>
          {/* <div className="flex flex-col gap-2    ">
            <p className="font-bold text-white">{translations.Blogs}</p>
            {footer_blogs.map((footer_blog) => (
              <Link
                to={`/blog/${footer_blog.id}`}
                key={footer_blog.id}
                className="text-gray-300 text-md"
              >
                {footer_blog.title}
              </Link>
            ))}
          </div> */}
          <div className="flex flex-col gap-2    ">
            <p className="font-bold text-white">{translations.Contact}</p>
            {footer_pages.map((page) => (
              <Link
                key={page.slug}
                to={page.slug}
                target={page.link_type === "external" ? "_blank" : "_self"}
                rel={page.link_follow}
                className="text-gray-300 text-md"
              >
                {page.title}
              </Link>
            ))}
            <Link
              to={"https://solis.lighting/sitemap.xml"}
              target={"_self"}
              className="text-gray-300 text-md"
            >
              {translations.sitemap}
            </Link>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <p className="md:text-lg text-white text-center">
              {translations.Connect_with}
            </p>
            <div className="grid grid-cols-2 gap-10 ">
              {sosials.map((sosial, i) => (
                <a
                  key={i}
                  href={sosial.link}
                  target="_blank"
                  className="w-10 h-10 hover:bg-gray-700 transition-all ease-in-out rounded-full bg-[#6A6A6A] flex p-3 justify-center items-center"
                >
                  <img loading="lazy" src={sosial.image} className="max-h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-sm text-gray-300">
        {translations.Copyright}
      </div>
    </div>
  );
};

export default Footer;
