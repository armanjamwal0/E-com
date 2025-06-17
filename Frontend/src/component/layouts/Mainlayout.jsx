import Navbar from "../Nav/navbar";
import MyFooter from "../Footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
      <main className="flex-grow pt-32 sm:pt-28 md:pt-20 lg:pt-16">
        <Outlet />
      </main>
      <MyFooter />
    </div>
  );
};
export default MainLayout;
