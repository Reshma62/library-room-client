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
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "all-books",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "read-books",
        element: (
          <PrivateRoute>
            <ReadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "books/:category",
        element: (
          <PrivateRoute>
            <CategoryBasedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "books-details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:8080/api/v1/admin/get-single-book/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-book",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-book-list",
        element: (
          <PrivateRoute>
            <AllBookList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/category",
        element: (
          <PrivateRoute>
            <CategoryList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MainRoute;
