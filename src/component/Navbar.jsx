import { Link, NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import Theme from "./Theme";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("eduLinkTheme");

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList = storedTheme;
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList = newTheme;
    localStorage.setItem("eduLinkTheme", newTheme);
    setTheme(newTheme);
  };
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="navbar fixed top-0 w-full  bg-white dark:bg-slate-800 shadow-sm z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-white"
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
            className="navMenu menu menu-sm space-y-1 dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/assignments">Assignments</Link>
            </li>
            <li>
              <Link to="/pending-assignments">Pending Assignments</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" text-2xl md:text-3xl font-extrabold dark:text-white"
        >
          <span className="text-primaryColor">Edu</span>Link
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal gap-2 px-1 space-x-1">
          <li className="text-base text-primaryColor font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" text-base text-primaryColor font-semibold">
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li className="text-base text-primaryColor font-semibold">
            <NavLink to="/pending-assignments">Pending Assignments</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* control theme */}
        <Theme handleThemeChange={handleThemeChange} theme={theme} />

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
                  <img alt="profile" src={currentUser?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white  rounded-box z-[1000]  mt-3 w-52 p-2 shadow text-base"
              >
                <li>
                  <p className="bg-gray-300">{currentUser?.displayName}</p>
                </li>
                <li>
                  <Link to="/create-assignment">Create Assignment</Link>
                </li>
                <li>
                  <Link to="my-attempted-assignment">
                    My Attempted Assignment
                  </Link>
                </li>
                <li>
                  <Link to="my-assignment">My Assignment</Link>
                </li>
                <li className="sm:hidden">
                  <button
                    className="flex items-center text-red-500"
                    onClick={handleLogout}
                  >
                    <MdLogout />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition duration-300 text-lg items-center justify-center gap-2 hidden sm:flex"
              onClick={handleLogout}
            >
              <MdLogout className="text-xl" />
              Logout
            </button>
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
