import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      if (err.response && err.response.status === "401") {
        await logout();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
