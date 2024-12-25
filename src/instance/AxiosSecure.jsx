import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        if (err.status === 401 || err.status === 403) {
          await logout();
          setLoading(false);
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
