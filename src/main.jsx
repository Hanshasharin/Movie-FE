import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import "./App.css"
import "./index.css";
// import Signup from "./Components/User/UserSignup";
// import Login from "./Components/User/UserLogin";
import AdminSignup from "./Components/Admin/AdminSignup";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserLists from "./Components/Admin/UserLists";
import MovieAdd from "./Components/Admin/AddMovie";
import Movie from "./Components/Movie/GetMovies";
import ReviewAdd from "./Components/User/AddReview";
// import MovieDetail from "./Components/Movie/MovieDetail";
import MoviePage from "./Components/Movie/MoviePage";
import UserSignup from "./pages/Users/Signup";
import UserLogin from "./pages/Users/Login";
import HomeLayout from "./layouts/HomeLayout";
import SearchResults from "./Components/User/SearchResult";
import AdminLayout from "./layouts/AdminLayout";
import ProfilePage from "./Components/User/Profile";
import Review from "./Components/Admin/Review";
import PrivateUserRoutes from "./PrivateUserRoutes";

const router = createBrowserRouter([
  {
    
    element: <HomeLayout />,
    children: [
      
      {
        path: "movie",
        element: <Movie/>
      },
{
       path:"/movie/dm/:id",
      element:<MoviePage />
},
{
  path: '/search',
  element: <SearchResults/>
},

    
  ]},

  {
    
    element: <AdminLayout />,
    children: [
      
      {
        path: "/admin/users",
        element: <PrivateRoutes><UserLists /></PrivateRoutes>
      },
      {
        path: "/admin/review",
        element: <PrivateRoutes><Review/></PrivateRoutes>
      },
      
      {
        path: "/admin/addmovies",
        element: <PrivateRoutes><MovieAdd/></PrivateRoutes>
      },
  ]},
  
  {
    path: "/",
    element: <UserSignup/>
  },
  {
    path: "/login",
    element: <UserLogin/>
  },
  {
    path: "/admin/signup",
    element: <AdminSignup/>
  },
  {
    path: "/admin/login",
    element: <AdminLogin/>
  },
  {
    path: "profile",
    
    element:
    <PrivateUserRoutes>
    <ProfilePage/>
    </PrivateUserRoutes>
  },
 
{
  path: "/review",
  element:<ReviewAdd/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);