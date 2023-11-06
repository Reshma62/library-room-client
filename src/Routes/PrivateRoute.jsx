import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useAuthContext();
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;
