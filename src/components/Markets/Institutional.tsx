function Institutional() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <img src="images/Institutional.svg" alt="" />
        <h2 className="font-semibold">
          Healthcare and Educational facilities have their own needs.
        </h2>
        <p>
          Making a facility designed for patient care or education, seem warmer
          and more inviting, can be a challenge. With a broad color spectrum of
          LED lighting, wireless lighting controls and products specifically
          made for use in hospitals and clinics, Hubbell can make specifying and
          installation easy,
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="mx-4 text-lg font-bold text-nowrap">
            Featured Products
          </span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <div className="flex justify-between items-center gap-8">
          <img
            src="images/electric 1.svg"
            alt="Image 1"
            className="w-1/3 h-40 object-contain"
          />
          <img
            src="images/electric 2.svg"
            alt="Image 2"
            className="w-1/3 mx-auto h-40 object-contain"
          />
          <img
            src="images/electric 3.svg"
            alt="Image 3"
            className="w-1/3 h-40 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="mx-4 text-lg font-bold text-nowrap">
            More Markets
          </span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <div className="flex justify-between items-center gap-8">
          <img
            src="images/electric 4.svg"
            alt="Image 1"
            className="w-1/3 h-40 object-contain"
          />
          <img
            src="images/electric 5.svg"
            alt="Image 2"
            className="w-1/3 mx-auto h-40 object-contain"
          />
          <img
            src="images/electic 6.svg"
            alt="Image 3"
            className="w-1/3 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Institutional;
