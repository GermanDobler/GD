import './index.css'
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Inicio from "./screens/Inicio";
import Acerca from "./screens/Acerca";
import Proyectos from "./screens/Proyectos";
import { ThemeProvider } from "./context/styleContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/acerca",
    element: <Acerca />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);