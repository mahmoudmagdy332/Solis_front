import { createBrowserRouter, Navigate } from "react-router-dom";

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

import Page from "../../pages/Page";
import Brands from "../../pages/Brands";
import { JopApplication } from "../../pages/JopApplication";
// import MostSelling from "../../pages/mostSelling";

// const routes = createHashRouter([
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      // {
      //   path: "/most-selling",
      //   element: <MostSelling />,
      // },

      {
        path: "/market",
        element: <Markets />,
        children: [{ path: ":id/:title", element: <Market /> }],
      },

      { path: "/contact_us", element: <Contact /> },
      { path: "/about_us", element: <About /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/brands", element: <Brands /> },

      // { path: "/products", element: <Products /> },
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
      { path: "/main-category/:id/:name", element: <Products /> },
      { path: "/category/:id/:name", element: <Category /> },
      { path: "/sub-category/:id/:name", element: <SubCategory /> },
      { path: "/product/:id", element: <Product /> },

      { path: "/not-found", element: <NotFound /> },

      { path: "/projects", element: <Boutiques /> },
      { path: "/careers", element: <Careers /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/:id", element: <Page /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
