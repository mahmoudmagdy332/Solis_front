// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { BLogType } from "../utils/types/types";

const initialState: BLogType = {
  Blogs: null,
  currentPage: 1,
  last_page: 1,
};

const BlogSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.Blogs = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLastPage: (state, action) => {
      state.last_page = action.payload;
    },
  },
});

export const { setBlogs, setCurrentPage, setLastPage } = BlogSlice.actions;

export default BlogSlice.reducer;

export const useBlogsSliceSelector = useSelector.withTypes<RootState>();
