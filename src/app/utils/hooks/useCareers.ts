import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {  CareersQuery } from "../../services/queries";
import { setCareers,setLastPage } from "../../slices/CareerSlice";

const useCareers = (currentPage: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error } =
  CareersQuery(currentPage);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCareers(data.data.data.data));
      dispatch(setLastPage(data.data.data.last_page));
    }
  }, [data]);

  return { data, isSuccess, isLoading, isError, error };
};

export default useCareers;
