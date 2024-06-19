import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import "./index.css";
import Signup from "./Components/User/UserSignup";
import Login from "./Components/User/UserLogin";
import AdminSignup from "./Components/Admin/AdminSignup";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserLists from "./Components/Admin/UserLists";
import MovieAdd from "./Components/Admin/AddMovie";
import Movie from "./Components/Movie/GetMovies";
import ReviewAdd from "./Components/User/AddReview";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin/signup",
    element: <AdminSignup/>
  },
  {
    path: "/admin/login",
    element: <AdminLogin/>
  },
  // {
  //   path: "/admin/users",
  //   element: <UserLists/>
  // },
  // {
  //   path:'/admin/users',
  //   element:
  //   (
  //     <PrivateRoutes>
  //       <UserLists/>
  //     </PrivateRoutes>
  // )
  // },
  {
    path: "/admin/users",
    element: <PrivateRoutes><UserLists /></PrivateRoutes>
  },
  {
    path: "/admin/addmovies",
    element: <PrivateRoutes><MovieAdd/></PrivateRoutes>
  },
  {
    path: "/movie",
    element: <Movie/>
  },
{
  path: "/review",
  element:<ReviewAdd/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);