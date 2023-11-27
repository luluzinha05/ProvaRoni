import * as React from "react";
import * as ReactDOM from "react-dom/client";
//main.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/userdetails/:userId",
    element: <UserDetails />,
  }, {
    path: "/userlist",
    element: <UserList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

