import { Outlet } from "react-router-dom";
import useQueryDataTest from "../Hooks/useQueryDataTest";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  const { data, isLoading } = useQueryDataTest();
  console.log(data, isLoading);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
