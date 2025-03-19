import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"
import Navbar from "./components/Navbar";
import Login from "./components/login/login";
import AluminiConnection from "./components/AluminiConnection";
import Footer from "./components/Footer";
import Signup from "./components/signup/Signup";
import SignUp2 from "./components/signup/SignUp2";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <><AboutUs /><Footer /></>
      },
      {
        path: "/aluminiConnections",
        element: <AluminiConnection />
      },

    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signup2", element: <SignUp2 /> },
  { path: "/login", element: <Login /> },
]);

const App = () => {

  return <RouterProvider router={router} />;
};

export default App;
