import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {  ProductQuery } from "../../services/queries";
import { setProduct } from "../../slices/ProductSlice";


const useProduct = (id: string|undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError, error,refetch } = ProductQuery(id);
  console.log("data", data);

  useEffect(() => {
    if (data) 
        dispatch(setProduct(data.data.data));
  }, [data]);

  return { data, isSuccess, isLoading, isError, error,refetch };
};

export default useProduct;
