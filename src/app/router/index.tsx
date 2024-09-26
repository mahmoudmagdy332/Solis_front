import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Markets from "../../pages/Markets";
import Products from "../../pages/Products";
import Boutiques from "../../pages/Boutiques";
import NotFound from "../../pages/NotFound";

const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/market", element: <Markets /> },
      { path: "/products", element: <Products /> },
      { path: "/Boutique", element: <Boutiques /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
