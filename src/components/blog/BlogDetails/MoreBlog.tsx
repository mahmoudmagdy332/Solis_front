function MoreBlog() {
  return (
    <div className="border-2 border-gray-200 flex flex-col gap-6     shadow-md p-8">
      <h2 className=" w-11/12 mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-[#353535]">
        News, Tips & More :
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex sm:flex-row flex-col items-center gap-6">
          <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 overflow-hidden">
            <img
              src="images/Profile.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">25 Sep 24 5:33 am</p>
            <p className="text-md font-semibold">
              Importance of specialized foucus in portfolio oil & gas
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-6">
          <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 overflow-hidden">
            <img
              src="images/Profile.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">25 Sep 24 5:33 am</p>
            <p className="text-md font-semibold">
              Importance of specialized foucus in portfolio oil & gas
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-6">
          <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 overflow-hidden">
            <img
              src="images/Profile.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">25 Sep 24 5:33 am</p>
            <p className="text-md font-semibold">
              Importance of specialized foucus in portfolio oil & gas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreBlog;
