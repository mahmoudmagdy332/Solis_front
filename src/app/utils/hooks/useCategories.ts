import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { CategoriesQuery } from "../../services/queries";
import { setCategories } from "../../slices/CategorySlice";

const useCategories = (id: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error, refetch } =
    CategoriesQuery(id);

  useEffect(() => {
    if (data) dispatch(setCategories(data.data.data));
  }, [data]);

  return { data, isSuccess, isLoading, isError, error, refetch };
};

export default useCategories;
