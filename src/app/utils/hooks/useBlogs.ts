import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setBlogs, setLastPage } from "../../slices/BlogSlice";
import { BlogsQuery } from "../../services/queries";

const useBlogs = (currentPage: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error } =
    BlogsQuery(currentPage);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setBlogs(data.data.data.data));
      dispatch(setLastPage(data.data.data.last_page));
    }
  }, [data]);

  return { data, isSuccess, isLoading, isError, error };
};

export default useBlogs;
