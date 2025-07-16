import { Link } from "react-router-dom";
import { useLanguageSelector } from "../app/slices/languageSlice";
import { useSettingSliceSelector } from "../app/slices/settingSlice";
import Form from "../components/contact/Form";
import Map from "../components/contact/Map";

const Contact = () => {
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);
  const { translations } = useLanguageSelector(
    (state) => state.LanguageReducer
  );

  const ContactCard = ({ image, text, href }: { image: string; text?: string, href?: string }) => (
    <div className="min-h-48 w-full flex flex-col justify-center items-center p-4 rounded-md gap-4 bg-[#eceff0] text-gray-800">
      <img src={image} />
      {href ? (
        <Link to={href} target="_blank" className="text-xl line-clamp-3">{text}</Link>
      ) : (
        <p className="text-xl line-clamp-3">{text}</p>
      )}
    </div>
  );

  return (
    <div className="mt-32">
      <h2 className=" w-11/12 mx-auto text-3xl md:text-4xl lg:text-6xl font-semibold text-[#353535]">
        {translations.Contact_us}
      </h2>
      <div className="w-10/12 mx-auto mt-16 grid  grid-cols-1  lg:grid-cols-3 gap-32">
        <div className="flex flex-col gap-12 order-1 lg:order-1 text-white  ">
          <ContactCard image="/images/phone.png" text={setting?.mobile} href={`tel:${setting?.mobile}`} />
          <ContactCard image="/images/email.png" text={setting?.email} href={`mailto:${setting?.email}`} />
          <ContactCard image="/images/location.png" text={setting?.address} href={`https://www.google.com/search?q=${setting?.address}`} />
        </div>
        <div className="lg:col-span-2 order-2 lg:order-2">
          <Form />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
