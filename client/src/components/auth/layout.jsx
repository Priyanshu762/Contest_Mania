import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full transition-colors duration-300 ease-in-out">
      <div className="hidden lg:flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white w-1/2 px-12 transition-all duration-300 ease-in-out">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Welcome to Contest Mania
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 bg-gray-800 dark:bg-gray-100 text-white dark:text-black transition-all duration-300 ease-in-out">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
