// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { categoryType } from "../utils/types/types";

const initialState: categoryType = {
  categories: [],
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;

    },
  },
});

export const { setCategories } = CategorySlice.actions;

export default CategorySlice.reducer;

export const useCategorySliceSelector = useSelector.withTypes<RootState>();
