import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slices/settingSlice";
import CategorySlice from "./slices/CategorySlice";
import ProductSlice from "./slices/ProductSlice";
import homeSlice from "./slices/homeSlice";
import MarketSlice from "./slices/MarketSlice";
import BlogSlice from "./slices/BlogSlice";
import CareerSlice from "./slices/CareerSlice";
export const store = configureStore({
  reducer: {
    settingReducer: settingSlice,
    categoriesReducer: CategorySlice,
    ProductReducer:ProductSlice,
    BlogReducer: BlogSlice,
    CareerReducer: CareerSlice,
    homeReducer: homeSlice,
    MarketReducer:MarketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
