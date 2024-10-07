function CommentCard() {
  return (
    <div className="flex  lg:flex-row flex-col  gap-6    p-4  ">
      <div className="w-[70px] h-[70px] rounded-full bg-gray-300 overflow-hidden">
        <img
          src="public/images/Profile.jpg"
          className="w-full h-full object-cover"
          alt="Profile"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Omar Mostafa</p>
        <p className="text-sm">25 Sep 24 5:33 am</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim Magna, sed diam nonumy eirmod tempor.
        </p>
        <button className="mt-2 text-sm w-20 text-gray-500 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-100 inline">
          Reply
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
