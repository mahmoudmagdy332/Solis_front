import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHome } from "../../slices/homeSlice";
import { homeQuery } from "../../services/queries";
import { AppDispatch } from "../../store";


const useHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error } = homeQuery();
  console.log("data", data);

  useEffect(() => {
    if (isSuccess) dispatch(setHome(data.data.data));
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError, error };
};

export default useHome;
