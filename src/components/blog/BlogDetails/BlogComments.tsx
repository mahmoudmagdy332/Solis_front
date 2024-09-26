import CommentCard from "./CommentCard";

function BlogComments() {
  return (
    <div className="flex flex-col  gap-4 my-4">
      <h2 className=" w-11/12 mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-[#353535]">
        Comments
      </h2>

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`${index === 0 ? "" : "border-t-2 border-black"}`}
        >
          <CommentCard />
        </div>
      ))}
    </div>
  );
}

export default BlogComments;
