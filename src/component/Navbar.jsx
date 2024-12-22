import { Link, NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const currentUser = null;
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="navMenu menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Assignments</NavLink>
            </li>
          </ul>
        </div>
        <a className=" text-xl lg:text-2xl font-bold">
          <span className="text-primaryColor">Edu</span>Link
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 space-x-1">
          <li className="text-base text-primaryColor font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-base text-primaryColor font-semibold">
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li className="text-base text-primaryColor font-semibold">
            <NavLink to="/pending-assignments">Pending Assignments</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <div className="flex items-center gap-2">
            {" "}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full outline-2 outline-offset-1 outline outline-primaryColor">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10  mt-3 w-52 p-2 shadow text-base"
              >
                <li>
                  <p className="bg-gray-300">Hasinur Rahman</p>
                </li>
                <li>
                  <Link>Create Assignment</Link>
                </li>
                <li>
                  <Link>My attemted assignment</Link>
                </li>
              </ul>
            </div>
            <Link to="/login">
              <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition duration-300 text-lg flex items-center justify-center gap-2">
                <MdLogout className="text-xl" />
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-primaryColor hover:bg-primaryAccent rounded-lg shadow-md transition duration-300 text-lg">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
