import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About/About";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SkillsPage from "../Pages/SkillsPage/SkillsPage";
import ProjectPage from "../Pages/ProjectPage/ProjectPage";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import UploadSkills from "../components/UploadSkill/UploadSkills";
import UploadProjects from "../components/UploadProjects/UploadProjects";
import UploadBlog from "../components/ui/UploadBlog/UploadBlog";
import Login from "../Pages/Login/Login";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetalis";

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
        },
        {
          path : '/project/:id',
          element : <ProjectDetails/>
        },
        
      ]
    },
    {
      path : '/dashboard',
      element : <DashboardLayout/>,
      children : [
        {
          path : '/dashboard',
          element : <Dashboard/>
        },
        {
          path : 'skills',
          element : <SkillsPage/>
        },
        {
          path : 'projects',
          element : <ProjectPage/>
        },
        {
          path : 'blogs',
          element : <BlogsPage/>
        },
        {
          path : 'uploadSkills',
          element : <UploadSkills/>
        },
        {
          path : 'uploadProjects',
          element : <UploadProjects/>
        },
        {
          path : 'uploadBlogs',
          element : <UploadBlog/>
        },
      ]
    },
    {
      path : "/blog/:id",
      element : <BlogDetails/>
    },
    {
      path : "/login",
      element : <Login/>
    }
  ]);

export default router;