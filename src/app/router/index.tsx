import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";




const routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: (
            <Home />
         
        ),
      },
      { path: "/about", element: <About/> },
      { path: "/blog", element: <Blog/> },
    ],
  },
]);

export default routes;
