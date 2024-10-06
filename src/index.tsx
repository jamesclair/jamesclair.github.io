import React, { useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import ResumeComponent from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";

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

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <ResumeComponent />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },

  {
    path: "/blog",
    element: <ExternalRedirect to="/blog/" />,
  },
  {
    path: "/eventarchitecture",
    element: <BlogArticle articleTitle="EventProcessingServiceArchitecture.md" />
  },
  {
    path: "/databasearchitectures",
    element: <BlogArticle articleTitle="OLAP_OLEP_OLTP_And_DataMeshes.md" />
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <div data-bs-theme="dark" className="gradient-text">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);

reportWebVitals();
