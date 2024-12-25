import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthProvider";
import CreateAssignment from "./pages/CreateAssignment";
import Assignments from "./pages/Assignments";
import AssignmentDetails from "./pages/AssignmentDetails";
import PendignAssignment from "./pages/PendignAssignment";
import MyAssignment from "./pages/MyAssignment";
import UpdateAssignment from "./pages/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: `/view-assignment/:id`,
        element: <AssignmentDetails />,
      },
      {
        path: `/pending-assignments`,
        element: <PendignAssignment />,
      },
      {
        path: "/my-assignment",
        element: <MyAssignment />,
      },
      {
        path: "/update-assignment/:id",
        element: <UpdateAssignment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
