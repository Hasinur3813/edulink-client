import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primaryColor to-primaryAccent text-white">
      {/* Illustration */}
      <div className="text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl mt-4 font-semibold">Oops! Page Not Found.</p>
        <p className="text-lg mt-2">
          The page you are looking for doesn't exist or was moved.
        </p>
      </div>

      {/* Animation or Image */}
      <img
        src="https://via.placeholder.com/400x300.png?text=Error+Illustration"
        alt="Error Illustration"
        className="max-w-md mt-6"
      />

      {/* Action Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-secondary text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-secondary-focus transition duration-200"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
