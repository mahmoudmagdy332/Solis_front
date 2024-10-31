// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {  productType } from "../utils/types/types";

const initialState: productType = {
  id: null,
  image: null,
  name: null,
  description: null,
  product_application_images:[],
  effects:[],
  product_images:[],
  product_files:[],
  sub_category:undefined,
};

const ProductSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.id = action.payload.id;
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.product_application_images = action.payload.product_application_images;
      state.effects = action.payload.effects;
      state.product_images = action.payload.product_images;
      state.product_files = action.payload.product_files;
      state.sub_category = action.payload.sub_category;
    },
  },
});

export const { setProduct } = ProductSlice.actions;

export default ProductSlice.reducer;

export const useProductSliceSelector = useSelector.withTypes<RootState>();
