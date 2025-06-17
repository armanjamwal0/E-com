import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <main className="flex-grow pt-32 sm:pt-28 md:pt-20 lg:pt-16">
        <Outlet/>
    </main>
  );
};

export default AuthLayout;