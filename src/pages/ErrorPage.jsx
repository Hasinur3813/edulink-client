import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-primaryColor">
      {/*Image */}
      <img
        src="https://img.freepik.com/free-vector/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request-unavailable-website-communication-problem_335657-938.jpg?t=st=1735202586~exp=1735206186~hmac=2aee351c65a40b096e995e8245bc1d81242b6ed39ffd7e32ce8e7dd29f19d834&w=740"
        alt="Error Illustration"
        className="max-w-md mt-6"
      />
      {/* Illustration */}
      <div className="text-center">
        <p className="text-2xl mt-4 font-semibold">Oops! Page Not Found.</p>
        <p className="text-lg mt-2">
          The page you are looking for doesn't exist or was moved.
        </p>
      </div>

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
