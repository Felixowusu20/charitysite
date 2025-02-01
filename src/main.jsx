// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
//  import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import App from './App';


// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

// index.js
import App from "./App";
import Home from "./Components/Pages/HomePage/Home";
import Donate from "./Components/Pages/Donate/Donate"
import About from "./Components/Pages/About/About";
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  // Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "Donate",
    element: <Donate/>,
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);
