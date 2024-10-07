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
import Category from "../../pages/Category";
import Product from "../../pages/Product";
import SubCategory from "../../pages/SubCategory";

import BlogDetails from "../../pages/BlogDetails";
import ProductDetails from "../../pages/Product";
import { Suspense } from "react";
import SingleJop from "../../pages/SingleJop";
import { JopApplication } from "../../pages/JopApplication";
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
      { path: "/products/:id", element: <ProductDetails /> },
      {
        path: "/jop/:id",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <SingleJop />
          </Suspense>
        ),
      },
      {
        path: "/jop-application/:id",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <JopApplication />
          </Suspense>
        ),
      },
      
      { path: "/category/:id", element: <Category /> },
      { path: "/sub-category/:id", element: <SubCategory /> },
      { path: "/product/:id", element: <Product /> },

      { path: "*", element: <NotFound /> },

      { path: "/projects", element: <Boutiques /> },
      { path: "/careers", element: <Careers /> },
      { path: "/blog/:id", element: <BlogDetails /> },
    ],
  },
]);

export default routes;
