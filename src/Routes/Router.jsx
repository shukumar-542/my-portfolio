import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About/About";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import DashboardLayout from "../Layouts/DashboardLayout";

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
    {
      path : '/dashboard',
      element : <DashboardLayout/>,
      children : [
        {
          
        }
      ]
    },
    {
      path : "/blog/:id",
      element : <BlogDetails/>
    }
  ]);

export default router;