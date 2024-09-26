import Blog from "../components/blog/BlogDetails/Blog";
import BlogComments from "../components/blog/BlogDetails/BlogComments";
import CommentForm from "../components/blog/BlogDetails/CommentForm";
import Hero from "../components/blog/BlogDetails/Hero";
import MoreBlog from "../components/blog/BlogDetails/MoreBlog";

function BlogDetails() {
  return (
    <div>
      <Hero title="Our Blog 1" />

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-10/12 mx-auto">
        <div className="col-span-2">
          <Blog />
          <BlogComments />
          <CommentForm />
        </div>
        <div className="col-span-1 my-10">
          <MoreBlog />
        </div>{" "}
      </div>
    </div>
  );
}

export default BlogDetails;
