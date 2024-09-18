import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";




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
      { path: "/contact", element: <Contact/> },
      
    ],
  },
]);

export default routes;
