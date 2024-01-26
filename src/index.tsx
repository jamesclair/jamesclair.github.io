import React, { useEffect } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import Resume from "./pages/resume";
import Blog from "./pages/blog";
import About from "./pages/about";

import BlogArticle from './components/blogArticle';

import './index.scss';

type ExternalRedirectProps = {
  to: string;
};

const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <ExternalRedirect to="https://github.com/jimclair" />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/eventarchitecture",
    element: <BlogArticle articleTitle="EventProcessingServiceArchitecture.md" />
  },
  {
    path: "/databasearchitectures",
    element: <BlogArticle articleTitle="OLAP_OLEP_OLTP_And_DataMeshes.md" />
  },
  {
    path: "/about",
    element: <About />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <div data-bs-theme="dark" className="gradient-text">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



