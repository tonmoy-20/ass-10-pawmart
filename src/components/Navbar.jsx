import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router"; // Fix: react-router-dom
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [isChecked, setIsChecked] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  const handleSignOut = () => {
    signOut(auth).catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 mb-10 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Pet's & Supplies</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/add-services">Add Listing</Link>
                </li>
                <li>
                  <Link to="/my-services">My Listing</Link>
                </li>
                <li>
                  <Link to="/my-orders">My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          🐾 PawMart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Pet's & Supplies</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/add-services">Add Listing</Link>
              </li>
              <li>
                <Link to="/my-services">My Listing</Link>
              </li>
              <li>
                <Link to="/my-orders">My Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            onClick={handleThemeChange}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {user ? (
          <>
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <button onClick={handleSignOut} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
