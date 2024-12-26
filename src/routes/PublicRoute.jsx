import React from "react";
import { useAuth } from "../context/AuthProvider";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
};

export default PublicRoute;
