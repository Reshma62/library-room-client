import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
// import { useState } from "react";
const menuItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Us",
    href: "/about",
  },
  {
    id: 3,
    name: "All Book",
    href: "/all-books",
  },

  {
    id: 4,
    name: "Borrowed Books",
    href: "/borrowed-books",
  },
  {
    id: 5,
    name: "Dashboard",
    href: "/dashboard",
  },
];
const Header = () => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <section className="bg-primaryColor sdfbg-gray-900 font-Cabin">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <a
              href=""
              className="text-2xl font-black leading-none font-Montserrat text-white sdftext-gray-300"
            >
              Library<span className="italic">Room</span>
            </a>

            <ul className="hidden lg:w-auto lg:space-x-4 lg:items-center lg:flex ">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <NavLink
                    to={menuItem.href}
                    className={({ isActive }) =>
                      `text-sm ${
                        isActive
                          ? "bg-white text-primaryColor"
                          : "bg-transparent text-white"
                      }  sdftext-gray-300 text-xl leading-8 inline-block py-2.5 px-4 hover:text-blue-200 sdfhover:text-blue-300 rounded-md capitalize font-medium`
                    }
                  >
                    {menuItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="lg:hidden">
              <button className="flex items-center px-3 py-2 text-blue-200 border border-blue-200 rounded sdftext-gray-400 hover:text-blue-300 hover:border-blue-300 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex">
              <Link to={"/login"}>
                <button className="btn bg-white text-primaryColor font-bold ">
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </Container>
      </section>
    </>
  );
};

export default Header;
