import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="pt-[80px] overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
