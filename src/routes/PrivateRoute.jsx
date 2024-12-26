import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../component/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
