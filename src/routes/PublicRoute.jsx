import { useAuth } from "../context/AuthProvider";
import Loader from "../component/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsInitialized(true);
      if (currentUser) {
        navigate("/");
      }
    }
  }, [loading, currentUser, navigate]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return children;
};

export default PublicRoute;
