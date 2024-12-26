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
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

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
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: `/view-assignment/:id`,
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
      },
      {
        path: `/pending-assignments`,
        element: (
          <PrivateRoute>
            <PendignAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-assignment",
        element: (
          <PrivateRoute>
            <MyAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
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
