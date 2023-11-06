import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import Loading from "../components/shared/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;
