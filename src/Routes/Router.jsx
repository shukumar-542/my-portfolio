import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/about',
          element : <About></About>
        }
      ]
    },
  ]);

export default router;