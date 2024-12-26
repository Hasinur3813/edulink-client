import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../component/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const { path } = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (currentUser) {
    return children;
  }
  return <Navigate Navigate to="/login" state={path}></Navigate>;
};

export default PrivateRoute;
