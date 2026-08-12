import { useState } from "react";
import "./App.css";
import RootLayout from "./components/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //npm install react-router-dom

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      // errorElement: <Error></Error>,
      // children: [{ path: "/", element: <div></div> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
