import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Markets from "../../pages/Markets";
import Products from "../../pages/Products";
import Boutiques from "../../pages/Boutiques";
import NotFound from "../../pages/NotFound";

import Careers from "../../pages/Careers";
import Market from "../../pages/Market";
import BlogDetails from "../../pages/BlogDetails";
const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/market",
        element: <Markets />,
        children: [{ path: ":id/:title", element: <Market /> }],
      },

      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },

      { path: "/products", element: <Products /> },
      { path: "/Boutique", element: <Boutiques /> },
      { path: "*", element: <NotFound /> },
      { path: "/projects", element: <Boutiques /> },
      { path: "/careers", element: <Careers /> },
      { path: "/blog/:id", element: <BlogDetails /> },
    ],
  },
]);

export default routes;
