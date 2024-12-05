import { format } from "date-fns";
import { useSettingSliceSelector } from "../../../app/slices/settingSlice";

function MoreBlog() {
  const {footer_blogs } = useSettingSliceSelector((state) => state.settingReducer);

  return (
    <div className="border-2 border-gray-200 flex flex-col gap-6     shadow-md p-8">
      <h2 className=" w-11/12 mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-[#353535]">
        News, Tips & More :
      </h2>
      <div className="flex flex-col gap-6">
        {footer_blogs?.map((blog)=>(
  <div className="flex sm:flex-row flex-col items-center gap-3">
  {/* <div className="w-1/3 h-28 rounded-lg bg-gray-300 overflow-hidden">
    <img
      src={blog.image}
      className="w-full h-full object-cover"
      alt="Profile"

    />
  </div> */}
  <div className="flex flex-col gap-3 ">
    <h3 className="text-sm">{format(blog.created_at, "MMMM dd, yyyy")}</h3>
    <p className="text-sm  font-semibold">
      {blog.title}
    </p>
  </div>
</div>
        ))}
      
     
    
      </div>
    </div>
  );
}

export default MoreBlog;
