import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {  MarketQuery } from "../../services/queries";
import { setAllMarkets } from "../../slices/MarketSlice";


const useMarkets = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error } = MarketQuery();
  // console.log("data", data);

  useEffect(() => {
    if (data) dispatch(setAllMarkets(data.data.data));
  }, [data, dispatch]);

  return { data, isSuccess, isLoading, isError, error };
};

export default useMarkets;
