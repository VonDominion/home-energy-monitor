import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardFooter from "./components/DashboardFooter";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardNavbar />

        <main className="flex-1">
          <Outlet />
        </main>

      </div>

      <div>
        <DashboardFooter />
      </div>
    </div>
  );
}

export default DashboardLayout;

