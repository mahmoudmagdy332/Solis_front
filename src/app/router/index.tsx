import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Markets from "../../pages/Markets";
import Products from "../../pages/Products";
import Boutiques from "../../pages/Boutiques";
const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/contact", element: <Contact/> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/market", element: <Markets /> },
      { path: "/products", element: <Products /> },
      { path: "/Boutique", element: <Boutiques /> },
    ],
  },
]);

export default routes;
