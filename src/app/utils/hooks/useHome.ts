import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHome } from "../../slices/homeSlice";
import { homeQuery } from "../../services/queries";
import { AppDispatch } from "../../store";

const useHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error } = homeQuery();

  useEffect(() => {
    if (isSuccess) dispatch(setHome(data.data.data));
    // eslint-disable-next-line
  }, [data, isSuccess]);

  return { data: data?.data.data, isSuccess, isLoading, isError, error };
};

export default useHome;
