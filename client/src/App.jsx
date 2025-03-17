import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Login from "./components/login/login";
import AluminiConnection from "./components/AluminiConnection";
import Post from "./Post";
import Chats from "./Chats";
import Connection from "./components/Connection";
import Events from "./components/Events";

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
      { path: "/", 
        element: <Home /> },
      { path: "/about", 
        element: <About /> },
      { path: "/aluminiConnections", 
        element: <AluminiConnection/> },
      // { path: "/posts", 
      //   element: <Post/> },
      // { path: "/chats", 
      //   element: <Chats/> },
      // { path: "/connection", 
      //   element: <Connection/> },
      // { path: "/events", 
      //   element: <Events/> },
    ],
  },
  { path: "/login", element: <Login /> }, 
]);

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/items");
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error("Error fetching data:", e.message);
      }
    };

    fetchData();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
