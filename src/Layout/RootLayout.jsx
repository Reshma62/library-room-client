import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="font-Cabin">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
