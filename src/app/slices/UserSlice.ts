// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../type";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cookies from "js-cookie";
const initialState: UserState = {
  user: null,
  isPopup: false,
};

const UserSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      const { Student, data } = action.payload;
      if (data.token) {
        state.user = Student;
        Cookies.set("access_token", data.token);
        localStorage.setItem("student", JSON.stringify(Student));
      }
    },
    changeImage: (state, action) => {
      if (state.user) state.user.image = action.payload;
    },
    changePopup: (state, action) => {
      state.isPopup = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("student", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      Cookies.remove("access_token");
      localStorage.setItem("student", "");
    },
  },
});

export const { changePopup, updateUser, setUser, removeUser, changeImage } =
  UserSlice.actions;

export default UserSlice.reducer;

export const useUserSelector = useSelector.withTypes<RootState>();
