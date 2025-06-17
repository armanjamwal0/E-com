import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/*   <main className="flex-grow pt-32 sm:pt-28 md:pt-20 lg:pt-16"> if i need then all page set to center */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
