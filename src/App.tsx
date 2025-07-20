import "./App.css";
import "flowbite";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./app/router";

import { store } from "./app/store";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./app/utils/hooks/queryClient";

export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </ReduxProvider>
    </>
  );
};
