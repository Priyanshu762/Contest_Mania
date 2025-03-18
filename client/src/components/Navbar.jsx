import React, { useContext } from "react";
import { userNavbarList } from "../data/global/userNavbar";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // Import Context

const Navbar = () => {
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext); // Use global dark mode state

  return (
    <nav className="flex px-10 justify-between h-[7vh] items-center bg-white text-black dark:bg-gray-900 dark:text-white shadow-md transition duration-300">
      {/* Brand */}
      <div className="text-xl font-bold">College Mania</div>

      {/* Navbar Links */}
      <div className="nav">
        <ul className="flex gap-10 justify-center items-center">
          {userNavbarList.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <li
                key={item.id}
                className={`${
                  isActive
                    ? "border-b-2 border-blue-500 dark:border-yellow-400"
                    : ""
                } transition`}
              >
                <Link
                  to={item.link}
                  className="flex items-center space-x-2 hover:text-blue-500 dark:hover:text-yellow-400"
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Section - Dark Mode & Profile */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* User Icon */}
        <span className="text-xl cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400">
          <FaUserAlt />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
