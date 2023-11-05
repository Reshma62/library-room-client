import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AddBook from "../pages/Dashboard/AddBook";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateBook from "../pages/Dashboard/UpdateBook";
import AllBookList from "../pages/Dashboard/AllBookList";
import CategoryList from "../pages/Dashboard/CategoryList";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-book",
        element: <AddBook />,
      },
      {
        path: "/dashboard/update-book",
        element: <UpdateBook />,
      },
      {
        path: "/dashboard/all-book-list",
        element: <AllBookList />,
      },
      {
        path: "/dashboard/category",
        element: <CategoryList />,
      },
    ],
  },
]);

export default MainRoute;
