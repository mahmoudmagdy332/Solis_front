// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { homeType } from "../utils/types/types";

const initialState: homeType = {
  news: [],
  markets: [],
  products: null,
  brands: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHome: (state, action) => {
      state.news = action.payload["news"];
      state.markets = action.payload["markets"];
      state.products = action.payload["products"];
      state.brands = action.payload["brands"];
    },
  },
});

export const { setHome } = homeSlice.actions;

export default homeSlice.reducer;

export const useHomeSliceSelector = useSelector.withTypes<RootState>();
