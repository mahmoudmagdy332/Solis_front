import { createHashRouter } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Home from "../../pages/Home";




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
    
    ],
  },
]);

export default routes;
