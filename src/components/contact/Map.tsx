import { useLanguageSelector } from "../../app/slices/languageSlice";

// const API_KEY = "f8b9e6163e48e501";
// const POINT_1_ID = "Ej0zOFFSK1BDLCBBbCBNYXRhciwgRWwgTm96aGEsIENhaXJvIEdvdmVybm9yYXRlIDQ0NzAzNTEsIEVneXB0IiY6JAoKDcVD7xEVQUSuEhAKGhQKEgmZ5eTD3BVYFBEGkqNKLsJnbA";
// const POINT_2_ID = "Ei41RlY1KzlSLCBPYm91ciwgQWwtUWFseXViaWEgR292ZXJub3JhdGUsIEVneXB0IiY6JAoKDScn_xEVKVnAEhAKGhQKEgl9pEw9txpYFBFnfwAdLcnhiQ";

const Map = () => {
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-16">
      <p className="text-[#353535] text-[18px] md:text-[24px] lg:text-[32px]">
        {translations.Experience}
      </p>
      <div className="w-full h-96 md:h-[500px] my-8">
        {/* <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://maps.google.com/maps?q=Solis+Light+%26+Design%2C+78+%D9%85%D8%AD%D9%85%D8%AF+%D8%B9%D8%A8%D9%8A%D8%AF%D8%8C+%D8%A7%D9%84%D9%85%D8%A7%D8%B8%D8%A9%D8%8C+%D9%82%D8%B3%D9%85+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+4461114&output=embed"
        allowFullScreen
        loading="lazy"
      /> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5292874637275!2d31.459562499999997!3d30.193437499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581a9035e06293%3A0xc7cbc185c5b58f22!2sAltawakol%20NTT%20-%20Head%20Office!5e0!3m2!1sen!2seg!4v1752136445173!5m2!1sen!2seg"
          width="600"
          height="450"
          className="w-full h-full border-0"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1bLn8_lQGfkQwrEJgt1zSCnLyztcj2is&ehbc=2E312F" width="640" height="480" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1bLn8_lQGfkQwrEJgt1zSCnLyztcj2is&ehbc=2E312F" width="640" height="480" /> */}

        {/* <iframe src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${POINT_1_ID}+place_id:${POINT_2_ID}`} className="w-full h-full" /> */}

        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1mebGTBPiq-ocscPAb7R3kdNAgQC4zKA&ehbc=2E312F&noprof=1" width="640" height="480" className="w-full h-full" />

      </div>
    </div>
  );
};

export default Map

/*
id-1: Ej0zOFFSK1BDLCBBbCBNYXRhciwgRWwgTm96aGEsIENhaXJvIEdvdmVybm9yYXRlIDQ0NzAzNTEsIEVneXB0IiY6JAoKDcVD7xEVQUSuEhAKGhQKEgmZ5eTD3BVYFBEGkqNKLsJnbA
38QR+PC, Al Matar, El Nozha, Cairo Governorate 4470351, Egypt

id-2: Ei41RlY1KzlSLCBPYm91ciwgQWwtUWFseXViaWEgR292ZXJub3JhdGUsIEVneXB0IiY6JAoKDScn_xEVKVnAEhAKGhQKEgl9pEw9txpYFBFnfwAdLcnhiQ
5FV5+9R, Obour, Al-Qalyubia Governorate, Egypt
*/
