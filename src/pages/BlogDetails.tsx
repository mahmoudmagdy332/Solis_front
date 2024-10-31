import { useEffect, useState } from "react";
import Blog from "../components/blog/BlogDetails/Blog";
import Hero from "../components/blog/BlogDetails/Hero";
import MoreBlog from "../components/blog/BlogDetails/MoreBlog";
import Loader from "../components/common/Loader";
import { BlogQuery } from "../app/services/queries";
import { useParams } from "react-router-dom";
import { Blog as blogType } from "../app/utils/types/types";

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const [blog,setBlog]=useState<blogType>();
  const { isLoading,data, isError, error,refetch } = BlogQuery(id);
   useEffect(()=>{
    refetch();
   },[id])
   
   useEffect(()=>{
    if(data)
      setBlog(data.data.data);
    
   },[data])
   if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        Error: {error?.message}
      </div>
    );
  return (
    <div>
      {blog?.title&&(
        <Hero title={blog.title} />
      )}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-10/12 mx-auto">
        <div className="col-span-2">
          {blog&&(<Blog blog={blog}/>)}
          {/* <BlogComments />
          <CommentForm /> */}
        </div>
        <div className="col-span-1 my-10">
          <MoreBlog />
        </div>{" "}
      </div>
    </div>
  );
}

export default BlogDetails;
