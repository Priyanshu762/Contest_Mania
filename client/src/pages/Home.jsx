import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="min-h-[93vh] bg-gray-100 dark:bg-gray-800 text-black dark:text-white flex items-center justify-center">
      <h1 className="text-3xl">Welcome to College Mania</h1>
    </div>
  );
};

export default Home;
