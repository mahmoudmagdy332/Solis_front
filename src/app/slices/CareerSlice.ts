// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CareerType } from "../utils/types/types";

const initialState: CareerType = {
  Careers: null,
  currentPage: 1,
  last_page: 1,
};

const CareerSlice = createSlice({
  name: "Careers",
  initialState,
  reducers: {
    setCareers: (state, action) => {
      state.Careers = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLastPage: (state, action) => {
      state.last_page = action.payload;
    },
  },
});

export const { setCareers, setCurrentPage, setLastPage } = CareerSlice.actions;

export default CareerSlice.reducer;

export const useCareersSliceSelector = useSelector.withTypes<RootState>();
