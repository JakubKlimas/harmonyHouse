import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { Finanse } from "./views/Finanse/Finanse.jsx";
import {AboutUs} from "./views/O nas/AboutUs.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/finansowanie",
    element: <Finanse />,
  },  {
    path: "/o-nas",
    element: <AboutUs />,
  },
]);
