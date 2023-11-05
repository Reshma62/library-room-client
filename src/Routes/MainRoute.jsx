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
import AllBooks from "../pages/AllBooks/AllBooks";
import CategoryBasedBooks from "../pages/CategoryBasedBooks/CategoryBasedBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ReadBook from "../pages/ReadBook/ReadBook";

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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "borrowed-books",
        element: <BorrowedBooks />,
      },
      {
        path: "read-books",
        element: <ReadBook />,
      },
      {
        path: "books/:category",
        element: <CategoryBasedBooks />,
      },
      {
        path: "books-details/:id",
        element: <DetailsPage />,
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
