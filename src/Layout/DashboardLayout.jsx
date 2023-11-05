import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="font-Cabin">
      <DashboardNavbar outLet={<Outlet />} />

      <p>footer</p>
    </div>
  );
};

export default DashboardLayout;
