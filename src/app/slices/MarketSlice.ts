// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {  MarketType } from "../utils/types/types";

const initialState: MarketType = {

  allMarket:[],
  selected_market:null,
};

const MarketSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setAllMarkets: (state, action) => {
      state.allMarket = action.payload;
    },
    setSelected: (state, action) => {
      state.selected_market = action.payload;
    },
  },
});

export const { setAllMarkets ,setSelected} = MarketSlice.actions;

export default MarketSlice.reducer;

export const useMarketSliceSelector = useSelector.withTypes<RootState>();
