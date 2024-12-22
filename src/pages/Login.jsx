import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    // Add login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
    // Add Google authentication logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-base-100 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-primaryColor mb-6">
          Login to EduLink
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-2/3 right-3 transform -translate-y-2/4 text-gray-500 hover:text-primaryColor"
            >
              {showPassword ? (
                <AiFillEye size={20} />
              ) : (
                <AiFillEyeInvisible size={20} />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn text-lg bg-primaryColor hover:bg-primaryAccent text-white w-full"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="border-t border-base-300 flex-grow"></div>
          <span className="px-4 text-sm text-base-content">OR</span>
          <div className="border-t border-base-300 flex-grow"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline text-lg w-full flex items-center justify-center space-x-2"
        >
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primaryColor hover:underline">
              Register here
            </Link>
          </p>
          <p className="text-sm mt-2">
            <Link
              to="/forgot-password"
              className="text-primaryColor hover:underline"
            >
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
